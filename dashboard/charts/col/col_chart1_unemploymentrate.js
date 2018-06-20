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
        text: 'Unemployment Rate',
        align: 'left',
        margin: 5,
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'rgba(85,85,85,1)'
        }
    },
    credits: {
        text: "Source: Bureau of Labor Statistics/Haver Analytics",
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
            text: 'Percent',
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
        min: 2,
        max: 12,
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
        dataname: 'colur',
        legendname: 'Columbus',
        tooltipname: 'Columbus',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2008,0,1),4.9],[Date.UTC(2008,1,1),4.7],[Date.UTC(2008,2,1),4.8],[Date.UTC(2008,3,1),4.9],[Date.UTC(2008,4,1),5.3],[Date.UTC(2008,5,1),5.7],[Date.UTC(2008,6,1),6.0],[Date.UTC(2008,7,1),6.1],[Date.UTC(2008,8,1),6.1],[Date.UTC(2008,9,1),6.2],[Date.UTC(2008,10,1),6.5],[Date.UTC(2008,11,1),6.9],[Date.UTC(2009,0,1),7.3],[Date.UTC(2009,1,1),7.8],[Date.UTC(2009,2,1),8.2],[Date.UTC(2009,3,1),8.4],[Date.UTC(2009,4,1),8.6],[Date.UTC(2009,5,1),8.9],[Date.UTC(2009,6,1),9.0],[Date.UTC(2009,7,1),9.0],[Date.UTC(2009,8,1),9.1],[Date.UTC(2009,9,1),9.3],[Date.UTC(2009,10,1),9.4],[Date.UTC(2009,11,1),9.5],[Date.UTC(2010,0,1),9.5],[Date.UTC(2010,1,1),9.6],[Date.UTC(2010,2,1),9.7],[Date.UTC(2010,3,1),9.5],[Date.UTC(2010,4,1),9.2],[Date.UTC(2010,5,1),8.9],[Date.UTC(2010,6,1),8.8],[Date.UTC(2010,7,1),8.7],[Date.UTC(2010,8,1),8.6],[Date.UTC(2010,9,1),8.6],[Date.UTC(2010,10,1),8.6],[Date.UTC(2010,11,1),8.4],[Date.UTC(2011,0,1),8.2],[Date.UTC(2011,1,1),8.0],[Date.UTC(2011,2,1),8.0],[Date.UTC(2011,3,1),8.0],[Date.UTC(2011,4,1),8.1],[Date.UTC(2011,5,1),8.2],[Date.UTC(2011,6,1),8.2],[Date.UTC(2011,7,1),8.0],[Date.UTC(2011,8,1),7.8],[Date.UTC(2011,9,1),7.5],[Date.UTC(2011,10,1),7.2],[Date.UTC(2011,11,1),6.9],[Date.UTC(2012,0,1),6.8],[Date.UTC(2012,1,1),6.8],[Date.UTC(2012,2,1),6.7],[Date.UTC(2012,3,1),6.6],[Date.UTC(2012,4,1),6.5],[Date.UTC(2012,5,1),6.5],[Date.UTC(2012,6,1),6.5],[Date.UTC(2012,7,1),6.4],[Date.UTC(2012,8,1),6.2],[Date.UTC(2012,9,1),6.1],[Date.UTC(2012,10,1),6.2],[Date.UTC(2012,11,1),6.5],[Date.UTC(2013,0,1),6.7],[Date.UTC(2013,1,1),6.7],[Date.UTC(2013,2,1),6.5],[Date.UTC(2013,3,1),6.5],[Date.UTC(2013,4,1),6.6],[Date.UTC(2013,5,1),6.7],[Date.UTC(2013,6,1),6.6],[Date.UTC(2013,7,1),6.5],[Date.UTC(2013,8,1),6.6],[Date.UTC(2013,9,1),6.5],[Date.UTC(2013,10,1),6.2],[Date.UTC(2013,11,1),5.8],[Date.UTC(2014,0,1),5.6],[Date.UTC(2014,1,1),5.5],[Date.UTC(2014,2,1),5.3],[Date.UTC(2014,3,1),5.0],[Date.UTC(2014,4,1),5.0],[Date.UTC(2014,5,1),5.0],[Date.UTC(2014,6,1),4.9],[Date.UTC(2014,7,1),4.8],[Date.UTC(2014,8,1),4.7],[Date.UTC(2014,9,1),4.5],[Date.UTC(2014,10,1),4.5],[Date.UTC(2014,11,1),4.4],[Date.UTC(2015,0,1),4.4],[Date.UTC(2015,1,1),4.3],[Date.UTC(2015,2,1),4.2],[Date.UTC(2015,3,1),4.3],[Date.UTC(2015,4,1),4.3],[Date.UTC(2015,5,1),4.2],[Date.UTC(2015,6,1),3.9],[Date.UTC(2015,7,1),3.8],[Date.UTC(2015,8,1),3.9],[Date.UTC(2015,9,1),4.1],[Date.UTC(2015,10,1),4.2],[Date.UTC(2015,11,1),4.2],[Date.UTC(2016,0,1),4.1],[Date.UTC(2016,1,1),4.1],[Date.UTC(2016,2,1),4.3],[Date.UTC(2016,3,1),4.3],[Date.UTC(2016,4,1),4.1],[Date.UTC(2016,5,1),4.0],[Date.UTC(2016,6,1),4.0],[Date.UTC(2016,7,1),4.1],[Date.UTC(2016,8,1),4.3],[Date.UTC(2016,9,1),4.3],[Date.UTC(2016,10,1),4.3],[Date.UTC(2016,11,1),4.3],[Date.UTC(2017,0,1),4.3],[Date.UTC(2017,1,1),4.2],[Date.UTC(2017,2,1),4.1],[Date.UTC(2017,3,1),4.1],[Date.UTC(2017,4,1),4.1],[Date.UTC(2017,5,1),4.0],[Date.UTC(2017,6,1),4.0],[Date.UTC(2017,7,1),4.1],[Date.UTC(2017,8,1),4.0],[Date.UTC(2017,9,1),3.9],[Date.UTC(2017,10,1),4.0],[Date.UTC(2017,11,1),4.0],[Date.UTC(2018,0,1),3.6],[Date.UTC(2018,1,1),3.4],[Date.UTC(2018,2,1),3.3],[Date.UTC(2018,3,1),3.5],[Date.UTC(2018,4,1),null]]
    },{
        index: 1,
        zIndex: 1,
        legendIndex: 1,
        name: 'Ohio',
        dataname: 'ohur',
        legendname: 'Ohio',
        tooltipname: 'Ohio',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2008,0,1),5.5],[Date.UTC(2008,1,1),5.5],[Date.UTC(2008,2,1),5.6],[Date.UTC(2008,3,1),5.8],[Date.UTC(2008,4,1),6.0],[Date.UTC(2008,5,1),6.3],[Date.UTC(2008,6,1),6.5],[Date.UTC(2008,7,1),6.7],[Date.UTC(2008,8,1),6.9],[Date.UTC(2008,9,1),7.2],[Date.UTC(2008,10,1),7.6],[Date.UTC(2008,11,1),8.1],[Date.UTC(2009,0,1),8.7],[Date.UTC(2009,1,1),9.3],[Date.UTC(2009,2,1),9.8],[Date.UTC(2009,3,1),10.2],[Date.UTC(2009,4,1),10.4],[Date.UTC(2009,5,1),10.5],[Date.UTC(2009,6,1),10.6],[Date.UTC(2009,7,1),10.6],[Date.UTC(2009,8,1),10.7],[Date.UTC(2009,9,1),10.8],[Date.UTC(2009,10,1),10.9],[Date.UTC(2009,11,1),11.0],[Date.UTC(2010,0,1),11.1],[Date.UTC(2010,1,1),11.0],[Date.UTC(2010,2,1),10.9],[Date.UTC(2010,3,1),10.6],[Date.UTC(2010,4,1),10.4],[Date.UTC(2010,5,1),10.1],[Date.UTC(2010,6,1),10.0],[Date.UTC(2010,7,1),9.9],[Date.UTC(2010,8,1),9.9],[Date.UTC(2010,9,1),9.8],[Date.UTC(2010,10,1),9.7],[Date.UTC(2010,11,1),9.5],[Date.UTC(2011,0,1),9.3],[Date.UTC(2011,1,1),9.1],[Date.UTC(2011,2,1),9.0],[Date.UTC(2011,3,1),9.0],[Date.UTC(2011,4,1),9.0],[Date.UTC(2011,5,1),9.1],[Date.UTC(2011,6,1),9.1],[Date.UTC(2011,7,1),9.0],[Date.UTC(2011,8,1),8.8],[Date.UTC(2011,9,1),8.5],[Date.UTC(2011,10,1),8.3],[Date.UTC(2011,11,1),8.0],[Date.UTC(2012,0,1),7.8],[Date.UTC(2012,1,1),7.6],[Date.UTC(2012,2,1),7.5],[Date.UTC(2012,3,1),7.4],[Date.UTC(2012,4,1),7.4],[Date.UTC(2012,5,1),7.3],[Date.UTC(2012,6,1),7.3],[Date.UTC(2012,7,1),7.2],[Date.UTC(2012,8,1),7.2],[Date.UTC(2012,9,1),7.3],[Date.UTC(2012,10,1),7.4],[Date.UTC(2012,11,1),7.5],[Date.UTC(2013,0,1),7.5],[Date.UTC(2013,1,1),7.6],[Date.UTC(2013,2,1),7.6],[Date.UTC(2013,3,1),7.6],[Date.UTC(2013,4,1),7.5],[Date.UTC(2013,5,1),7.5],[Date.UTC(2013,6,1),7.6],[Date.UTC(2013,7,1),7.5],[Date.UTC(2013,8,1),7.4],[Date.UTC(2013,9,1),7.3],[Date.UTC(2013,10,1),7.1],[Date.UTC(2013,11,1),6.9],[Date.UTC(2014,0,1),6.6],[Date.UTC(2014,1,1),6.4],[Date.UTC(2014,2,1),6.2],[Date.UTC(2014,3,1),6.0],[Date.UTC(2014,4,1),5.9],[Date.UTC(2014,5,1),5.8],[Date.UTC(2014,6,1),5.7],[Date.UTC(2014,7,1),5.6],[Date.UTC(2014,8,1),5.5],[Date.UTC(2014,9,1),5.4],[Date.UTC(2014,10,1),5.3],[Date.UTC(2014,11,1),5.2],[Date.UTC(2015,0,1),5.1],[Date.UTC(2015,1,1),5.1],[Date.UTC(2015,2,1),5.1],[Date.UTC(2015,3,1),5.1],[Date.UTC(2015,4,1),5.0],[Date.UTC(2015,5,1),4.9],[Date.UTC(2015,6,1),4.8],[Date.UTC(2015,7,1),4.7],[Date.UTC(2015,8,1),4.7],[Date.UTC(2015,9,1),4.7],[Date.UTC(2015,10,1),4.8],[Date.UTC(2015,11,1),4.9],[Date.UTC(2016,0,1),4.9],[Date.UTC(2016,1,1),5.0],[Date.UTC(2016,2,1),5.0],[Date.UTC(2016,3,1),5.0],[Date.UTC(2016,4,1),5.0],[Date.UTC(2016,5,1),5.0],[Date.UTC(2016,6,1),5.0],[Date.UTC(2016,7,1),5.0],[Date.UTC(2016,8,1),5.1],[Date.UTC(2016,9,1),5.2],[Date.UTC(2016,10,1),5.2],[Date.UTC(2016,11,1),5.2],[Date.UTC(2017,0,1),5.2],[Date.UTC(2017,1,1),5.1],[Date.UTC(2017,2,1),5.1],[Date.UTC(2017,3,1),5.1],[Date.UTC(2017,4,1),5.1],[Date.UTC(2017,5,1),5.1],[Date.UTC(2017,6,1),5.1],[Date.UTC(2017,7,1),5.0],[Date.UTC(2017,8,1),5.0],[Date.UTC(2017,9,1),4.9],[Date.UTC(2017,10,1),4.9],[Date.UTC(2017,11,1),4.9],[Date.UTC(2018,0,1),4.7],[Date.UTC(2018,1,1),4.5],[Date.UTC(2018,2,1),4.4],[Date.UTC(2018,3,1),4.3],[Date.UTC(2018,4,1),4.3]]
    },{
        index: 2,
        zIndex: 0,
        legendIndex: 2,
        name: 'United States',
        dataname: 'usur',
        legendname: 'United States',
        tooltipname: 'US',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2008,0,1),5.0],[Date.UTC(2008,1,1),4.9],[Date.UTC(2008,2,1),5.1],[Date.UTC(2008,3,1),5.0],[Date.UTC(2008,4,1),5.4],[Date.UTC(2008,5,1),5.6],[Date.UTC(2008,6,1),5.8],[Date.UTC(2008,7,1),6.1],[Date.UTC(2008,8,1),6.1],[Date.UTC(2008,9,1),6.5],[Date.UTC(2008,10,1),6.8],[Date.UTC(2008,11,1),7.3],[Date.UTC(2009,0,1),7.8],[Date.UTC(2009,1,1),8.3],[Date.UTC(2009,2,1),8.7],[Date.UTC(2009,3,1),9.0],[Date.UTC(2009,4,1),9.4],[Date.UTC(2009,5,1),9.5],[Date.UTC(2009,6,1),9.5],[Date.UTC(2009,7,1),9.6],[Date.UTC(2009,8,1),9.8],[Date.UTC(2009,9,1),10.0],[Date.UTC(2009,10,1),9.9],[Date.UTC(2009,11,1),9.9],[Date.UTC(2010,0,1),9.8],[Date.UTC(2010,1,1),9.8],[Date.UTC(2010,2,1),9.9],[Date.UTC(2010,3,1),9.9],[Date.UTC(2010,4,1),9.6],[Date.UTC(2010,5,1),9.4],[Date.UTC(2010,6,1),9.4],[Date.UTC(2010,7,1),9.5],[Date.UTC(2010,8,1),9.5],[Date.UTC(2010,9,1),9.4],[Date.UTC(2010,10,1),9.8],[Date.UTC(2010,11,1),9.3],[Date.UTC(2011,0,1),9.1],[Date.UTC(2011,1,1),9.0],[Date.UTC(2011,2,1),9.0],[Date.UTC(2011,3,1),9.1],[Date.UTC(2011,4,1),9.0],[Date.UTC(2011,5,1),9.1],[Date.UTC(2011,6,1),9.0],[Date.UTC(2011,7,1),9.0],[Date.UTC(2011,8,1),9.0],[Date.UTC(2011,9,1),8.8],[Date.UTC(2011,10,1),8.6],[Date.UTC(2011,11,1),8.5],[Date.UTC(2012,0,1),8.3],[Date.UTC(2012,1,1),8.3],[Date.UTC(2012,2,1),8.2],[Date.UTC(2012,3,1),8.2],[Date.UTC(2012,4,1),8.2],[Date.UTC(2012,5,1),8.2],[Date.UTC(2012,6,1),8.2],[Date.UTC(2012,7,1),8.1],[Date.UTC(2012,8,1),7.8],[Date.UTC(2012,9,1),7.8],[Date.UTC(2012,10,1),7.7],[Date.UTC(2012,11,1),7.9],[Date.UTC(2013,0,1),8.0],[Date.UTC(2013,1,1),7.7],[Date.UTC(2013,2,1),7.5],[Date.UTC(2013,3,1),7.6],[Date.UTC(2013,4,1),7.5],[Date.UTC(2013,5,1),7.5],[Date.UTC(2013,6,1),7.3],[Date.UTC(2013,7,1),7.2],[Date.UTC(2013,8,1),7.2],[Date.UTC(2013,9,1),7.2],[Date.UTC(2013,10,1),6.9],[Date.UTC(2013,11,1),6.7],[Date.UTC(2014,0,1),6.6],[Date.UTC(2014,1,1),6.7],[Date.UTC(2014,2,1),6.7],[Date.UTC(2014,3,1),6.3],[Date.UTC(2014,4,1),6.3],[Date.UTC(2014,5,1),6.1],[Date.UTC(2014,6,1),6.2],[Date.UTC(2014,7,1),6.2],[Date.UTC(2014,8,1),5.9],[Date.UTC(2014,9,1),5.7],[Date.UTC(2014,10,1),5.8],[Date.UTC(2014,11,1),5.6],[Date.UTC(2015,0,1),5.7],[Date.UTC(2015,1,1),5.5],[Date.UTC(2015,2,1),5.5],[Date.UTC(2015,3,1),5.4],[Date.UTC(2015,4,1),5.5],[Date.UTC(2015,5,1),5.3],[Date.UTC(2015,6,1),5.2],[Date.UTC(2015,7,1),5.1],[Date.UTC(2015,8,1),5.0],[Date.UTC(2015,9,1),5.0],[Date.UTC(2015,10,1),5.0],[Date.UTC(2015,11,1),5.0],[Date.UTC(2016,0,1),4.9],[Date.UTC(2016,1,1),4.9],[Date.UTC(2016,2,1),5.0],[Date.UTC(2016,3,1),5.0],[Date.UTC(2016,4,1),4.7],[Date.UTC(2016,5,1),4.9],[Date.UTC(2016,6,1),4.9],[Date.UTC(2016,7,1),4.9],[Date.UTC(2016,8,1),5.0],[Date.UTC(2016,9,1),4.9],[Date.UTC(2016,10,1),4.6],[Date.UTC(2016,11,1),4.7],[Date.UTC(2017,0,1),4.8],[Date.UTC(2017,1,1),4.7],[Date.UTC(2017,2,1),4.5],[Date.UTC(2017,3,1),4.4],[Date.UTC(2017,4,1),4.3],[Date.UTC(2017,5,1),4.3],[Date.UTC(2017,6,1),4.3],[Date.UTC(2017,7,1),4.4],[Date.UTC(2017,8,1),4.2],[Date.UTC(2017,9,1),4.1],[Date.UTC(2017,10,1),4.1],[Date.UTC(2017,11,1),4.1],[Date.UTC(2018,0,1),4.1],[Date.UTC(2018,1,1),4.1],[Date.UTC(2018,2,1),4.1],[Date.UTC(2018,3,1),3.9],[Date.UTC(2018,4,1),3.8]]
    }]
};