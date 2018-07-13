var chartData = {
    chart: {
        type: 'line',
        width: null,
        height: null,
        spacingBottom: 25,
        marginRight: 15,
        style: {
            fontFamily: 'Arial, sans-serif'
        },
        events: {
            load: function() {
                $(".highcharts-legend-item path").attr('stroke-width', 4);
                },
            redraw: function() {
                $(".highcharts-legend-item path").attr('stroke-width', 4);
            },
            beforePrint: function() {
                this.exportSVGElements[0].box.hide();
                this.exportSVGElements[1].hide();
            },
            afterPrint: function() {
                this.exportSVGElements[0].box.show();
                this.exportSVGElements[1].show();
            }
        }
    },
    colors: ['#B84645','#61AEE1','#B1812C'],
    title: {
        text: 'Employment',
        align: 'left',
        margin: 5,
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'rgba(85,85,85,1)'
        }
    },
    credits: {
        text: "Source: Bureau of Labor Statistics’ Quarterly Census of Employment and Wages",
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
    tooltip: {
        shared: true,
        useHTML: true,
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(65,75,76,1)',
        borderWidth: 1,
        formatter: function() {
            var s = '<span style="font-size: 12px; font-weight: normal;">' + Highcharts.dateFormat("%B %Y", new Date(this.x)) + '</span><br/>';
            s += '<table>';
            $.each(this.points, function() {
                s += '<tr><td style="color:' +
                   this.series.color +
                   '; text-align: left' +
                   '; padding: 0px 10px 0px 0px' +
                   '; font-size: 12px' +
                   '; font-weight: bold' +
                   '">' +
                   this.series.options.tooltipname +
                   ':</td>' +
                   '<td style="text-align: right; font-size: 12px; font-weight: bold;">';
                   if (this.series.options.tooltipvalueprefix) {
                        s += this.series.options.tooltipvalueprefix;
                    }
                    s += '   ' + Highcharts.numberFormat(this.y, 1, '.', ',');
                    if (this.series.options.tooltipvaluesuffix) {
                        s += this.series.options.tooltipvaluesuffix;
                    }
                    s += '</td></tr>';
            });
            s += '</table>';
            // console.log('s', s);
            return s;
        }
    },
    legend: {
        verticalAlign: 'top',
        align: 'left',
        floating: false,
        layout: 'horizontal',
        margin: 10,
        x: 0,
        y: -15,
        itemStyle: {
            color: 'rgba(102,102,102,1)',
            fontSize: '12px',
            fontWeight: 'normal',
            cursor: 'default'
        },
        itemHoverStyle: {
            color: 'rgba(102,102,102,1)',
        },
        labelFormatter: function() {
            return this.options.legendname;
        }
    },
     plotOptions: {
        series: {
            lineWidth: 3,
            states: {
                hover: {
                    lineWidthPlus: 0,
                    halo: {
                        size: 0
                    }
                }
            },
            marker: {
                enabled: true,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        radiusPlus: 2,
                        lineWidthPlus: 1
                    }
                }
            },
            events: {
                legendItemClick: function() {
                    return false;
                    // <== returning false disables legend click action
                }
            },
            showInLegend: true
        }
    },
    yAxis: {
        title: {
            text: 'Index, 2007:M12=100',
            style: {
                fontSize: '11px',
                fontWeight: 'normal',
                whiteSpace: 'nowrap',
                color: 'rgba(102,102,102,1)'
            }
        },
        labels: {
            format: '{value}',
            style: {
                fontSize: '10px',
                color: 'rgba(102,102,102,1)'
            }
        },
        allowDecimals: true,
        lineColor: 'rgba(145,145,145,0)',
        lineWidth: 0,
        gridLineColor: 'rgba(225,225,225,1)',
        gridLineWidth: 1,
        minorGridLineColor: 'rgba(225,225,225,0)',
        tickColor: 'rgba(207,216,220,1)',
        tickWidth: 0,
        tickPosition: 'outside',
        tickLength: 0,
        minPadding: 0,
        maxPadding: 0,
        plotLines: [{
            value: 100,
            color: 'rgba(145,145,145,1)',
            width: 2
        }],
        min: 92,
        max: 108,
        tickInterval: 2
    },
    xAxis: {
        type: 'datetime',
        title: {
            text: null,
        },
        labels: {
            format: '{value:%Y}',
            overflow: false,
            rotation: 0,
            style: {
                fontSize: '10px',
                color: 'rgba(102,102,102,1)'
            }
        },
        allowDecimals: true,
        lineColor: 'rgba(145,145,145,1)',
        lineWidth: 1,
        gridLineColor: 'rgba(225,225,225,0)',
        gridLineWidth: 0,
        minorGridLineColor: 'rgba(225,225,225,0)',
        tickColor: 'rgba(145,145,145,1)',
        tickWidth: 1,
        tickPosition: 'inside',
        tickLength: 5,
        minPadding: 0,
        crosshair: true,
        startOnTick: false,
        endOnTick: false,
        showFirstLabel: true,
        tickPositions: [Date.UTC(2007,0,1),Date.UTC(2009,0,1),Date.UTC(2011,0,1),Date.UTC(2013,0,1),Date.UTC(2015,0,1),Date.UTC(2017,0,1)],
        plotBands: [{
            from: Date.UTC(2007,11,1),
            to: Date.UTC(2009,5,1),
            color: 'rgba(231,231,231,1)',
            id: 1
        }]
    },
    exporting: {
        filename: 'cleveland_fed_chart',
        scale: 2,
        chartOptions: {
            chart: {
                events: null
            },
            plotOptions: {
                series: {
                    lineWidth: 3
                }
            }
        },
        sourceWidth: 950,
        sourceHeight: 540,
        buttons: {
            contextButton: {
                align: 'right',
                enabled: true,
                height: 20,
                symbol: 'menu',
                symbolFill: 'rgba(65,75,86,1)',
                symbolSize: 14,
                symbolStroke: 'rgba(65,75,86,1)',
                symbolStrokeWidth: 2,
                symbolX: 12.5,
                symbolY: 10.5,
                text: null,
                verticalAlign: 'top',
                width: 24,
                x: -10,
                y: 0,
                menuItems: [{
                    textKey: "downloadCSV",
                    onclick: function() {
                        this.downloadCSV();
                    }
                }, {
                    textKey: "downloadXLS",
                    onclick: function() {
                        this.downloadXLS();
                    }
                }, {
                    separator: true
                }, {
                    textKey: 'downloadPNG',
                    onclick: function() {
                        this.exportChart({ type: 'image/png' });
                    }
                }, {
                    textKey: 'printChart',
                    onclick: function() {
                        this.print();
                    }
                }]
            }
        },
        csv: {
            dateFormat: '%m-%d-%Y',
            columnHeaderFormatter: function(item) {
                // Column is axis object
                if (item instanceof Highcharts.Axis) {
                    // Datetime axis
                    if (item.isDatetimeAxis) {
                        // Use title if it exists
                        if (item.options.title.text) {
                            return item.options.title.text;
                        }
                        // Else use title 'Date' (HC default = 'DateTime')
                        else {
                            return 'Date';
                        }
                    }
                    // Category axis (only other type)
                    else {
                        // Use title if it exists
                        if (item.options.title.text) {
                            return item.options.title.text;
                        }
                        // Use HC default title if it doesn't
                        else {
                            return 'Category';
                        }
                    }
                }
                // Column is data series
                else if (item instanceof Highcharts.Series) {
                    // If custom 'csvname' attribute exists, use it
                    if (item.options.csvname) {
                        return item.options.csvname;
                    }
                    // Else use the default 'name' attribute
                    else {
                        return item.name;
                    }
                }
            }
        }
    },
    series: [
    {
        index: 0,
        zIndex: 2,
        legendIndex: 0,
        name: 'Pittsburgh',
        dataname: 'pitnonfarma',
        legendname: 'Pittsburgh',
        tooltipname: 'Pittsburgh',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2007,0,1),99.72],[Date.UTC(2007,1,1),99.50],[Date.UTC(2007,2,1),99.74],[Date.UTC(2007,3,1),99.57],[Date.UTC(2007,4,1),99.90],[Date.UTC(2007,5,1),100.10],[Date.UTC(2007,6,1),99.91],[Date.UTC(2007,7,1),99.98],[Date.UTC(2007,8,1),99.86],[Date.UTC(2007,9,1),99.90],[Date.UTC(2007,10,1),100.02],[Date.UTC(2007,11,1),100.00],[Date.UTC(2008,0,1),100.19],[Date.UTC(2008,1,1),100.27],[Date.UTC(2008,2,1),100.20],[Date.UTC(2008,3,1),100.30],[Date.UTC(2008,4,1),100.32],[Date.UTC(2008,5,1),100.32],[Date.UTC(2008,6,1),100.42],[Date.UTC(2008,7,1),100.24],[Date.UTC(2008,8,1),100.15],[Date.UTC(2008,9,1),100.11],[Date.UTC(2008,10,1),99.67],[Date.UTC(2008,11,1),99.39],[Date.UTC(2009,0,1),98.73],[Date.UTC(2009,1,1),98.59],[Date.UTC(2009,2,1),98.17],[Date.UTC(2009,3,1),97.71],[Date.UTC(2009,4,1),97.56],[Date.UTC(2009,5,1),97.19],[Date.UTC(2009,6,1),96.85],[Date.UTC(2009,7,1),96.75],[Date.UTC(2009,8,1),96.81],[Date.UTC(2009,9,1),96.76],[Date.UTC(2009,10,1),96.80],[Date.UTC(2009,11,1),96.81],[Date.UTC(2010,0,1),96.62],[Date.UTC(2010,1,1),96.24],[Date.UTC(2010,2,1),96.81],[Date.UTC(2010,3,1),97.30],[Date.UTC(2010,4,1),97.41],[Date.UTC(2010,5,1),97.53],[Date.UTC(2010,6,1),97.74],[Date.UTC(2010,7,1),97.84],[Date.UTC(2010,8,1),97.81],[Date.UTC(2010,9,1),97.98],[Date.UTC(2010,10,1),98.13],[Date.UTC(2010,11,1),98.18],[Date.UTC(2011,0,1),98.47],[Date.UTC(2011,1,1),98.57],[Date.UTC(2011,2,1),98.74],[Date.UTC(2011,3,1),98.88],[Date.UTC(2011,4,1),98.84],[Date.UTC(2011,5,1),98.91],[Date.UTC(2011,6,1),98.91],[Date.UTC(2011,7,1),98.88],[Date.UTC(2011,8,1),99.29],[Date.UTC(2011,9,1),99.37],[Date.UTC(2011,10,1),99.46],[Date.UTC(2011,11,1),99.52],[Date.UTC(2012,0,1),99.77],[Date.UTC(2012,1,1),100.04],[Date.UTC(2012,2,1),100.39],[Date.UTC(2012,3,1),100.10],[Date.UTC(2012,4,1),99.86],[Date.UTC(2012,5,1),99.99],[Date.UTC(2012,6,1),99.87],[Date.UTC(2012,7,1),99.82],[Date.UTC(2012,8,1),99.89],[Date.UTC(2012,9,1),100.04],[Date.UTC(2012,10,1),100.06],[Date.UTC(2012,11,1),100.07],[Date.UTC(2013,0,1),100.10],[Date.UTC(2013,1,1),100.40],[Date.UTC(2013,2,1),100.31],[Date.UTC(2013,3,1),100.02],[Date.UTC(2013,4,1),100.00],[Date.UTC(2013,5,1),99.98],[Date.UTC(2013,6,1),100.06],[Date.UTC(2013,7,1),99.98],[Date.UTC(2013,8,1),99.99],[Date.UTC(2013,9,1),99.92],[Date.UTC(2013,10,1),99.86],[Date.UTC(2013,11,1),99.88],[Date.UTC(2014,0,1),99.77],[Date.UTC(2014,1,1),99.74],[Date.UTC(2014,2,1),99.78],[Date.UTC(2014,3,1),99.86],[Date.UTC(2014,4,1),100.04],[Date.UTC(2014,5,1),100.05],[Date.UTC(2014,6,1),100.01],[Date.UTC(2014,7,1),100.13],[Date.UTC(2014,8,1),100.09],[Date.UTC(2014,9,1),100.13],[Date.UTC(2014,10,1),99.94],[Date.UTC(2014,11,1),100.08],[Date.UTC(2015,0,1),100.18],[Date.UTC(2015,1,1),100.08],[Date.UTC(2015,2,1),99.88],[Date.UTC(2015,3,1),100.06],[Date.UTC(2015,4,1),100.27],[Date.UTC(2015,5,1),100.22],[Date.UTC(2015,6,1),100.42],[Date.UTC(2015,7,1),100.41],[Date.UTC(2015,8,1),100.25],[Date.UTC(2015,9,1),100.24],[Date.UTC(2015,10,1),100.38],[Date.UTC(2015,11,1),100.33],[Date.UTC(2016,0,1),100.16],[Date.UTC(2016,1,1),100.20],[Date.UTC(2016,2,1),100.24],[Date.UTC(2016,3,1),100.35],[Date.UTC(2016,4,1),100.09],[Date.UTC(2016,5,1),99.91],[Date.UTC(2016,6,1),100.31],[Date.UTC(2016,7,1),100.09],[Date.UTC(2016,8,1),100.04],[Date.UTC(2016,9,1),99.97],[Date.UTC(2016,10,1),100.09],[Date.UTC(2016,11,1),99.93],[Date.UTC(2017,0,1),100.37],[Date.UTC(2017,1,1),100.69],[Date.UTC(2017,2,1),100.49],[Date.UTC(2017,3,1),100.67],[Date.UTC(2017,4,1),100.57],[Date.UTC(2017,5,1),100.66],[Date.UTC(2017,6,1),100.85],[Date.UTC(2017,7,1),100.98],[Date.UTC(2017,8,1),101.14]]
    },{
        index: 1,
        zIndex: 1,
        legendIndex: 1,
        name: 'Pennsylvania',
        dataname: 'panonfarma',
        legendname: 'Pennsylvania',
        tooltipname: 'Pennsylvania',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2007,0,1),99.51],[Date.UTC(2007,1,1),99.30],[Date.UTC(2007,2,1),99.57],[Date.UTC(2007,3,1),99.53],[Date.UTC(2007,4,1),99.65],[Date.UTC(2007,5,1),100.01],[Date.UTC(2007,6,1),99.86],[Date.UTC(2007,7,1),99.82],[Date.UTC(2007,8,1),99.67],[Date.UTC(2007,9,1),99.85],[Date.UTC(2007,10,1),99.98],[Date.UTC(2007,11,1),100.00],[Date.UTC(2008,0,1),100.19],[Date.UTC(2008,1,1),100.14],[Date.UTC(2008,2,1),100.07],[Date.UTC(2008,3,1),100.20],[Date.UTC(2008,4,1),100.18],[Date.UTC(2008,5,1),100.13],[Date.UTC(2008,6,1),100.04],[Date.UTC(2008,7,1),100.03],[Date.UTC(2008,8,1),99.77],[Date.UTC(2008,9,1),99.56],[Date.UTC(2008,10,1),99.00],[Date.UTC(2008,11,1),98.78],[Date.UTC(2009,0,1),98.12],[Date.UTC(2009,1,1),97.81],[Date.UTC(2009,2,1),97.26],[Date.UTC(2009,3,1),96.76],[Date.UTC(2009,4,1),96.54],[Date.UTC(2009,5,1),96.13],[Date.UTC(2009,6,1),95.97],[Date.UTC(2009,7,1),95.78],[Date.UTC(2009,8,1),95.77],[Date.UTC(2009,9,1),95.96],[Date.UTC(2009,10,1),95.88],[Date.UTC(2009,11,1),95.78],[Date.UTC(2010,0,1),95.88],[Date.UTC(2010,1,1),95.54],[Date.UTC(2010,2,1),96.02],[Date.UTC(2010,3,1),96.46],[Date.UTC(2010,4,1),96.74],[Date.UTC(2010,5,1),96.66],[Date.UTC(2010,6,1),96.69],[Date.UTC(2010,7,1),96.67],[Date.UTC(2010,8,1),96.69],[Date.UTC(2010,9,1),96.96],[Date.UTC(2010,10,1),97.11],[Date.UTC(2010,11,1),97.21],[Date.UTC(2011,0,1),97.26],[Date.UTC(2011,1,1),97.33],[Date.UTC(2011,2,1),97.56],[Date.UTC(2011,3,1),97.81],[Date.UTC(2011,4,1),97.61],[Date.UTC(2011,5,1),97.66],[Date.UTC(2011,6,1),97.68],[Date.UTC(2011,7,1),97.51],[Date.UTC(2011,8,1),97.79],[Date.UTC(2011,9,1),97.79],[Date.UTC(2011,10,1),97.97],[Date.UTC(2011,11,1),98.01],[Date.UTC(2012,0,1),98.17],[Date.UTC(2012,1,1),98.40],[Date.UTC(2012,2,1),98.77],[Date.UTC(2012,3,1),98.46],[Date.UTC(2012,4,1),98.38],[Date.UTC(2012,5,1),98.37],[Date.UTC(2012,6,1),98.32],[Date.UTC(2012,7,1),98.42],[Date.UTC(2012,8,1),98.47],[Date.UTC(2012,9,1),98.40],[Date.UTC(2012,10,1),98.44],[Date.UTC(2012,11,1),98.50],[Date.UTC(2013,0,1),98.57],[Date.UTC(2013,1,1),98.77],[Date.UTC(2013,2,1),98.85],[Date.UTC(2013,3,1),98.63],[Date.UTC(2013,4,1),98.63],[Date.UTC(2013,5,1),98.64],[Date.UTC(2013,6,1),98.72],[Date.UTC(2013,7,1),98.82],[Date.UTC(2013,8,1),98.83],[Date.UTC(2013,9,1),98.79],[Date.UTC(2013,10,1),98.87],[Date.UTC(2013,11,1),98.84],[Date.UTC(2014,0,1),99.01],[Date.UTC(2014,1,1),98.93],[Date.UTC(2014,2,1),99.16],[Date.UTC(2014,3,1),99.34],[Date.UTC(2014,4,1),99.54],[Date.UTC(2014,5,1),99.63],[Date.UTC(2014,6,1),99.67],[Date.UTC(2014,7,1),99.81],[Date.UTC(2014,8,1),99.80],[Date.UTC(2014,9,1),99.97],[Date.UTC(2014,10,1),100.02],[Date.UTC(2014,11,1),100.15],[Date.UTC(2015,0,1),100.04],[Date.UTC(2015,1,1),100.08],[Date.UTC(2015,2,1),99.90],[Date.UTC(2015,3,1),100.14],[Date.UTC(2015,4,1),100.42],[Date.UTC(2015,5,1),100.46],[Date.UTC(2015,6,1),100.56],[Date.UTC(2015,7,1),100.53],[Date.UTC(2015,8,1),100.57],[Date.UTC(2015,9,1),100.71],[Date.UTC(2015,10,1),100.75],[Date.UTC(2015,11,1),100.86],[Date.UTC(2016,0,1),100.84],[Date.UTC(2016,1,1),100.93],[Date.UTC(2016,2,1),101.06],[Date.UTC(2016,3,1),101.19],[Date.UTC(2016,4,1),100.99],[Date.UTC(2016,5,1),100.88],[Date.UTC(2016,6,1),101.46],[Date.UTC(2016,7,1),101.32],[Date.UTC(2016,8,1),101.58],[Date.UTC(2016,9,1),101.45],[Date.UTC(2016,10,1),101.51],[Date.UTC(2016,11,1),101.52],[Date.UTC(2017,0,1),101.88],[Date.UTC(2017,1,1),102.07],[Date.UTC(2017,2,1),101.86],[Date.UTC(2017,3,1),102.04],[Date.UTC(2017,4,1),102.07],[Date.UTC(2017,5,1),102.16],[Date.UTC(2017,6,1),102.39],[Date.UTC(2017,7,1),102.51],[Date.UTC(2017,8,1),102.57]]
    },{
        index: 2,
        zIndex: 0,
        legendIndex: 2,
        name: 'United States',
        dataname: 'usnonfarma',
        legendname: 'United States',
        tooltipname: 'US',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2007,0,1),99.27],[Date.UTC(2007,1,1),99.33],[Date.UTC(2007,2,1),99.64],[Date.UTC(2007,3,1),99.50],[Date.UTC(2007,4,1),99.63],[Date.UTC(2007,5,1),99.81],[Date.UTC(2007,6,1),99.73],[Date.UTC(2007,7,1),99.82],[Date.UTC(2007,8,1),99.76],[Date.UTC(2007,9,1),99.80],[Date.UTC(2007,10,1),99.96],[Date.UTC(2007,11,1),100.00],[Date.UTC(2008,0,1),100.00],[Date.UTC(2008,1,1),100.05],[Date.UTC(2008,2,1),99.95],[Date.UTC(2008,3,1),99.81],[Date.UTC(2008,4,1),99.74],[Date.UTC(2008,5,1),99.53],[Date.UTC(2008,6,1),99.39],[Date.UTC(2008,7,1),99.33],[Date.UTC(2008,8,1),99.02],[Date.UTC(2008,9,1),98.69],[Date.UTC(2008,10,1),98.14],[Date.UTC(2008,11,1),97.68],[Date.UTC(2009,0,1),96.92],[Date.UTC(2009,1,1),96.32],[Date.UTC(2009,2,1),95.74],[Date.UTC(2009,3,1),95.20],[Date.UTC(2009,4,1),94.86],[Date.UTC(2009,5,1),94.43],[Date.UTC(2009,6,1),94.19],[Date.UTC(2009,7,1),93.93],[Date.UTC(2009,8,1),93.84],[Date.UTC(2009,9,1),93.81],[Date.UTC(2009,10,1),93.71],[Date.UTC(2009,11,1),93.63],[Date.UTC(2010,0,1),93.71],[Date.UTC(2010,1,1),93.53],[Date.UTC(2010,2,1),93.76],[Date.UTC(2010,3,1),94.12],[Date.UTC(2010,4,1),94.32],[Date.UTC(2010,5,1),94.23],[Date.UTC(2010,6,1),94.29],[Date.UTC(2010,7,1),94.14],[Date.UTC(2010,8,1),94.12],[Date.UTC(2010,9,1),94.44],[Date.UTC(2010,10,1),94.45],[Date.UTC(2010,11,1),94.52],[Date.UTC(2011,0,1),94.66],[Date.UTC(2011,1,1),94.77],[Date.UTC(2011,2,1),94.95],[Date.UTC(2011,3,1),95.29],[Date.UTC(2011,4,1),95.08],[Date.UTC(2011,5,1),95.13],[Date.UTC(2011,6,1),95.39],[Date.UTC(2011,7,1),95.43],[Date.UTC(2011,8,1),95.71],[Date.UTC(2011,9,1),95.63],[Date.UTC(2011,10,1),95.76],[Date.UTC(2011,11,1),95.87],[Date.UTC(2012,0,1),96.25],[Date.UTC(2012,1,1),96.42],[Date.UTC(2012,2,1),96.73],[Date.UTC(2012,3,1),96.68],[Date.UTC(2012,4,1),96.77],[Date.UTC(2012,5,1),96.97],[Date.UTC(2012,6,1),96.93],[Date.UTC(2012,7,1),97.16],[Date.UTC(2012,8,1),97.27],[Date.UTC(2012,9,1),97.42],[Date.UTC(2012,10,1),97.57],[Date.UTC(2012,11,1),97.70],[Date.UTC(2013,0,1),97.80],[Date.UTC(2013,1,1),98.08],[Date.UTC(2013,2,1),98.24],[Date.UTC(2013,3,1),98.26],[Date.UTC(2013,4,1),98.41],[Date.UTC(2013,5,1),98.53],[Date.UTC(2013,6,1),98.68],[Date.UTC(2013,7,1),98.93],[Date.UTC(2013,8,1),99.01],[Date.UTC(2013,9,1),99.13],[Date.UTC(2013,10,1),99.39],[Date.UTC(2013,11,1),99.44],[Date.UTC(2014,0,1),99.58],[Date.UTC(2014,1,1),99.65],[Date.UTC(2014,2,1),99.89],[Date.UTC(2014,3,1),100.16],[Date.UTC(2014,4,1),100.38],[Date.UTC(2014,5,1),100.52],[Date.UTC(2014,6,1),100.67],[Date.UTC(2014,7,1),100.92],[Date.UTC(2014,8,1),101.04],[Date.UTC(2014,9,1),101.31],[Date.UTC(2014,10,1),101.46],[Date.UTC(2014,11,1),101.71],[Date.UTC(2015,0,1),101.85],[Date.UTC(2015,1,1),101.93],[Date.UTC(2015,2,1),102.01],[Date.UTC(2015,3,1),102.26],[Date.UTC(2015,4,1),102.49],[Date.UTC(2015,5,1),102.62],[Date.UTC(2015,6,1),102.94],[Date.UTC(2015,7,1),102.94],[Date.UTC(2015,8,1),103.05],[Date.UTC(2015,9,1),103.44],[Date.UTC(2015,10,1),103.50],[Date.UTC(2015,11,1),103.70],[Date.UTC(2016,0,1),103.81],[Date.UTC(2016,1,1),103.96],[Date.UTC(2016,2,1),104.04],[Date.UTC(2016,3,1),104.40],[Date.UTC(2016,4,1),104.22],[Date.UTC(2016,5,1),104.22],[Date.UTC(2016,6,1),104.64],[Date.UTC(2016,7,1),104.65],[Date.UTC(2016,8,1),104.90],[Date.UTC(2016,9,1),104.88],[Date.UTC(2016,10,1),105.01],[Date.UTC(2016,11,1),105.01],[Date.UTC(2017,0,1),105.27],[Date.UTC(2017,1,1),105.49],[Date.UTC(2017,2,1),105.64],[Date.UTC(2017,3,1),105.63],[Date.UTC(2017,4,1),105.73],[Date.UTC(2017,5,1),106.02],[Date.UTC(2017,6,1),105.93],[Date.UTC(2017,7,1),106.02],[Date.UTC(2017,8,1),105.95]]
    }]
};