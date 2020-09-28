// read in json files
d3.json("samples.json").then((bellyData) => {
    console.log(bellyData);

    // filter sample values by id 
    var samples = bellyData.samples.filter(bellyData => bellyData.id.toString() === id)[0];

    var sampleValues = samples.sample_values.slice(0, 10).reverse();

    // get only top 10 otu ids for the plot
    var idValues = (samples.otu_ids.slice(0, 10)).reverse();

    // get the otu id's to the desired form for the plot
    var idOtu = idValues.map(d => "OTU " + d)

    var labels = idValues.map(d => "OTU " + d)


    var trace = {
        x: sampleValues,
        y: idOtu,
        text: labels,
        type:"bar",
        orientation: "h",
    };

    var data = [trace];

    var layout = {
        title: "Top 10 OTU",
        yaxis:{
            tickmode:"linear",
        },
        margin: {
            l: 100,
            r: 100,
            t: 30,
            b: 20
        }
    };

    Plotly.newPlot("bar", data, layout);
});