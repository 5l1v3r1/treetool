var date_select = false;
var file_prefix = '';
var path = '';
var dfreq_dn = 2;
var branch_labels = true;
var tip_labels = true;
var alt_aa=false;

var vaccineChoice = {};
vaccineChoice['A/Fujian/411/2002'] = "2003-09-25";
vaccineChoice['A/California/7/2004'] = "2005-02-21";
vaccineChoice['A/Wisconsin/67/2005'] = "2006-02-21";
vaccineChoice['A/Brisbane/10/2007'] = "2007-09-25";
vaccineChoice['A/Perth/16/2009'] = "2009-09-25";
vaccineChoice['A/Victoria/361/2011'] = "2012-02-21";
vaccineChoice['A/Texas/50/2012'] = "2013-09-25";
vaccineChoice['A/Switzerland/9715293/2013'] = "2014-09-25";
vaccineChoice['B/Beijing/184/93'] = "1998-11-01";
vaccineChoice['B/Sichuan/379/99'] = "2001-09-25";
vaccineChoice['B/Shanghai/361/2002'] = "2004-09-25";
vaccineChoice['B/Florida/4/2006'] = "2008-09-25";
vaccineChoice['B/Wisconsin/01/2010'] = "2012-02-25";
vaccineChoice['B/Massachusetts/02/2012'] = "2013-02-25";
vaccineChoice['B/PHUKET/3073/2013'] = "2014-09-25";
vaccineChoice['B/Phuket/3073/2013'] = "2014-09-25";
vaccineChoice['B/Shangdong/7/97'] = "1999-09-25";
vaccineChoice['B/HongKong/330/2001'] = "2002-09-25";
vaccineChoice['B/Malaysia/2506/2004'] = "2006-09-25";
vaccineChoice['B/Brisbane/60/2008'] = "2009-09-25";
vaccineChoice['A/California/07/2009'] = "2009-09-25";
vaccineChoice['A/duck/HongKong/24/1976'] = "1976-xx-xx";
vaccineChoice['A/Goose/Guangdong/1/96'] = "1996-xx-xx";
vaccineChoice['A/chicken/HongKong/G9/1997'] = "1997-xx-xx";
vaccineChoice['A/equine/Kentucky/1/1992'] = "1992-xx-xx";
vaccineChoice['A/Hubei/1/2010'] = "2010-xx-xx";
vaccineChoice['A/Canada/720/2005'] = "2005-xx-xx";
vaccineChoice['A/shearwater/Australia/2576/1979'] = "1979-xx-xx";
vaccineChoice['A/quail/Italy/1117/1965'] = "1965-xx-xx";
vaccineChoice['A/Netherlands/219/2003'] = "2003-xx-xx";
vaccineChoice['A/Brisbane/59/2007'] = "2007-xx-xx";
vaccineChoice['A/chicken/Dawang/1/2011'] = "2011-xx-xx";
vaccineChoice['A/Duck/HongKong/Y280/97'] = "1997-xx-xx";
vaccineChoice['A/chicken/Jiangsu/Q3/2010'] = "-2010xx-xx";
vaccineChoice['A/Brevig_Mission/1/1918'] = "1918-xx-xx";
vaccineChoice['A/Quail/HongKong/G1/97'] = "1997-xx-xx";
vaccineChoice['A/Egypt/2321-NAMRU3/2007'] = "2007-xx-xx";
vaccineChoice['A/Canada/rv504/2004'] = "2004-xx-xx";
vaccineChoice['A/mallard/Astrakhan/263/1982'] = "1982-xx-xx";
vaccineChoice['A/Taiwan/2/2013'] = "2013-xx-xx";
vaccineChoice['A/chicken/Zhejiang/Q1D4/2010'] = "2010-xx-xx";
vaccineChoice['A/equine/Sussex/1/1989'] = "1989-xx-xx";
vaccineChoice['A/equine/Miami/1/1963'] = "1963-xx-xx";
vaccineChoice['A/baikalteal/Korea/Donglim3/2014'] = "2014-xx-xx";
vaccineChoice['A/HongKong/4801/2014'] = "2014-xx-xx";
vaccineChoice['A/turkey/Ontario/6118/1968'] = "1968-xx-xx";
vaccineChoice['A/NewJersey/11/1976'] = "1976-xx-xx";
vaccineChoice['A/Shanghai/02/2013'] = "2013-xx-xx";
vaccineChoice['A/duck/Zhejiang/12/2011'] = "2011-xx-xx";
vaccineChoice['A/duck/Alberta/60/1976'] = "1976-xx-xx";
vaccineChoice['A/HongKong/3239/2008'] = "2008-xx-xx";
vaccineChoice['A/duck/Memphis/546/1974'] = "1974-xx-xx";
vaccineChoice['A/chicken/BC/FAV8/2014'] = "2014-xx-xx";
vaccineChoice['A/Singapore/1/1957'] = "1957-xx-xx";
vaccineChoice['A/gull/Maryland/704/1977'] = "1977-xx-xx";
vaccineChoice['A/Sichuan/26221/2014'] = "2014-xx-xx";
vaccineChoice['A/Indiana/10/2011'] = "2011-xx-xx";
vaccineChoice['A/WSN/1933'] = "1933-xx-xx";
vaccineChoice['A/Egypt/1394-NAMRU3/2007'] = "2007-xx-xx";
vaccineChoice['A/chicken/Zhejiang/607/2011'] = "2011-xx-xx";
vaccineChoice['A/chicken/Jiangsu/RD5/2013'] = "2013-xx-xx";
vaccineChoice['A/duck/Guangdong/E1/2012'] = "2012-xx-xx";
vaccineChoice['A/duck/Taiwan/0526/72'] = "1972-xx-xx";
vaccineChoice['A/herringgull/NewJersey/780/1986'] = "1986-xx-xx";
vaccineChoice['A/brambling/Beijing/16/2012'] = "2012-xx-xx";
vaccineChoice['A/Anhui/1/2005'] = "2005-xx-xx";
vaccineChoice['A/VietNam/1203/2004'] = "2004-xx-xx";
vaccineChoice['A/duck/EasternChina/108/2008'] = "2008-xx-xx";
vaccineChoice['A/Shanghai/2/2013'] = "2013-xx-xx";
vaccineChoice['A/Indonesia/5/2005'] = "2005-xx-xx";
vaccineChoice['A/HongKong/1/1968'] = "1968-xx-xx";

var vaccineStrains = Object.keys(vaccineChoice);
var genericDomain = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
var epiColorDomain = [4,5,6,7,8,9,10,11,12,13];
var nonEpiColorDomain = [2,3,4,5,6,7,8,9,10,11];
var dateColorDomain = genericDomain;
var rbsColorDomain = [0,1,2,3,4];
var dfreqColorDomain = genericDomain.map(function(d){return Math.round(100*(-0.18+d*0.36))/100;});
var restrictTo = {};

var time_ticks = [2012.5, 2013, 2013.5, 2014, 2014.5, 2015];
var	time_window;  // layer of one year that is considered current or active
var LBItau = 0.0008;
var LBItime_window = 0.5;


//var regions = ["Africa", "SouthAmerica", "WestAsia", "Oceania", "Europe", "JapanKorea", "NorthAmerica", "SoutheastAsia", "SouthAsia", "China"]
//var hosts = ["Unknown", "Human", "Animal", "Environment"]
//var passages = ["Unknown", "Egg", "Cell", "Direct"]
//var subtypes = ["H1N1", "H3N2", "H7N9","H5N1"]

