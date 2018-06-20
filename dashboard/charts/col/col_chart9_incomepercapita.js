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
        min: 40000,
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
        name: 'Columbus',
        dataname: 'colincome',
        legendname: 'Columbus',
        tooltipname: 'Columbus',
        tooltipvalueprefix: '$',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2006,5,1),45012.29],[Date.UTC(2006,6,1),45039.74],[Date.UTC(2006,7,1),45067.18],[Date.UTC(2006,8,1),45094.63],[Date.UTC(2006,9,1),45122.07],[Date.UTC(2006,10,1),45149.52],[Date.UTC(2006,11,1),45176.96],[Date.UTC(2007,0,1),45204.41],[Date.UTC(2007,1,1),45231.85],[Date.UTC(2007,2,1),45259.30],[Date.UTC(2007,3,1),45286.75],[Date.UTC(2007,4,1),45314.19],[Date.UTC(2007,5,1),45341.64],[Date.UTC(2007,6,1),45295.06],[Date.UTC(2007,7,1),45248.47],[Date.UTC(2007,8,1),45201.89],[Date.UTC(2007,9,1),45155.31],[Date.UTC(2007,10,1),45108.73],[Date.UTC(2007,11,1),45062.15],[Date.UTC(2008,0,1),45015.57],[Date.UTC(2008,1,1),44968.99],[Date.UTC(2008,2,1),44922.41],[Date.UTC(2008,3,1),44875.83],[Date.UTC(2008,4,1),44829.24],[Date.UTC(2008,5,1),44782.66],[Date.UTC(2008,6,1),44695.77],[Date.UTC(2008,7,1),44608.89],[Date.UTC(2008,8,1),44522.00],[Date.UTC(2008,9,1),44435.11],[Date.UTC(2008,10,1),44348.22],[Date.UTC(2008,11,1),44261.33],[Date.UTC(2009,0,1),44174.44],[Date.UTC(2009,1,1),44087.55],[Date.UTC(2009,2,1),44000.66],[Date.UTC(2009,3,1),43913.78],[Date.UTC(2009,4,1),43826.89],[Date.UTC(2009,5,1),43740.00],[Date.UTC(2009,6,1),43752.12],[Date.UTC(2009,7,1),43764.25],[Date.UTC(2009,8,1),43776.37],[Date.UTC(2009,9,1),43788.50],[Date.UTC(2009,10,1),43800.62],[Date.UTC(2009,11,1),43812.74],[Date.UTC(2010,0,1),43824.87],[Date.UTC(2010,1,1),43836.99],[Date.UTC(2010,2,1),43849.12],[Date.UTC(2010,3,1),43861.24],[Date.UTC(2010,4,1),43873.37],[Date.UTC(2010,5,1),43885.49],[Date.UTC(2010,6,1),44017.09],[Date.UTC(2010,7,1),44148.68],[Date.UTC(2010,8,1),44280.27],[Date.UTC(2010,9,1),44411.87],[Date.UTC(2010,10,1),44543.46],[Date.UTC(2010,11,1),44675.06],[Date.UTC(2011,0,1),44806.65],[Date.UTC(2011,1,1),44938.25],[Date.UTC(2011,2,1),45069.84],[Date.UTC(2011,3,1),45201.43],[Date.UTC(2011,4,1),45333.03],[Date.UTC(2011,5,1),45464.62],[Date.UTC(2011,6,1),45599.18],[Date.UTC(2011,7,1),45733.74],[Date.UTC(2011,8,1),45868.30],[Date.UTC(2011,9,1),46002.86],[Date.UTC(2011,10,1),46137.42],[Date.UTC(2011,11,1),46271.98],[Date.UTC(2012,0,1),46406.53],[Date.UTC(2012,1,1),46541.09],[Date.UTC(2012,2,1),46675.65],[Date.UTC(2012,3,1),46810.21],[Date.UTC(2012,4,1),46944.77],[Date.UTC(2012,5,1),47079.33],[Date.UTC(2012,6,1),47049.69],[Date.UTC(2012,7,1),47020.04],[Date.UTC(2012,8,1),46990.40],[Date.UTC(2012,9,1),46960.76],[Date.UTC(2012,10,1),46931.12],[Date.UTC(2012,11,1),46901.47],[Date.UTC(2013,0,1),46871.83],[Date.UTC(2013,1,1),46842.19],[Date.UTC(2013,2,1),46812.55],[Date.UTC(2013,3,1),46782.90],[Date.UTC(2013,4,1),46753.26],[Date.UTC(2013,5,1),46723.62],[Date.UTC(2013,6,1),46782.13],[Date.UTC(2013,7,1),46840.64],[Date.UTC(2013,8,1),46899.16],[Date.UTC(2013,9,1),46957.67],[Date.UTC(2013,10,1),47016.18],[Date.UTC(2013,11,1),47074.70],[Date.UTC(2014,0,1),47133.21],[Date.UTC(2014,1,1),47191.72],[Date.UTC(2014,2,1),47250.23],[Date.UTC(2014,3,1),47308.75],[Date.UTC(2014,4,1),47367.26],[Date.UTC(2014,5,1),47425.77],[Date.UTC(2014,6,1),47591.63],[Date.UTC(2014,7,1),47757.50],[Date.UTC(2014,8,1),47923.36],[Date.UTC(2014,9,1),48089.22],[Date.UTC(2014,10,1),48255.08],[Date.UTC(2014,11,1),48420.94],[Date.UTC(2015,0,1),48586.80],[Date.UTC(2015,1,1),48752.66],[Date.UTC(2015,2,1),48918.52],[Date.UTC(2015,3,1),49084.39],[Date.UTC(2015,4,1),49250.25],[Date.UTC(2015,5,1),49416.11],[Date.UTC(2015,6,1),49435.98],[Date.UTC(2015,7,1),49455.85],[Date.UTC(2015,8,1),49475.72],[Date.UTC(2015,9,1),49495.59],[Date.UTC(2015,10,1),49515.46],[Date.UTC(2015,11,1),49535.33],[Date.UTC(2016,0,1),49555.20],[Date.UTC(2016,1,1),49575.07],[Date.UTC(2016,2,1),49594.93],[Date.UTC(2016,3,1),49614.80],[Date.UTC(2016,4,1),49634.67],[Date.UTC(2016,5,1),49654.54]]
    },{
        index: 1,
        zIndex: 1,
        legendIndex: 1,
        name: 'Ohio',
        dataname: 'ohincome',
        legendname: 'Ohio',
        tooltipname: 'Ohio',
        tooltipvalueprefix: '$',
        marker: {
            enabled: false
        },
        data: [[Date.UTC(2006,5,1),42299.41],[Date.UTC(2006,6,1),42335.89],[Date.UTC(2006,7,1),42372.37],[Date.UTC(2006,8,1),42408.85],[Date.UTC(2006,9,1),42445.33],[Date.UTC(2006,10,1),42481.81],[Date.UTC(2006,11,1),42518.29],[Date.UTC(2007,0,1),42554.77],[Date.UTC(2007,1,1),42591.25],[Date.UTC(2007,2,1),42627.73],[Date.UTC(2007,3,1),42664.21],[Date.UTC(2007,4,1),42700.69],[Date.UTC(2007,5,1),42737.17],[Date.UTC(2007,6,1),42721.15],[Date.UTC(2007,7,1),42705.12],[Date.UTC(2007,8,1),42689.09],[Date.UTC(2007,9,1),42673.06],[Date.UTC(2007,10,1),42657.04],[Date.UTC(2007,11,1),42641.01],[Date.UTC(2008,0,1),42624.98],[Date.UTC(2008,1,1),42608.96],[Date.UTC(2008,2,1),42592.93],[Date.UTC(2008,3,1),42576.90],[Date.UTC(2008,4,1),42560.88],[Date.UTC(2008,5,1),42544.85],[Date.UTC(2008,6,1),42453.37],[Date.UTC(2008,7,1),42361.90],[Date.UTC(2008,8,1),42270.42],[Date.UTC(2008,9,1),42178.94],[Date.UTC(2008,10,1),42087.47],[Date.UTC(2008,11,1),41995.99],[Date.UTC(2009,0,1),41904.51],[Date.UTC(2009,1,1),41813.04],[Date.UTC(2009,2,1),41721.56],[Date.UTC(2009,3,1),41630.08],[Date.UTC(2009,4,1),41538.61],[Date.UTC(2009,5,1),41447.13],[Date.UTC(2009,6,1),41463.15],[Date.UTC(2009,7,1),41479.16],[Date.UTC(2009,8,1),41495.18],[Date.UTC(2009,9,1),41511.20],[Date.UTC(2009,10,1),41527.21],[Date.UTC(2009,11,1),41543.23],[Date.UTC(2010,0,1),41559.24],[Date.UTC(2010,1,1),41575.26],[Date.UTC(2010,2,1),41591.27],[Date.UTC(2010,3,1),41607.29],[Date.UTC(2010,4,1),41623.31],[Date.UTC(2010,5,1),41639.32],[Date.UTC(2010,6,1),41760.78],[Date.UTC(2010,7,1),41882.23],[Date.UTC(2010,8,1),42003.69],[Date.UTC(2010,9,1),42125.15],[Date.UTC(2010,10,1),42246.60],[Date.UTC(2010,11,1),42368.06],[Date.UTC(2011,0,1),42489.52],[Date.UTC(2011,1,1),42610.97],[Date.UTC(2011,2,1),42732.43],[Date.UTC(2011,3,1),42853.88],[Date.UTC(2011,4,1),42975.34],[Date.UTC(2011,5,1),43096.80],[Date.UTC(2011,6,1),43156.36],[Date.UTC(2011,7,1),43215.92],[Date.UTC(2011,8,1),43275.48],[Date.UTC(2011,9,1),43335.04],[Date.UTC(2011,10,1),43394.61],[Date.UTC(2011,11,1),43454.17],[Date.UTC(2012,0,1),43513.73],[Date.UTC(2012,1,1),43573.29],[Date.UTC(2012,2,1),43632.85],[Date.UTC(2012,3,1),43692.41],[Date.UTC(2012,4,1),43751.98],[Date.UTC(2012,5,1),43811.54],[Date.UTC(2012,6,1),43795.58],[Date.UTC(2012,7,1),43779.62],[Date.UTC(2012,8,1),43763.67],[Date.UTC(2012,9,1),43747.71],[Date.UTC(2012,10,1),43731.75],[Date.UTC(2012,11,1),43715.79],[Date.UTC(2013,0,1),43699.84],[Date.UTC(2013,1,1),43683.88],[Date.UTC(2013,2,1),43667.92],[Date.UTC(2013,3,1),43651.96],[Date.UTC(2013,4,1),43636.01],[Date.UTC(2013,5,1),43620.05],[Date.UTC(2013,6,1),43694.30],[Date.UTC(2013,7,1),43768.56],[Date.UTC(2013,8,1),43842.81],[Date.UTC(2013,9,1),43917.07],[Date.UTC(2013,10,1),43991.32],[Date.UTC(2013,11,1),44065.58],[Date.UTC(2014,0,1),44139.83],[Date.UTC(2014,1,1),44214.09],[Date.UTC(2014,2,1),44288.34],[Date.UTC(2014,3,1),44362.59],[Date.UTC(2014,4,1),44436.85],[Date.UTC(2014,5,1),44511.10],[Date.UTC(2014,6,1),44647.58],[Date.UTC(2014,7,1),44784.06],[Date.UTC(2014,8,1),44920.54],[Date.UTC(2014,9,1),45057.02],[Date.UTC(2014,10,1),45193.50],[Date.UTC(2014,11,1),45329.97],[Date.UTC(2015,0,1),45466.45],[Date.UTC(2015,1,1),45602.93],[Date.UTC(2015,2,1),45739.41],[Date.UTC(2015,3,1),45875.89],[Date.UTC(2015,4,1),46012.37],[Date.UTC(2015,5,1),46148.85],[Date.UTC(2015,6,1),46166.53],[Date.UTC(2015,7,1),46184.21],[Date.UTC(2015,8,1),46201.90],[Date.UTC(2015,9,1),46219.58],[Date.UTC(2015,10,1),46237.26],[Date.UTC(2015,11,1),46254.95],[Date.UTC(2016,0,1),46272.63],[Date.UTC(2016,1,1),46290.32],[Date.UTC(2016,2,1),46308.00],[Date.UTC(2016,3,1),46325.68],[Date.UTC(2016,4,1),46343.37],[Date.UTC(2016,5,1),46361.05]]
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