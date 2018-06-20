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
        min: 20,
        max: 160,
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
        name: 'Columbus',
        dataname: 'colpermits',
        legendname: 'Columbus',
        tooltipname: 'Columbus',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2007,0,1),98.11],[Date.UTC(2007,1,1),128.11],[Date.UTC(2007,2,1),114.47],[Date.UTC(2007,3,1),105.00],[Date.UTC(2007,4,1),105.92],[Date.UTC(2007,5,1),104.72],[Date.UTC(2007,6,1),106.39],[Date.UTC(2007,7,1),105.90],[Date.UTC(2007,8,1),100.61],[Date.UTC(2007,9,1),100.43],[Date.UTC(2007,10,1),100.89],[Date.UTC(2007,11,1),100.00],[Date.UTC(2008,0,1),99.32],[Date.UTC(2008,1,1),90.14],[Date.UTC(2008,2,1),87.99],[Date.UTC(2008,3,1),88.66],[Date.UTC(2008,4,1),84.83],[Date.UTC(2008,5,1),82.55],[Date.UTC(2008,6,1),78.92],[Date.UTC(2008,7,1),75.66],[Date.UTC(2008,8,1),76.98],[Date.UTC(2008,9,1),75.27],[Date.UTC(2008,10,1),71.37],[Date.UTC(2008,11,1),68.66],[Date.UTC(2009,0,1),63.32],[Date.UTC(2009,1,1),64.32],[Date.UTC(2009,2,1),62.66],[Date.UTC(2009,3,1),60.83],[Date.UTC(2009,4,1),60.99],[Date.UTC(2009,5,1),59.18],[Date.UTC(2009,6,1),57.91],[Date.UTC(2009,7,1),58.60],[Date.UTC(2009,8,1),59.39],[Date.UTC(2009,9,1),57.50],[Date.UTC(2009,10,1),56.90],[Date.UTC(2009,11,1),60.35],[Date.UTC(2010,0,1),65.42],[Date.UTC(2010,1,1),67.00],[Date.UTC(2010,2,1),72.31],[Date.UTC(2010,3,1),74.07],[Date.UTC(2010,4,1),73.02],[Date.UTC(2010,5,1),74.42],[Date.UTC(2010,6,1),80.36],[Date.UTC(2010,7,1),78.40],[Date.UTC(2010,8,1),75.57],[Date.UTC(2010,9,1),79.54],[Date.UTC(2010,10,1),78.62],[Date.UTC(2010,11,1),72.64],[Date.UTC(2011,0,1),69.10],[Date.UTC(2011,1,1),70.20],[Date.UTC(2011,2,1),67.96],[Date.UTC(2011,3,1),65.38],[Date.UTC(2011,4,1),66.68],[Date.UTC(2011,5,1),67.96],[Date.UTC(2011,6,1),61.08],[Date.UTC(2011,7,1),63.22],[Date.UTC(2011,8,1),64.78],[Date.UTC(2011,9,1),62.94],[Date.UTC(2011,10,1),68.95],[Date.UTC(2011,11,1),78.60],[Date.UTC(2012,0,1),84.73],[Date.UTC(2012,1,1),81.31],[Date.UTC(2012,2,1),81.23],[Date.UTC(2012,3,1),83.85],[Date.UTC(2012,4,1),88.19],[Date.UTC(2012,5,1),89.40],[Date.UTC(2012,6,1),97.26],[Date.UTC(2012,7,1),98.47],[Date.UTC(2012,8,1),98.54],[Date.UTC(2012,9,1),100.42],[Date.UTC(2012,10,1),107.28],[Date.UTC(2012,11,1),102.44],[Date.UTC(2013,0,1),108.74],[Date.UTC(2013,1,1),118.13],[Date.UTC(2013,2,1),116.02],[Date.UTC(2013,3,1),124.06],[Date.UTC(2013,4,1),124.83],[Date.UTC(2013,5,1),125.57],[Date.UTC(2013,6,1),123.68],[Date.UTC(2013,7,1),129.15],[Date.UTC(2013,8,1),136.56],[Date.UTC(2013,9,1),141.13],[Date.UTC(2013,10,1),132.26],[Date.UTC(2013,11,1),136.15],[Date.UTC(2014,0,1),126.64],[Date.UTC(2014,1,1),122.11],[Date.UTC(2014,2,1),126.16],[Date.UTC(2014,3,1),118.02],[Date.UTC(2014,4,1),117.14],[Date.UTC(2014,5,1),120.85],[Date.UTC(2014,6,1),129.07],[Date.UTC(2014,7,1),126.08],[Date.UTC(2014,8,1),120.11],[Date.UTC(2014,9,1),114.25],[Date.UTC(2014,10,1),116.65],[Date.UTC(2014,11,1),114.40],[Date.UTC(2015,0,1),116.87],[Date.UTC(2015,1,1),115.05],[Date.UTC(2015,2,1),114.94],[Date.UTC(2015,3,1),116.29],[Date.UTC(2015,4,1),114.39],[Date.UTC(2015,5,1),107.74],[Date.UTC(2015,6,1),98.40],[Date.UTC(2015,7,1),98.54],[Date.UTC(2015,8,1),104.43],[Date.UTC(2015,9,1),109.67],[Date.UTC(2015,10,1),111.62],[Date.UTC(2015,11,1),115.28],[Date.UTC(2016,0,1),113.79],[Date.UTC(2016,1,1),115.22],[Date.UTC(2016,2,1),118.81],[Date.UTC(2016,3,1),122.80],[Date.UTC(2016,4,1),123.82],[Date.UTC(2016,5,1),128.11],[Date.UTC(2016,6,1),128.71],[Date.UTC(2016,7,1),129.58],[Date.UTC(2016,8,1),130.36],[Date.UTC(2016,9,1),126.57],[Date.UTC(2016,10,1),125.77],[Date.UTC(2016,11,1),120.97],[Date.UTC(2017,0,1),135.49],[Date.UTC(2017,1,1),139.14],[Date.UTC(2017,2,1),134.10],[Date.UTC(2017,3,1),129.50],[Date.UTC(2017,4,1),132.69],[Date.UTC(2017,5,1),145.11],[Date.UTC(2017,6,1),144.54],[Date.UTC(2017,7,1),144.80],[Date.UTC(2017,8,1),141.32],[Date.UTC(2017,9,1),142.80],[Date.UTC(2017,10,1),140.93],[Date.UTC(2017,11,1),139.58],[Date.UTC(2018,0,1),129.29],[Date.UTC(2018,1,1),135.44],[Date.UTC(2018,2,1),137.85],[Date.UTC(2018,3,1),138.51],[Date.UTC(2018,4,1),137.74]]
    },{
        index: 1,
        zIndex: 1,
        legendIndex: 1,
        name: 'Ohio',
        dataname: 'ohpermits',
        legendname: 'Ohio',
        tooltipname: 'Ohio',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2007,0,1),120.61],[Date.UTC(2007,1,1),118.60],[Date.UTC(2007,2,1),115.88],[Date.UTC(2007,3,1),110.42],[Date.UTC(2007,4,1),110.41],[Date.UTC(2007,5,1),108.95],[Date.UTC(2007,6,1),107.59],[Date.UTC(2007,7,1),106.16],[Date.UTC(2007,8,1),103.45],[Date.UTC(2007,9,1),101.39],[Date.UTC(2007,10,1),101.15],[Date.UTC(2007,11,1),100.00],[Date.UTC(2008,0,1),96.68],[Date.UTC(2008,1,1),92.15],[Date.UTC(2008,2,1),87.82],[Date.UTC(2008,3,1),86.16],[Date.UTC(2008,4,1),82.28],[Date.UTC(2008,5,1),79.80],[Date.UTC(2008,6,1),76.92],[Date.UTC(2008,7,1),74.34],[Date.UTC(2008,8,1),73.29],[Date.UTC(2008,9,1),71.95],[Date.UTC(2008,10,1),68.09],[Date.UTC(2008,11,1),64.69],[Date.UTC(2009,0,1),61.45],[Date.UTC(2009,1,1),59.69],[Date.UTC(2009,2,1),57.57],[Date.UTC(2009,3,1),54.72],[Date.UTC(2009,4,1),52.73],[Date.UTC(2009,5,1),50.31],[Date.UTC(2009,6,1),48.41],[Date.UTC(2009,7,1),46.22],[Date.UTC(2009,8,1),44.05],[Date.UTC(2009,9,1),41.31],[Date.UTC(2009,10,1),40.57],[Date.UTC(2009,11,1),41.20],[Date.UTC(2010,0,1),41.58],[Date.UTC(2010,1,1),42.18],[Date.UTC(2010,2,1),44.38],[Date.UTC(2010,3,1),45.32],[Date.UTC(2010,4,1),44.80],[Date.UTC(2010,5,1),44.42],[Date.UTC(2010,6,1),44.94],[Date.UTC(2010,7,1),44.85],[Date.UTC(2010,8,1),44.37],[Date.UTC(2010,9,1),45.05],[Date.UTC(2010,10,1),44.26],[Date.UTC(2010,11,1),42.31],[Date.UTC(2011,0,1),41.43],[Date.UTC(2011,1,1),40.86],[Date.UTC(2011,2,1),39.81],[Date.UTC(2011,3,1),38.50],[Date.UTC(2011,4,1),38.99],[Date.UTC(2011,5,1),39.61],[Date.UTC(2011,6,1),38.64],[Date.UTC(2011,7,1),39.30],[Date.UTC(2011,8,1),39.74],[Date.UTC(2011,9,1),40.69],[Date.UTC(2011,10,1),42.01],[Date.UTC(2011,11,1),44.79],[Date.UTC(2012,0,1),46.46],[Date.UTC(2012,1,1),46.82],[Date.UTC(2012,2,1),46.80],[Date.UTC(2012,3,1),47.82],[Date.UTC(2012,4,1),48.86],[Date.UTC(2012,5,1),49.15],[Date.UTC(2012,6,1),50.24],[Date.UTC(2012,7,1),50.40],[Date.UTC(2012,8,1),51.07],[Date.UTC(2012,9,1),50.79],[Date.UTC(2012,10,1),53.65],[Date.UTC(2012,11,1),53.27],[Date.UTC(2013,0,1),55.86],[Date.UTC(2013,1,1),58.08],[Date.UTC(2013,2,1),58.12],[Date.UTC(2013,3,1),60.53],[Date.UTC(2013,4,1),61.93],[Date.UTC(2013,5,1),62.75],[Date.UTC(2013,6,1),64.48],[Date.UTC(2013,7,1),66.46],[Date.UTC(2013,8,1),68.44],[Date.UTC(2013,9,1),69.76],[Date.UTC(2013,10,1),67.34],[Date.UTC(2013,11,1),67.45],[Date.UTC(2014,0,1),64.21],[Date.UTC(2014,1,1),62.80],[Date.UTC(2014,2,1),64.34],[Date.UTC(2014,3,1),62.51],[Date.UTC(2014,4,1),61.91],[Date.UTC(2014,5,1),62.55],[Date.UTC(2014,6,1),63.08],[Date.UTC(2014,7,1),62.94],[Date.UTC(2014,8,1),61.30],[Date.UTC(2014,9,1),60.79],[Date.UTC(2014,10,1),61.41],[Date.UTC(2014,11,1),61.57],[Date.UTC(2015,0,1),62.13],[Date.UTC(2015,1,1),61.37],[Date.UTC(2015,2,1),60.15],[Date.UTC(2015,3,1),60.06],[Date.UTC(2015,4,1),59.94],[Date.UTC(2015,5,1),58.76],[Date.UTC(2015,6,1),57.20],[Date.UTC(2015,7,1),55.95],[Date.UTC(2015,8,1),58.07],[Date.UTC(2015,9,1),58.87],[Date.UTC(2015,10,1),59.51],[Date.UTC(2015,11,1),59.95],[Date.UTC(2016,0,1),59.78],[Date.UTC(2016,1,1),61.83],[Date.UTC(2016,2,1),63.43],[Date.UTC(2016,3,1),65.21],[Date.UTC(2016,4,1),65.47],[Date.UTC(2016,5,1),67.32],[Date.UTC(2016,6,1),67.50],[Date.UTC(2016,7,1),68.49],[Date.UTC(2016,8,1),68.49],[Date.UTC(2016,9,1),67.65],[Date.UTC(2016,10,1),67.65],[Date.UTC(2016,11,1),67.33],[Date.UTC(2017,0,1),71.94],[Date.UTC(2017,1,1),72.81],[Date.UTC(2017,2,1),72.65],[Date.UTC(2017,3,1),71.20],[Date.UTC(2017,4,1),71.58],[Date.UTC(2017,5,1),73.67],[Date.UTC(2017,6,1),74.07],[Date.UTC(2017,7,1),75.15],[Date.UTC(2017,8,1),74.04],[Date.UTC(2017,9,1),74.87],[Date.UTC(2017,10,1),74.50],[Date.UTC(2017,11,1),74.39],[Date.UTC(2018,0,1),71.88],[Date.UTC(2018,1,1),72.50],[Date.UTC(2018,2,1),72.70],[Date.UTC(2018,3,1),73.57],[Date.UTC(2018,4,1),74.06]]
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