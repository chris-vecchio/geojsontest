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
        text: 'Credit Card Delinquency Rate',
        align: 'left',
        margin: 5,
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'rgba(85,85,85,1)'
        }
    },
    credits: {
        text: "Source: Authors' calculations from the Federal Reserve Bank of New York's Consumer Credit Panel/Equifax",
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
            var qlabel = "",
            d = new Date(this.x),
            q = Math.floor((d.getMonth() + 3) / 3); //get quarter
            datelabel = d.getFullYear() + ":Q" + q;
            var s = '<span style="font-size: 12px; font-weight: normal;">' + datelabel + '</span><br/>';
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
            text: 'Percent of credit card balances delinquent<br><span style="font-size: 11px;">4-quarter moving average</span>',
            style: {
                fontSize: '14px',
                fontWeight: 'normal',
                whiteSpace: 'nowrap',
                color: 'rgba(102,102,102,1)'
            }
        },
        labels: {
            formatter: function() {
                return this.value/1000;
            },
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
        min: 5,
        max: 13,
        tickInterval: 1
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
        min: Date.UTC(2008,2,1),
        max: Date.UTC(2018,2,1),
        tickPositions: [Date.UTC(2008,2,1),Date.UTC(2010,2,1),Date.UTC(2012,2,1),Date.UTC(2014,2,1),Date.UTC(2016,2,1),Date.UTC(2018,2,1)],
        plotBands: [{
            from: Date.UTC(2008,2,1),
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
        dataname: 'cticcdelinq',
        legendname: 'Cincinnati',
        tooltipname: 'Cincinnati',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2008,2,1),7.46],[Date.UTC(2008,5,1),7.56],[Date.UTC(2008,8,1),7.44],[Date.UTC(2008,11,1),7.45],[Date.UTC(2009,2,1),7.64],[Date.UTC(2009,5,1),7.80],[Date.UTC(2009,8,1),8.13],[Date.UTC(2009,11,1),8.53],[Date.UTC(2010,2,1),8.85],[Date.UTC(2010,5,1),9.10],[Date.UTC(2010,8,1),9.33],[Date.UTC(2010,11,1),9.41],[Date.UTC(2011,2,1),9.30],[Date.UTC(2011,5,1),9.00],[Date.UTC(2011,8,1),8.56],[Date.UTC(2011,11,1),8.12],[Date.UTC(2012,2,1),7.70],[Date.UTC(2012,5,1),7.48],[Date.UTC(2012,8,1),7.34],[Date.UTC(2012,11,1),7.47],[Date.UTC(2013,2,1),7.54],[Date.UTC(2013,5,1),7.63],[Date.UTC(2013,8,1),7.78],[Date.UTC(2013,11,1),7.63],[Date.UTC(2014,2,1),7.44],[Date.UTC(2014,5,1),7.08],[Date.UTC(2014,8,1),6.68],[Date.UTC(2014,11,1),6.32],[Date.UTC(2015,2,1),6.24],[Date.UTC(2015,5,1),6.34],[Date.UTC(2015,8,1),6.45],[Date.UTC(2015,11,1),6.42],[Date.UTC(2016,2,1),6.28],[Date.UTC(2016,5,1),6.10],[Date.UTC(2016,8,1),5.98],[Date.UTC(2016,11,1),6.01],[Date.UTC(2017,2,1),6.06],[Date.UTC(2017,5,1),6.17],[Date.UTC(2017,8,1),6.30],[Date.UTC(2017,11,1),6.36],[Date.UTC(2018,2,1),6.47]]
    },{
        index: 1,
        zIndex: 1,
        legendIndex: 1,
        name: 'Ohio',
        dataname: 'inccdelinq',
        legendname: 'Ohio',
        tooltipname: 'Ohio',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2008,2,1),8.12],[Date.UTC(2008,5,1),8.19],[Date.UTC(2008,8,1),8.04],[Date.UTC(2008,11,1),7.97],[Date.UTC(2009,2,1),8.08],[Date.UTC(2009,5,1),8.20],[Date.UTC(2009,8,1),8.56],[Date.UTC(2009,11,1),8.93],[Date.UTC(2010,2,1),9.20],[Date.UTC(2010,5,1),9.40],[Date.UTC(2010,8,1),9.47],[Date.UTC(2010,11,1),9.48],[Date.UTC(2011,2,1),9.36],[Date.UTC(2011,5,1),9.03],[Date.UTC(2011,8,1),8.59],[Date.UTC(2011,11,1),8.13],[Date.UTC(2012,2,1),7.70],[Date.UTC(2012,5,1),7.46],[Date.UTC(2012,8,1),7.34],[Date.UTC(2012,11,1),7.63],[Date.UTC(2013,2,1),7.91],[Date.UTC(2013,5,1),8.18],[Date.UTC(2013,8,1),8.45],[Date.UTC(2013,11,1),8.33],[Date.UTC(2014,2,1),8.06],[Date.UTC(2014,5,1),7.69],[Date.UTC(2014,8,1),7.33],[Date.UTC(2014,11,1),6.95],[Date.UTC(2015,2,1),6.92],[Date.UTC(2015,5,1),6.99],[Date.UTC(2015,8,1),7.06],[Date.UTC(2015,11,1),7.05],[Date.UTC(2016,2,1),6.94],[Date.UTC(2016,5,1),6.83],[Date.UTC(2016,8,1),6.74],[Date.UTC(2016,11,1),6.72],[Date.UTC(2017,2,1),6.71],[Date.UTC(2017,5,1),6.75],[Date.UTC(2017,8,1),6.82],[Date.UTC(2017,11,1),6.90],[Date.UTC(2018,2,1),6.98]]
    },{
        index: 2,
        zIndex: 0,
        legendIndex: 2,
        name: 'United States',
        dataname: 'usccdelinq',
        legendname: 'United States',
        tooltipname: 'US',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2008,2,1),8.63],[Date.UTC(2008,5,1),8.80],[Date.UTC(2008,8,1),8.78],[Date.UTC(2008,11,1),8.91],[Date.UTC(2009,2,1),9.38],[Date.UTC(2009,5,1),9.84],[Date.UTC(2009,8,1),10.58],[Date.UTC(2009,11,1),11.32],[Date.UTC(2010,2,1),11.93],[Date.UTC(2010,5,1),12.39],[Date.UTC(2010,8,1),12.66],[Date.UTC(2010,11,1),12.75],[Date.UTC(2011,2,1),12.64],[Date.UTC(2011,5,1),12.32],[Date.UTC(2011,8,1),11.89],[Date.UTC(2011,11,1),11.43],[Date.UTC(2012,2,1),10.95],[Date.UTC(2012,5,1),10.62],[Date.UTC(2012,8,1),10.37],[Date.UTC(2012,11,1),10.20],[Date.UTC(2013,2,1),9.99],[Date.UTC(2013,5,1),9.77],[Date.UTC(2013,8,1),9.59],[Date.UTC(2013,11,1),9.36],[Date.UTC(2014,2,1),8.99],[Date.UTC(2014,5,1),8.51],[Date.UTC(2014,8,1),8.04],[Date.UTC(2014,11,1),7.51],[Date.UTC(2015,2,1),7.48],[Date.UTC(2015,5,1),7.62],[Date.UTC(2015,8,1),7.77],[Date.UTC(2015,11,1),7.85],[Date.UTC(2016,2,1),7.66],[Date.UTC(2016,5,1),7.41],[Date.UTC(2016,8,1),7.20],[Date.UTC(2016,11,1),7.10],[Date.UTC(2017,2,1),7.06],[Date.UTC(2017,5,1),7.07],[Date.UTC(2017,8,1),7.12],[Date.UTC(2017,11,1),7.19],[Date.UTC(2018,2,1),7.28]]
    }]
};