var cladeToSeq = {}

var globalDate = new Date();

var nodes, tips, rootNode, links, vaccines;

var nDisplayTips, displayRoot;
if (document.getElementById("gtspec") != null){
    var freqdefault = document.getElementById("gtspec").value;
}else{
    var freqdefault ='';
}

function treePlotHeight(width) {
	return 400 + 0.35*width;
}
var containerWidth = parseInt(d3.select(".treeplot-container").style("width"), 10);
var treeWidth = containerWidth;
var treeHeight = treePlotHeight(treeWidth);
var tree = d3.layout.tree()
	.size([treeHeight, treeWidth]);


var treeplot = d3.select("#treeplot")
	.attr("width", treeWidth)
	.attr("height", treeHeight);

var legend = d3.select("#legend")
	.attr("width", 280)
	.attr("height", 100);

var colorBy = document.getElementById("coloring").value;
var colorScale;
var epiColorDomain = genericDomain;
var nonEpiColorDomain = genericDomain;
var rbsColorDomain = genericDomain;
var dateColorDomain = genericDomain;
var dfreqColorDomain = genericDomain.map(function(d){return Math.round(100*(-0.18+d*0.36))/100;});
var time_step;


d3.json(path + file_prefix + "meta.json", function(error, json) {
    if (error) return console.warn(error);
    outgroup_name = json['outgroup'];
    console.log(outgroup_name);
    d3.select("#outgroup").text("Reference: "+outgroup_name);
});

var ymd_format = d3.time.format("%Y-%m-%d");
var dateValues, earliestDate, dateScale, niceDateScale, counterData;

function adjust_freq_by_date() {
	//calcTipCounts(rootNode);
	var fullTipCount = rootNode.fullTipCount;
	nDisplayTips = displayRoot.fullTipCount;
	console.log("Total tipcount: " + fullTipCount);
	nodes.forEach(function (d) {
		d.frequency = (d.fullTipCount)/fullTipCount;
	});
}

var drag = d3.behavior.drag()
	.on("drag", dragged)
	.on("dragstart", function() {
		d3.selectAll(".date-input-text").style("fill", "#5DA8A3");
		d3.selectAll(".date-input-marker").style("fill", "#5DA8A3");
		d3.selectAll(".date-input-window").style("stroke", "#5DA8A3");
		d3.selectAll(".date-input-edge").style("stroke", "#5DA8A3");
	})
	.on("dragend", function() {
		d3.selectAll(".date-input-text").style("fill", "#CCC");
		d3.selectAll(".date-input-marker").style("fill", "#CCC");
		d3.selectAll(".date-input-window").style("stroke", "#CCC");
		d3.selectAll(".date-input-edge").style("stroke", "#CCC");
		dragend();
	});

var dragMin = d3.behavior.drag()
	.on("drag", draggedMin)
	.on("dragstart", function() {
		d3.selectAll(".date-input-text").style("fill", "#5DA8A3");
		d3.selectAll(".date-input-marker").style("fill", "#5DA8A3");
		d3.selectAll(".date-input-window").style("stroke", "#5DA8A3");
		d3.selectAll(".date-input-edge").style("stroke", "#5DA8A3");
	})
	.on("dragend", function() {
		d3.selectAll(".date-input-text").style("fill", "#CCC");
		d3.selectAll(".date-input-marker").style("fill", "#CCC");
		d3.selectAll(".date-input-window").style("stroke", "#CCC");
		d3.selectAll(".date-input-edge").style("stroke", "#CCC");
		dragend();
	});


function calcNodeAges(tw){
	tips.forEach(function (d) {
		var date = new Date(d.date);
		var oneYear = 365.25*24*60*60*1000; // days*hours*minutes*seconds*milliseconds
		var diffYears = (globalDate.getTime() - date.getTime()) / oneYear;
		d.diff = diffYears;
		if (d.diff > 0 && d.diff < tw){
			d.current  = true;
		}else{
			d.current = false;
		}
	});
};



function dragged(d) {

	d.date = dateScale.invert(d3.event.x);
	d.x = dateScale(d.date);
	var startDate = new Date(d.date);
	startDate.setDate(startDate.getDate() - (time_window * 365.25));
	d.x2 = dateScale(startDate);

	d3.selectAll(".date-input-text")
		.attr("dx", function(d) {return 0.5*d.x})
		.text(function(d) {
			var format = d3.time.format("%Y %b %-d");
			return format(d.date)
		});
	d3.selectAll(".date-input-marker")
		.attr("cx", function(d) {return d.x});
	d3.selectAll(".date-input-window")
		.attr("x1", function(d) {return d.x})
		.attr("x2", function(d) {return d.x2});
	d3.selectAll(".date-input-edge")
		.attr("x1", function(d) {return d.x2;})
		.attr("x2", function(d) {return d.x2});

	globalDate = d.date;

	calcNodeAges(LBItime_window);
	treeplot.selectAll(".link")
		.style("stroke", function(d){return "#ccc";})

	treeplot.selectAll(".tip")
		.style("visibility", tipVisibility)
		.style("fill", "#CCC")
		.style("stroke", "#AAA");

	treeplot.selectAll(".vaccine")
		.style("visibility", function(d) {
			var date = new Date(d.choice);
			var oneYear = 365.25*24*60*60*1000; // days*hours*minutes*seconds*milliseconds
			var diffYears = (globalDate.getTime() - date.getTime()) / oneYear;
			if (diffYears > 0) { return "visible"; }
				else { return "hidden"; }
			});

}

function draggedMin(d) {

	d.date = dateScale.invert(d3.event.x);
	d.x2 = dateScale(d.date);

	var oneYear = 365.25*24*60*60*1000; // days*hours*minutes*seconds*milliseconds
	time_window = (globalDate.getTime() - d.date.getTime()) / oneYear;

	d3.selectAll(".date-input-window")
		.attr("x2", function(d) {return d.x2});
	d3.selectAll(".date-input-edge")
		.attr("x1", function(d) {return d.x2;})
		.attr("x2", function(d) {return d.x2});

	calcNodeAges(LBItime_window);
	treeplot.selectAll(".link")
		.style("stroke", function(d){return "#ccc";})

	treeplot.selectAll(".tip")
		.style("visibility", tipVisibility)
		.style("fill", "#CCC")
		.style("stroke", "#AAA");

	treeplot.selectAll(".vaccine")
		.style("visibility", function(d) {
			var date = new Date(d.choice);
			var oneYear = 365.25*24*60*60*1000; // days*hours*minutes*seconds*milliseconds
			var diffYears = (globalDate.getTime() - date.getTime()) / oneYear;
			if (diffYears > 0) { return "visible"; }
				else { return "hidden"; }
			});

}

