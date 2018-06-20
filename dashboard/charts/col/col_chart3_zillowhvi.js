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
        max: 15,
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
        name: 'Columbus',
        dataname: 'colzhv',
        legendname: 'Columbus',
        tooltipname: 'Columbus',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2008,0,1),-2.96],[Date.UTC(2008,1,1),-3.17],[Date.UTC(2008,2,1),-3.37],[Date.UTC(2008,3,1),-3.58],[Date.UTC(2008,4,1),-3.66],[Date.UTC(2008,5,1),-3.73],[Date.UTC(2008,6,1),-3.88],[Date.UTC(2008,7,1),-4.02],[Date.UTC(2008,8,1),-4.17],[Date.UTC(2008,9,1),-4.32],[Date.UTC(2008,10,1),-4.33],[Date.UTC(2008,11,1),-4.28],[Date.UTC(2009,0,1),-4.23],[Date.UTC(2009,1,1),-4.18],[Date.UTC(2009,2,1),-4.12],[Date.UTC(2009,3,1),-4.20],[Date.UTC(2009,4,1),-4.43],[Date.UTC(2009,5,1),-4.58],[Date.UTC(2009,6,1),-4.25],[Date.UTC(2009,7,1),-3.55],[Date.UTC(2009,8,1),-3.00],[Date.UTC(2009,9,1),-2.51],[Date.UTC(2009,10,1),-2.23],[Date.UTC(2009,11,1),-1.95],[Date.UTC(2010,0,1),-1.67],[Date.UTC(2010,1,1),-1.31],[Date.UTC(2010,2,1),-1.09],[Date.UTC(2010,3,1),-0.88],[Date.UTC(2010,4,1),-0.22],[Date.UTC(2010,5,1),0.37],[Date.UTC(2010,6,1),0.22],[Date.UTC(2010,7,1),-0.59],[Date.UTC(2010,8,1),-1.32],[Date.UTC(2010,9,1),-1.91],[Date.UTC(2010,10,1),-2.13],[Date.UTC(2010,11,1),-2.21],[Date.UTC(2011,0,1),-2.43],[Date.UTC(2011,1,1),-3.31],[Date.UTC(2011,2,1),-3.90],[Date.UTC(2011,3,1),-3.84],[Date.UTC(2011,4,1),-4.42],[Date.UTC(2011,5,1),-5.37],[Date.UTC(2011,6,1),-5.68],[Date.UTC(2011,7,1),-5.49],[Date.UTC(2011,8,1),-5.22],[Date.UTC(2011,9,1),-4.87],[Date.UTC(2011,10,1),-4.58],[Date.UTC(2011,11,1),-4.29],[Date.UTC(2012,0,1),-3.92],[Date.UTC(2012,1,1),-2.97],[Date.UTC(2012,2,1),-2.22],[Date.UTC(2012,3,1),-2.00],[Date.UTC(2012,4,1),-1.54],[Date.UTC(2012,5,1),-0.78],[Date.UTC(2012,6,1),-0.55],[Date.UTC(2012,7,1),-0.71],[Date.UTC(2012,8,1),-0.79],[Date.UTC(2012,9,1),-0.55],[Date.UTC(2012,10,1),-0.47],[Date.UTC(2012,11,1),-0.71],[Date.UTC(2013,0,1),-0.55],[Date.UTC(2013,1,1),-0.16],[Date.UTC(2013,2,1),0.47],[Date.UTC(2013,3,1),0.94],[Date.UTC(2013,4,1),1.49],[Date.UTC(2013,5,1),2.43],[Date.UTC(2013,6,1),3.77],[Date.UTC(2013,7,1),4.98],[Date.UTC(2013,8,1),6.02],[Date.UTC(2013,9,1),6.73],[Date.UTC(2013,10,1),7.44],[Date.UTC(2013,11,1),8.16],[Date.UTC(2014,0,1),8.29],[Date.UTC(2014,1,1),8.17],[Date.UTC(2014,2,1),7.72],[Date.UTC(2014,3,1),7.45],[Date.UTC(2014,4,1),7.64],[Date.UTC(2014,5,1),7.80],[Date.UTC(2014,6,1),7.88],[Date.UTC(2014,7,1),8.28],[Date.UTC(2014,8,1),8.37],[Date.UTC(2014,9,1),8.01],[Date.UTC(2014,10,1),7.66],[Date.UTC(2014,11,1),7.54],[Date.UTC(2015,0,1),7.73],[Date.UTC(2015,1,1),7.92],[Date.UTC(2015,2,1),8.11],[Date.UTC(2015,3,1),8.52],[Date.UTC(2015,4,1),8.60],[Date.UTC(2015,5,1),8.16],[Date.UTC(2015,6,1),7.58],[Date.UTC(2015,7,1),7.02],[Date.UTC(2015,8,1),6.76],[Date.UTC(2015,9,1),6.66],[Date.UTC(2015,10,1),6.29],[Date.UTC(2015,11,1),5.72],[Date.UTC(2016,0,1),5.15],[Date.UTC(2016,1,1),4.58],[Date.UTC(2016,2,1),4.29],[Date.UTC(2016,3,1),3.79],[Date.UTC(2016,4,1),3.23],[Date.UTC(2016,5,1),3.08],[Date.UTC(2016,6,1),3.13],[Date.UTC(2016,7,1),3.05],[Date.UTC(2016,8,1),2.97],[Date.UTC(2016,9,1),2.96],[Date.UTC(2016,10,1),2.96],[Date.UTC(2016,11,1),3.16],[Date.UTC(2017,0,1),3.54],[Date.UTC(2017,1,1),4.31],[Date.UTC(2017,2,1),5.01],[Date.UTC(2017,3,1),5.64],[Date.UTC(2017,4,1),6.20],[Date.UTC(2017,5,1),6.56],[Date.UTC(2017,6,1),6.58],[Date.UTC(2017,7,1),7.06],[Date.UTC(2017,8,1),7.28],[Date.UTC(2017,9,1),7.69],[Date.UTC(2017,10,1),8.94],[Date.UTC(2017,11,1),10.17],[Date.UTC(2018,0,1),10.63],[Date.UTC(2018,1,1),10.18],[Date.UTC(2018,2,1),9.72],[Date.UTC(2018,3,1),9.22]]
    },{
        index: 1,
        zIndex: 1,
        legendIndex: 1,
        name: 'Ohio',
        dataname: 'ohzhv',
        legendname: 'Ohio',
        tooltipname: 'Ohio',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2008,0,1),-3.69],[Date.UTC(2008,1,1),-4.10],[Date.UTC(2008,2,1),-4.43],[Date.UTC(2008,3,1),-4.76],[Date.UTC(2008,4,1),-5.09],[Date.UTC(2008,5,1),-5.35],[Date.UTC(2008,6,1),-5.53],[Date.UTC(2008,7,1),-5.63],[Date.UTC(2008,8,1),-5.73],[Date.UTC(2008,9,1),-5.76],[Date.UTC(2008,10,1),-5.62],[Date.UTC(2008,11,1),-5.48],[Date.UTC(2009,0,1),-5.34],[Date.UTC(2009,1,1),-5.11],[Date.UTC(2009,2,1),-4.97],[Date.UTC(2009,3,1),-4.83],[Date.UTC(2009,4,1),-4.68],[Date.UTC(2009,5,1),-4.62],[Date.UTC(2009,6,1),-4.48],[Date.UTC(2009,7,1),-4.24],[Date.UTC(2009,8,1),-4.00],[Date.UTC(2009,9,1),-3.75],[Date.UTC(2009,10,1),-3.59],[Date.UTC(2009,11,1),-3.34],[Date.UTC(2010,0,1),-3.00],[Date.UTC(2010,1,1),-2.74],[Date.UTC(2010,2,1),-2.48],[Date.UTC(2010,3,1),-2.40],[Date.UTC(2010,4,1),-2.14],[Date.UTC(2010,5,1),-1.44],[Date.UTC(2010,6,1),-1.17],[Date.UTC(2010,7,1),-1.08],[Date.UTC(2010,8,1),-1.18],[Date.UTC(2010,9,1),-1.45],[Date.UTC(2010,10,1),-2.00],[Date.UTC(2010,11,1),-2.54],[Date.UTC(2011,0,1),-3.27],[Date.UTC(2011,1,1),-4.00],[Date.UTC(2011,2,1),-4.55],[Date.UTC(2011,3,1),-4.65],[Date.UTC(2011,4,1),-4.93],[Date.UTC(2011,5,1),-5.46],[Date.UTC(2011,6,1),-5.74],[Date.UTC(2011,7,1),-5.75],[Date.UTC(2011,8,1),-5.68],[Date.UTC(2011,9,1),-5.43],[Date.UTC(2011,10,1),-5.09],[Date.UTC(2011,11,1),-4.57],[Date.UTC(2012,0,1),-3.85],[Date.UTC(2012,1,1),-3.12],[Date.UTC(2012,2,1),-2.29],[Date.UTC(2012,3,1),-1.72],[Date.UTC(2012,4,1),-1.44],[Date.UTC(2012,5,1),-1.25],[Date.UTC(2012,6,1),-0.97],[Date.UTC(2012,7,1),-0.87],[Date.UTC(2012,8,1),-0.68],[Date.UTC(2012,9,1),-0.39],[Date.UTC(2012,10,1),0.10],[Date.UTC(2012,11,1),0.49],[Date.UTC(2013,0,1),0.88],[Date.UTC(2013,1,1),1.17],[Date.UTC(2013,2,1),0.97],[Date.UTC(2013,3,1),0.88],[Date.UTC(2013,4,1),1.27],[Date.UTC(2013,5,1),1.76],[Date.UTC(2013,6,1),2.25],[Date.UTC(2013,7,1),2.64],[Date.UTC(2013,8,1),2.93],[Date.UTC(2013,9,1),3.13],[Date.UTC(2013,10,1),3.22],[Date.UTC(2013,11,1),3.01],[Date.UTC(2014,0,1),2.81],[Date.UTC(2014,1,1),2.80],[Date.UTC(2014,2,1),3.09],[Date.UTC(2014,3,1),3.28],[Date.UTC(2014,4,1),3.56],[Date.UTC(2014,5,1),3.84],[Date.UTC(2014,6,1),3.82],[Date.UTC(2014,7,1),3.81],[Date.UTC(2014,8,1),3.70],[Date.UTC(2014,9,1),3.79],[Date.UTC(2014,10,1),3.97],[Date.UTC(2014,11,1),4.06],[Date.UTC(2015,0,1),4.05],[Date.UTC(2015,1,1),4.23],[Date.UTC(2015,2,1),4.31],[Date.UTC(2015,3,1),4.20],[Date.UTC(2015,4,1),3.81],[Date.UTC(2015,5,1),3.69],[Date.UTC(2015,6,1),3.96],[Date.UTC(2015,7,1),4.13],[Date.UTC(2015,8,1),4.12],[Date.UTC(2015,9,1),4.01],[Date.UTC(2015,10,1),3.81],[Date.UTC(2015,11,1),3.99],[Date.UTC(2016,0,1),4.16],[Date.UTC(2016,1,1),3.96],[Date.UTC(2016,2,1),3.95],[Date.UTC(2016,3,1),4.30],[Date.UTC(2016,4,1),4.56],[Date.UTC(2016,5,1),4.63],[Date.UTC(2016,6,1),4.51],[Date.UTC(2016,7,1),4.67],[Date.UTC(2016,8,1),5.01],[Date.UTC(2016,9,1),5.18],[Date.UTC(2016,10,1),5.34],[Date.UTC(2016,11,1),5.32],[Date.UTC(2017,0,1),5.30],[Date.UTC(2017,1,1),5.63],[Date.UTC(2017,2,1),6.04],[Date.UTC(2017,3,1),6.27],[Date.UTC(2017,4,1),6.59],[Date.UTC(2017,5,1),6.72],[Date.UTC(2017,6,1),6.69],[Date.UTC(2017,7,1),6.65],[Date.UTC(2017,8,1),6.70],[Date.UTC(2017,9,1),6.76],[Date.UTC(2017,10,1),6.81],[Date.UTC(2017,11,1),6.95],[Date.UTC(2018,0,1),6.93],[Date.UTC(2018,1,1),6.64],[Date.UTC(2018,2,1),6.35],[Date.UTC(2018,3,1),5.82]]
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