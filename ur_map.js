var chartData = {
    chart: {
//         map: geodata,
        width: null,
        height: null,
        events: {
            load: function() {
                console.log('inside chart', geodata);
                this.update({
                    chart: {
                        data: geodata
                    },
                    series: [{data: data}]
                })
            }
        }
    },
    title: {
        text: "Labels using Highmaps default positions",
        align: 'left',
        margin: 15,
        style: {
            fontSize: '14px',
            fontWeight: 'normal',
            color: 'rgba(85,85,85,1)'
        },
    },
    credits: {
        text: 'Source: Bureau of Labor Statistics',
        href: false,
        useHTML: true,
        position: {
            align: 'left',
            x: 10,
            y: -5
        },
        style: {
            color: 'rgba(102,102,102,1)',
            fontSize: '9px',
            cursor: 'default'
        }
    },
    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: "bottom"
        }
    },
    legend: {
        title: {
            text: 'Unemployment<br>Rate',
            useHTML: true
        },
        verticalAlign: 'middle',
        align: 'right',
        floating: false,
        layout: 'vertical',
        valueDecimals: 1,
        margin: 10,
        x: 0,
        y: -5,
        itemStyle: {
            color: 'rgba(102,102,102,1)',
            fontSize: '14px',
            fontWeight: 'normal'
        },
        symbolRadius: 0
    },
    colors: ['#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#91003f'],
    colorAxis: {
        tickPixelInterval: 100,
        dataClassColor: 'category',
        dataClasses: [{
            to: 2.9,
            name: 'Less than 2.9%'
                    }, {
            from: 2.9,
            to: 3.6,
            name: '2.9 to 3.6'
                    }, {
            from: 3.6,
            to: 4.0,
            name: '3.6 to 4.0'
                    }, {
            from: 4.0,
            to: 4.4,
            name: '4.0 to 4.4'
                    }, {
            from: 4.4,
            to: 4.9,
            name: '4.4 to 4.9'
                    }, {
            from: 4.9,
            to: 5.6,
            name: '4.9 to 5.6'
                    }, {
            from: 5.6,
            name: 'Greater than 5.6%'
        }]
    },
    series: [{
        //data: data,
        keys: ["id", "value"],
        joinBy: ["STUSPS", "code"],
        name: "Unemployment Rate",
        states: {
            hover: {
                color: "#a4edba"
            }
        },
        dataLabels: {
            enabled: true,
            inside: false,
            format: "{point.properties.STUSPS}",
            color: 'contrast',
            style: {
                fontWeight: 'normal',
                fontSize: '8px',
                textOutline: 'none'
            }
        }
    }]
};
