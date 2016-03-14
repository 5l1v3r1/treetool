# treetool
tool to build and visualize annotated influenza phylogenies based on [blab/nextflu](https://github.com/blab/nextflu)

The tool is run for example as
```
python mutation_tree.py --aln my_sequences.fasta --outgroup auto --cds 0 --out my_output_directory
```
This call will build a tree from the sequences in `my_sequences.fasta`. 
It will try to choose and appropriate outgroup automatically, and assumes that the coding sequence starts at base 0. 
All output will be copied into the directory specified with the flag `--out`. The full set of options is:

```
usage: mutation_tree.py [-h] --aln ALN --outgroup OUTGROUP
                        [--cds CDS [CDS ...]] [--out OUT]
                        [--nthreads NTHREADS]

Build a tree given a fasta file and annotate braches with mutations

optional arguments:
  -h, --help           show this help message and exit
  --aln ALN            fasta file with input sequences
  --outgroup OUTGROUP  outgroup to root the tree, strain label or fasta file
  --cds CDS [CDS ...]  part of the outgroup sequence that is to be translated
  --out OUT            output directory
  --nthreads NTHREADS  number of threads to use (mafft and raxml)
```

## License and copyright

Copyright 2014-2016 Trevor Bedford and Richard Neher.

Source code to nextflu is made available under the terms of the [MIT license](LICENSE). nextflu is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See [MIT licence](LICENSE) for details.