function dragend() {
	var num_date = globalDate/1000/3600/24/365.25+1970;

	updateColorDomains(num_date);
	for (var ii=0; ii<rootNode.pivots.length-1; ii++){
		if (rootNode.pivots[ii]<num_date && rootNode.pivots[ii+1]>=num_date){
			freq_ii=Math.max(dfreq_dn,ii+1);
		}
	}
	console.log("changed frequency index to "+freq_ii+" date cut off is "+num_date);
	console.log("recalculating node ages");
	calcNodeAges(LBItime_window);
	console.log("adjusting node colors");
	adjust_coloring_by_date();
	console.log("updating frequencies");
	adjust_freq_by_date();

	if (colorBy == "genotype") {
		colorByGenotype();
	}
	if (colorBy == "date") {
		removeLegend();
		makeLegend();
	}

	if (colorBy!="genotype"){
		d3.selectAll(".link")
			.transition().duration(500)
			.attr("points", branchPoints)
			.style("stroke-width", branchStrokeWidth)
			.style("stroke", branchStrokeColor);

		d3.selectAll(".tip")
			.transition().duration(500)
			.style("visibility", tipVisibility)
			.style("fill", tipFillColor)
			.style("stroke", tipStrokeColor);

	}

	if ((typeof tip_labels != "undefined")&&(tip_labels)) {
		nDisplayTips = displayRoot.fullTipCount;
		d3.selectAll(".tipLabel")
			.transition().duration(1000)
			.style("font-size", tipLabelSize);
	}

}


function date_init(){
	console.log('Initializing date function');
	nodes.forEach(function (d) {d.dateval = new Date(d.date)});
	var dateValues = nodes.filter(function(d) {
		return typeof d.date === 'string';
		}).map(function(d) {
		return new Date(d.date);
	});
	earliestDate = new Date(d3.min(dateValues));
	earliestDate.setDate(earliestDate.getDate() + 1);
	console.log('earliest data is:'+earliestDate);

	dateScale = d3.time.scale()
		.domain([earliestDate, globalDate])
		.range([5, 205])
		.clamp([true]);

	niceDateScale = d3.time.scale()
		.domain([earliestDate, globalDate])
		.range([5, 205])
		.clamp([true])
		.nice(d3.time.month);

	counterData = {}
	counterData['date'] = globalDate
	counterData['x'] = dateScale(globalDate)
	var startDate = new Date(globalDate);
	startDate.setDate(startDate.getDate() - (time_window * 365.25));
	counterData['x2'] = dateScale(startDate);

	d3.select("#date-input")
		.attr("width", 240)
		.attr("height", 65);

	var counter = d3.select("#date-input").selectAll(".date-input-text")
		.data([counterData])
		.enter()
		.append("text")
		.attr("class", "date-input-text")
		.attr("text-anchor", "left")
		.attr("dx", function(d) {return 0.5*d.x})
		.attr("dy", "1.0em")
		.text(function(d) {
			var format = d3.time.format("%Y %b %-d");
			return format(d.date)
		})
		.style("cursor", "pointer")
		.call(drag);

	var customTimeFormat = d3.time.format.multi([
		[".%L", function(d) { return d.getMilliseconds(); }],
		[":%S", function(d) { return d.getSeconds(); }],
		["%I:%M", function(d) { return d.getMinutes(); }],
		["%I %p", function(d) { return d.getHours(); }],
		["%a %d", function(d) { return d.getDay() && d.getDate() != 1; }],
		["%b %d", function(d) { return d.getDate() != 1; }],
		["%b", function(d) { return d.getMonth(); }],
		["%Y", function() { return true; }]
		]);

	var dateAxis = d3.svg.axis()
		.scale(niceDateScale)
		.orient('bottom')
		.ticks(5)
		.tickFormat(customTimeFormat)
		.outerTickSize(2)
		.tickPadding(8);

	d3.select("#date-input").selectAll(".date-input-axis")
		.data([counterData])
		.enter()
		.append("g")
		.attr("class", "date-input-axis")
		.attr("transform", "translate(0,35)")
		.call(dateAxis);

	var window = d3.select("#date-input").selectAll(".date-input-window")
		.data([counterData])
		.enter()
		.append("line")
		.attr("class", "date-input-window")
		.attr("x1", function(d) { return d.x; })
		.attr("x2", function(d) { return d.x2; })
		.attr("y1", 35)
		.attr("y2", 35)
		.style("stroke", "#CCC")
		.style("stroke-width", 5);

	var edge = d3.select("#date-input").selectAll(".date-input-edge")
		.data([counterData])
		.enter()
		.append("line")
		.attr("class", "date-input-edge")
		.attr("x1", function(d) { return d.x2; })
		.attr("x2", function(d) { return d.x2; })
		.attr("y1", 30)
		.attr("y2", 40)
		.style("stroke", "#CCC")
		.style("stroke-width", 3)
		.style("cursor", "pointer")
		.call(dragMin);

	var marker = d3.select("#date-input").selectAll(".date-input-marker")
		.data([counterData])
		.enter()
		.append("circle")
		.attr("class", "date-input-marker")
		.attr("cx", function(d) {return d.x})
		.attr("cy", 35)
		.attr("r", 6)
		.style("fill", "#CCC")
		.style("stroke", "#777")
		.style("cursor", "pointer")
		.call(drag);

}
var legendRectSize = 15;
var legendSpacing = 4;
function makeLegend(){

	d3.select("#legend-title").text(function(d){
		if (colorBy == "ep") {
			return "Epitope mutations";
		}
		if (colorBy == "ne") {
			return "Non-epitope mutations";
		}
		if (colorBy == "rb") {
			return "Receptor binding mutations";
		}
		if (colorBy == "lbi") {
			return "Local branching index";
		}
		if (colorBy == "region") {
			return "Region";
		}
		if (colorBy == "genotype") {
			return "Genotype";
		}
		if (colorBy == "date") {
			return "Date";
		}
		if (colorBy == "dfreq") {
			var tmp_nmonth = Math.round(12*dfreq_dn*time_step);
			var tmp_text = "Freq. change ("+tmp_nmonth+" month";
			if (tmp_nmonth>1){
				tmp_text+='s';
			}
			return tmp_text+')';
		}
	});

	// construct a dictionary that maps a legend entry to the preceding interval
    var lower_bound = {}, upper_bound = {};
    if ((colorBy=='lbi')||(colorBy=='date')||(colorBy=='dfreq')){
        lower_bound[colorScale.domain()[0]] = -100000000;
        upper_bound[colorScale.domain()[0]] = colorScale.domain()[0];
        for (var i=1; i<colorScale.domain().length; i++){
            lower_bound[colorScale.domain()[i]]=colorScale.domain()[i-1];
            upper_bound[colorScale.domain()[i]]=colorScale.domain()[i];
        }
        upper_bound[colorScale.domain()[colorScale.domain().length-1]]=10000000;

        console.log(lower_bound);
        console.log(upper_bound);
    }

	// function that equates a tip and a legend element
	// exact match is required for categorical qunantities such as genotypes, regions
	// continuous variables need to fall into the interal (lower_bound[leg], leg]
	var legend_match = function(leg, tip){
		if ((colorBy=='lbi')||(colorBy=='date')||(colorBy=='dfreq')){
			return (tip.coloring<=upper_bound[leg])&&(tip.coloring>lower_bound[leg]);
		}else{
			return tip.coloring==leg;
		}
	}

    var months = {1:'Jan', 2:'Feb', 3:'Mar', 4:'Apr', 5:'May',6:'Jun', 7:'Jul', 8:'Aug', 9:'Sep', 10:'Oct', 11:'Nov', 12:'Dec'}
    function legendText(d){
        if (colorBy=='date'){
            var tmp = upper_bound[d]-1.0/12; //subtract one month for display such that interval ends at end of month
            if (upper_bound[d]>100000){
                tmp = lower_bound[d]-1.0/12;
            }
            var dstr = Math.floor(tmp).toString();
            var month = Math.floor((tmp-Math.floor(tmp))*12)+1;
            if (upper_bound[d]>100000){
               return 'past '+months[month] +' ' + dstr;
            }else{
               return 'to '+months[month] +' ' + dstr;
            }
        }else{
            console.log(d);
            return d.toString().replace(/([a-z])([A-Z])/g, '$1 $2').replace(/,/g, ', ');
        }
     }
    console.log("legend domain",colorScale.domain());

	var tmp_leg = legend.selectAll(".legend")
	.data(colorScale.domain())
	.enter().append('g')
	.attr('class', 'legend')
	.attr('transform', function(d, i) {
		var stack = 5;
		var height = legendRectSize + legendSpacing;
		var fromRight = Math.floor(i / stack);
		var fromTop = i % stack;
		var horz = fromRight * 145 + 5;
		var vert = fromTop * height + 5;
		return 'translate(' + horz + ',' + vert + ')';
	 });
	tmp_leg.append('rect')
	.attr('width', legendRectSize)
	.attr('height', legendRectSize)
	.style('fill', function (d) {
	 	var col = colorScale(d);
	 	return d3.rgb(col).brighter([0.35]).toString();
	 })
	.style('stroke', function (d) {
   		var col = colorScale(d);
   		return d3.rgb(col).toString();
 	})
   .on('mouseover', function(leg){
    	treeplot.selectAll(".tip") //highlight all tips corresponding to legend
            .filter(function (d){return legend_match(leg, d);})
            .attr("r", function(d){return tipRadius*1.7;})
            .style("fill", function (t) {
              return d3.rgb(tipFillColor(t)).brighter();
            });
		})
  	.on('mouseout', function(leg){
    	treeplot.selectAll(".tip") //undo highlight
            .filter(function (d){return legend_match(leg, d);})
            .attr("r", function(d){return tipRadius;})
            .style("fill", function (t) {
              return d3.rgb(tipFillColor(t));
            });
	    });

  tmp_leg.append('text')
  .attr('x', legendRectSize + legendSpacing + 5)
  .attr('y', legendRectSize - legendSpacing)
  .text(legendText);
  return tmp_leg;
}


