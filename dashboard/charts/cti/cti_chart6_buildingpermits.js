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
        text: 'Housing Permits',
        align: 'left',
        margin: 5,
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'rgba(85,85,85,1)'
        }
    },
    credits: {
        text: "Source: Census Bureau",
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
            text: 'Index, 2007:M12=100<br><span style="font-size: 11px;">twelve-month moving average</span>',
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
        min: 40,
        max: 180,
        tickInterval: 20
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
        name: 'Cincinnati',
        dataname: 'ctipermits',
        legendname: 'Cincinnati',
        tooltipname: 'Cincinnati',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2007,0,1),174.77],[Date.UTC(2007,1,1),135.07],[Date.UTC(2007,2,1),130.33],[Date.UTC(2007,3,1),120.72],[Date.UTC(2007,4,1),115.51],[Date.UTC(2007,5,1),109.64],[Date.UTC(2007,6,1),106.73],[Date.UTC(2007,7,1),105.07],[Date.UTC(2007,8,1),102.32],[Date.UTC(2007,9,1),99.99],[Date.UTC(2007,10,1),99.27],[Date.UTC(2007,11,1),100.00],[Date.UTC(2008,0,1),92.26],[Date.UTC(2008,1,1),89.76],[Date.UTC(2008,2,1),84.92],[Date.UTC(2008,3,1),83.22],[Date.UTC(2008,4,1),81.52],[Date.UTC(2008,5,1),81.40],[Date.UTC(2008,6,1),79.28],[Date.UTC(2008,7,1),76.20],[Date.UTC(2008,8,1),73.95],[Date.UTC(2008,9,1),71.74],[Date.UTC(2008,10,1),67.11],[Date.UTC(2008,11,1),61.61],[Date.UTC(2009,0,1),58.14],[Date.UTC(2009,1,1),56.52],[Date.UTC(2009,2,1),54.57],[Date.UTC(2009,3,1),52.56],[Date.UTC(2009,4,1),49.72],[Date.UTC(2009,5,1),49.00],[Date.UTC(2009,6,1),48.65],[Date.UTC(2009,7,1),48.04],[Date.UTC(2009,8,1),47.65],[Date.UTC(2009,9,1),47.72],[Date.UTC(2009,10,1),48.82],[Date.UTC(2009,11,1),51.44],[Date.UTC(2010,0,1),52.98],[Date.UTC(2010,1,1),53.88],[Date.UTC(2010,2,1),55.40],[Date.UTC(2010,3,1),55.66],[Date.UTC(2010,4,1),56.02],[Date.UTC(2010,5,1),53.59],[Date.UTC(2010,6,1),51.58],[Date.UTC(2010,7,1),50.35],[Date.UTC(2010,8,1),51.00],[Date.UTC(2010,9,1),49.93],[Date.UTC(2010,10,1),49.27],[Date.UTC(2010,11,1),46.58],[Date.UTC(2011,0,1),45.31],[Date.UTC(2011,1,1),43.72],[Date.UTC(2011,2,1),42.73],[Date.UTC(2011,3,1),42.29],[Date.UTC(2011,4,1),42.52],[Date.UTC(2011,5,1),43.07],[Date.UTC(2011,6,1),44.26],[Date.UTC(2011,7,1),45.64],[Date.UTC(2011,8,1),45.83],[Date.UTC(2011,9,1),46.64],[Date.UTC(2011,10,1),46.86],[Date.UTC(2011,11,1),46.60],[Date.UTC(2012,0,1),46.38],[Date.UTC(2012,1,1),47.16],[Date.UTC(2012,2,1),46.54],[Date.UTC(2012,3,1),48.06],[Date.UTC(2012,4,1),47.41],[Date.UTC(2012,5,1),47.16],[Date.UTC(2012,6,1),46.35],[Date.UTC(2012,7,1),46.18],[Date.UTC(2012,8,1),44.14],[Date.UTC(2012,9,1),45.72],[Date.UTC(2012,10,1),46.80],[Date.UTC(2012,11,1),48.22],[Date.UTC(2013,0,1),49.59],[Date.UTC(2013,1,1),51.06],[Date.UTC(2013,2,1),53.56],[Date.UTC(2013,3,1),53.08],[Date.UTC(2013,4,1),56.90],[Date.UTC(2013,5,1),58.32],[Date.UTC(2013,6,1),60.93],[Date.UTC(2013,7,1),60.08],[Date.UTC(2013,8,1),64.11],[Date.UTC(2013,9,1),62.40],[Date.UTC(2013,10,1),62.23],[Date.UTC(2013,11,1),62.98],[Date.UTC(2014,0,1),63.66],[Date.UTC(2014,1,1),63.66],[Date.UTC(2014,2,1),64.35],[Date.UTC(2014,3,1),64.48],[Date.UTC(2014,4,1),62.03],[Date.UTC(2014,5,1),61.60],[Date.UTC(2014,6,1),61.90],[Date.UTC(2014,7,1),65.01],[Date.UTC(2014,8,1),62.97],[Date.UTC(2014,9,1),64.63],[Date.UTC(2014,10,1),65.35],[Date.UTC(2014,11,1),66.83],[Date.UTC(2015,0,1),65.61],[Date.UTC(2015,1,1),64.50],[Date.UTC(2015,2,1),62.35],[Date.UTC(2015,3,1),63.05],[Date.UTC(2015,4,1),63.70],[Date.UTC(2015,5,1),65.51],[Date.UTC(2015,6,1),64.85],[Date.UTC(2015,7,1),61.88],[Date.UTC(2015,8,1),66.84],[Date.UTC(2015,9,1),67.81],[Date.UTC(2015,10,1),70.32],[Date.UTC(2015,11,1),70.16],[Date.UTC(2016,0,1),72.07],[Date.UTC(2016,1,1),74.60],[Date.UTC(2016,2,1),76.58],[Date.UTC(2016,3,1),78.93],[Date.UTC(2016,4,1),82.05],[Date.UTC(2016,5,1),82.81],[Date.UTC(2016,6,1),82.63],[Date.UTC(2016,7,1),86.66],[Date.UTC(2016,8,1),84.74],[Date.UTC(2016,9,1),85.83],[Date.UTC(2016,10,1),84.48],[Date.UTC(2016,11,1),85.93],[Date.UTC(2017,0,1),88.77],[Date.UTC(2017,1,1),92.56],[Date.UTC(2017,2,1),94.89],[Date.UTC(2017,3,1),91.88],[Date.UTC(2017,4,1),88.99],[Date.UTC(2017,5,1),89.44],[Date.UTC(2017,6,1),92.76],[Date.UTC(2017,7,1),93.92],[Date.UTC(2017,8,1),91.92],[Date.UTC(2017,9,1),90.90],[Date.UTC(2017,10,1),92.95],[Date.UTC(2017,11,1),92.44],[Date.UTC(2018,0,1),92.65],[Date.UTC(2018,1,1),89.11],[Date.UTC(2018,2,1),89.08],[Date.UTC(2018,3,1),92.15],[Date.UTC(2018,4,1),94.51]]
    },{
        index: 1,
        zIndex: 1,
        legendIndex: 1,
        name: 'Ohio',
        dataname: 'inpermits',
        legendname: 'Ohio',
        tooltipname: 'Ohio',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2007,0,1),119.35],[Date.UTC(2007,1,1),108.09],[Date.UTC(2007,2,1),109.05],[Date.UTC(2007,3,1),109.01],[Date.UTC(2007,4,1),111.14],[Date.UTC(2007,5,1),110.26],[Date.UTC(2007,6,1),109.38],[Date.UTC(2007,7,1),107.53],[Date.UTC(2007,8,1),105.14],[Date.UTC(2007,9,1),103.70],[Date.UTC(2007,10,1),103.61],[Date.UTC(2007,11,1),100.00],[Date.UTC(2008,0,1),95.82],[Date.UTC(2008,1,1),95.36],[Date.UTC(2008,2,1),90.62],[Date.UTC(2008,3,1),87.93],[Date.UTC(2008,4,1),84.25],[Date.UTC(2008,5,1),82.86],[Date.UTC(2008,6,1),79.94],[Date.UTC(2008,7,1),78.33],[Date.UTC(2008,8,1),76.13],[Date.UTC(2008,9,1),73.45],[Date.UTC(2008,10,1),69.34],[Date.UTC(2008,11,1),68.54],[Date.UTC(2009,0,1),65.39],[Date.UTC(2009,1,1),61.82],[Date.UTC(2009,2,1),61.41],[Date.UTC(2009,3,1),59.11],[Date.UTC(2009,4,1),56.50],[Date.UTC(2009,5,1),53.82],[Date.UTC(2009,6,1),53.64],[Date.UTC(2009,7,1),51.78],[Date.UTC(2009,8,1),51.41],[Date.UTC(2009,9,1),51.19],[Date.UTC(2009,10,1),51.23],[Date.UTC(2009,11,1),51.71],[Date.UTC(2010,0,1),54.51],[Date.UTC(2010,1,1),55.33],[Date.UTC(2010,2,1),56.38],[Date.UTC(2010,3,1),57.40],[Date.UTC(2010,4,1),58.10],[Date.UTC(2010,5,1),57.34],[Date.UTC(2010,6,1),56.75],[Date.UTC(2010,7,1),55.96],[Date.UTC(2010,8,1),55.86],[Date.UTC(2010,9,1),55.21],[Date.UTC(2010,10,1),54.53],[Date.UTC(2010,11,1),53.41],[Date.UTC(2011,0,1),52.29],[Date.UTC(2011,1,1),51.08],[Date.UTC(2011,2,1),50.30],[Date.UTC(2011,3,1),48.88],[Date.UTC(2011,4,1),48.51],[Date.UTC(2011,5,1),48.54],[Date.UTC(2011,6,1),47.92],[Date.UTC(2011,7,1),50.15],[Date.UTC(2011,8,1),50.86],[Date.UTC(2011,9,1),50.09],[Date.UTC(2011,10,1),50.88],[Date.UTC(2011,11,1),52.44],[Date.UTC(2012,0,1),52.01],[Date.UTC(2012,1,1),56.07],[Date.UTC(2012,2,1),56.58],[Date.UTC(2012,3,1),58.06],[Date.UTC(2012,4,1),59.21],[Date.UTC(2012,5,1),60.40],[Date.UTC(2012,6,1),60.02],[Date.UTC(2012,7,1),59.20],[Date.UTC(2012,8,1),58.41],[Date.UTC(2012,9,1),60.43],[Date.UTC(2012,10,1),62.03],[Date.UTC(2012,11,1),60.67],[Date.UTC(2013,0,1),62.11],[Date.UTC(2013,1,1),63.59],[Date.UTC(2013,2,1),64.34],[Date.UTC(2013,3,1),65.32],[Date.UTC(2013,4,1),66.77],[Date.UTC(2013,5,1),67.65],[Date.UTC(2013,6,1),70.18],[Date.UTC(2013,7,1),71.37],[Date.UTC(2013,8,1),73.13],[Date.UTC(2013,9,1),74.37],[Date.UTC(2013,10,1),75.41],[Date.UTC(2013,11,1),78.46],[Date.UTC(2014,0,1),80.24],[Date.UTC(2014,1,1),76.49],[Date.UTC(2014,2,1),76.45],[Date.UTC(2014,3,1),76.37],[Date.UTC(2014,4,1),75.90],[Date.UTC(2014,5,1),77.27],[Date.UTC(2014,6,1),78.83],[Date.UTC(2014,7,1),77.83],[Date.UTC(2014,8,1),79.95],[Date.UTC(2014,9,1),79.76],[Date.UTC(2014,10,1),77.39],[Date.UTC(2014,11,1),76.45],[Date.UTC(2015,0,1),74.35],[Date.UTC(2015,1,1),74.03],[Date.UTC(2015,2,1),74.21],[Date.UTC(2015,3,1),74.45],[Date.UTC(2015,4,1),74.99],[Date.UTC(2015,5,1),73.78],[Date.UTC(2015,6,1),71.04],[Date.UTC(2015,7,1),72.67],[Date.UTC(2015,8,1),71.57],[Date.UTC(2015,9,1),72.34],[Date.UTC(2015,10,1),75.51],[Date.UTC(2015,11,1),76.78],[Date.UTC(2016,0,1),78.98],[Date.UTC(2016,1,1),81.51],[Date.UTC(2016,2,1),82.92],[Date.UTC(2016,3,1),82.97],[Date.UTC(2016,4,1),82.38],[Date.UTC(2016,5,1),81.70],[Date.UTC(2016,6,1),82.88],[Date.UTC(2016,7,1),82.99],[Date.UTC(2016,8,1),82.38],[Date.UTC(2016,9,1),82.17],[Date.UTC(2016,10,1),80.49],[Date.UTC(2016,11,1),79.12],[Date.UTC(2017,0,1),79.92],[Date.UTC(2017,1,1),81.73],[Date.UTC(2017,2,1),81.15],[Date.UTC(2017,3,1),81.71],[Date.UTC(2017,4,1),82.77],[Date.UTC(2017,5,1),85.71],[Date.UTC(2017,6,1),85.33],[Date.UTC(2017,7,1),84.51],[Date.UTC(2017,8,1),83.71],[Date.UTC(2017,9,1),83.07],[Date.UTC(2017,10,1),83.31],[Date.UTC(2017,11,1),84.39],[Date.UTC(2018,0,1),83.50],[Date.UTC(2018,1,1),81.98],[Date.UTC(2018,2,1),85.71],[Date.UTC(2018,3,1),87.78],[Date.UTC(2018,4,1),87.96]]
    },{
        index: 2,
        zIndex: 0,
        legendIndex: 2,
        name: 'United States',
        dataname: 'uspermits',
        legendname: 'United States',
        tooltipname: 'US',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2007,0,1),120.58],[Date.UTC(2007,1,1),117.32],[Date.UTC(2007,2,1),115.62],[Date.UTC(2007,3,1),113.16],[Date.UTC(2007,4,1),112.98],[Date.UTC(2007,5,1),110.23],[Date.UTC(2007,6,1),108.48],[Date.UTC(2007,7,1),107.08],[Date.UTC(2007,8,1),104.58],[Date.UTC(2007,9,1),103.25],[Date.UTC(2007,10,1),101.97],[Date.UTC(2007,11,1),100.00],[Date.UTC(2008,0,1),96.82],[Date.UTC(2008,1,1),93.68],[Date.UTC(2008,2,1),89.54],[Date.UTC(2008,3,1),86.90],[Date.UTC(2008,4,1),83.41],[Date.UTC(2008,5,1),81.87],[Date.UTC(2008,6,1),79.34],[Date.UTC(2008,7,1),76.10],[Date.UTC(2008,8,1),74.01],[Date.UTC(2008,9,1),71.04],[Date.UTC(2008,10,1),67.09],[Date.UTC(2008,11,1),64.03],[Date.UTC(2009,0,1),60.49],[Date.UTC(2009,1,1),57.44],[Date.UTC(2009,2,1),55.18],[Date.UTC(2009,3,1),52.22],[Date.UTC(2009,4,1),49.49],[Date.UTC(2009,5,1),46.56],[Date.UTC(2009,6,1),44.61],[Date.UTC(2009,7,1),43.18],[Date.UTC(2009,8,1),41.92],[Date.UTC(2009,9,1),40.79],[Date.UTC(2009,10,1),40.81],[Date.UTC(2009,11,1),41.42],[Date.UTC(2010,0,1),41.76],[Date.UTC(2010,1,1),42.30],[Date.UTC(2010,2,1),43.53],[Date.UTC(2010,3,1),44.19],[Date.UTC(2010,4,1),44.38],[Date.UTC(2010,5,1),44.35],[Date.UTC(2010,6,1),44.08],[Date.UTC(2010,7,1),44.14],[Date.UTC(2010,8,1),43.84],[Date.UTC(2010,9,1),43.64],[Date.UTC(2010,10,1),43.52],[Date.UTC(2010,11,1),43.39],[Date.UTC(2011,0,1),43.08],[Date.UTC(2011,1,1),42.48],[Date.UTC(2011,2,1),41.93],[Date.UTC(2011,3,1),41.46],[Date.UTC(2011,4,1),41.79],[Date.UTC(2011,5,1),42.07],[Date.UTC(2011,6,1),42.17],[Date.UTC(2011,7,1),42.71],[Date.UTC(2011,8,1),43.06],[Date.UTC(2011,9,1),43.47],[Date.UTC(2011,10,1),44.34],[Date.UTC(2011,11,1),44.55],[Date.UTC(2012,0,1),45.50],[Date.UTC(2012,1,1),46.77],[Date.UTC(2012,2,1),47.77],[Date.UTC(2012,3,1),48.60],[Date.UTC(2012,4,1),49.79],[Date.UTC(2012,5,1),50.57],[Date.UTC(2012,6,1),52.05],[Date.UTC(2012,7,1),53.23],[Date.UTC(2012,8,1),54.68],[Date.UTC(2012,9,1),56.39],[Date.UTC(2012,10,1),57.69],[Date.UTC(2012,11,1),58.86],[Date.UTC(2013,0,1),60.47],[Date.UTC(2013,1,1),61.65],[Date.UTC(2013,2,1),62.33],[Date.UTC(2013,3,1),64.21],[Date.UTC(2013,4,1),65.43],[Date.UTC(2013,5,1),66.14],[Date.UTC(2013,6,1),67.31],[Date.UTC(2013,7,1),67.91],[Date.UTC(2013,8,1),68.60],[Date.UTC(2013,9,1),69.55],[Date.UTC(2013,10,1),69.92],[Date.UTC(2013,11,1),70.70],[Date.UTC(2014,0,1),70.80],[Date.UTC(2014,1,1),71.18],[Date.UTC(2014,2,1),71.85],[Date.UTC(2014,3,1),72.11],[Date.UTC(2014,4,1),71.95],[Date.UTC(2014,5,1),72.47],[Date.UTC(2014,6,1),73.19],[Date.UTC(2014,7,1),73.40],[Date.UTC(2014,8,1),74.03],[Date.UTC(2014,9,1),74.38],[Date.UTC(2014,10,1),74.31],[Date.UTC(2014,11,1),74.88],[Date.UTC(2015,0,1),75.37],[Date.UTC(2015,1,1),75.97],[Date.UTC(2015,2,1),76.56],[Date.UTC(2015,3,1),77.25],[Date.UTC(2015,4,1),78.53],[Date.UTC(2015,5,1),81.12],[Date.UTC(2015,6,1),81.49],[Date.UTC(2015,7,1),82.19],[Date.UTC(2015,8,1),82.59],[Date.UTC(2015,9,1),82.69],[Date.UTC(2015,10,1),84.22],[Date.UTC(2015,11,1),85.27],[Date.UTC(2016,0,1),85.72],[Date.UTC(2016,1,1),86.36],[Date.UTC(2016,2,1),86.80],[Date.UTC(2016,3,1),86.49],[Date.UTC(2016,4,1),86.33],[Date.UTC(2016,5,1),85.01],[Date.UTC(2016,6,1),84.56],[Date.UTC(2016,7,1),85.28],[Date.UTC(2016,8,1),86.02],[Date.UTC(2016,9,1),86.22],[Date.UTC(2016,10,1),86.29],[Date.UTC(2016,11,1),85.88],[Date.UTC(2017,0,1),87.05],[Date.UTC(2017,1,1),87.09],[Date.UTC(2017,2,1),88.07],[Date.UTC(2017,3,1),88.35],[Date.UTC(2017,4,1),88.74],[Date.UTC(2017,5,1),89.53],[Date.UTC(2017,6,1),89.98],[Date.UTC(2017,7,1),90.64],[Date.UTC(2017,8,1),90.17],[Date.UTC(2017,9,1),91.14],[Date.UTC(2017,10,1),91.61],[Date.UTC(2017,11,1),91.81],[Date.UTC(2018,0,1),92.64],[Date.UTC(2018,1,1),93.31],[Date.UTC(2018,2,1),93.60],[Date.UTC(2018,3,1),94.84],[Date.UTC(2018,4,1),95.37]]
    }]
};