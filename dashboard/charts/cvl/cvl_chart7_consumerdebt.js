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
        text: 'Consumer Debt',
        align: 'left',
        margin: 5,
        style: {
            fontSize: '16px',
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
                    s += '   ' + Highcharts.numberFormat(this.y, 0, '.', ',');
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
            text: 'Thousands of dollars<br><span style="font-size: 11px;">4-quarter moving average</span>',
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
        min: 25000,
        max: 55000,
        tickInterval: 5000
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
        name: 'Cleveland',
        dataname: 'cvldebt',
        legendname: 'Cleveland',
        tooltipname: 'Cleveland',
        tooltipvalueprefix: '$',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2008,2,1),38342.64],[Date.UTC(2008,5,1),38445.74],[Date.UTC(2008,8,1),38432.78],[Date.UTC(2008,11,1),38537.27],[Date.UTC(2009,2,1),38359.64],[Date.UTC(2009,5,1),38167.31],[Date.UTC(2009,8,1),37995.68],[Date.UTC(2009,11,1),37482.52],[Date.UTC(2010,2,1),36924.18],[Date.UTC(2010,5,1),36394.50],[Date.UTC(2010,8,1),35934.11],[Date.UTC(2010,11,1),35457.26],[Date.UTC(2011,2,1),34946.42],[Date.UTC(2011,5,1),34400.62],[Date.UTC(2011,8,1),33873.83],[Date.UTC(2011,11,1),33409.24],[Date.UTC(2012,2,1),32998.65],[Date.UTC(2012,5,1),32581.30],[Date.UTC(2012,8,1),32177.17],[Date.UTC(2012,11,1),31732.22],[Date.UTC(2013,2,1),31163.57],[Date.UTC(2013,5,1),30531.66],[Date.UTC(2013,8,1),29721.71],[Date.UTC(2013,11,1),29195.49],[Date.UTC(2014,2,1),28848.59],[Date.UTC(2014,5,1),28588.36],[Date.UTC(2014,8,1),28613.92],[Date.UTC(2014,11,1),28531.10],[Date.UTC(2015,2,1),28552.33],[Date.UTC(2015,5,1),28559.13],[Date.UTC(2015,8,1),28583.61],[Date.UTC(2015,11,1),28618.59],[Date.UTC(2016,2,1),28602.26],[Date.UTC(2016,5,1),28661.30],[Date.UTC(2016,8,1),28626.11],[Date.UTC(2016,11,1),28459.81],[Date.UTC(2017,2,1),28186.28],[Date.UTC(2017,5,1),28093.44],[Date.UTC(2017,8,1),28050.05],[Date.UTC(2017,11,1),28124.29],[Date.UTC(2018,2,1),28334.78]]
    },{
        index: 1,
        zIndex: 1,
        legendIndex: 1,
        name: 'Ohio',
        dataname: 'ohdebt',
        legendname: 'Ohio',
        tooltipname: 'Ohio',
        tooltipvalueprefix: '$',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2008,2,1),35520.46],[Date.UTC(2008,5,1),35678.26],[Date.UTC(2008,8,1),35816.87],[Date.UTC(2008,11,1),36003.67],[Date.UTC(2009,2,1),35870.54],[Date.UTC(2009,5,1),35717.60],[Date.UTC(2009,8,1),35569.62],[Date.UTC(2009,11,1),35127.11],[Date.UTC(2010,2,1),34666.15],[Date.UTC(2010,5,1),34227.39],[Date.UTC(2010,8,1),33822.77],[Date.UTC(2010,11,1),33397.70],[Date.UTC(2011,2,1),32959.11],[Date.UTC(2011,5,1),32480.71],[Date.UTC(2011,8,1),32040.67],[Date.UTC(2011,11,1),31676.66],[Date.UTC(2012,2,1),31308.51],[Date.UTC(2012,5,1),31011.71],[Date.UTC(2012,8,1),30733.59],[Date.UTC(2012,11,1),30372.85],[Date.UTC(2013,2,1),29914.68],[Date.UTC(2013,5,1),29358.01],[Date.UTC(2013,8,1),28653.22],[Date.UTC(2013,11,1),28222.41],[Date.UTC(2014,2,1),27936.87],[Date.UTC(2014,5,1),27738.05],[Date.UTC(2014,8,1),27754.46],[Date.UTC(2014,11,1),27711.63],[Date.UTC(2015,2,1),27766.23],[Date.UTC(2015,5,1),27796.19],[Date.UTC(2015,8,1),27894.15],[Date.UTC(2015,11,1),27968.90],[Date.UTC(2016,2,1),27995.38],[Date.UTC(2016,5,1),28032.73],[Date.UTC(2016,8,1),27956.07],[Date.UTC(2016,11,1),27822.99],[Date.UTC(2017,2,1),27613.82],[Date.UTC(2017,5,1),27495.70],[Date.UTC(2017,8,1),27524.65],[Date.UTC(2017,11,1),27590.59],[Date.UTC(2018,2,1),27749.74]]
    },{
        index: 2,
        zIndex: 0,
        legendIndex: 2,
        name: 'United States',
        dataname: 'usdebt',
        legendname: 'United States',
        tooltipname: 'US',
        tooltipvalueprefix: '$',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2008,2,1),50586.19],[Date.UTC(2008,5,1),51203.14],[Date.UTC(2008,8,1),51461.26],[Date.UTC(2008,11,1),51665.28],[Date.UTC(2009,2,1),51669.56],[Date.UTC(2009,5,1),51492.25],[Date.UTC(2009,8,1),51195.82],[Date.UTC(2009,11,1),50459.25],[Date.UTC(2010,2,1),49666.16],[Date.UTC(2010,5,1),48943.95],[Date.UTC(2010,8,1),48284.85],[Date.UTC(2010,11,1),47520.78],[Date.UTC(2011,2,1),46795.03],[Date.UTC(2011,5,1),46040.65],[Date.UTC(2011,8,1),45344.19],[Date.UTC(2011,11,1),44784.10],[Date.UTC(2012,2,1),44173.37],[Date.UTC(2012,5,1),43660.91],[Date.UTC(2012,8,1),43138.24],[Date.UTC(2012,11,1),42719.57],[Date.UTC(2013,2,1),42177.24],[Date.UTC(2013,5,1),41605.25],[Date.UTC(2013,8,1),40888.89],[Date.UTC(2013,11,1),40368.71],[Date.UTC(2014,2,1),40075.15],[Date.UTC(2014,5,1),39763.37],[Date.UTC(2014,8,1),39758.71],[Date.UTC(2014,11,1),39686.31],[Date.UTC(2015,2,1),39680.96],[Date.UTC(2015,5,1),39683.51],[Date.UTC(2015,8,1),39793.13],[Date.UTC(2015,11,1),39822.40],[Date.UTC(2016,2,1),39913.94],[Date.UTC(2016,5,1),40053.17],[Date.UTC(2016,8,1),39995.83],[Date.UTC(2016,11,1),39981.65],[Date.UTC(2017,2,1),39929.45],[Date.UTC(2017,5,1),40015.76],[Date.UTC(2017,8,1),40211.30],[Date.UTC(2017,11,1),40433.37],[Date.UTC(2018,2,1),40598.11]]
    }]
};