function removeLegend(){
	legend.selectAll('.legend')
  .remove();
}


// 2 color	["#5097BA", "#DF4327"]

var colors = [
	[],
	["#8EBC66"],
	["#5EA9A1", "#E0A23A"],
	["#5CA7A4", "#A4BE56", "#E39B39"],
	["#5AA5A7", "#8ABB6A", "#C3BA46", "#E69237"],
	["#59A3AA", "#7CB879", "#AABD52", "#D4B13F", "#E68634"],
	["#57A1AD", "#73B583", "#98BD5E", "#C0BA47", "#DEA73C", "#E67B32"],
	["#559EB1", "#6DB28B", "#8CBB68", "#AFBD4F", "#CFB541", "#E39B39", "#E56E30"],
	["#539CB4", "#68AF92", "#83BA71", "#A2BE57", "#C1BA47", "#DAAC3D", "#E68E36", "#E35F2D"],
	["#519AB7", "#64AC99", "#7BB879", "#97BD5F", "#B5BD4C", "#CFB541", "#E0A13A", "#E67F33", "#E1512A"],
	["#5097BA", "#60AA9E", "#75B681", "#8EBC66", "#AABD52", "#C4B945", "#D9AD3D", "#E59637", "#E67030", "#DF4327"],
	["#4E95BD", "#5DA8A3", "#70B487", "#87BB6D", "#A0BE58", "#BABC4A", "#D0B440", "#E0A23A", "#E68634", "#E35F2D", "#DD3425"],
	["#4D92BF", "#5AA5A8", "#6BB18D", "#80B974", "#98BD5E", "#B1BD4E", "#C8B944", "#DAAC3D", "#E59738", "#E67732", "#E14F2A", "#DB2522"]
];
var regionColors = ["#5097BA", "#60AA9E", "#75B681", "#8EBC66", "#AABD52", "#C4B945", "#D9AD3D", "#E59637", "#E67030", "#DF4327"]
var genotypeColors = ["#60AA9E", "#D9AD3D", "#5097BA", "#E67030", "#8EBC66", "#E59637", "#AABD52", "#DF4327", "#C4B945", "#75B681"]

var epitopeColorScale = d3.scale.linear().clamp([true])
	.domain(epiColorDomain)
	.range(colors[10]);

var nonepitopeColorScale = d3.scale.linear().clamp([true])
	.domain(nonEpiColorDomain)
	.range(colors[10]);

var receptorBindingColorScale = d3.scale.linear().clamp([true])
	.domain(rbsColorDomain)
	.range(colors[4]);

var lbiColorScale = d3.scale.linear()
	.domain([0.0, 0.02, 0.04, 0.07, 0.1, 0.2, 0.4, 0.7, 0.9, 1.0])
	.range(colors[10]);

var dfreqColorScale = d3.scale.linear()
	.domain(dfreqColorDomain)
	.range(colors[10]);

var regionColorScale = d3.scale.ordinal()
	.domain(regions)
	.range(colors[regions.length]);

var dateColorScale = d3.scale.linear().clamp([true])
	.domain(dateColorDomain)
	.range(colors[10]);

var hostColorScale = d3.scale.ordinal()
	.domain(hosts)
	.range(colors[Math.min(10,hosts.length)]);

var subtypeColorScale = d3.scale.ordinal()
	.domain(subtypes)
	.range(colors[Math.min(10,subtypes.length)]);

var passageColorScale = d3.scale.ordinal()
	.domain(passages)
	.range(colors[Math.min(10,passages.length)]);


// "ep", "ne" and "rb" need no adjustments
function adjust_coloring_by_date() {
	if (colorBy == "lbi") {
		calcLBI(rootNode, nodes, false);
		nodes.forEach(function (d) {
			d.coloring = d.LBI;
		});
	}
	else if (colorBy == "dfreq") {
		calcDfreq(rootNode, freq_ii);
		nodes.forEach(function (d) {
			d.coloring = d.dfreq;
		});
	}
	else if (colorBy == "date") {
		nodes.forEach(function (d) {
			d.coloring = d.num_date;
		});
	}
}

function stateAtPosition(clade, pos){
	if (typeof cladeToSeq[clade][pos] == "undefined"){
		return cladeToSeq["root"][pos];
	}else{
		return cladeToSeq[clade][pos];
	}
}

function colorByTrait() {

	colorBy = document.getElementById("coloring").value;
	console.log(colorBy);

	if (colorBy == "ep") {
		colorScale = epitopeColorScale;
		nodes.map(function(d) { d.coloring = d.ep; });
	}
	else if (colorBy == "ne") {
		colorScale = nonepitopeColorScale;
		nodes.map(function(d) { d.coloring = d.ne; });
	}
	else if (colorBy == "rb") {
		colorScale = receptorBindingColorScale;
		nodes.map(function(d) { d.coloring = d.rb; });
	}
	else if (colorBy == "lbi") {
		colorScale = lbiColorScale;
		adjust_coloring_by_date();
	}
	else if (colorBy == "dfreq") {
		colorScale = dfreqColorScale;
		adjust_coloring_by_date();
	}
	else if (colorBy == "region") {
		colorScale = regionColorScale;
		nodes.map(function(d) { d.coloring = d.region; });
	}
	else if (colorBy == "date") {
		colorScale = dateColorScale;
		nodes.map(function(d) { d.coloring = d.num_date; });
	}
	else if (colorBy == "host") {
		colorScale = hostColorScale;
		nodes.map(function(d) { d.coloring = d.host; });
	}
	else if (colorBy == "passage") {
		colorScale = passageColorScale;
		nodes.map(function(d) { d.coloring = d.passage; });
	}
	else if (colorBy == "subtype") {
		colorScale = subtypeColorScale;
		nodes.map(function(d) { d.coloring = d.subtype; });
	}

	treeplot.selectAll(".link")
		.style("stroke", branchStrokeColor);

	d3.selectAll(".tip")
		.style("visibility", tipVisibility)
		.style("fill", tipFillColor)
		.style("stroke", tipStrokeColor);

	if (typeof tree_legend != undefined){
		removeLegend();
	}
	tree_legend = makeLegend();
}

