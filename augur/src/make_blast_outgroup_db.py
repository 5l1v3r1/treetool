from Bio import SeqIO, SeqRecord, Seq
import os
from collections import defaultdict
fname =  'source-data/outgroups_nucleotides.fasta'
fname_unspliced =  'source-data/outgroups_nucleotides_unspliced.fasta'
ofname = 'source-data/outgroups.fasta'

ref_viruses = []
with open(ofname, 'w') as ofile:
    for seq in SeqIO.parse(fname_unspliced, 'fasta'):
        seq.seq = seq.seq.translate(to_stop=True)
        ref_viruses.append(seq.description.split()[1].split('|')[1].replace(' ',''))
        seq.id = seq.name = '|'.join(seq.description.split()[1].split('|')[:2]).replace(' ','')
        seq.description=''
        SeqIO.write(seq, ofile, 'fasta')

os.system('makeblastdb -in '+ofname+ ' -dbtype prot ')

with open('ref_strain_names.txt', 'w') as ofile:
    for strain in set(ref_viruses):
        ofile.write(strain+'\n')


def ammend_fasta():
    with open(fname_unspliced, 'w') as ofile:
        strain_by_protein = defaultdict(dict)
        for seq in SeqIO.parse(fname, 'fasta'):
            SeqIO.write(seq, ofile, 'fasta')
            prot = seq.name.split('_')[0]
            seq_name = seq.description.split('|')[1]
            strain_by_protein[prot][seq_name] = seq

        joined_seqs = defaultdict(dict)
        splice_pairs = [('M', 'M1', 'M2'), ('NS', 'NS1', 'NS2')]
        #splice_pairs = [('M', 'M1', 'BM2')]
        from seqanpy import align_overlap
        for c, a,b in splice_pairs:
            for strain in strain_by_protein[a]:
                seq1 = strain_by_protein[a][strain]
                new_id = c+seq1.id.lstrip(a)
                new_description = c+seq1.description.lstrip(a)
                new_description = new_description.replace(a, c)
                new_name = c+seq1.name.lstrip(a)
                new_name = new_name.replace(a, c)
                try:
                    score, ali1, ali2 = align_overlap(seq1.seq, strain_by_protein[b][strain].seq,
                                            score_gapopen=-20, score_gapext=0)
                    ali_array = np.array([np.fromstring(x, 'S1') for x in [ali1, ali2]])
                    tmpseq = np.copy(ali_array[0])
                    tmpseq[ali_array[0]=='-']=ali_array[1][ali_array[0]=='-']
                    joined_seqs[c][strain] = SeqRecord.SeqRecord(seq=Seq.Seq("".join(tmpseq)), id=new_id,
                                                            description=new_description, name=new_name)
                    SeqIO.write(joined_seqs[c][strain], ofile, 'fasta')
                except:
                    print(seq1.name, "doesn't have a partner")
