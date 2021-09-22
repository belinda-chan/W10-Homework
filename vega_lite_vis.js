var spec2 = "happiness_choropleth.vg.json";
vegaEmbed("#choropleth", spec2).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec2 = "scatterplot.vg.json";
vegaEmbed("#scatterplot", spec2).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