function tipStrokeColor(d) {
	var col = colorScale(d.coloring);
	return d3.rgb(col).toString();
}

function tipFillColor(d) {
	var col = colorScale(d.coloring);	;
	return d3.rgb(col).brighter([0.65]).toString();
}

function branchStrokeColor(d) {
	var col;
	if (colorBy == "region" || colorBy == "date") {
		col = "#AAA";
	}
	else {
		col = colorScale(d.target.coloring);
	}
	var modCol = d3.interpolateRgb(col, "#BBB")(0.6);
	return d3.rgb(modCol).toString();
}

function colorByGenotype() {
	var positions_string = document.getElementById("gt-color").value.split(',');
	var positions_list = []
	positions_string.map(function(d) {
		val = parseInt(d)-1;
		if (!isNaN(val)) {
			if (val < 551) {
				positions_list.push(val);
			}
		}
	});
	console.log(positions_list);
	if (positions_list.length > 0) {
		colorBy = "genotype";
		colorByGenotypePosition(positions_list);
	}
	else {
		d3.select("#coloring").each(colorByTrait);
		gt = parse_gt_string(freqdefault);
		make_gt_chart(gt);
		document.getElementById("gtspec").value = freqdefault;
	}
}

function colorByGenotypePosition (positions) {
	var gts = nodes.map(function (d) {
		var tmp = [];
		for (var i=0; i<positions.length; i++){
			tmp[tmp.length] = (positions[i]+1)+stateAtPosition(d.clade, positions[i]);
		}
		d.coloring = tmp.join(" / ");
		return d.coloring;});
	var unique_gts = d3.set(gts).values();
	var gt_counts = {};
	for (var i=0; i<unique_gts.length; i++){gt_counts[unique_gts[i]]=0;}
	gts.forEach(function (d) {gt_counts[d]+=1;});
	var filtered_gts = unique_gts.filter(function (d) {return gt_counts[d]>=10;});
	filtered_gts.sort(function (a,b){
		var res;
		if (gt_counts[a]>gt_counts[b]){ res=-1;}
		else if (gt_counts[a]<gt_counts[b]){ res=1;}
		else {res=0;}
		return res;});
	console.log("genotypes passed filtering:"+filtered_gts);
	colorScale = d3.scale.ordinal()
		.domain(filtered_gts)
		.range(genotypeColors);
	treeplot.selectAll(".link")
		.style("stroke", branchStrokeColor);
	treeplot.selectAll(".tip")
		.style("fill", tipFillColor)
		.style("stroke", tipStrokeColor);
	if (typeof tree_legend != undefined){
		removeLegend();
	}
	tree_legend = makeLegend();
	//produce flusurver links
	//document.getElementById('FluSurverLink').removeChild(document.getElementById("FluSurverContent"));
    //var div = document.createElement('div');
    //div.id = "FluSurverContent";
    //div.innerHTML = filtered_gts+' <a target="_blank" href="http://flusurver.bii.a-star.edu.sg/tmp/tmp_HA_H1N1_Human_2009_NewYork20_P154S,D239G.html">HA_H1N1_Human_2009_NewYork20_P154S,D239G</a>';
	//document.getElementById('FluSurverLink').appendChild(div);
}

d3.select("#coloring")
	.style("cursor", "pointer")
	.on("change", colorByTrait);


var genotypeColoringEvent;
d3.select("#gt-color")
	.on("keyup", function(){
		if (typeof genotypeColoringEvent != "undefined"){clearTimeout(genotypeColoringEvent);}
		genotypeColoringEvent = setTimeout(colorByGenotype, 200);
	});






function gatherTips(node, tips) {
	if (typeof node.children != "undefined") {
		for (var i=0, c=node.children.length; i<c; i++) {
			gatherTips(node.children[i], tips);
		}
	}
	else {
		tips.push(node);
	}
	return tips;
}

function getVaccines(tips) {
	vaccines = [];
	tips.forEach(function (tip) {
		if (vaccineStrains.indexOf(tip.strain) != -1) {
			tip.choice = vaccineChoice[tip.strain];
			vaccines.push(tip);
		}
	})
	return vaccines;
}

function minimumAttribute(node, attr, min) {
	if (typeof node.children != "undefined") {
		for (var i=0, c=node.children.length; i<c; i++) {
			min = minimumAttribute(node.children[i], attr, min);
		}
	}
	else {
		if (node[attr] < min) {
			min = node[attr];
		}
	}
	return min;
}

function maximumAttribute(node, attr, max) {
	if (typeof node.children != "undefined") {
		for (var i=0, c=node.children.length; i<c; i++) {
			max = maximumAttribute(node.children[i], attr, max);
		}
	}
	else {
		if (node[attr] > max) {
			max = node[attr];
		}
	}
	return max;
}

function calcBranchLength(node){
	if (typeof node.children != "undefined") {
	for (var i=0, c=node.children.length; i<c; i++) {
		calcBranchLength(node.children[i]);
		node.children[i].branch_length = node.children[i].xvalue-node.xvalue;
	}
	}
};

/**
 * for each node, calculate the number of subtending tips (alive or dead)
**/
function calcFullTipCounts(node){
	node.fullTipCount = 0;
	if (typeof node.children != "undefined") {
		for (var i=0; i<node.children.length; i++) {
			calcFullTipCounts(node.children[i]);
			node.fullTipCount += node.children[i].fullTipCount;
		}
	}
	else {
		node.fullTipCount = 1;
	}
};

/**
 * for each node, calculate the number of tips in the currently selected time window.
**/
function calcTipCounts(node){
	node.tipCount = 0;
	if (typeof node.children != "undefined") {
		for (var i=0; i<node.children.length; i++) {
			calcTipCounts(node.children[i]);
			node.tipCount += node.children[i].tipCount;
		}
	}
	else if (node.current){
		node.tipCount = 1;
	}
};

/**
sets each node in the tree to alive=true if it has at least one descendent with current=true
**/
function setNodeAlive(node){
	if (typeof node.children != "undefined") {
		var aliveChildren=false;
		for (var i=0, c=node.children.length; i<c; i++) {
			setNodeAlive(node.children[i]);
			aliveChildren = aliveChildren||node.children[i].alive
		}
		node.alive = aliveChildren;
	}else{
		node.alive = node.current;
	}
};

/**
 * for each node, calculate the exponentially attenuated tree length below the node
 * the polarizer is send "up", i.e. to parents
**/
function calcUpPolarizers(node){
	node.up_polarizer = 0;
	if (typeof node.children != "undefined") {
		for (var i=0; i<node.children.length; i++) {
		calcUpPolarizers(node.children[i]);
		node.up_polarizer += node.children[i].up_polarizer;
		}
	}
	bl =  node.branch_length/LBItau;
	node.up_polarizer *= Math.exp(-bl);
	if (node.alive){ // only alive branches contribute anything
		node.up_polarizer += LBItau*(1-Math.exp(-bl));
	}
};

