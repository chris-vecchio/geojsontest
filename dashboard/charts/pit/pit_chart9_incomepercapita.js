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
        text: 'Income Per Capita',
        align: 'left',
        margin: 5,
        style: {
            fontSize: '14px',
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
            text: 'Thousands of dollars',
            style: {
                fontSize: '11px',
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
            value: 0,
            color: 'rgba(145,145,145,1)',
            width: 2
        }],
        min: 44000,
        max: 54000,
        tickInterval: 2000
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
        name: 'Pittsburgh',
        dataname: 'pitincome',
        legendname: 'Pittsburgh',
        tooltipname: 'Pittsburgh',
        tooltipvalueprefix: '$',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2006,5,1),47544.02],[Date.UTC(2006,6,1),47639.12],[Date.UTC(2006,7,1),47734.23],[Date.UTC(2006,8,1),47829.33],[Date.UTC(2006,9,1),47924.44],[Date.UTC(2006,10,1),48019.55],[Date.UTC(2006,11,1),48114.65],[Date.UTC(2007,0,1),48209.76],[Date.UTC(2007,1,1),48304.86],[Date.UTC(2007,2,1),48399.97],[Date.UTC(2007,3,1),48495.08],[Date.UTC(2007,4,1),48590.18],[Date.UTC(2007,5,1),48685.29],[Date.UTC(2007,6,1),48730.10],[Date.UTC(2007,7,1),48774.91],[Date.UTC(2007,8,1),48819.72],[Date.UTC(2007,9,1),48864.53],[Date.UTC(2007,10,1),48909.35],[Date.UTC(2007,11,1),48954.16],[Date.UTC(2008,0,1),48998.97],[Date.UTC(2008,1,1),49043.78],[Date.UTC(2008,2,1),49088.59],[Date.UTC(2008,3,1),49133.40],[Date.UTC(2008,4,1),49178.21],[Date.UTC(2008,5,1),49223.02],[Date.UTC(2008,6,1),49126.60],[Date.UTC(2008,7,1),49030.17],[Date.UTC(2008,8,1),48933.74],[Date.UTC(2008,9,1),48837.32],[Date.UTC(2008,10,1),48740.89],[Date.UTC(2008,11,1),48644.46],[Date.UTC(2009,0,1),48548.03],[Date.UTC(2009,1,1),48451.61],[Date.UTC(2009,2,1),48355.18],[Date.UTC(2009,3,1),48258.75],[Date.UTC(2009,4,1),48162.33],[Date.UTC(2009,5,1),48065.90],[Date.UTC(2009,6,1),48135.23],[Date.UTC(2009,7,1),48204.56],[Date.UTC(2009,8,1),48273.89],[Date.UTC(2009,9,1),48343.22],[Date.UTC(2009,10,1),48412.55],[Date.UTC(2009,11,1),48481.88],[Date.UTC(2010,0,1),48551.21],[Date.UTC(2010,1,1),48620.54],[Date.UTC(2010,2,1),48689.87],[Date.UTC(2010,3,1),48759.20],[Date.UTC(2010,4,1),48828.53],[Date.UTC(2010,5,1),48897.86],[Date.UTC(2010,6,1),48983.39],[Date.UTC(2010,7,1),49068.92],[Date.UTC(2010,8,1),49154.45],[Date.UTC(2010,9,1),49239.97],[Date.UTC(2010,10,1),49325.50],[Date.UTC(2010,11,1),49411.03],[Date.UTC(2011,0,1),49496.55],[Date.UTC(2011,1,1),49582.08],[Date.UTC(2011,2,1),49667.61],[Date.UTC(2011,3,1),49753.14],[Date.UTC(2011,4,1),49838.66],[Date.UTC(2011,5,1),49924.19],[Date.UTC(2011,6,1),49990.32],[Date.UTC(2011,7,1),50056.46],[Date.UTC(2011,8,1),50122.59],[Date.UTC(2011,9,1),50188.73],[Date.UTC(2011,10,1),50254.86],[Date.UTC(2011,11,1),50321.00],[Date.UTC(2012,0,1),50387.13],[Date.UTC(2012,1,1),50453.27],[Date.UTC(2012,2,1),50519.40],[Date.UTC(2012,3,1),50585.54],[Date.UTC(2012,4,1),50651.67],[Date.UTC(2012,5,1),50717.81],[Date.UTC(2012,6,1),50670.01],[Date.UTC(2012,7,1),50622.22],[Date.UTC(2012,8,1),50574.42],[Date.UTC(2012,9,1),50526.63],[Date.UTC(2012,10,1),50478.84],[Date.UTC(2012,11,1),50431.04],[Date.UTC(2013,0,1),50383.25],[Date.UTC(2013,1,1),50335.45],[Date.UTC(2013,2,1),50287.66],[Date.UTC(2013,3,1),50239.87],[Date.UTC(2013,4,1),50192.07],[Date.UTC(2013,5,1),50144.28],[Date.UTC(2013,6,1),50236.75],[Date.UTC(2013,7,1),50329.22],[Date.UTC(2013,8,1),50421.69],[Date.UTC(2013,9,1),50514.17],[Date.UTC(2013,10,1),50606.64],[Date.UTC(2013,11,1),50699.11],[Date.UTC(2014,0,1),50791.58],[Date.UTC(2014,1,1),50884.05],[Date.UTC(2014,2,1),50976.53],[Date.UTC(2014,3,1),51069.00],[Date.UTC(2014,4,1),51161.47],[Date.UTC(2014,5,1),51253.94],[Date.UTC(2014,6,1),51427.15],[Date.UTC(2014,7,1),51600.37],[Date.UTC(2014,8,1),51773.58],[Date.UTC(2014,9,1),51946.80],[Date.UTC(2014,10,1),52120.01],[Date.UTC(2014,11,1),52293.22],[Date.UTC(2015,0,1),52466.44],[Date.UTC(2015,1,1),52639.65],[Date.UTC(2015,2,1),52812.86],[Date.UTC(2015,3,1),52986.08],[Date.UTC(2015,4,1),53159.29],[Date.UTC(2015,5,1),53332.50],[Date.UTC(2015,6,1),53326.16],[Date.UTC(2015,7,1),53319.82],[Date.UTC(2015,8,1),53313.48],[Date.UTC(2015,9,1),53307.13],[Date.UTC(2015,10,1),53300.79],[Date.UTC(2015,11,1),53294.45],[Date.UTC(2016,0,1),53288.11],[Date.UTC(2016,1,1),53281.76],[Date.UTC(2016,2,1),53275.42],[Date.UTC(2016,3,1),53269.08],[Date.UTC(2016,4,1),53262.74],[Date.UTC(2016,5,1),53256.39]]
    },{
        index: 1,
        zIndex: 1,
        legendIndex: 1,
        name: 'Pennsylvania',
        dataname: 'paincome',
        legendname: 'Pennsylvania',
        tooltipname: 'Pennsylvania',
        tooltipvalueprefix: '$',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2006,5,1),47143.89],[Date.UTC(2006,6,1),47260.01],[Date.UTC(2006,7,1),47376.13],[Date.UTC(2006,8,1),47492.25],[Date.UTC(2006,9,1),47608.37],[Date.UTC(2006,10,1),47724.49],[Date.UTC(2006,11,1),47840.60],[Date.UTC(2007,0,1),47956.72],[Date.UTC(2007,1,1),48072.84],[Date.UTC(2007,2,1),48188.96],[Date.UTC(2007,3,1),48305.08],[Date.UTC(2007,4,1),48421.20],[Date.UTC(2007,5,1),48537.32],[Date.UTC(2007,6,1),48545.35],[Date.UTC(2007,7,1),48553.38],[Date.UTC(2007,8,1),48561.41],[Date.UTC(2007,9,1),48569.45],[Date.UTC(2007,10,1),48577.48],[Date.UTC(2007,11,1),48585.51],[Date.UTC(2008,0,1),48593.54],[Date.UTC(2008,1,1),48601.57],[Date.UTC(2008,2,1),48609.60],[Date.UTC(2008,3,1),48617.64],[Date.UTC(2008,4,1),48625.67],[Date.UTC(2008,5,1),48633.70],[Date.UTC(2008,6,1),48528.14],[Date.UTC(2008,7,1),48422.57],[Date.UTC(2008,8,1),48317.01],[Date.UTC(2008,9,1),48211.44],[Date.UTC(2008,10,1),48105.88],[Date.UTC(2008,11,1),48000.32],[Date.UTC(2009,0,1),47894.75],[Date.UTC(2009,1,1),47789.19],[Date.UTC(2009,2,1),47683.63],[Date.UTC(2009,3,1),47578.06],[Date.UTC(2009,4,1),47472.50],[Date.UTC(2009,5,1),47366.93],[Date.UTC(2009,6,1),47428.27],[Date.UTC(2009,7,1),47489.60],[Date.UTC(2009,8,1),47550.94],[Date.UTC(2009,9,1),47612.28],[Date.UTC(2009,10,1),47673.61],[Date.UTC(2009,11,1),47734.95],[Date.UTC(2010,0,1),47796.28],[Date.UTC(2010,1,1),47857.62],[Date.UTC(2010,2,1),47918.95],[Date.UTC(2010,3,1),47980.29],[Date.UTC(2010,4,1),48041.62],[Date.UTC(2010,5,1),48102.96],[Date.UTC(2010,6,1),48167.14],[Date.UTC(2010,7,1),48231.32],[Date.UTC(2010,8,1),48295.50],[Date.UTC(2010,9,1),48359.68],[Date.UTC(2010,10,1),48423.86],[Date.UTC(2010,11,1),48488.04],[Date.UTC(2011,0,1),48552.22],[Date.UTC(2011,1,1),48616.39],[Date.UTC(2011,2,1),48680.57],[Date.UTC(2011,3,1),48744.75],[Date.UTC(2011,4,1),48808.93],[Date.UTC(2011,5,1),48873.11],[Date.UTC(2011,6,1),48959.05],[Date.UTC(2011,7,1),49044.99],[Date.UTC(2011,8,1),49130.94],[Date.UTC(2011,9,1),49216.88],[Date.UTC(2011,10,1),49302.82],[Date.UTC(2011,11,1),49388.76],[Date.UTC(2012,0,1),49474.70],[Date.UTC(2012,1,1),49560.64],[Date.UTC(2012,2,1),49646.58],[Date.UTC(2012,3,1),49732.52],[Date.UTC(2012,4,1),49818.46],[Date.UTC(2012,5,1),49904.40],[Date.UTC(2012,6,1),49866.28],[Date.UTC(2012,7,1),49828.16],[Date.UTC(2012,8,1),49790.03],[Date.UTC(2012,9,1),49751.91],[Date.UTC(2012,10,1),49713.79],[Date.UTC(2012,11,1),49675.67],[Date.UTC(2013,0,1),49637.55],[Date.UTC(2013,1,1),49599.42],[Date.UTC(2013,2,1),49561.30],[Date.UTC(2013,3,1),49523.18],[Date.UTC(2013,4,1),49485.06],[Date.UTC(2013,5,1),49446.93],[Date.UTC(2013,6,1),49543.76],[Date.UTC(2013,7,1),49640.59],[Date.UTC(2013,8,1),49737.41],[Date.UTC(2013,9,1),49834.24],[Date.UTC(2013,10,1),49931.06],[Date.UTC(2013,11,1),50027.89],[Date.UTC(2014,0,1),50124.71],[Date.UTC(2014,1,1),50221.54],[Date.UTC(2014,2,1),50318.36],[Date.UTC(2014,3,1),50415.19],[Date.UTC(2014,4,1),50512.01],[Date.UTC(2014,5,1),50608.84],[Date.UTC(2014,6,1),50764.98],[Date.UTC(2014,7,1),50921.13],[Date.UTC(2014,8,1),51077.27],[Date.UTC(2014,9,1),51233.42],[Date.UTC(2014,10,1),51389.56],[Date.UTC(2014,11,1),51545.71],[Date.UTC(2015,0,1),51701.86],[Date.UTC(2015,1,1),51858.00],[Date.UTC(2015,2,1),52014.15],[Date.UTC(2015,3,1),52170.29],[Date.UTC(2015,4,1),52326.44],[Date.UTC(2015,5,1),52482.58],[Date.UTC(2015,6,1),52507.49],[Date.UTC(2015,7,1),52532.41],[Date.UTC(2015,8,1),52557.32],[Date.UTC(2015,9,1),52582.23],[Date.UTC(2015,10,1),52607.14],[Date.UTC(2015,11,1),52632.05],[Date.UTC(2016,0,1),52656.96],[Date.UTC(2016,1,1),52681.87],[Date.UTC(2016,2,1),52706.79],[Date.UTC(2016,3,1),52731.70],[Date.UTC(2016,4,1),52756.61],[Date.UTC(2016,5,1),52781.52]]
    },{
        index: 2,
        zIndex: 0,
        legendIndex: 2,
        name: 'United States',
        dataname: 'usincome',
        legendname: 'United States',
        tooltipname: 'US',
        tooltipvalueprefix: '$',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2006,5,1),47248.28],[Date.UTC(2006,6,1),47307.44],[Date.UTC(2006,7,1),47366.59],[Date.UTC(2006,8,1),47425.74],[Date.UTC(2006,9,1),47484.90],[Date.UTC(2006,10,1),47544.05],[Date.UTC(2006,11,1),47603.20],[Date.UTC(2007,0,1),47662.35],[Date.UTC(2007,1,1),47721.51],[Date.UTC(2007,2,1),47780.66],[Date.UTC(2007,3,1),47839.81],[Date.UTC(2007,4,1),47898.97],[Date.UTC(2007,5,1),47958.12],[Date.UTC(2007,6,1),47932.18],[Date.UTC(2007,7,1),47906.24],[Date.UTC(2007,8,1),47880.30],[Date.UTC(2007,9,1),47854.36],[Date.UTC(2007,10,1),47828.42],[Date.UTC(2007,11,1),47802.48],[Date.UTC(2008,0,1),47776.54],[Date.UTC(2008,1,1),47750.60],[Date.UTC(2008,2,1),47724.66],[Date.UTC(2008,3,1),47698.72],[Date.UTC(2008,4,1),47672.78],[Date.UTC(2008,5,1),47646.84],[Date.UTC(2008,6,1),47495.56],[Date.UTC(2008,7,1),47344.27],[Date.UTC(2008,8,1),47192.99],[Date.UTC(2008,9,1),47041.71],[Date.UTC(2008,10,1),46890.43],[Date.UTC(2008,11,1),46739.14],[Date.UTC(2009,0,1),46587.86],[Date.UTC(2009,1,1),46436.58],[Date.UTC(2009,2,1),46285.30],[Date.UTC(2009,3,1),46134.01],[Date.UTC(2009,4,1),45982.73],[Date.UTC(2009,5,1),45831.45],[Date.UTC(2009,6,1),45855.93],[Date.UTC(2009,7,1),45880.41],[Date.UTC(2009,8,1),45904.90],[Date.UTC(2009,9,1),45929.38],[Date.UTC(2009,10,1),45953.87],[Date.UTC(2009,11,1),45978.35],[Date.UTC(2010,0,1),46002.83],[Date.UTC(2010,1,1),46027.32],[Date.UTC(2010,2,1),46051.80],[Date.UTC(2010,3,1),46076.29],[Date.UTC(2010,4,1),46100.77],[Date.UTC(2010,5,1),46125.25],[Date.UTC(2010,6,1),46209.76],[Date.UTC(2010,7,1),46294.27],[Date.UTC(2010,8,1),46378.77],[Date.UTC(2010,9,1),46463.28],[Date.UTC(2010,10,1),46547.78],[Date.UTC(2010,11,1),46632.29],[Date.UTC(2011,0,1),46716.79],[Date.UTC(2011,1,1),46801.30],[Date.UTC(2011,2,1),46885.80],[Date.UTC(2011,3,1),46970.31],[Date.UTC(2011,4,1),47054.81],[Date.UTC(2011,5,1),47139.32],[Date.UTC(2011,6,1),47224.59],[Date.UTC(2011,7,1),47309.85],[Date.UTC(2011,8,1),47395.12],[Date.UTC(2011,9,1),47480.38],[Date.UTC(2011,10,1),47565.65],[Date.UTC(2011,11,1),47650.91],[Date.UTC(2012,0,1),47736.18],[Date.UTC(2012,1,1),47821.45],[Date.UTC(2012,2,1),47906.71],[Date.UTC(2012,3,1),47991.98],[Date.UTC(2012,4,1),48077.24],[Date.UTC(2012,5,1),48162.51],[Date.UTC(2012,6,1),48122.98],[Date.UTC(2012,7,1),48083.45],[Date.UTC(2012,8,1),48043.93],[Date.UTC(2012,9,1),48004.40],[Date.UTC(2012,10,1),47964.87],[Date.UTC(2012,11,1),47925.34],[Date.UTC(2013,0,1),47885.81],[Date.UTC(2013,1,1),47846.29],[Date.UTC(2013,2,1),47806.76],[Date.UTC(2013,3,1),47767.23],[Date.UTC(2013,4,1),47727.70],[Date.UTC(2013,5,1),47688.17],[Date.UTC(2013,6,1),47800.24],[Date.UTC(2013,7,1),47912.31],[Date.UTC(2013,8,1),48024.38],[Date.UTC(2013,9,1),48136.45],[Date.UTC(2013,10,1),48248.52],[Date.UTC(2013,11,1),48360.59],[Date.UTC(2014,0,1),48472.66],[Date.UTC(2014,1,1),48584.73],[Date.UTC(2014,2,1),48696.80],[Date.UTC(2014,3,1),48808.87],[Date.UTC(2014,4,1),48920.94],[Date.UTC(2014,5,1),49033.01],[Date.UTC(2014,6,1),49198.79],[Date.UTC(2014,7,1),49364.58],[Date.UTC(2014,8,1),49530.36],[Date.UTC(2014,9,1),49696.14],[Date.UTC(2014,10,1),49861.93],[Date.UTC(2014,11,1),50027.71],[Date.UTC(2015,0,1),50193.49],[Date.UTC(2015,1,1),50359.28],[Date.UTC(2015,2,1),50525.06],[Date.UTC(2015,3,1),50690.84],[Date.UTC(2015,4,1),50856.63],[Date.UTC(2015,5,1),51022.41],[Date.UTC(2015,6,1),51036.60],[Date.UTC(2015,7,1),51050.80],[Date.UTC(2015,8,1),51064.99],[Date.UTC(2015,9,1),51079.18],[Date.UTC(2015,10,1),51093.37],[Date.UTC(2015,11,1),51107.57],[Date.UTC(2016,0,1),51121.76],[Date.UTC(2016,1,1),51135.95],[Date.UTC(2016,2,1),51150.15],[Date.UTC(2016,3,1),51164.34],[Date.UTC(2016,4,1),51178.53],[Date.UTC(2016,5,1),51192.72]]
    }]
};