!function(){function a(a,b,c){"undefined"==typeof c&&(c=b,optionsValues=void 0);var d="undefined"!=typeof a?a:b;if("undefined"==typeof d)return null;if("function"==typeof d){var e=[c];return c.geography&&(e=[c.geography,c.data]),d.apply(null,e)}return d}function b(a,b,c){return this.svg=n.select(a).append("svg").attr("width",c||a.offsetWidth).attr("data-width",c||a.offsetWidth).attr("class","datamap").attr("height",b||a.offsetHeight).style("overflow","hidden"),this.options.responsive&&(n.select(this.options.element).style({position:"relative","padding-bottom":100*this.options.aspectRatio+"%"}),n.select(this.options.element).select("svg").style({position:"absolute",width:"100%",height:"100%"}),n.select(this.options.element).select("svg").select("g").selectAll("path").style("vector-effect","non-scaling-stroke")),this.svg}function c(a,b){var c,d,e=b.width||a.offsetWidth,f=b.height||a.offsetHeight,g=this.svg;return b&&"undefined"==typeof b.scope&&(b.scope="world"),"usa"===b.scope?c=n.geo.albersUsa().scale(e).translate([e/2,f/2]):"world"===b.scope&&(c=n.geo[b.projection]().scale((e+1)/2/Math.PI).translate([e/2,f/("mercator"===b.projection?1.45:1.8)])),"orthographic"===b.projection&&(g.append("defs").append("path").datum({type:"Sphere"}).attr("id","sphere").attr("d",d),g.append("use").attr("class","stroke").attr("xlink:href","#sphere"),g.append("use").attr("class","fill").attr("xlink:href","#sphere"),c.scale(250).clipAngle(90).rotate(b.projectionConfig.rotation)),d=n.geo.path().projection(c),{path:d,projection:c}}function d(){n.select(".datamaps-style-block").empty()&&n.select("head").append("style").attr("class","datamaps-style-block").html('.datamap path.datamaps-graticule { fill: none; stroke: #777; stroke-width: 0.5px; stroke-opacity: .5; pointer-events: none; } .datamap .labels {pointer-events: none;} .datamap path {stroke: #FFFFFF; stroke-width: 1px;} .datamaps-legend dt, .datamaps-legend dd { float: left; margin: 0 3px 0 0;} .datamaps-legend dd {width: 20px; margin-right: 6px; border-radius: 3px;} .datamaps-legend {padding-bottom: 20px; z-index: 1001; position: absolute; left: 4px; font-size: 12px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;} .datamaps-hoverover {display: none; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; } .hoverinfo {padding: 4px; border-radius: 1px; background-color: #FFF; box-shadow: 1px 1px 5px #CCC; font-size: 12px; border: 1px solid #CCC; } .hoverinfo hr {border:1px dotted #CCC; }')}function e(b){var c=this.options.fills,d=this.options.data||{},e=this.options.geographyConfig,f=this.svg.select("g.datamaps-subunits");f.empty()&&(f=this.addLayer("datamaps-subunits",null,!0));var g=o.feature(b,b.objects[this.options.scope]).features;e.hideAntarctica&&(g=g.filter(function(a){return"ATA"!==a.id})),e.hideHawaiiAndAlaska&&(g=g.filter(function(a){return"HI"!==a.id&&"AK"!==a.id}));var h=f.selectAll("path.datamaps-subunit").data(g);h.enter().append("path").attr("d",this.path).attr("class",function(a){return"datamaps-subunit "+a.id}).attr("data-info",function(a){return JSON.stringify(d[a.id])}).style("fill",function(b){var e,f=d[b.id];return f&&f.fillKey&&(e=c[a(f.fillKey,{data:d[b.id],geography:b})]),"undefined"==typeof e&&(e=a(f&&f.fillColor,c.defaultFill,{data:d[b.id],geography:b})),e}).style("stroke-width",e.borderWidth).style("stroke",e.borderColor)}function f(){function b(){this.parentNode.appendChild(this)}var c=this.svg,d=this,e=this.options.geographyConfig;(e.highlightOnHover||e.popupOnHover)&&c.selectAll(".datamaps-subunit").on("mouseover",function(f){var g=n.select(this),h=d.options.data[f.id]||{};if(e.highlightOnHover){var i={fill:g.style("fill"),stroke:g.style("stroke"),"stroke-width":g.style("stroke-width"),"fill-opacity":g.style("fill-opacity")};g.style("fill",a(h.highlightFillColor,e.highlightFillColor,h)).style("stroke",a(h.highlightBorderColor,e.highlightBorderColor,h)).style("stroke-width",a(h.highlightBorderWidth,e.highlightBorderWidth,h)).style("fill-opacity",a(h.highlightFillOpacity,e.highlightFillOpacity,h)).attr("data-previousAttributes",JSON.stringify(i)),/((MSIE)|(Trident))/.test(navigator.userAgent)||b.call(this)}e.popupOnHover&&d.updatePopup(g,f,e,c)}).on("mouseout",function(){var a=n.select(this);if(e.highlightOnHover){var b=JSON.parse(a.attr("data-previousAttributes"));for(var c in b)a.style(c,b[c])}a.on("mousemove",null),n.selectAll(".datamaps-hoverover").style("display","none")})}function g(a,b,c){if(b=b||{},this.options.fills){var d="<dl>",e="";b.legendTitle&&(d="<h2>"+b.legendTitle+"</h2>"+d);for(var f in this.options.fills){if("defaultFill"===f){if(!b.defaultFillName)continue;e=b.defaultFillName}else e=b.labels&&b.labels[f]?b.labels[f]:f+": ";d+="<dt>"+e+"</dt>",d+='<dd style="background-color:'+this.options.fills[f]+'">&nbsp;</dd>'}d+="</dl>";n.select(this.options.element).append("div").attr("class","datamaps-legend").html(d)}}function h(a,b){var c=n.geo.graticule();this.svg.insert("path",".datamaps-subunits").datum(c).attr("class","datamaps-graticule").attr("d",this.path)}function i(b,c,d){var e=this;this.svg;if(!c||c&&!c.slice)throw"Datamaps Error - arcs must be an array";for(var f=0;f<c.length;f++)c[f]=l(c[f],c[f].options),delete c[f].options;"undefined"==typeof d&&(d=p.arcConfig);var g=b.selectAll("path.datamaps-arc").data(c,JSON.stringify),h=n.geo.path().projection(e.projection);g.enter().append("svg:path").attr("class","datamaps-arc").style("stroke-linecap","round").style("stroke",function(b){return a(b.strokeColor,d.strokeColor,b)}).style("fill","none").style("stroke-width",function(b){return a(b.strokeWidth,d.strokeWidth,b)}).attr("d",function(b){var c=e.latLngToXY(a(b.origin.latitude,b),a(b.origin.longitude,b)),f=e.latLngToXY(a(b.destination.latitude,b),a(b.destination.longitude,b)),g=[(c[0]+f[0])/2,(c[1]+f[1])/2];if(d.greatArc){var i=n.geo.greatArc().source(function(b){return[a(b.origin.longitude,b),a(b.origin.latitude,b)]}).target(function(b){return[a(b.destination.longitude,b),a(b.destination.latitude,b)]});return h(i(b))}var j=a(b.arcSharpness,d.arcSharpness,b);return"M"+c[0]+","+c[1]+"S"+(g[0]+50*j)+","+(g[1]-75*j)+","+f[0]+","+f[1]}).transition().delay(100).style("fill",function(b){var c=this.getTotalLength();return this.style.transition=this.style.WebkitTransition="none",this.style.strokeDasharray=c+" "+c,this.style.strokeDashoffset=c,this.getBoundingClientRect(),this.style.transition=this.style.WebkitTransition="stroke-dashoffset "+a(b.animationSpeed,d.animationSpeed,b)+"ms ease-out",this.style.strokeDashoffset="0","none"}),g.exit().transition().style("opacity",0).remove()}function j(a,b){var c=this;b=b||{};var d=this.projection([-67.707617,42.722131]);this.svg.selectAll(".datamaps-subunit").attr("data-foo",function(e){var f=c.path.centroid(e),g=7.5,h=5;["FL","KY","MI"].indexOf(e.id)>-1&&(g=-2.5),"NY"===e.id&&(g=-1),"MI"===e.id&&(h=18),"LA"===e.id&&(g=13);var i,j;i=f[0]-g,j=f[1]+h;var k=["VT","NH","MA","RI","CT","NJ","DE","MD","DC"].indexOf(e.id);if(k>-1){var l=d[1];i=d[0],j=l+k*(2+(b.fontSize||12)),a.append("line").attr("x1",i-3).attr("y1",j-5).attr("x2",f[0]).attr("y2",f[1]).style("stroke",b.labelColor||"#000").style("stroke-width",b.lineWidth||1)}return a.append("text").attr("x",i).attr("y",j).style("font-size",(b.fontSize||10)+"px").style("font-family",b.fontFamily||"Verdana").style("fill",b.labelColor||"#000").text(e.id),"bar"})}function k(b,c,d){function e(a){return"undefined"!=typeof a&&"undefined"!=typeof a.latitude&&"undefined"!=typeof a.longitude}var f=this,g=this.options.fills,h=this.options.filters,i=this.svg;if(!c||c&&!c.slice)throw"Datamaps Error - bubbles must be an array";var j=b.selectAll("circle.datamaps-bubble").data(c,d.key);j.enter().append("svg:circle").attr("class","datamaps-bubble").attr("cx",function(a){var b;return e(a)?b=f.latLngToXY(a.latitude,a.longitude):a.centered&&(b=f.path.centroid(i.select("path."+a.centered).data()[0])),b?b[0]:void 0}).attr("cy",function(a){var b;return e(a)?b=f.latLngToXY(a.latitude,a.longitude):a.centered&&(b=f.path.centroid(i.select("path."+a.centered).data()[0])),b?b[1]:void 0}).attr("r",function(b){return d.animate?0:a(b.radius,d.radius,b)}).attr("data-info",function(a){return JSON.stringify(a)}).attr("filter",function(b){var c=h[a(b.filterKey,d.filterKey,b)];return c?c:void 0}).style("stroke",function(b){return a(b.borderColor,d.borderColor,b)}).style("stroke-width",function(b){return a(b.borderWidth,d.borderWidth,b)}).style("fill-opacity",function(b){return a(b.fillOpacity,d.fillOpacity,b)}).style("fill",function(b){var c=g[a(b.fillKey,d.fillKey,b)];return c||g.defaultFill}).on("mouseover",function(b){var c=n.select(this);if(d.highlightOnHover){var e={fill:c.style("fill"),stroke:c.style("stroke"),"stroke-width":c.style("stroke-width"),"fill-opacity":c.style("fill-opacity")};c.style("fill",a(b.highlightFillColor,d.highlightFillColor,b)).style("stroke",a(b.highlightBorderColor,d.highlightBorderColor,b)).style("stroke-width",a(b.highlightBorderWidth,d.highlightBorderWidth,b)).style("fill-opacity",a(b.highlightFillOpacity,d.highlightFillOpacity,b)).attr("data-previousAttributes",JSON.stringify(e))}d.popupOnHover&&f.updatePopup(c,b,d,i)}).on("mouseout",function(a){var b=n.select(this);if(d.highlightOnHover){var c=JSON.parse(b.attr("data-previousAttributes"));for(var e in c)b.style(e,c[e])}n.selectAll(".datamaps-hoverover").style("display","none")}),j.transition().duration(400).attr("r",function(b){return a(b.radius,d.radius,b)}),j.exit().transition().delay(d.exitDelay).attr("r",0).remove()}function l(a){return Array.prototype.slice.call(arguments,1).forEach(function(b){if(b)for(var c in b)null==a[c]&&(a[c]=b[c])}),a}function m(a){if("undefined"==typeof n||"undefined"==typeof o)throw new Error("Include d3.js (v3.0.3 or greater) and topojson on this page before creating a new map");return this.options=l(a,p),this.options.geographyConfig=l(a.geographyConfig,p.geographyConfig),this.options.projectionConfig=l(a.projectionConfig,p.projectionConfig),this.options.bubblesConfig=l(a.bubblesConfig,p.bubblesConfig),this.options.arcConfig=l(a.arcConfig,p.arcConfig),n.select(this.options.element).select("svg").length>0&&b.call(this,this.options.element,this.options.height,this.options.width),this.addPlugin("bubbles",k),this.addPlugin("legend",g),this.addPlugin("arc",i),this.addPlugin("labels",j),this.addPlugin("graticule",h),this.options.disableDefaultStyles||d(),this.draw()}var n=window.d3,o=window.topojson,p={scope:"world",responsive:!1,aspectRatio:.5625,setProjection:c,projection:"equirectangular",dataType:"json",data:{},done:function(){},fills:{defaultFill:"#ABDDA4"},filters:{},geographyConfig:{dataUrl:null,hideAntarctica:!0,hideHawaiiAndAlaska:!1,borderWidth:1,borderColor:"#FDFDFD",popupTemplate:function(a,b){return'<div class="hoverinfo"><strong>'+a.properties.name+"</strong></div>"},popupOnHover:!0,highlightOnHover:!0,highlightFillColor:"#FC8D59",highlightBorderColor:"rgba(250, 15, 160, 0.2)",highlightBorderWidth:2},projectionConfig:{rotation:[97,0]},bubblesConfig:{borderWidth:2,borderColor:"#FFFFFF",popupOnHover:!0,radius:null,popupTemplate:function(a,b){return'<div class="hoverinfo"><strong>'+b.name+"</strong></div>"},fillOpacity:.75,animate:!0,highlightOnHover:!0,highlightFillColor:"#FC8D59",highlightBorderColor:"rgba(250, 15, 160, 0.2)",highlightBorderWidth:2,highlightFillOpacity:.85,exitDelay:100,key:JSON.stringify},arcConfig:{strokeColor:"#DD1C77",strokeWidth:1,arcSharpness:1,animationSpeed:600}};m.prototype.resize=function(){var a=this,b=a.options;if(b.responsive){var c=b.element.clientWidth,d=n.select(b.element).select("svg").attr("data-width");n.select(b.element).select("svg").selectAll("g").attr("transform","scale("+c/d+")")}},m.prototype.draw=function(){function a(a){b.options.dataUrl&&n[b.options.dataType](b.options.dataUrl,function(a){if("csv"===b.options.dataType&&a&&a.slice){for(var c={},d=0;d<a.length;d++)c[a[d].id]=a[d];a=c}Datamaps.prototype.updateChoropleth.call(b,a)}),e.call(b,a),f.call(b),(b.options.geographyConfig.popupOnHover||b.options.bubblesConfig.popupOnHover)&&(hoverover=n.select(b.options.element).append("div").attr("class","datamaps-hoverover").style("z-index",10001).style("position","absolute")),b.options.done(b)}var b=this,c=b.options,d=c.setProjection.apply(b,[c.element,c]);return this.path=d.path,this.projection=d.projection,c.geographyConfig.dataUrl?n.json(c.geographyConfig.dataUrl,function(c,d){if(c)throw new Error(c);b.customTopo=d,a(d)}):a(this[c.scope+"Topo"]||c.geographyConfig.dataJson),this},m.prototype.worldTopo="__WORLD__",m.prototype.abwTopo="__ABW__",m.prototype.afgTopo="__AFG__",m.prototype.agoTopo="__AGO__",m.prototype.aiaTopo="__AIA__",m.prototype.albTopo="__ALB__",m.prototype.aldTopo="__ALD__",m.prototype.andTopo="__AND__",m.prototype.areTopo="__ARE__",m.prototype.argTopo="__ARG__",m.prototype.armTopo="__ARM__",m.prototype.asmTopo="__ASM__",m.prototype.ataTopo="__ATA__",m.prototype.atcTopo="__ATC__",m.prototype.atfTopo="__ATF__",m.prototype.atgTopo="__ATG__",m.prototype.ausTopo="__AUS__",m.prototype.autTopo="__AUT__",m.prototype.azeTopo="__AZE__",m.prototype.bdiTopo="__BDI__",m.prototype.belTopo="__BEL__",m.prototype.benTopo="__BEN__",m.prototype.bfaTopo="__BFA__",m.prototype.bgdTopo="__BGD__",m.prototype.bgrTopo="__BGR__",m.prototype.bhrTopo="__BHR__",m.prototype.bhsTopo="__BHS__",m.prototype.bihTopo="__BIH__",m.prototype.bjnTopo="__BJN__",m.prototype.blmTopo="__BLM__",m.prototype.blrTopo="__BLR__",m.prototype.blzTopo="__BLZ__",m.prototype.bmuTopo="__BMU__",m.prototype.bolTopo="__BOL__",m.prototype.braTopo="__BRA__",m.prototype.brbTopo="__BRB__",m.prototype.brnTopo="__BRN__",m.prototype.btnTopo="__BTN__",m.prototype.norTopo="__NOR__",m.prototype.bwaTopo="__BWA__",m.prototype.cafTopo="__CAF__",m.prototype.canTopo="__CAN__",m.prototype.cheTopo="__CHE__",m.prototype.chlTopo="__CHL__",m.prototype.chnTopo="__CHN__",m.prototype.civTopo="__CIV__",m.prototype.clpTopo="__CLP__",m.prototype.cmrTopo="__CMR__",m.prototype.codTopo="__COD__",m.prototype.cogTopo="__COG__",m.prototype.cokTopo="__COK__",m.prototype.colTopo="__COL__",m.prototype.comTopo="__COM__",m.prototype.cpvTopo="__CPV__",m.prototype.criTopo="__CRI__",m.prototype.csiTopo="__CSI__",m.prototype.cubTopo="__CUB__",m.prototype.cuwTopo="__CUW__",m.prototype.cymTopo="__CYM__",m.prototype.cynTopo="__CYN__",m.prototype.cypTopo="__CYP__",m.prototype.czeTopo="__CZE__",m.prototype.deuTopo="__DEU__",m.prototype.djiTopo="__DJI__",m.prototype.dmaTopo="__DMA__",m.prototype.dnkTopo="__DNK__",m.prototype.domTopo="__DOM__",m.prototype.dzaTopo="__DZA__",m.prototype.ecuTopo="__ECU__",m.prototype.egyTopo="__EGY__",m.prototype.eriTopo="__ERI__",m.prototype.esbTopo="__ESB__",m.prototype.espTopo="__ESP__",m.prototype.estTopo="__EST__",m.prototype.ethTopo="__ETH__",m.prototype.finTopo="__FIN__",m.prototype.fjiTopo="__FJI__",m.prototype.flkTopo="__FLK__",m.prototype.fraTopo="__FRA__",m.prototype.froTopo="__FRO__",m.prototype.fsmTopo="__FSM__",m.prototype.gabTopo="__GAB__",m.prototype.psxTopo="__PSX__",m.prototype.gbrTopo="__GBR__",m.prototype.geoTopo="__GEO__",m.prototype.ggyTopo="__GGY__",m.prototype.ghaTopo="__GHA__",m.prototype.gibTopo="__GIB__",m.prototype.ginTopo="__GIN__",m.prototype.gmbTopo="__GMB__",m.prototype.gnbTopo="__GNB__",m.prototype.gnqTopo="__GNQ__",m.prototype.grcTopo="__GRC__",m.prototype.grdTopo="__GRD__",m.prototype.grlTopo="__GRL__",m.prototype.gtmTopo="__GTM__",m.prototype.gumTopo="__GUM__",m.prototype.guyTopo="__GUY__",m.prototype.hkgTopo="__HKG__",m.prototype.hmdTopo="__HMD__",m.prototype.hndTopo="__HND__",m.prototype.hrvTopo="__HRV__",m.prototype.htiTopo="__HTI__",m.prototype.hunTopo="__HUN__",m.prototype.idnTopo="__IDN__",m.prototype.imnTopo="__IMN__",m.prototype.indTopo="__IND__",m.prototype.ioaTopo="__IOA__",m.prototype.iotTopo="__IOT__",m.prototype.irlTopo="__IRL__",m.prototype.irnTopo="__IRN__",m.prototype.irqTopo="__IRQ__",m.prototype.islTopo="__ISL__",m.prototype.isrTopo="__ISR__",m.prototype.itaTopo="__ITA__",m.prototype.jamTopo="__JAM__",m.prototype.jeyTopo="__JEY__",m.prototype.jorTopo="__JOR__",m.prototype.jpnTopo="__JPN__",m.prototype.kabTopo="__KAB__",m.prototype.kasTopo="__KAS__",m.prototype.kazTopo="__KAZ__",m.prototype.kenTopo="__KEN__",m.prototype.kgzTopo="__KGZ__",m.prototype.khmTopo="__KHM__",m.prototype.kirTopo="__KIR__",m.prototype.knaTopo="__KNA__",m.prototype.korTopo="__KOR__",m.prototype.kosTopo="__KOS__",m.prototype.kwtTopo="__KWT__",m.prototype.laoTopo="__LAO__",m.prototype.lbnTopo="__LBN__",m.prototype.lbrTopo="__LBR__",m.prototype.lbyTopo="__LBY__",m.prototype.lcaTopo="__LCA__",m.prototype.lieTopo="__LIE__",m.prototype.lkaTopo="__LKA__",m.prototype.lsoTopo="__LSO__",m.prototype.ltuTopo="__LTU__",m.prototype.luxTopo="__LUX__",m.prototype.lvaTopo="__LVA__",m.prototype.macTopo="__MAC__",m.prototype.mafTopo="__MAF__",m.prototype.marTopo="__MAR__",m.prototype.mcoTopo="__MCO__",m.prototype.mdaTopo="__MDA__",m.prototype.mdgTopo="__MDG__",m.prototype.mdvTopo="__MDV__",m.prototype.mexTopo="__MEX__",m.prototype.mhlTopo="__MHL__",m.prototype.mkdTopo="__MKD__",m.prototype.mliTopo="__MLI__",m.prototype.mltTopo="__MLT__",m.prototype.mmrTopo="__MMR__",m.prototype.mneTopo={type:"Topology",objects:{mne:{type:"GeometryCollection",geometries:[{type:"Polygon",properties:{name:"Bar"},id:"ME.BA",arcs:[[0,1,2,3,4,5]]},{type:"Polygon",properties:{name:"Ulcinj"},id:"ME.UL",arcs:[[-3,6]]},{type:"Polygon",properties:{name:"Budva"},id:"ME.BU",arcs:[[-5,7,8,9]]},{type:"Polygon",properties:{name:"Cetinje"},id:"ME.CE",arcs:[[10,11,-6,-10,12,13]]},{type:"Polygon",properties:{name:"Rožaje"},id:"ME.RO",arcs:[[14,15]]},{type:"Polygon",properties:{name:"Plav"},id:"ME.PV",arcs:[[16,17,18]]},{type:"MultiPolygon",properties:{name:"Herceg Novi"},id:"ME.HN",arcs:[[[19,20]],[[21,22]]]},{type:"Polygon",properties:{name:"Kotor"},id:"ME.KT",arcs:[[-9,23,24,25,-23,26,27,-13]]},{type:"Polygon",properties:{name:"Andrijevica"},id:"ME.AN",arcs:[[-17,28,29,30,31]]},{type:"Polygon",properties:{name:"Berane"},id:"ME.BE",arcs:[[-15,32,-18,-32,33,34,35,36]]},{type:"Polygon",properties:{name:"Bijelo Polje"},id:"ME.BP",arcs:[[-36,37,38,39]]},{type:"Polygon",properties:{name:"Danilovgrad"},id:"ME.DA",arcs:[[40,-11,41,42]]},{type:"Polygon",properties:{name:"Kolašin"},id:"ME.KL",arcs:[[-34,-31,43,-43,44,45,46]]},{type:"Polygon",properties:{name:"Mojkovac"},id:"ME.MK",arcs:[[-38,-35,-47,47,48,49]]},{type:"Polygon",properties:{name:"Nikšic"},id:"ME.NK",arcs:[[50,-45,-42,-14,-28,51,52]]},{type:"Polygon",properties:{name:"Plužine"},id:"ME.PU",arcs:[[53,54,-53,55]]},{type:"Polygon",properties:{name:"Pljevlja"},id:"ME.PL",arcs:[[-39,-50,56,57]]},{type:"Polygon",properties:{name:"Podgorica"},id:"ME.PG",arcs:[[-30,58,-1,-12,-41,-44]]},{type:"Polygon",properties:{name:"Tivat"},id:"ME.TI",arcs:[[59,-21,60,-25]]},{type:"Polygon",properties:{name:"Šavnik"},id:"ME.SA",arcs:[[61,-48,-46,-51,-55]]},{type:"Polygon",properties:{name:"Žabljak"},id:"ME.ZA",arcs:[[-49,-62,-54,62,-57]]}]}},arcs:[[[3518,2642],[51,-88],[86,-107],[116,-57],[159,-47],[154,-22],[110,-69],[168,-177],[60,-36]],[[4422,2039],[-44,-40],[-15,-63],[52,-94],[0,-1],[82,-76],[298,-186],[78,-80]],[[4873,1499],[-64,-21],[-316,-85],[-101,20],[-186,58],[-142,-1],[38,-129],[147,-255],[-43,-148],[-492,54],[-31,-4],[-1,0]],[[3682,988],[-10,133],[-295,229],[-41,85],[48,85],[-39,34],[-65,25],[-79,118],[-198,-3],[-44,63],[-12,64],[-26,15],[-36,0],[-33,20],[-53,95]],[[2799,1951],[1,1],[152,148],[-26,78],[-118,118],[-143,139],[-89,141],[-31,77]],[[2545,2653],[2,0],[195,-37],[213,-73],[121,2],[22,126],[94,98],[254,-93],[72,-34]],[[4873,1499],[13,-14],[12,-56],[-95,-176],[-25,-102],[-6,-116],[19,-113],[47,-89],[2,-1],[38,-41],[-27,-99],[-31,-22],[-43,-5],[-27,-21],[34,-136],[-13,-42],[-20,-31],[-6,-29],[3,-40],[-4,-24],[13,-24],[48,-39],[42,-63],[-4,-154],[4,-62],[-94,68],[-191,181],[-89,37],[-380,106],[-89,49],[-128,40],[-43,24],[-41,59],[-2,32],[7,33],[-15,59],[-25,10],[-54,41],[-38,45],[26,21],[4,25],[-13,158]],[[2799,1951],[-18,33],[-76,65],[-208,132],[-61,90],[-36,195],[-46,82],[-75,36],[-91,0],[-79,-28],[-39,-49],[-25,28],[-32,26],[-14,27],[-84,-40],[-40,-24],[-27,-26]],[[1848,2498],[-4,30],[-10,165],[-6,183],[45,84]],[[1873,2960],[19,34],[169,-49],[121,-44],[165,-28],[154,-115],[44,-105]],[[2621,4528],[1,-7],[2,-98],[113,-58],[114,-72],[58,-71],[68,-56],[-22,-55],[-79,-129],[-5,-125]],[[2871,3857],[-76,20],[-76,-31],[18,-60],[196,-133],[194,-114],[111,-99],[119,-109],[179,-137],[153,-136],[-38,-208],[-134,-208],[1,0]],[[1873,2960],[-75,147],[-71,185],[-18,87],[41,82],[10,76],[2,145],[-60,181],[-198,118],[-128,77],[-16,92],[-57,120],[-92,101],[-85,180],[-8,31]],[[1118,4582],[110,10],[74,64],[35,99],[-2,95],[31,61],[71,26],[49,65],[43,104],[210,-52],[153,-83],[139,5],[188,-31],[53,-60],[100,-69],[130,-68],[94,-99],[25,-121]],[[8440,5375],[0,3],[-41,151],[45,284],[93,109],[49,158],[47,115],[82,126],[110,291]],[[8825,6612],[59,-16],[279,-24],[149,-54],[273,-164],[320,-135],[86,-94],[8,-146],[-51,-229],[-136,-19],[-285,-41],[-200,-62],[-44,-23],[-43,-65],[-5,-57],[8,-54],[-8,-57],[-130,-123],[-176,44],[-195,98],[-186,41],[-59,-24],[-49,-33]],[[6834,4344],[86,34],[310,192],[190,211],[234,150],[26,5]],[[7680,4936],[466,84],[197,22]],[[8343,5042],[298,-238],[40,-61],[11,-21],[-70,-152],[-59,-95],[-18,-48],[-2,-95],[15,-83],[-6,-76],[-63,-78],[-134,65],[-112,-68],[-187,-209],[-132,-32],[-254,6],[-129,-75],[0,-1],[-1,-1],[-48,-38],[-197,-98],[-34,-9],[-49,-13],[-94,9],[-89,38],[-171,111],[-89,183],[-18,55],[-3,40],[9,89],[9,41],[39,70],[24,33],[9,-6],[-4,59]],[[1179,3150],[-8,1],[-28,-120],[-35,0],[-42,23],[-113,-13],[-23,11],[-27,38],[-63,44],[-73,36],[-54,18],[13,21],[0,6],[5,4],[21,13],[-130,78],[-41,59],[26,68],[66,20],[427,-119]],[[1100,3338],[43,-101],[35,-86],[1,-1]],[[1144,3534],[-233,-37],[-552,61],[0,-44],[97,-60],[-43,-171],[88,-51],[-102,29],[-72,65],[8,87],[-26,66],[-91,44],[-40,21],[-67,67],[-55,78],[-37,91],[-4,103],[29,190],[-24,96],[54,41],[58,21],[61,-4],[58,-32],[54,6],[19,36],[-11,53],[-37,59],[105,51]],[[381,4400],[87,-92],[175,-203],[135,-70],[146,-87],[112,-153],[108,-260],[0,-1]],[[1848,2498],[-12,-11],[-41,-15],[-34,32],[-49,84],[-172,120],[-78,81],[-2,80],[-30,21],[-45,44],[-32,20],[0,25]],[[1353,2979],[1,1],[109,114],[104,302],[-132,205],[-123,81]],[[1312,3682],[9,36],[-173,-183],[-4,-1]],[[381,4400],[55,27],[110,90],[23,48]],[[569,4565],[9,-2],[295,-10],[195,24],[50,5]],[[6834,4344],[-5,59],[-44,150],[-80,128],[-119,51],[-121,-48],[-93,-71]],[[6372,4613],[-2,3],[-16,31],[-138,146]],[[6216,4793],[72,63],[116,155],[3,154],[-14,194],[-16,128],[-79,59],[-75,62],[75,111],[166,19]],[[6464,5738],[60,6],[234,-105],[227,-138],[351,-89],[178,-40],[-96,-80],[0,-100],[107,-101],[153,-153],[2,-2]],[[8440,5375],[-109,-73],[-42,-48],[-9,-117],[59,-91],[4,-4]],[[6464,5738],[-2,13],[-22,249],[41,70]],[[6481,6070],[86,147],[17,6]],[[6584,6223],[233,71],[165,42],[130,92],[165,38],[200,-52],[124,0],[195,81],[153,50],[47,30],[161,53],[134,53],[153,210]],[[8444,6891],[315,-261],[66,-18]],[[6584,6223],[-121,124],[-91,69],[32,79],[-5,148],[-77,119],[-140,87],[-237,46],[-162,39],[-39,28],[-119,52],[-199,42],[-88,5]],[[5338,7061],[4,119],[64,160],[142,73],[92,93],[57,103],[31,133],[15,153],[55,163]],[[5798,8058],[11,-7],[161,-176],[90,-68],[107,-47],[230,-57],[113,-11],[66,21],[43,35],[41,-3],[153,-231],[95,-105],[107,-72],[122,-39],[173,-9],[176,12],[60,31],[122,104],[49,22],[65,-18],[39,-48],[30,-60],[39,-57],[51,-44],[313,-184],[180,-148],[10,-8]],[[4514,4862],[-79,-75],[-136,-128],[10,-119],[-53,-146],[-96,-88],[-65,-68],[-38,-127],[-25,-189],[-33,-149],[-17,-28],[-258,2],[-393,-3],[-169,16],[-184,68],[-107,29]],[[2621,4528],[231,12],[70,75],[10,172],[91,137],[185,97],[116,29],[90,-29],[187,-30],[272,-22],[184,78],[-23,117],[1,93],[9,93]],[[4044,5350],[178,-48],[76,-164],[5,-68],[6,-88],[205,-120]],[[6216,4793],[-106,111],[-123,57],[-37,125],[-23,125],[-195,18],[-190,-66],[-17,-116],[-122,-122],[-130,-73],[-204,-49],[-221,-29],[-287,60],[-47,28]],[[4044,5350],[1,9],[-27,182],[50,143],[17,139],[-52,113]],[[4033,5936],[-34,73],[-11,96],[57,86],[88,49],[337,-49],[262,-8],[82,99],[71,100]],[[4885,6382],[10,-8],[217,-100],[172,-100],[323,6],[349,7],[192,-38],[138,-29],[195,-50]],[[4885,6382],[-159,112],[-55,201],[2,15]],[[4673,6710],[19,125],[74,60],[163,35],[119,86],[39,18]],[[5087,7034],[75,37],[176,-10]],[[2834,6375],[178,-67],[236,-131],[166,-103],[291,-102],[328,-36]],[[569,4565],[35,74],[2,171],[-54,162],[-89,97],[-106,92],[-181,246],[-70,141],[-48,141],[-5,103],[51,66],[65,42],[38,57],[-30,113],[-123,208],[-51,118],[-3,102],[100,231],[158,125],[291,55],[309,3],[211,-25],[-93,450],[-3,154],[3,12]],[[976,7503],[93,-19],[337,-71],[175,-84],[124,-162],[121,-280],[165,-241],[177,-142],[271,-66],[295,-26],[100,-37]],[[2893,8372],[0,-2],[5,-119],[11,-343],[7,-178],[51,-147],[112,-160],[-3,-99]],[[3076,7324],[-53,21],[-194,-22],[-138,-135],[-103,-242],[30,-165],[245,-135],[23,-238],[-52,-33]],[[976,7503],[41,178],[85,150],[224,261],[-125,51],[79,96],[664,404],[137,37],[-16,23],[-30,55],[-18,23],[96,38],[310,24],[126,-30],[140,-81],[36,-42],[4,-41],[-5,-42],[13,-49],[47,-67],[106,-113],[3,-6]],[[5087,7034],[-124,159],[-155,147],[-189,139],[-257,153],[-248,133],[-191,117],[-234,78],[-187,-23],[-180,-3],[-125,105],[-47,155],[-66,271],[-19,52]],[[3065,8517],[11,13],[60,27],[137,6],[37,26],[-156,247],[-155,356],[-180,196],[-37,23],[-114,-25],[0,30],[23,49],[3,38],[-70,89],[-37,20],[-80,18],[-50,31],[-3,50],[31,48],[49,30],[96,39],[123,114],[77,47],[119,10],[73,-60],[56,-87],[68,-70],[88,-26],[111,3],[102,34],[139,136],[130,13],[248,-32],[-105,-137],[4,-169],[85,-156],[136,-96],[714,-266],[87,-52],[217,-270],[307,-267],[63,-77],[89,-166],[53,-67],[184,-129]],[[6372,4613],[-53,-40],[-136,-134],[-87,-119],[-30,-82],[-29,-154],[-29,-71],[-65,-62],[-75,-36],[-62,-45],[-29,-89],[0,-1],[-63,-109],[-72,-99],[-85,-82],[-103,-57],[-69,-97],[-266,-259],[-27,-34],[-49,-96],[-10,-43],[3,-81],[-5,-30],[-499,-654],[-110,-100]],[[1353,2979],[0,11],[12,85],[-90,72],[-96,3]],[[1100,3338],[60,-17],[151,-68],[78,-65],[40,92],[-8,74],[-118,222],[-3,55],[12,51]],[[3076,7324],[132,-53],[84,-78],[111,0],[174,19],[124,-97],[70,-106],[113,41],[164,0],[146,-117],[67,-78],[94,-39],[318,-106]],[[2893,8372],[15,-29],[55,41],[41,49],[33,52],[28,32]]],transform:{scale:[.0001921831994199454,.00016956928382838346],translate:[18.433530721000068,41.852362372000044]}},m.prototype.mngTopo="__MNG__",m.prototype.mnpTopo="__MNP__",m.prototype.mozTopo="__MOZ__",m.prototype.mrtTopo="__MRT__",m.prototype.msrTopo="__MSR__",m.prototype.musTopo="__MUS__",m.prototype.mwiTopo="__MWI__",m.prototype.mysTopo="__MYS__",m.prototype.namTopo="__NAM__",m.prototype.nclTopo="__NCL__",m.prototype.nerTopo="__NER__",m.prototype.nfkTopo="__NFK__",m.prototype.ngaTopo="__NGA__",m.prototype.nicTopo="__NIC__",m.prototype.niuTopo="__NIU__",m.prototype.nldTopo="__NLD__",m.prototype.nplTopo="__NPL__",m.prototype.nruTopo="__NRU__",m.prototype.nulTopo="__NUL__",m.prototype.nzlTopo="__NZL__",m.prototype.omnTopo="__OMN__",m.prototype.pakTopo="__PAK__",m.prototype.panTopo="__PAN__",m.prototype.pcnTopo="__PCN__",m.prototype.perTopo="__PER__",m.prototype.pgaTopo="__PGA__",m.prototype.phlTopo="__PHL__",m.prototype.plwTopo="__PLW__",m.prototype.pngTopo="__PNG__",m.prototype.polTopo="__POL__",m.prototype.priTopo="__PRI__",m.prototype.prkTopo="__PRK__",m.prototype.prtTopo="__PRT__",m.prototype.pryTopo="__PRY__",m.prototype.pyfTopo="__PYF__",m.prototype.qatTopo="__QAT__",m.prototype.rouTopo="__ROU__",m.prototype.rusTopo="__RUS__",m.prototype.rwaTopo="__RWA__",m.prototype.sahTopo="__SAH__",m.prototype.sauTopo="__SAU__",m.prototype.scrTopo="__SCR__",m.prototype.sdnTopo="__SDN__",m.prototype.sdsTopo="__SDS__",m.prototype.senTopo="__SEN__",m.prototype.serTopo="__SER__",m.prototype.sgpTopo="__SGP__",m.prototype.sgsTopo="__SGS__",m.prototype.shnTopo="__SHN__",m.prototype.slbTopo="__SLB__",m.prototype.sleTopo="__SLE__",m.prototype.slvTopo="__SLV__",m.prototype.smrTopo="__SMR__",m.prototype.solTopo="__SOL__",m.prototype.somTopo="__SOM__",m.prototype.spmTopo="__SPM__",m.prototype.srbTopo="__SRB__",m.prototype.stpTopo="__STP__",m.prototype.surTopo="__SUR__",m.prototype.svkTopo="__SVK__",m.prototype.svnTopo="__SVN__",m.prototype.sweTopo="__SWE__",m.prototype.swzTopo="__SWZ__",m.prototype.sxmTopo="__SXM__",m.prototype.sycTopo="__SYC__",m.prototype.syrTopo="__SYR__",m.prototype.tcaTopo="__TCA__",m.prototype.tcdTopo="__TCD__",m.prototype.tgoTopo="__TGO__",m.prototype.thaTopo="__THA__",m.prototype.tjkTopo="__TJK__",m.prototype.tkmTopo="__TKM__",m.prototype.tlsTopo="__TLS__",m.prototype.tonTopo="__TON__",m.prototype.ttoTopo="__TTO__",m.prototype.tunTopo="__TUN__",m.prototype.turTopo="__TUR__",m.prototype.tuvTopo="__TUV__",m.prototype.twnTopo="__TWN__",m.prototype.tzaTopo="__TZA__",m.prototype.ugaTopo="__UGA__",m.prototype.ukrTopo="__UKR__",m.prototype.umiTopo="__UMI__",m.prototype.uryTopo="__URY__",m.prototype.usaTopo="__USA__",m.prototype.usgTopo="__USG__",m.prototype.uzbTopo="__UZB__",m.prototype.vatTopo="__VAT__",m.prototype.vctTopo="__VCT__",m.prototype.venTopo="__VEN__",m.prototype.vgbTopo="__VGB__",m.prototype.virTopo="__VIR__",m.prototype.vnmTopo="__VNM__",m.prototype.vutTopo="__VUT__",m.prototype.wlfTopo="__WLF__",m.prototype.wsbTopo="__WSB__",m.prototype.wsmTopo="__WSM__",m.prototype.yemTopo="__YEM__",m.prototype.zafTopo="__ZAF__",m.prototype.zmbTopo="__ZMB__",m.prototype.zweTopo="__ZWE__",m.prototype.latLngToXY=function(a,b){return this.projection([b,a])},m.prototype.addLayer=function(a,b,c){var d;return d=c?this.svg.insert("g",":first-child"):this.svg.append("g"),d.attr("id",b||"").attr("class",a||"")},m.prototype.updateChoropleth=function(a){var b=this.svg;for(var c in a)if(a.hasOwnProperty(c)){var d,e=a[c];if(!c)continue;if(d="string"==typeof e?e:"string"==typeof e.color?e.color:this.options.fills[e.fillKey],e===Object(e)){this.options.data[c]=l(e,this.options.data[c]||{});this.svg.select("."+c).attr("data-info",JSON.stringify(this.options.data[c]))}b.selectAll("."+c).transition().style("fill",d)}},m.prototype.updatePopup=function(a,b,c){var d=this;a.on("mousemove",null),a.on("mousemove",function(){var e=n.mouse(d.options.element);n.select(d.svg[0][0].parentNode).select(".datamaps-hoverover").style("top",e[1]+30+"px").html(function(){var d=JSON.parse(a.attr("data-info"));try{return c.popupTemplate(b,d)}catch(e){return""}}).style("left",e[0]+"px")}),n.select(d.svg[0][0].parentNode).select(".datamaps-hoverover").style("display","block")},m.prototype.addPlugin=function(a,b){var c=this;"undefined"==typeof m.prototype[a]&&(m.prototype[a]=function(d,e,f,g){var h;"undefined"==typeof g&&(g=!1),"function"==typeof e&&(f=e,e=void 0),e=l(e||{},c.options[a+"Config"]),!g&&this.options[a+"Layer"]?(h=this.options[a+"Layer"],e=e||this.options[a+"Options"]):(h=this.addLayer(a),this.options[a+"Layer"]=h,this.options[a+"Options"]=e),b.apply(this,[h,d,e]),f&&f(h)})},"object"==typeof exports?(n=require("d3"),o=require("topojson"),module.exports=m):"function"==typeof define&&define.amd?define("datamaps",["require","d3","topojson"],function(a){return n=a("d3"),o=a("topojson"),m}):window.Datamap=window.Datamaps=m,window.jQuery&&(window.jQuery.fn.datamaps=function(a,b){a=a||{},a.element=this[0];var c=new m(a);return"function"==typeof b&&b(c,a),this})}();