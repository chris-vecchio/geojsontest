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
        min: 38000,
        max: 52000,
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
        name: 'Cincinnati',
        dataname: 'ctiincome',
        legendname: 'Cincinnati',
        tooltipname: 'Cincinnati',
        tooltipvalueprefix: '$',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2006,5,1),47486.22],[Date.UTC(2006,6,1),47490.08],[Date.UTC(2006,7,1),47493.94],[Date.UTC(2006,8,1),47497.80],[Date.UTC(2006,9,1),47501.66],[Date.UTC(2006,10,1),47505.52],[Date.UTC(2006,11,1),47509.38],[Date.UTC(2007,0,1),47513.24],[Date.UTC(2007,1,1),47517.10],[Date.UTC(2007,2,1),47520.96],[Date.UTC(2007,3,1),47524.82],[Date.UTC(2007,4,1),47528.68],[Date.UTC(2007,5,1),47532.54],[Date.UTC(2007,6,1),47478.18],[Date.UTC(2007,7,1),47423.82],[Date.UTC(2007,8,1),47369.45],[Date.UTC(2007,9,1),47315.09],[Date.UTC(2007,10,1),47260.73],[Date.UTC(2007,11,1),47206.37],[Date.UTC(2008,0,1),47152.01],[Date.UTC(2008,1,1),47097.64],[Date.UTC(2008,2,1),47043.28],[Date.UTC(2008,3,1),46988.92],[Date.UTC(2008,4,1),46934.56],[Date.UTC(2008,5,1),46880.20],[Date.UTC(2008,6,1),46754.92],[Date.UTC(2008,7,1),46629.65],[Date.UTC(2008,8,1),46504.38],[Date.UTC(2008,9,1),46379.11],[Date.UTC(2008,10,1),46253.84],[Date.UTC(2008,11,1),46128.56],[Date.UTC(2009,0,1),46003.29],[Date.UTC(2009,1,1),45878.02],[Date.UTC(2009,2,1),45752.75],[Date.UTC(2009,3,1),45627.47],[Date.UTC(2009,4,1),45502.20],[Date.UTC(2009,5,1),45376.93],[Date.UTC(2009,6,1),45432.42],[Date.UTC(2009,7,1),45487.91],[Date.UTC(2009,8,1),45543.40],[Date.UTC(2009,9,1),45598.88],[Date.UTC(2009,10,1),45654.37],[Date.UTC(2009,11,1),45709.86],[Date.UTC(2010,0,1),45765.35],[Date.UTC(2010,1,1),45820.84],[Date.UTC(2010,2,1),45876.33],[Date.UTC(2010,3,1),45931.82],[Date.UTC(2010,4,1),45987.30],[Date.UTC(2010,5,1),46042.79],[Date.UTC(2010,6,1),46180.78],[Date.UTC(2010,7,1),46318.77],[Date.UTC(2010,8,1),46456.75],[Date.UTC(2010,9,1),46594.74],[Date.UTC(2010,10,1),46732.73],[Date.UTC(2010,11,1),46870.71],[Date.UTC(2011,0,1),47008.70],[Date.UTC(2011,1,1),47146.69],[Date.UTC(2011,2,1),47284.67],[Date.UTC(2011,3,1),47422.66],[Date.UTC(2011,4,1),47560.65],[Date.UTC(2011,5,1),47698.63],[Date.UTC(2011,6,1),47745.64],[Date.UTC(2011,7,1),47792.65],[Date.UTC(2011,8,1),47839.66],[Date.UTC(2011,9,1),47886.67],[Date.UTC(2011,10,1),47933.67],[Date.UTC(2011,11,1),47980.68],[Date.UTC(2012,0,1),48027.69],[Date.UTC(2012,1,1),48074.70],[Date.UTC(2012,2,1),48121.70],[Date.UTC(2012,3,1),48168.71],[Date.UTC(2012,4,1),48215.72],[Date.UTC(2012,5,1),48262.73],[Date.UTC(2012,6,1),48226.58],[Date.UTC(2012,7,1),48190.44],[Date.UTC(2012,8,1),48154.29],[Date.UTC(2012,9,1),48118.14],[Date.UTC(2012,10,1),48082.00],[Date.UTC(2012,11,1),48045.85],[Date.UTC(2013,0,1),48009.70],[Date.UTC(2013,1,1),47973.56],[Date.UTC(2013,2,1),47937.41],[Date.UTC(2013,3,1),47901.27],[Date.UTC(2013,4,1),47865.12],[Date.UTC(2013,5,1),47828.97],[Date.UTC(2013,6,1),47886.77],[Date.UTC(2013,7,1),47944.56],[Date.UTC(2013,8,1),48002.35],[Date.UTC(2013,9,1),48060.15],[Date.UTC(2013,10,1),48117.94],[Date.UTC(2013,11,1),48175.73],[Date.UTC(2014,0,1),48233.53],[Date.UTC(2014,1,1),48291.32],[Date.UTC(2014,2,1),48349.11],[Date.UTC(2014,3,1),48406.91],[Date.UTC(2014,4,1),48464.70],[Date.UTC(2014,5,1),48522.49],[Date.UTC(2014,6,1),48674.41],[Date.UTC(2014,7,1),48826.32],[Date.UTC(2014,8,1),48978.23],[Date.UTC(2014,9,1),49130.15],[Date.UTC(2014,10,1),49282.06],[Date.UTC(2014,11,1),49433.97],[Date.UTC(2015,0,1),49585.89],[Date.UTC(2015,1,1),49737.80],[Date.UTC(2015,2,1),49889.72],[Date.UTC(2015,3,1),50041.63],[Date.UTC(2015,4,1),50193.54],[Date.UTC(2015,5,1),50345.46],[Date.UTC(2015,6,1),50369.58],[Date.UTC(2015,7,1),50393.70],[Date.UTC(2015,8,1),50417.81],[Date.UTC(2015,9,1),50441.93],[Date.UTC(2015,10,1),50466.05],[Date.UTC(2015,11,1),50490.17],[Date.UTC(2016,0,1),50514.29],[Date.UTC(2016,1,1),50538.41],[Date.UTC(2016,2,1),50562.53],[Date.UTC(2016,3,1),50586.65],[Date.UTC(2016,4,1),50610.77],[Date.UTC(2016,5,1),50634.89]]
    },{
        index: 1,
        zIndex: 1,
        legendIndex: 1,
        name: 'Ohio',
        dataname: 'inincome',
        legendname: 'Ohio',
        tooltipname: 'Ohio',
        tooltipvalueprefix: '$',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2006,5,1),40561.33],[Date.UTC(2006,6,1),40564.85],[Date.UTC(2006,7,1),40568.37],[Date.UTC(2006,8,1),40571.89],[Date.UTC(2006,9,1),40575.41],[Date.UTC(2006,10,1),40578.93],[Date.UTC(2006,11,1),40582.45],[Date.UTC(2007,0,1),40585.97],[Date.UTC(2007,1,1),40589.48],[Date.UTC(2007,2,1),40593.00],[Date.UTC(2007,3,1),40596.52],[Date.UTC(2007,4,1),40600.04],[Date.UTC(2007,5,1),40603.56],[Date.UTC(2007,6,1),40616.01],[Date.UTC(2007,7,1),40628.46],[Date.UTC(2007,8,1),40640.91],[Date.UTC(2007,9,1),40653.36],[Date.UTC(2007,10,1),40665.81],[Date.UTC(2007,11,1),40678.26],[Date.UTC(2008,0,1),40690.71],[Date.UTC(2008,1,1),40703.16],[Date.UTC(2008,2,1),40715.61],[Date.UTC(2008,3,1),40728.06],[Date.UTC(2008,4,1),40740.51],[Date.UTC(2008,5,1),40752.96],[Date.UTC(2008,6,1),40663.00],[Date.UTC(2008,7,1),40573.05],[Date.UTC(2008,8,1),40483.09],[Date.UTC(2008,9,1),40393.13],[Date.UTC(2008,10,1),40303.18],[Date.UTC(2008,11,1),40213.22],[Date.UTC(2009,0,1),40123.27],[Date.UTC(2009,1,1),40033.31],[Date.UTC(2009,2,1),39943.35],[Date.UTC(2009,3,1),39853.40],[Date.UTC(2009,4,1),39763.44],[Date.UTC(2009,5,1),39673.48],[Date.UTC(2009,6,1),39715.39],[Date.UTC(2009,7,1),39757.30],[Date.UTC(2009,8,1),39799.21],[Date.UTC(2009,9,1),39841.11],[Date.UTC(2009,10,1),39883.02],[Date.UTC(2009,11,1),39924.93],[Date.UTC(2010,0,1),39966.84],[Date.UTC(2010,1,1),40008.75],[Date.UTC(2010,2,1),40050.65],[Date.UTC(2010,3,1),40092.56],[Date.UTC(2010,4,1),40134.47],[Date.UTC(2010,5,1),40176.38],[Date.UTC(2010,6,1),40275.96],[Date.UTC(2010,7,1),40375.54],[Date.UTC(2010,8,1),40475.12],[Date.UTC(2010,9,1),40574.70],[Date.UTC(2010,10,1),40674.28],[Date.UTC(2010,11,1),40773.86],[Date.UTC(2011,0,1),40873.44],[Date.UTC(2011,1,1),40973.02],[Date.UTC(2011,2,1),41072.60],[Date.UTC(2011,3,1),41172.18],[Date.UTC(2011,4,1),41271.76],[Date.UTC(2011,5,1),41371.34],[Date.UTC(2011,6,1),41442.76],[Date.UTC(2011,7,1),41514.18],[Date.UTC(2011,8,1),41585.59],[Date.UTC(2011,9,1),41657.01],[Date.UTC(2011,10,1),41728.43],[Date.UTC(2011,11,1),41799.85],[Date.UTC(2012,0,1),41871.26],[Date.UTC(2012,1,1),41942.68],[Date.UTC(2012,2,1),42014.10],[Date.UTC(2012,3,1),42085.52],[Date.UTC(2012,4,1),42156.93],[Date.UTC(2012,5,1),42228.35],[Date.UTC(2012,6,1),42206.88],[Date.UTC(2012,7,1),42185.41],[Date.UTC(2012,8,1),42163.94],[Date.UTC(2012,9,1),42142.47],[Date.UTC(2012,10,1),42121.00],[Date.UTC(2012,11,1),42099.53],[Date.UTC(2013,0,1),42078.06],[Date.UTC(2013,1,1),42056.59],[Date.UTC(2013,2,1),42035.12],[Date.UTC(2013,3,1),42013.65],[Date.UTC(2013,4,1),41992.18],[Date.UTC(2013,5,1),41970.71],[Date.UTC(2013,6,1),42031.57],[Date.UTC(2013,7,1),42092.44],[Date.UTC(2013,8,1),42153.30],[Date.UTC(2013,9,1),42214.16],[Date.UTC(2013,10,1),42275.03],[Date.UTC(2013,11,1),42335.89],[Date.UTC(2014,0,1),42396.76],[Date.UTC(2014,1,1),42457.62],[Date.UTC(2014,2,1),42518.49],[Date.UTC(2014,3,1),42579.35],[Date.UTC(2014,4,1),42640.21],[Date.UTC(2014,5,1),42701.08],[Date.UTC(2014,6,1),42817.71],[Date.UTC(2014,7,1),42934.33],[Date.UTC(2014,8,1),43050.96],[Date.UTC(2014,9,1),43167.59],[Date.UTC(2014,10,1),43284.22],[Date.UTC(2014,11,1),43400.84],[Date.UTC(2015,0,1),43517.47],[Date.UTC(2015,1,1),43634.10],[Date.UTC(2015,2,1),43750.73],[Date.UTC(2015,3,1),43867.36],[Date.UTC(2015,4,1),43983.98],[Date.UTC(2015,5,1),44100.61],[Date.UTC(2015,6,1),44161.61],[Date.UTC(2015,7,1),44222.61],[Date.UTC(2015,8,1),44283.61],[Date.UTC(2015,9,1),44344.61],[Date.UTC(2015,10,1),44405.60],[Date.UTC(2015,11,1),44466.60],[Date.UTC(2016,0,1),44527.60],[Date.UTC(2016,1,1),44588.60],[Date.UTC(2016,2,1),44649.60],[Date.UTC(2016,3,1),44710.60],[Date.UTC(2016,4,1),44771.60],[Date.UTC(2016,5,1),44832.59]]
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