/**
 * for each node, calculate the exponentially attenuated tree length above the node,
 * that is "outside" the clade defined by this node. this down polarizer is send to children
**/
function calcDownPolarizers(node){
	if (typeof node.children != "undefined") {
	for (var i1=0; i1<node.children.length; i1++) {
		node.children[i1].down_polarizer = node.down_polarizer;
		for (var i2=0; i2<node.children.length; i2++) {
			if (i1!=i2){
			node.children[i1].down_polarizer += node.children[i2].up_polarizer;
			}
		}
		// account for the attenuation over the branch_length
		bl =  node.children[i1].branch_length/LBItau;
		node.children[i1].down_polarizer *= Math.exp(-bl);
		if (node.children[i1].alive) { //the branch contributes only when the node is alive
			node.children[i1].down_polarizer += LBItau*(1-Math.exp(-bl));
		}
		calcDownPolarizers(node.children[i1]);
	}
	}
};

function calcPolarizers(node){
	calcUpPolarizers(node);
	node.down_polarizer = 0; // set the down polarizer of the root to 0
	calcDownPolarizers(node);
};

/**
 * calculate the LBI for all nodes downstream of node
 * allnodes is provided for easy normalization at the end
**/
function calcLBI(node, allnodes){
	setNodeAlive(node);
	calcPolarizers(node);
	allnodes.forEach(function (d) {
		d.LBI=0;
		d.LBI+=d.down_polarizer;
		if (typeof d.children != "undefined") {
			for (var i=0; i<d.children.length; i++) {
				d.LBI += d.children[i].up_polarizer;
			}
		}
	});
	// normalize the LBI to range [0,1]
	maxLBI = d3.max(allnodes.map(function (d) {return d.LBI;}));
	allnodes.forEach(function (d){ d.LBI /= maxLBI;});
};

var virusTooltip = d3.tip()
	.direction('e')
	.attr('class', 'd3-tip')
	.offset([0, 12])
	.html(function(d) {

		string = "";
		if (typeof vaccineChoice[d.strain] != "undefined"){
			string+="REFERENCE STRAIN<br>";
		}

		// safe to assume the following attributes
		if (typeof d.strain != "undefined") {
			string += d.strain;
		}
		string += "<div class=\"smallspacer\"></div>";

		string += "<div class=\"smallnote\">";

		if (typeof d.country != "undefined") {
			string += d.country.replace(/([A-Z])/g, ' $1');
		}
		if (typeof d.date != "undefined") {
			string += ", " + d.date;
		}
		if (typeof d.isolate_id != "undefined") {
			string += "<br>Isolate: " + d.isolate_id;
		}
		if (typeof d.accession != "undefined") {
			string += "<br>GISAID ID: EPI" + d.accession;
		}
		if ((typeof d.subtype != "undefined")&&(d.subtype != "Unknown")) {
			if (d.orig_lab != "") {
				string += "<br>Subtype: " + d.subtype;
			}
		}
		if ((typeof d.host != "undefined")&&(d.host != "Unknown")) {
			if (d.orig_lab != "") {
				string += "<br>host group: " + d.host;
			}
		}
		if ((typeof d.passage != "undefined")&&(d.passage != "Unknown")) {
			if (d.orig_lab != "") {
				string += "<br>passage: " + d.passage;
			}
		}
		string += "</div>";

		string += "<div class=\"smallspacer\"></div>";

		// following may or may not be present
		string += "<div class=\"smallnote\">";
		if (typeof d.ep != "undefined") {
			string += "Epitope distance: " + d.ep + "<br>";
		}
		if (typeof d.ne != "undefined") {
			string += "Non-epitope distance: " + d.ne + "<br>";
		}
		if (typeof d.rb != "undefined") {
			string += "Receptor binding distance: " + d.rb + "<br>";
		}
		if (typeof d.LBI != "undefined") {
			string += "Local branching index: " + d.LBI.toFixed(3) + "<br>";
		}
		string += "</div>";
		return string;
	});
treeplot.call(virusTooltip);

var linkTooltip = d3.tip()
	.direction('e')
	.attr('class', 'd3-tip')
	.offset([0, 12])
	.html(function(d) {
		string = ""
		if (typeof d.frequency != "undefined") {
			string += "Frequency: " + (100 * d.frequency).toFixed(1) + "%"
		}
		if ((typeof d.aa_muts !="undefined")&&(d.aa_muts.length)){
			string+="<br>Mutations: "+d.aa_muts.replace(/,/g, ', ');
		}else if ((typeof d.nuc_muts !="undefined")&&(d.nuc_muts.length)){
			string+="<br>Mutations: "+d.nuc_muts.replace(/,/g, ', ');
		}
		return string;
	});
treeplot.call(linkTooltip);

console.log('Enter tree.js');

var freqScale = d3.scale.linear()
	.domain([0, 1])
	.range([1.5, 4.5]);

var tipRadius = 4.0;
var refRadius = 4.0;
var left_margin = 30;
var bottom_margin = 10;
var top_margin = 10;
if ((typeof branch_labels != "undefined")&&(branch_labels)) {top_margin +=15;}
var right_margin = 10;

function initDateColorDomain(intAttributes){
	var numDateValues = tips.filter(function (d){return typeof vaccineChoice[d.strain]=="undefined";}).map(function(d) {return d.num_date;})
	var minDate = d3.min(numDateValues.filter(function (d){return d!="undefined";}));
	var maxDate = d3.max(numDateValues.filter(function (d){return d!="undefined";}));
	if (typeof time_window == "undefined"){
		time_window = maxDate-minDate;
		console.log("defining time window as " + time_window);
	}
	dateColorDomain = genericDomain.map(function (d){return Math.round(1000*(maxDate - (1.0-d)*time_window))/1000;});

	console.log('setting date domain '+dateColorDomain);
	dateColorScale.domain(dateColorDomain);
}


function initColorDomain(attr, tmpCS){
	//var vals = tips.filter(function(d) {return tipVisibility(d)=='visible';}).map(function(d) {return d[attr];});
	var vals = tips.map(function(d) {return d[attr];});
	var minval = d3.min(vals);
	var maxval = d3.max(vals);
	var rangeIndex = Math.min(10, maxval - minval + 1);
	var domain = [];
	if (maxval-minval<20)
	{
		for (var i=maxval - rangeIndex + 1; i<=maxval; i+=1){domain.push(i);}
	}else{
		for (var i=1.0*minval; i<=maxval; i+=(maxval-minval)/9.0){domain.push(i);}
	}
	tmpCS.range(colors[rangeIndex]);
	tmpCS.domain(domain);
}

function updateColorDomains(num_date){
	dateColorDomain = genericDomain.map(function(d) {return Math.round(10*(num_date - time_window*(1.0-d)))/10;});
	dateColorScale.domain(dateColorDomain);
}

function tipVisibility(d) {
	if ((d.diff < 0 || d.diff > time_window)&(date_select==true)) {
		return "hidden";
	}
	for (var k in restrictTo){
		if (d[k]!=restrictTo[k] && restrictTo[k]!="all"){
			return "hidden";
		}
	}
	return "visible";
}

