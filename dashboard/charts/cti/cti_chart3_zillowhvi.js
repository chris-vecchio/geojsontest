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
        text: 'Housing Prices',
        align: 'left',
        margin: 5,
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'rgba(85,85,85,1)'
        }
    },
    credits: {
        text: "Source: Zillow.com Research/Haver Analytics",
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
            text: 'Year-over-year percent change',
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
        min: -10,
        max: 10,
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
        tickPositions: [Date.UTC(2008,0,1),Date.UTC(2010,0,1),Date.UTC(2012,0,1),Date.UTC(2014,0,1),Date.UTC(2016,0,1),Date.UTC(2018,0,1)],
        plotBands: [{
            from: Date.UTC(2008,0,1),
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
        name: 'Cincinnati',
        dataname: 'ctizhv',
        legendname: 'Cincinnati',
        tooltipname: 'Cincinnati',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2008,0,1),-2.81],[Date.UTC(2008,1,1),-3.01],[Date.UTC(2008,2,1),-3.15],[Date.UTC(2008,3,1),-3.29],[Date.UTC(2008,4,1),-3.43],[Date.UTC(2008,5,1),-3.58],[Date.UTC(2008,6,1),-3.73],[Date.UTC(2008,7,1),-3.82],[Date.UTC(2008,8,1),-3.90],[Date.UTC(2008,9,1),-3.98],[Date.UTC(2008,10,1),-4.06],[Date.UTC(2008,11,1),-4.21],[Date.UTC(2009,0,1),-4.30],[Date.UTC(2009,1,1),-4.52],[Date.UTC(2009,2,1),-4.60],[Date.UTC(2009,3,1),-4.68],[Date.UTC(2009,4,1),-4.77],[Date.UTC(2009,5,1),-4.86],[Date.UTC(2009,6,1),-4.81],[Date.UTC(2009,7,1),-4.69],[Date.UTC(2009,8,1),-4.57],[Date.UTC(2009,9,1),-4.29],[Date.UTC(2009,10,1),-3.94],[Date.UTC(2009,11,1),-3.52],[Date.UTC(2010,0,1),-3.16],[Date.UTC(2010,1,1),-2.73],[Date.UTC(2010,2,1),-2.45],[Date.UTC(2010,3,1),-2.38],[Date.UTC(2010,4,1),-1.94],[Date.UTC(2010,5,1),-1.28],[Date.UTC(2010,6,1),-0.98],[Date.UTC(2010,7,1),-0.91],[Date.UTC(2010,8,1),-0.84],[Date.UTC(2010,9,1),-1.06],[Date.UTC(2010,10,1),-1.75],[Date.UTC(2010,11,1),-2.43],[Date.UTC(2011,0,1),-2.81],[Date.UTC(2011,1,1),-3.04],[Date.UTC(2011,2,1),-3.50],[Date.UTC(2011,3,1),-3.96],[Date.UTC(2011,4,1),-4.34],[Date.UTC(2011,5,1),-4.64],[Date.UTC(2011,6,1),-4.49],[Date.UTC(2011,7,1),-4.13],[Date.UTC(2011,8,1),-3.91],[Date.UTC(2011,9,1),-3.61],[Date.UTC(2011,10,1),-2.86],[Date.UTC(2011,11,1),-2.18],[Date.UTC(2012,0,1),-1.64],[Date.UTC(2012,1,1),-1.33],[Date.UTC(2012,2,1),-0.79],[Date.UTC(2012,3,1),-0.08],[Date.UTC(2012,4,1),0.32],[Date.UTC(2012,5,1),0.32],[Date.UTC(2012,6,1),0.24],[Date.UTC(2012,7,1),0.16],[Date.UTC(2012,8,1),0.24],[Date.UTC(2012,9,1),0.08],[Date.UTC(2012,10,1),-0.24],[Date.UTC(2012,11,1),-0.32],[Date.UTC(2013,0,1),-0.40],[Date.UTC(2013,1,1),-0.48],[Date.UTC(2013,2,1),-0.40],[Date.UTC(2013,3,1),0.00],[Date.UTC(2013,4,1),0.24],[Date.UTC(2013,5,1),0.64],[Date.UTC(2013,6,1),0.80],[Date.UTC(2013,7,1),0.80],[Date.UTC(2013,8,1),0.79],[Date.UTC(2013,9,1),1.27],[Date.UTC(2013,10,1),1.76],[Date.UTC(2013,11,1),2.00],[Date.UTC(2014,0,1),2.15],[Date.UTC(2014,1,1),2.23],[Date.UTC(2014,2,1),2.23],[Date.UTC(2014,3,1),1.90],[Date.UTC(2014,4,1),1.90],[Date.UTC(2014,5,1),1.82],[Date.UTC(2014,6,1),1.97],[Date.UTC(2014,7,1),2.05],[Date.UTC(2014,8,1),2.05],[Date.UTC(2014,9,1),2.12],[Date.UTC(2014,10,1),2.28],[Date.UTC(2014,11,1),2.27],[Date.UTC(2015,0,1),2.11],[Date.UTC(2015,1,1),2.11],[Date.UTC(2015,2,1),2.10],[Date.UTC(2015,3,1),2.41],[Date.UTC(2015,4,1),2.72],[Date.UTC(2015,5,1),3.18],[Date.UTC(2015,6,1),3.64],[Date.UTC(2015,7,1),4.41],[Date.UTC(2015,8,1),5.02],[Date.UTC(2015,9,1),5.24],[Date.UTC(2015,10,1),5.22],[Date.UTC(2015,11,1),5.44],[Date.UTC(2016,0,1),5.74],[Date.UTC(2016,1,1),5.89],[Date.UTC(2016,2,1),5.95],[Date.UTC(2016,3,1),6.01],[Date.UTC(2016,4,1),6.13],[Date.UTC(2016,5,1),6.09],[Date.UTC(2016,6,1),5.90],[Date.UTC(2016,7,1),5.78],[Date.UTC(2016,8,1),5.74],[Date.UTC(2016,9,1),5.78],[Date.UTC(2016,10,1),6.05],[Date.UTC(2016,11,1),6.10],[Date.UTC(2017,0,1),6.08],[Date.UTC(2017,1,1),6.43],[Date.UTC(2017,2,1),6.99],[Date.UTC(2017,3,1),7.32],[Date.UTC(2017,4,1),7.20],[Date.UTC(2017,5,1),7.16],[Date.UTC(2017,6,1),7.26],[Date.UTC(2017,7,1),7.07],[Date.UTC(2017,8,1),6.89],[Date.UTC(2017,9,1),6.78],[Date.UTC(2017,10,1),6.33],[Date.UTC(2017,11,1),6.02],[Date.UTC(2018,0,1),5.93],[Date.UTC(2018,1,1),5.70],[Date.UTC(2018,2,1),5.39],[Date.UTC(2018,3,1),5.08]]
    },{
        index: 1,
        zIndex: 1,
        legendIndex: 1,
        name: 'Ohio',
        dataname: 'inzhv',
        legendname: 'Ohio',
        tooltipname: 'Ohio',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2008,0,1),0.25],[Date.UTC(2008,1,1),0.17],[Date.UTC(2008,2,1),0.00],[Date.UTC(2008,3,1),-0.08],[Date.UTC(2008,4,1),-0.25],[Date.UTC(2008,5,1),-0.51],[Date.UTC(2008,6,1),-0.85],[Date.UTC(2008,7,1),-1.11],[Date.UTC(2008,8,1),-1.70],[Date.UTC(2008,9,1),-2.30],[Date.UTC(2008,10,1),-2.89],[Date.UTC(2008,11,1),-3.48],[Date.UTC(2009,0,1),-3.98],[Date.UTC(2009,1,1),-4.41],[Date.UTC(2009,2,1),-4.75],[Date.UTC(2009,3,1),-5.09],[Date.UTC(2009,4,1),-5.44],[Date.UTC(2009,5,1),-5.72],[Date.UTC(2009,6,1),-5.83],[Date.UTC(2009,7,1),-5.85],[Date.UTC(2009,8,1),-5.63],[Date.UTC(2009,9,1),-5.57],[Date.UTC(2009,10,1),-5.34],[Date.UTC(2009,11,1),-5.10],[Date.UTC(2010,0,1),-4.77],[Date.UTC(2010,1,1),-4.34],[Date.UTC(2010,2,1),-4.10],[Date.UTC(2010,3,1),-3.94],[Date.UTC(2010,4,1),-3.24],[Date.UTC(2010,5,1),-2.35],[Date.UTC(2010,6,1),-1.73],[Date.UTC(2010,7,1),-1.28],[Date.UTC(2010,8,1),-0.73],[Date.UTC(2010,9,1),-0.18],[Date.UTC(2010,10,1),0.00],[Date.UTC(2010,11,1),0.00],[Date.UTC(2011,0,1),-0.09],[Date.UTC(2011,1,1),-0.37],[Date.UTC(2011,2,1),-0.56],[Date.UTC(2011,3,1),-0.65],[Date.UTC(2011,4,1),-1.39],[Date.UTC(2011,5,1),-2.13],[Date.UTC(2011,6,1),-2.50],[Date.UTC(2011,7,1),-2.78],[Date.UTC(2011,8,1),-3.14],[Date.UTC(2011,9,1),-3.32],[Date.UTC(2011,10,1),-3.23],[Date.UTC(2011,11,1),-3.43],[Date.UTC(2012,0,1),-3.53],[Date.UTC(2012,1,1),-3.26],[Date.UTC(2012,2,1),-2.71],[Date.UTC(2012,3,1),-2.34],[Date.UTC(2012,4,1),-1.70],[Date.UTC(2012,5,1),-1.04],[Date.UTC(2012,6,1),-0.47],[Date.UTC(2012,7,1),0.00],[Date.UTC(2012,8,1),0.38],[Date.UTC(2012,9,1),0.48],[Date.UTC(2012,10,1),0.48],[Date.UTC(2012,11,1),1.05],[Date.UTC(2013,0,1),1.35],[Date.UTC(2013,1,1),1.06],[Date.UTC(2013,2,1),0.58],[Date.UTC(2013,3,1),0.48],[Date.UTC(2013,4,1),0.38],[Date.UTC(2013,5,1),0.00],[Date.UTC(2013,6,1),-0.38],[Date.UTC(2013,7,1),-0.57],[Date.UTC(2013,8,1),-0.86],[Date.UTC(2013,9,1),-0.95],[Date.UTC(2013,10,1),-0.95],[Date.UTC(2013,11,1),-0.95],[Date.UTC(2014,0,1),-0.85],[Date.UTC(2014,1,1),-0.48],[Date.UTC(2014,2,1),0.00],[Date.UTC(2014,3,1),0.29],[Date.UTC(2014,4,1),0.57],[Date.UTC(2014,5,1),1.34],[Date.UTC(2014,6,1),1.82],[Date.UTC(2014,7,1),2.01],[Date.UTC(2014,8,1),2.30],[Date.UTC(2014,9,1),2.88],[Date.UTC(2014,10,1),3.26],[Date.UTC(2014,11,1),3.45],[Date.UTC(2015,0,1),3.73],[Date.UTC(2015,1,1),3.82],[Date.UTC(2015,2,1),3.82],[Date.UTC(2015,3,1),3.90],[Date.UTC(2015,4,1),4.08],[Date.UTC(2015,5,1),3.87],[Date.UTC(2015,6,1),3.86],[Date.UTC(2015,7,1),4.13],[Date.UTC(2015,8,1),4.31],[Date.UTC(2015,9,1),4.10],[Date.UTC(2015,10,1),3.81],[Date.UTC(2015,11,1),3.61],[Date.UTC(2016,0,1),3.78],[Date.UTC(2016,1,1),4.14],[Date.UTC(2016,2,1),4.50],[Date.UTC(2016,3,1),4.67],[Date.UTC(2016,4,1),4.93],[Date.UTC(2016,5,1),5.45],[Date.UTC(2016,6,1),5.80],[Date.UTC(2016,7,1),5.95],[Date.UTC(2016,8,1),6.29],[Date.UTC(2016,9,1),6.63],[Date.UTC(2016,10,1),6.89],[Date.UTC(2016,11,1),7.06],[Date.UTC(2017,0,1),7.11],[Date.UTC(2017,1,1),7.07],[Date.UTC(2017,2,1),7.12],[Date.UTC(2017,3,1),7.44],[Date.UTC(2017,4,1),7.39],[Date.UTC(2017,5,1),6.90],[Date.UTC(2017,6,1),6.59],[Date.UTC(2017,7,1),6.64],[Date.UTC(2017,8,1),6.34],[Date.UTC(2017,9,1),6.05],[Date.UTC(2017,10,1),6.45],[Date.UTC(2017,11,1),6.76],[Date.UTC(2018,0,1),6.47],[Date.UTC(2018,1,1),6.52],[Date.UTC(2018,2,1),6.81],[Date.UTC(2018,3,1),6.85]]
    },{
        index: 2,
        zIndex: 0,
        legendIndex: 2,
        name: 'United States',
        dataname: 'uszhv',
        legendname: 'United States',
        tooltipname: 'US',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2008,0,1),-3.20],[Date.UTC(2008,1,1),-4.00],[Date.UTC(2008,2,1),-4.85],[Date.UTC(2008,3,1),-5.79],[Date.UTC(2008,4,1),-6.73],[Date.UTC(2008,5,1),-7.45],[Date.UTC(2008,6,1),-7.93],[Date.UTC(2008,7,1),-8.42],[Date.UTC(2008,8,1),-8.91],[Date.UTC(2008,9,1),-9.25],[Date.UTC(2008,10,1),-9.56],[Date.UTC(2008,11,1),-9.76],[Date.UTC(2009,0,1),-9.83],[Date.UTC(2009,1,1),-9.85],[Date.UTC(2009,2,1),-9.87],[Date.UTC(2009,3,1),-9.90],[Date.UTC(2009,4,1),-9.89],[Date.UTC(2009,5,1),-9.89],[Date.UTC(2009,6,1),-9.65],[Date.UTC(2009,7,1),-9.36],[Date.UTC(2009,8,1),-8.89],[Date.UTC(2009,9,1),-8.46],[Date.UTC(2009,10,1),-7.85],[Date.UTC(2009,11,1),-7.23],[Date.UTC(2010,0,1),-6.48],[Date.UTC(2010,1,1),-5.66],[Date.UTC(2010,2,1),-5.13],[Date.UTC(2010,3,1),-4.82],[Date.UTC(2010,4,1),-4.21],[Date.UTC(2010,5,1),-3.24],[Date.UTC(2010,6,1),-2.90],[Date.UTC(2010,7,1),-2.79],[Date.UTC(2010,8,1),-2.93],[Date.UTC(2010,9,1),-3.12],[Date.UTC(2010,10,1),-3.43],[Date.UTC(2010,11,1),-3.87],[Date.UTC(2011,0,1),-4.72],[Date.UTC(2011,1,1),-5.45],[Date.UTC(2011,2,1),-5.71],[Date.UTC(2011,3,1),-5.62],[Date.UTC(2011,4,1),-5.70],[Date.UTC(2011,5,1),-6.07],[Date.UTC(2011,6,1),-6.22],[Date.UTC(2011,7,1),-6.06],[Date.UTC(2011,8,1),-5.84],[Date.UTC(2011,9,1),-5.50],[Date.UTC(2011,10,1),-5.14],[Date.UTC(2011,11,1),-4.79],[Date.UTC(2012,0,1),-4.19],[Date.UTC(2012,1,1),-3.63],[Date.UTC(2012,2,1),-3.06],[Date.UTC(2012,3,1),-2.42],[Date.UTC(2012,4,1),-1.77],[Date.UTC(2012,5,1),-1.12],[Date.UTC(2012,6,1),-0.33],[Date.UTC(2012,7,1),0.33],[Date.UTC(2012,8,1),1.00],[Date.UTC(2012,9,1),1.54],[Date.UTC(2012,10,1),2.01],[Date.UTC(2012,11,1),2.62],[Date.UTC(2013,0,1),3.29],[Date.UTC(2013,1,1),3.70],[Date.UTC(2013,2,1),4.23],[Date.UTC(2013,3,1),4.69],[Date.UTC(2013,4,1),5.02],[Date.UTC(2013,5,1),5.54],[Date.UTC(2013,6,1),5.98],[Date.UTC(2013,7,1),6.30],[Date.UTC(2013,8,1),6.61],[Date.UTC(2013,9,1),6.78],[Date.UTC(2013,10,1),6.89],[Date.UTC(2013,11,1),6.86],[Date.UTC(2014,0,1),6.96],[Date.UTC(2014,1,1),7.00],[Date.UTC(2014,2,1),6.77],[Date.UTC(2014,3,1),6.60],[Date.UTC(2014,4,1),6.50],[Date.UTC(2014,5,1),6.13],[Date.UTC(2014,6,1),5.90],[Date.UTC(2014,7,1),5.74],[Date.UTC(2014,8,1),5.45],[Date.UTC(2014,9,1),5.24],[Date.UTC(2014,10,1),5.10],[Date.UTC(2014,11,1),5.02],[Date.UTC(2015,0,1),4.87],[Date.UTC(2015,1,1),4.91],[Date.UTC(2015,2,1),4.83],[Date.UTC(2015,3,1),4.75],[Date.UTC(2015,4,1),4.84],[Date.UTC(2015,5,1),5.00],[Date.UTC(2015,6,1),5.04],[Date.UTC(2015,7,1),4.95],[Date.UTC(2015,8,1),5.05],[Date.UTC(2015,9,1),5.27],[Date.UTC(2015,10,1),5.43],[Date.UTC(2015,11,1),5.59],[Date.UTC(2016,0,1),5.63],[Date.UTC(2016,1,1),5.66],[Date.UTC(2016,2,1),5.82],[Date.UTC(2016,3,1),5.91],[Date.UTC(2016,4,1),5.99],[Date.UTC(2016,5,1),6.13],[Date.UTC(2016,6,1),6.20],[Date.UTC(2016,7,1),6.46],[Date.UTC(2016,8,1),6.60],[Date.UTC(2016,9,1),6.68],[Date.UTC(2016,10,1),6.76],[Date.UTC(2016,11,1),6.84],[Date.UTC(2017,0,1),6.97],[Date.UTC(2017,1,1),7.16],[Date.UTC(2017,2,1),7.24],[Date.UTC(2017,3,1),7.42],[Date.UTC(2017,4,1),7.48],[Date.UTC(2017,5,1),7.43],[Date.UTC(2017,6,1),7.38],[Date.UTC(2017,7,1),7.39],[Date.UTC(2017,8,1),7.45],[Date.UTC(2017,9,1),7.51],[Date.UTC(2017,10,1),7.68],[Date.UTC(2017,11,1),7.85],[Date.UTC(2018,0,1),7.80],[Date.UTC(2018,1,1),7.91],[Date.UTC(2018,2,1),8.53],[Date.UTC(2018,3,1),8.72]]
    }]
};