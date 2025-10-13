var vg_1 = "gp_dot_density_map.vg.json";
vegaEmbed("#bar_chart", vg_1).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

// NEW: second chart
var vg_2 = "time_series.vg.json";
vegaEmbed("#time_series", vg_2).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);