function branchPoints(d) {
	var mod = 0.5 * freqScale(d.target.frequency) - freqScale(0);
	return (d.source.x-mod).toString() + "," + d.source.y.toString() + " "
		+ (d.source.x-mod).toString() + "," + d.target.y.toString() + " "
		+ (d.target.x).toString() + "," + d.target.y.toString();
}

function branchStrokeWidth(d) {
	return freqScale(d.target.frequency);
}

function branchLabelText(d) {
	if (d.aa_muts!==undefined){
		if (alt_aa){
			var tmp_str = d.alt_aa_muts.replace(/,/g, ', ');
		}else{
			var tmp_str = d.aa_muts.replace(/,/g, ', ');
		}
	}else{
		var tmp_str = d.nuc_muts.replace(/,/g, ', ');
	}
	if (tmp_str.length>50){
		return tmp_str.substring(0,45)+'...';
	}
	else {
		return tmp_str;
	}
}

function tipLabelText(d) {
	if (d.strain.length>32){
		return d.strain.substring(0,30)+'...';
	}
	else {
		return d.strain;
	}
}

function branchLabelSize(d) {
	var n = nDisplayTips;
	if (d.fullTipCount>n/15) {
		return "12px";
	}
	else {
		return "0px";
	}
}

function tipLabelSize(d) {
	if (tipVisibility(d)!="visible"){
		return 0;
	}
	var n = nDisplayTips;
	if (n<25){
		return 16;
	}else if (n<50){
		return 12;
	}else if (n<75){
		return 8;
	}
	else {
		return 0;
	}
}

function tipLabelWidth(d) {
	return tipLabelText(d).length * tipLabelSize(d) * 0.5;
}

function tree_init(){
	console.log("Initializing tree");
	calcFullTipCounts(rootNode);
	calcBranchLength(rootNode);
	rootNode.branch_length= 0.01;
	rootNode.dfreq = 0.0;
	if (typeof rootNode.pivots != "undefined"){
		time_step = rootNode.pivots[1]-rootNode.pivots[0];
	}else{
		time_step = 1.0/12;
	}
	//setting index of frequency trajectory to use for calculating frequency change
	freq_ii = 1;
	if (typeof rootNode.pivots != "undefined") {
		if (typeof rootNode.pivots.length != "undefined") {
			freq_ii = rootNode.pivots.length - 1;
		}
	}
	calcNodeAges(LBItime_window);
	colorByTrait();
	adjust_freq_by_date();
	tree_legend = makeLegend();
	nDisplayTips = displayRoot.fullTipCount;
}

