var chartData = {
    chart: {
        type: 'line',
        width: null,
        height: null,
        marginRight: 15,
        spacingBottom: 25,
        spacingLeft: 1,
        spacingTop: 5,
        style: {
            fontFamily: 'Arial, sans-serif'
        },
        events: {
            load: function() {
                $(".highcharts-legend-item path").attr('stroke-width', 3);
                },
            redraw: function() {
                $(".highcharts-legend-item path").attr('stroke-width', 3);
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
        text: 'Real GDP Per Capita',
        align: 'left',
        margin: 5,
        style: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'rgba(85,85,85,1)'
        }
    },
    credits: {
        text: "Source: Bureau of Economic Analysis/Haver Analytics",
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
            var s = '<span style="font-size: 12px; font-weight: normal;">' + Highcharts.dateFormat("%Y", new Date(this.x)) + '</span><br/>';
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
            text: 'Index, 2007=100',
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
            value: 0,
            color: 'rgba(145,145,145,1)',
            width: 2
        }],
        min: 90,
        max: 110,
        tickInterval: 5
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
        tickPositions: [Date.UTC(2006,5,1),Date.UTC(2008,0,1),Date.UTC(2010,0,1),Date.UTC(2012,0,1),Date.UTC(2014,0,1),Date.UTC(2016,0,1)],
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
        name: 'Cleveland',
        dataname: 'cvlgdp',
        legendname: 'Cleveland',
        tooltipname: 'Cleveland',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2006,5,1),98.12],[Date.UTC(2006,6,1),98.28],[Date.UTC(2006,7,1),98.43],[Date.UTC(2006,8,1),98.59],[Date.UTC(2006,9,1),98.75],[Date.UTC(2006,10,1),98.90],[Date.UTC(2006,11,1),99.06],[Date.UTC(2007,0,1),99.22],[Date.UTC(2007,1,1),99.37],[Date.UTC(2007,2,1),99.53],[Date.UTC(2007,3,1),99.69],[Date.UTC(2007,4,1),99.84],[Date.UTC(2007,5,1),100.00],[Date.UTC(2007,6,1),99.69],[Date.UTC(2007,7,1),99.39],[Date.UTC(2007,8,1),99.08],[Date.UTC(2007,9,1),98.77],[Date.UTC(2007,10,1),98.47],[Date.UTC(2007,11,1),98.16],[Date.UTC(2008,0,1),97.85],[Date.UTC(2008,1,1),97.55],[Date.UTC(2008,2,1),97.24],[Date.UTC(2008,3,1),96.93],[Date.UTC(2008,4,1),96.63],[Date.UTC(2008,5,1),96.32],[Date.UTC(2008,6,1),95.95],[Date.UTC(2008,7,1),95.59],[Date.UTC(2008,8,1),95.23],[Date.UTC(2008,9,1),94.86],[Date.UTC(2008,10,1),94.50],[Date.UTC(2008,11,1),94.14],[Date.UTC(2009,0,1),93.77],[Date.UTC(2009,1,1),93.41],[Date.UTC(2009,2,1),93.05],[Date.UTC(2009,3,1),92.68],[Date.UTC(2009,4,1),92.32],[Date.UTC(2009,5,1),91.96],[Date.UTC(2009,6,1),92.02],[Date.UTC(2009,7,1),92.08],[Date.UTC(2009,8,1),92.13],[Date.UTC(2009,9,1),92.19],[Date.UTC(2009,10,1),92.25],[Date.UTC(2009,11,1),92.31],[Date.UTC(2010,0,1),92.37],[Date.UTC(2010,1,1),92.43],[Date.UTC(2010,2,1),92.49],[Date.UTC(2010,3,1),92.55],[Date.UTC(2010,4,1),92.60],[Date.UTC(2010,5,1),92.66],[Date.UTC(2010,6,1),92.76],[Date.UTC(2010,7,1),92.86],[Date.UTC(2010,8,1),92.95],[Date.UTC(2010,9,1),93.05],[Date.UTC(2010,10,1),93.14],[Date.UTC(2010,11,1),93.24],[Date.UTC(2011,0,1),93.34],[Date.UTC(2011,1,1),93.43],[Date.UTC(2011,2,1),93.53],[Date.UTC(2011,3,1),93.63],[Date.UTC(2011,4,1),93.72],[Date.UTC(2011,5,1),93.82],[Date.UTC(2011,6,1),94.01],[Date.UTC(2011,7,1),94.20],[Date.UTC(2011,8,1),94.39],[Date.UTC(2011,9,1),94.58],[Date.UTC(2011,10,1),94.78],[Date.UTC(2011,11,1),94.97],[Date.UTC(2012,0,1),95.16],[Date.UTC(2012,1,1),95.35],[Date.UTC(2012,2,1),95.54],[Date.UTC(2012,3,1),95.73],[Date.UTC(2012,4,1),95.93],[Date.UTC(2012,5,1),96.12],[Date.UTC(2012,6,1),96.25],[Date.UTC(2012,7,1),96.38],[Date.UTC(2012,8,1),96.51],[Date.UTC(2012,9,1),96.65],[Date.UTC(2012,10,1),96.78],[Date.UTC(2012,11,1),96.91],[Date.UTC(2013,0,1),97.04],[Date.UTC(2013,1,1),97.17],[Date.UTC(2013,2,1),97.31],[Date.UTC(2013,3,1),97.44],[Date.UTC(2013,4,1),97.57],[Date.UTC(2013,5,1),97.70],[Date.UTC(2013,6,1),97.95],[Date.UTC(2013,7,1),98.19],[Date.UTC(2013,8,1),98.43],[Date.UTC(2013,9,1),98.68],[Date.UTC(2013,10,1),98.92],[Date.UTC(2013,11,1),99.16],[Date.UTC(2014,0,1),99.40],[Date.UTC(2014,1,1),99.65],[Date.UTC(2014,2,1),99.89],[Date.UTC(2014,3,1),100.13],[Date.UTC(2014,4,1),100.38],[Date.UTC(2014,5,1),100.62],[Date.UTC(2014,6,1),100.82],[Date.UTC(2014,7,1),101.01],[Date.UTC(2014,8,1),101.21],[Date.UTC(2014,9,1),101.41],[Date.UTC(2014,10,1),101.61],[Date.UTC(2014,11,1),101.80],[Date.UTC(2015,0,1),102.00],[Date.UTC(2015,1,1),102.20],[Date.UTC(2015,2,1),102.39],[Date.UTC(2015,3,1),102.59],[Date.UTC(2015,4,1),102.79],[Date.UTC(2015,5,1),102.98],[Date.UTC(2015,6,1),103.07],[Date.UTC(2015,7,1),103.16],[Date.UTC(2015,8,1),103.24],[Date.UTC(2015,9,1),103.33],[Date.UTC(2015,10,1),103.42],[Date.UTC(2015,11,1),103.50],[Date.UTC(2016,0,1),103.59],[Date.UTC(2016,1,1),103.68],[Date.UTC(2016,2,1),103.76],[Date.UTC(2016,3,1),103.85],[Date.UTC(2016,4,1),103.94],[Date.UTC(2016,5,1),104.02]]
    },{
        index: 1,
        zIndex: 1,
        legendIndex: 1,
        name: 'Ohio',
        dataname: 'ohgdp',
        legendname: 'Ohio',
        tooltipname: 'Ohio',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2006,5,1),100.35],[Date.UTC(2006,6,1),100.32],[Date.UTC(2006,7,1),100.29],[Date.UTC(2006,8,1),100.26],[Date.UTC(2006,9,1),100.23],[Date.UTC(2006,10,1),100.20],[Date.UTC(2006,11,1),100.18],[Date.UTC(2007,0,1),100.15],[Date.UTC(2007,1,1),100.12],[Date.UTC(2007,2,1),100.09],[Date.UTC(2007,3,1),100.06],[Date.UTC(2007,4,1),100.03],[Date.UTC(2007,5,1),100.00],[Date.UTC(2007,6,1),99.68],[Date.UTC(2007,7,1),99.36],[Date.UTC(2007,8,1),99.04],[Date.UTC(2007,9,1),98.72],[Date.UTC(2007,10,1),98.40],[Date.UTC(2007,11,1),98.08],[Date.UTC(2008,0,1),97.75],[Date.UTC(2008,1,1),97.43],[Date.UTC(2008,2,1),97.11],[Date.UTC(2008,3,1),96.79],[Date.UTC(2008,4,1),96.47],[Date.UTC(2008,5,1),96.15],[Date.UTC(2008,6,1),95.95],[Date.UTC(2008,7,1),95.76],[Date.UTC(2008,8,1),95.56],[Date.UTC(2008,9,1),95.36],[Date.UTC(2008,10,1),95.17],[Date.UTC(2008,11,1),94.97],[Date.UTC(2009,0,1),94.77],[Date.UTC(2009,1,1),94.58],[Date.UTC(2009,2,1),94.38],[Date.UTC(2009,3,1),94.18],[Date.UTC(2009,4,1),93.99],[Date.UTC(2009,5,1),93.79],[Date.UTC(2009,6,1),93.97],[Date.UTC(2009,7,1),94.15],[Date.UTC(2009,8,1),94.33],[Date.UTC(2009,9,1),94.51],[Date.UTC(2009,10,1),94.69],[Date.UTC(2009,11,1),94.87],[Date.UTC(2010,0,1),95.04],[Date.UTC(2010,1,1),95.22],[Date.UTC(2010,2,1),95.40],[Date.UTC(2010,3,1),95.58],[Date.UTC(2010,4,1),95.76],[Date.UTC(2010,5,1),95.94],[Date.UTC(2010,6,1),96.15],[Date.UTC(2010,7,1),96.36],[Date.UTC(2010,8,1),96.58],[Date.UTC(2010,9,1),96.79],[Date.UTC(2010,10,1),97.00],[Date.UTC(2010,11,1),97.21],[Date.UTC(2011,0,1),97.42],[Date.UTC(2011,1,1),97.63],[Date.UTC(2011,2,1),97.85],[Date.UTC(2011,3,1),98.06],[Date.UTC(2011,4,1),98.27],[Date.UTC(2011,5,1),98.48],[Date.UTC(2011,6,1),98.64],[Date.UTC(2011,7,1),98.81],[Date.UTC(2011,8,1),98.97],[Date.UTC(2011,9,1),99.13],[Date.UTC(2011,10,1),99.29],[Date.UTC(2011,11,1),99.45],[Date.UTC(2012,0,1),99.61],[Date.UTC(2012,1,1),99.77],[Date.UTC(2012,2,1),99.93],[Date.UTC(2012,3,1),100.10],[Date.UTC(2012,4,1),100.26],[Date.UTC(2012,5,1),100.42],[Date.UTC(2012,6,1),100.50],[Date.UTC(2012,7,1),100.58],[Date.UTC(2012,8,1),100.66],[Date.UTC(2012,9,1),100.74],[Date.UTC(2012,10,1),100.82],[Date.UTC(2012,11,1),100.89],[Date.UTC(2013,0,1),100.97],[Date.UTC(2013,1,1),101.05],[Date.UTC(2013,2,1),101.13],[Date.UTC(2013,3,1),101.21],[Date.UTC(2013,4,1),101.29],[Date.UTC(2013,5,1),101.37],[Date.UTC(2013,6,1),101.67],[Date.UTC(2013,7,1),101.96],[Date.UTC(2013,8,1),102.26],[Date.UTC(2013,9,1),102.56],[Date.UTC(2013,10,1),102.85],[Date.UTC(2013,11,1),103.15],[Date.UTC(2014,0,1),103.44],[Date.UTC(2014,1,1),103.74],[Date.UTC(2014,2,1),104.04],[Date.UTC(2014,3,1),104.33],[Date.UTC(2014,4,1),104.63],[Date.UTC(2014,5,1),104.93],[Date.UTC(2014,6,1),105.14],[Date.UTC(2014,7,1),105.36],[Date.UTC(2014,8,1),105.57],[Date.UTC(2014,9,1),105.79],[Date.UTC(2014,10,1),106.00],[Date.UTC(2014,11,1),106.22],[Date.UTC(2015,0,1),106.44],[Date.UTC(2015,1,1),106.65],[Date.UTC(2015,2,1),106.87],[Date.UTC(2015,3,1),107.08],[Date.UTC(2015,4,1),107.30],[Date.UTC(2015,5,1),107.52],[Date.UTC(2015,6,1),107.58],[Date.UTC(2015,7,1),107.64],[Date.UTC(2015,8,1),107.71],[Date.UTC(2015,9,1),107.77],[Date.UTC(2015,10,1),107.83],[Date.UTC(2015,11,1),107.90],[Date.UTC(2016,0,1),107.96],[Date.UTC(2016,1,1),108.02],[Date.UTC(2016,2,1),108.09],[Date.UTC(2016,3,1),108.15],[Date.UTC(2016,4,1),108.22],[Date.UTC(2016,5,1),108.28]]
    },{
        index: 2,
        zIndex: 0,
        legendIndex: 2,
        name: 'United States',
        dataname: 'usgdp',
        legendname: 'United States',
        tooltipname: 'US',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2006,5,1),99.38],[Date.UTC(2006,6,1),99.43],[Date.UTC(2006,7,1),99.48],[Date.UTC(2006,8,1),99.53],[Date.UTC(2006,9,1),99.58],[Date.UTC(2006,10,1),99.64],[Date.UTC(2006,11,1),99.69],[Date.UTC(2007,0,1),99.74],[Date.UTC(2007,1,1),99.79],[Date.UTC(2007,2,1),99.84],[Date.UTC(2007,3,1),99.90],[Date.UTC(2007,4,1),99.95],[Date.UTC(2007,5,1),100.00],[Date.UTC(2007,6,1),99.75],[Date.UTC(2007,7,1),99.49],[Date.UTC(2007,8,1),99.24],[Date.UTC(2007,9,1),98.99],[Date.UTC(2007,10,1),98.73],[Date.UTC(2007,11,1),98.48],[Date.UTC(2008,0,1),98.22],[Date.UTC(2008,1,1),97.97],[Date.UTC(2008,2,1),97.72],[Date.UTC(2008,3,1),97.46],[Date.UTC(2008,4,1),97.21],[Date.UTC(2008,5,1),96.96],[Date.UTC(2008,6,1),96.75],[Date.UTC(2008,7,1),96.54],[Date.UTC(2008,8,1),96.33],[Date.UTC(2008,9,1),96.12],[Date.UTC(2008,10,1),95.91],[Date.UTC(2008,11,1),95.69],[Date.UTC(2009,0,1),95.48],[Date.UTC(2009,1,1),95.27],[Date.UTC(2009,2,1),95.06],[Date.UTC(2009,3,1),94.85],[Date.UTC(2009,4,1),94.64],[Date.UTC(2009,5,1),94.43],[Date.UTC(2009,6,1),94.53],[Date.UTC(2009,7,1),94.63],[Date.UTC(2009,8,1),94.73],[Date.UTC(2009,9,1),94.82],[Date.UTC(2009,10,1),94.92],[Date.UTC(2009,11,1),95.02],[Date.UTC(2010,0,1),95.12],[Date.UTC(2010,1,1),95.22],[Date.UTC(2010,2,1),95.32],[Date.UTC(2010,3,1),95.41],[Date.UTC(2010,4,1),95.51],[Date.UTC(2010,5,1),95.61],[Date.UTC(2010,6,1),95.59],[Date.UTC(2010,7,1),95.57],[Date.UTC(2010,8,1),95.55],[Date.UTC(2010,9,1),95.53],[Date.UTC(2010,10,1),95.51],[Date.UTC(2010,11,1),95.50],[Date.UTC(2011,0,1),95.48],[Date.UTC(2011,1,1),95.46],[Date.UTC(2011,2,1),95.44],[Date.UTC(2011,3,1),95.42],[Date.UTC(2011,4,1),95.40],[Date.UTC(2011,5,1),95.38],[Date.UTC(2011,6,1),95.48],[Date.UTC(2011,7,1),95.58],[Date.UTC(2011,8,1),95.68],[Date.UTC(2011,9,1),95.78],[Date.UTC(2011,10,1),95.88],[Date.UTC(2011,11,1),95.98],[Date.UTC(2012,0,1),96.08],[Date.UTC(2012,1,1),96.17],[Date.UTC(2012,2,1),96.27],[Date.UTC(2012,3,1),96.37],[Date.UTC(2012,4,1),96.47],[Date.UTC(2012,5,1),96.57],[Date.UTC(2012,6,1),96.66],[Date.UTC(2012,7,1),96.75],[Date.UTC(2012,8,1),96.84],[Date.UTC(2012,9,1),96.93],[Date.UTC(2012,10,1),97.02],[Date.UTC(2012,11,1),97.11],[Date.UTC(2013,0,1),97.21],[Date.UTC(2013,1,1),97.30],[Date.UTC(2013,2,1),97.39],[Date.UTC(2013,3,1),97.48],[Date.UTC(2013,4,1),97.57],[Date.UTC(2013,5,1),97.66],[Date.UTC(2013,6,1),97.82],[Date.UTC(2013,7,1),97.98],[Date.UTC(2013,8,1),98.15],[Date.UTC(2013,9,1),98.31],[Date.UTC(2013,10,1),98.47],[Date.UTC(2013,11,1),98.63],[Date.UTC(2014,0,1),98.80],[Date.UTC(2014,1,1),98.96],[Date.UTC(2014,2,1),99.12],[Date.UTC(2014,3,1),99.29],[Date.UTC(2014,4,1),99.45],[Date.UTC(2014,5,1),99.61],[Date.UTC(2014,6,1),99.87],[Date.UTC(2014,7,1),100.13],[Date.UTC(2014,8,1),100.38],[Date.UTC(2014,9,1),100.64],[Date.UTC(2014,10,1),100.90],[Date.UTC(2014,11,1),101.16],[Date.UTC(2015,0,1),101.42],[Date.UTC(2015,1,1),101.67],[Date.UTC(2015,2,1),101.93],[Date.UTC(2015,3,1),102.19],[Date.UTC(2015,4,1),102.45],[Date.UTC(2015,5,1),102.71],[Date.UTC(2015,6,1),102.77],[Date.UTC(2015,7,1),102.84],[Date.UTC(2015,8,1),102.90],[Date.UTC(2015,9,1),102.97],[Date.UTC(2015,10,1),103.04],[Date.UTC(2015,11,1),103.10],[Date.UTC(2016,0,1),103.17],[Date.UTC(2016,1,1),103.23],[Date.UTC(2016,2,1),103.30],[Date.UTC(2016,3,1),103.37],[Date.UTC(2016,4,1),103.43],[Date.UTC(2016,5,1),103.50]]
    }]
};