d3.json(path + file_prefix + "tree.json", function(error, root) {

	if (error) return console.warn(error);

	nodes = tree.nodes(root);
	links = tree.links(nodes);
	var tree_legend;
	rootNode = nodes[0];
	displayRoot = rootNode;
	tips = gatherTips(rootNode, []);
	vaccines = getVaccines(tips);

	initDateColorDomain();
	if (typeof rootNode['ep'] != "undefined"){ initColorDomain('ep', epitopeColorScale);}
	if (typeof rootNode['ne'] != "undefined"){ initColorDomain('ne', nonepitopeColorScale);}
	if (typeof rootNode['rb'] != "undefined"){ initColorDomain('rb', receptorBindingColorScale);}
	//date_init();
	tree_init();

	var xValues = nodes.map(function(d) {
		return +d.xvalue;
	});

	var yValues = nodes.map(function(d) {
		return +d.yvalue;
	});

	var clade_freq_event;
	var link = treeplot.selectAll(".link")
		.data(links)
		.enter().append("polyline")
		.attr("class", "link")
		.style("stroke-width", branchStrokeWidth)
		.style("stroke", branchStrokeColor)
		.style("cursor", "pointer")
		.style("fill", "none")
		.on('mouseover', function (d){
			linkTooltip.show(d.target, this);
			if ((colorBy!="genotype")&(typeof addClade !="undefined")){
				clade_freq_event = setTimeout(addClade, 1000, d);
			}
			})
		.on('mouseout', function(d) {
			linkTooltip.hide(d);
			if (typeof addClade !="undefined") {clearTimeout(clade_freq_event);};})
		.on('click', zoom);

	if ((typeof branch_labels != "undefined")&&(branch_labels)){
		var mutations = treeplot.selectAll(".branchLabel")
			.data(nodes)
			.enter()
			.append("text")
			.attr("class", "branchLabel")
			.style("font-size", branchLabelSize)
			.style("text-anchor", "end")
			.text(branchLabelText);
		}

	if ((typeof tip_labels != "undefined")&&(tip_labels)){
		treeplot.selectAll(".tipLabel").data(tips)
			.enter()
			.append("text")
			.attr("class","tipLabel")
			.style("font-size", function(d) {return tipLabelSize(d)+"px"; })
			.style("fill", function(d) {if (typeof vaccineChoice[d.strain]=="undefined") {return '#000000';} else {return "#AAAAAA";}})
			.text(tipLabelText);
	}

	var tipCircles = treeplot.selectAll(".tip")
		.data(tips)
		.enter()
		.append("circle")
		.attr("class", "tip")
		.attr("id", function(d) { return (d.strain).replace(/\//g, ""); })
		.attr("r", tipRadius)
		.style("visibility", tipVisibility)
		.style("fill", tipFillColor)
		.style("stroke", tipStrokeColor)
		.on('mouseover', function(d) {
			virusTooltip.show(d, this);
		})
		.on('click', function(d) {
			if ((typeof d.isolate_id != "undefined")&&(d.isolate_id != "Unknown")) {
				var url = "http://gisaid.org/EPI_ISL/"+d.isolate_id.substring(8,d.isolate_id.length);
				console.log("opening url "+url);
				var win = window.open(url, '_blank');
  				win.focus();
  			}
  		})
		.on('mouseout', virusTooltip.hide);

	var vaccineCircles = treeplot.selectAll(".vaccine")
		.data(vaccines)
		.enter()
		.append("circle")
		.attr("class", "vaccine")
		.style("fill", "#555555")
		.attr("r", refRadius)
		.style("cursor", "default")
		.on('mouseover', function(d) {
			virusTooltip.show(d, this);
		})
		.on('mouseout', virusTooltip.hide);


	d3.select("#reset")
		.on("click", function(d) {
			displayRoot = rootNode;
			nDisplayTips = displayRoot.fullTipCount;
			var dMin = d3.min(xValues),
				dMax = d3.max(xValues),
				lMin = d3.min(yValues),
				lMax = d3.max(yValues);
			rescale(dMin, dMax, lMin, lMax);
			removeClade();
		})

	/*
	 * zoom into the tree upon click onto a branch
	 */
	function zoom(d){
		if ((colorBy!="genotype")&(typeof addClade !="undefined")){
			addClade(d);
		}
		var dy = yScale.domain()[1]-yScale.domain()[0];
		displayRoot = d.target;
		var dMin = minimumAttribute(d.target, "xvalue", d.target.xvalue) - 0.1 * (minimumAttribute(d.target, "xvalue", d.target.xvalue) - minimumAttribute(d.source, "xvalue", d.source.xvalue)),
			dMax = maximumAttribute(d.target, "xvalue", d.target.xvalue),
			lMin = minimumAttribute(d.target, "yvalue", d.target.yvalue),
			lMax = maximumAttribute(d.target, "yvalue", d.target.yvalue);
		if (dMax == dMin || lMax == lMin) {
			displayRoot = d.source;
			dMin = minimumAttribute(d.source, "xvalue", d.source.xvalue),
			dMax = maximumAttribute(d.source, "xvalue", d.source.xvalue),
			lMin = minimumAttribute(d.source, "yvalue", d.source.yvalue),
			lMax = maximumAttribute(d.source, "yvalue", d.source.yvalue);
		}
		if ((lMax-lMin)>0.9*dy){
			lMin = lMax - dy*0.7
		}
		var visibleXvals = tips.filter(function (d){return (d.yvalue>=lMin)&&(d.yvalue<lMax)}).map(function(d){return +d.xvalue;});
		nDisplayTips = visibleXvals.length;
		dMax = Math.max.apply(Math, visibleXvals);
		console.log("nodes in view: "+nDisplayTips+' max Xval: '+dMax);
		rescale(dMin, dMax, lMin, lMax);
	}

	/*
	 * adjust margins such that the tip labels show
	 */
	function setMargins(){
		containerWidth = parseInt(d3.select(".treeplot-container").style("width"), 10);
		treeWidth = containerWidth;
		treeHeight = treePlotHeight(treeWidth);
		d3.select("#treeplot")
			.attr("width", treeWidth)
			.attr("height", treeHeight);
		if ((typeof tip_labels != "undefined")&&(tip_labels)){
			var maxTextWidth = 0;
			var labels = treeplot.selectAll(".tipLabel")
				.data(tips)
				.each(function(d) {
					var textWidth = tipLabelWidth(d);
					if (textWidth>maxTextWidth) {
						maxTextWidth = textWidth;
					}
				});
			right_margin = maxTextWidth + 10;
		}
		xScale.range([left_margin, treeWidth - right_margin]);
		yScale.range([top_margin, treeHeight - bottom_margin]);
	}

	/*
	 * rescale the tree to a window defined by the arguments
	 * dMin, dMax  -- minimal and maximal horizontal dimensions
	 * lMin, lMax  -- minimal and maximal vertical dimensions
	 */
	function rescale(dMin, dMax, lMin, lMax) {
		setMargins();
		xScale.domain([dMin,dMax]);
		yScale.domain([lMin,lMax]);
		transform(1500)
	}

	/*
	 *move all svg items to their new location
	 *dt -- the duration of the transition
	 */
	function transform(dt){
		nodes.forEach(function (d) {
			d.x = xScale(d.xvalue);
			d.y = yScale(d.yvalue);
		});

		treeplot.selectAll(".tip").data(tips)
			.transition().duration(dt)
			.attr("cx", function(d) { return d.x; })
			.attr("cy", function(d) { return d.y; });

		treeplot.selectAll(".vaccine").data(vaccines)
			.transition().duration(dt)
			.attr("cx", function(d) { return d.x; })
			.attr("cy", function(d) { return d.y; });

		treeplot.selectAll(".link").data(links)
			.transition().duration(dt)
			.attr("points", branchPoints);

		if ((typeof tip_labels != "undefined")&&(tip_labels)){
			treeplot.selectAll(".tipLabel").data(tips)
				.transition().duration(dt)
				.style("font-size", function(d) {return tipLabelSize(d)+"px"; })
				.attr("x", function(d) { return d.x+10; })
				.attr("y", function(d) { return d.y+4; });
		}

		if ((typeof branch_labels != "undefined")&&(branch_labels)){
			console.log('shift branch_labels');
			treeplot.selectAll(".branchLabel").data(nodes)
				.transition().duration(dt)
				.style("font-size", branchLabelSize)
				.attr("x", function(d) {  return d.x - 6;})
				.attr("y", function(d) {  return d.y - 3;});
		}

		if (typeof clades !="undefined"){
			treeplot.selectAll(".annotation").data(clades)
				.transition().duration(dt)
				.attr("x", function(d) {
					return xScale(d[1]) - 6;
				})
				.attr("y", function(d) {
					return yScale(d[2]) - 6;
				});
		}
	}

	d3.select(window).on('resize', resize);

	function resize() {
		setMargins();
		transform(0);
	}

	function restrictToFunc(rt) {
		restrictTo[rt] = document.getElementById(rt).value;
		console.log("restriction to "+rt+" "+restrictTo[rt]);
		d3.selectAll(".tip")
			.style("visibility", tipVisibility);
	}

	for (rt in restrictTo){
		var tmp = document.getElementById(rt);
		if (tmp!=null){
			restrictTo[rt] = tmp.value;
		}else{restrictTo[rt]='all';}
		console.log(restrictTo);
		d3.select("#"+rt)
			.style("cursor", "pointer")
			.on("change", (function(restrictor){
							return function(){
								return restrictToFunc(restrictor);
							}
						})(rt));
	}


	function onSelect(tip) {
		d3.select("#"+(tip.strain).replace(/\//g, ""))
			.call(function(d) {
				virusTooltip.show(tip, d[0][0]);
			});
	}

	var mc = autocomplete(document.getElementById('search'))
		.keys(tips)
		.dataField("strain")
		.placeHolder("search strains...")
		.width(800)
		.height(500)
		.onSelected(onSelect)
		.render();


	// add clade labels
	clades = rootNode["clade_annotations"];
	if (typeof clades != "undefined"){
		console.log(clades);
		var clade_annotations = treeplot.selectAll('.annotation')
			.data(clades)
			.enter()
			.append("text")
			.attr("class", "annotation")
			.style("text-anchor", "end")
			.text(function (d) {
				return d[0];
			});
		}
	var xScale = d3.scale.linear()
		.domain([d3.min(xValues), d3.max(xValues)]);
	var yScale = d3.scale.linear()
		.domain([d3.min(yValues), d3.max(yValues)]);

	resize();

	function exportTreeSVG(){
		var tmp = document.getElementById("treeplot-container");
		var svg_tmp = tmp.getElementsByTagName("svg")[0];
		// Extract the data as SVG text string
		var svg_xml = (new XMLSerializer).serializeToString(svg_tmp);
		var blob = new Blob([svg_xml.replace("cursor: pointer;", "")], {type: "text/plain;charset=utf-8"});
		saveAs(blob,'tree.svg');
	}
	d3.select("#svgexport")
		.on("click", exportTreeSVG);

	d3.select("#alt_aa")
		.on("change", updateBranchLabels);

	if (typeof root.alt_aa_muts == "undefined"){
		document.getElementById("alt_aa_div").style.display = 'none';
	}else{
		updateBranchLabels();
	}

	function updateBranchLabels(){
		alt_aa = document.getElementById("alt_aa").checked;
		if ((typeof branch_labels != "undefined")&&(branch_labels)){
			treeplot.selectAll(".branchLabel").data(nodes)
			.text(branchLabelText);
		}
		var downloadButtons = document.getElementById("download");
		if (alt_aa){
			downloadButtons.innerHTML = '<a href="tree_alt.png"><button type="button" class="btn btn-default">png</button></a> <a href="tree_alt.pdf"><button type="button" class="btn btn-default">pdf</button></a><a href="tree_alt.nwk"><button type="button" class="btn btn-default">newick</button></a>';
		}else{
			downloadButtons.innerHTML = '<a href="tree.png"><button type="button" class="btn btn-default">png</button></a> <a href="tree.pdf"><button type="button" class="btn btn-default">pdf</button></a><a href="tree.nwk"><button type="button" class="btn btn-default">newick</button></a>';
		}
	}

});

d3.json(path + file_prefix + "sequences.json", function(error, json) {
	if (error) return console.warn(error);
	cladeToSeq=json;
});


