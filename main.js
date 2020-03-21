
async function loadJSON(path) {
	let response = await fetch(path);
	let dataset = await response.json(); // Now available in global scope

    return dataset;
}

function lineplot(data){
    year = []
    num_visit = []
    distinct_group_visit = [7,5,15,18,30]
    for(var key in data["year"]){
        year.push(data["year"][key]);
    }
    for(var key in data["num_visit"]){
        num_visit.push(data["num_visit"][key]);
    }

    Highcharts.chart('container', {
        chart: {
            type: 'line',
            style: {
                fontFamily: 'futura'
            }
        },
        legend: {
			align: 'right',
			verticalAlign: 'top',
            layout: 'vertical',
			floating: true,
			itemMarginTop: 0,
			itemMarginBottom: 0,
			symbolHeight: 10,
    		symbolWidth: 10,
    		symbolRadius: 0
        },
        exporting:{
			enabled:false
		},
        title: {
            text: 'The Irresistible K-pop Wave',
            fontWeight: 'bold'
        },
        subtitle: {
            text: 'Number of Kpop concerts in U.S. by Year'
        },
        xAxis: {
            categories: year,
            title:{
                text: 'Year',
                fontWeight: 'bold'
            }
        },
    
        yAxis: {
            title: {
                text: 'Number of visits',
                fontWeight: 'bold'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            },
            series: {
                dataLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold'
                    }
                }
            }
        },
        series: [{
            name: "Total",
            data: num_visit,
            color: "#62189b"
        },
        {
            name: "distinct groups",
            data: distinct_group_visit,
            color: '#0d0c5d'
        }
        ]
    });
}
function pieplot_gender(data){

    num_visit = []
    for(var key in data["num_visit"]){
        num_visit.push(data["num_visit"][key]);
    }

    Highcharts.chart('container1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            style: {
                fontFamily: 'futura'
            }
        },
        exporting:{
            enabled:false
        },
        title: {
            text: 'Gender Matters in Popularity'
        },
        subtitle: {
            text: 'Percentage of Kpop concerts in U.S. by Gender'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            startAngle: 90,
        },
        series: [{
            name: 'Total Visits',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: num_visit[2],
                color: "#62189b",
                sliced: true,
                selected: true
            }, {
                name: 'Female',
                y: num_visit[1],
                color: '#0d0c5d',
                sliced: true,
                selected: true
            }, {
                name: 'Both',
                y: num_visit[0],
                color: '#dbce16',
                sliced: true,
                selected: true
            }]
        }]
    });
}
function pieplot_company(){

    Highcharts.chart('container3', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            style: {
                fontFamily: 'futura'
            }
        },
        exporting:{
            enabled:false
        },
        title: {
            text: 'More groups belong to small Company'
        },
        subtitle: {
            text: 'Percentage of Kpop concerts in U.S. by Company'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            startAngle: 90,
        },
        series: [{
            name: 'Total Visits',
            colorByPoint: true,
            data: [{
                name: 'Big Company',
                y: 180,
                color: "#62189b",
                sliced: true,
                selected: true
            }, {
                name: 'Small Company',
                y: 222,
                color: '#0d0c5d',
                sliced: true,
                selected: true
            }]
        }]
    });
}
function map(data){
    Highcharts.mapChart('container7', {

        chart: {
            map: 'countries/us/us-all',
            borderWidth: 0,
            fontFamily: 'futura'
            
        },
        exporting:{
            enabled:false
        },
        colors: ['rgba(64,19,117,0.05)', 'rgba(64,19,117,0.2)', 'rgba(64,19,117,0.4)',
        'rgba(64,19,117,0.6)', 'rgba(64,19,117,0.8)', 'rgba(64,19,117,1)'],
        title: {
            text: 'Concert Distribution by State',
            style:{
                fontFamily: 'futura'
            }
        },
        legend:{
            enabled:false
        },
        exporting: {
            enabled:false
        },

        legend: {
            enabled:false
        },

        mapNavigation: {
            enabled: false
        },

        colorAxis: {
            dataClassColor: 'category',
                dataClasses: [{
                    to: 3
                }, {
                    from: 3,
                    to: 10
                }, {
                    from: 10,
                    to: 30
                }, {
                    from: 30,
                    to: 50
                }, {
                    from: 50,
                    to: 70
                }, {
                    from: 70,
                    to: 200
                }]
        },
        series: [{
            data: data,
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                format: '{point.code}'
            },
            name: 'Total Visit',
            tooltip: {
                pointFormat: '{point.code}: {point.value}'
            },
            states: {
                hover: {
                    borderColor: '#303030',
                    borderWidth: 2
                }
            }
        }]
    })
};
function barplot_venue(){
    Highcharts.chart('container2', {
        chart: {
            type: 'column',
            style: {
                fontFamily: 'futura'
            }
        },
        title: {
            text: 'Does Gender effect venue capacity?'
        },
        subtitle: {
            text: 'Average seats of venue size by Gender'
        },
        xAxis: {
            categories: ["Male", "Female", "Both"],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Average number of seats'
            }
        },
        legend:{
            enabled:false
        },
        exporting:{
            enabled:false
        },
        plotOptions:{
			series: {
				states:{
					inactive: {
						opacity: 1
					}
				},
				pointPadding: 0.1,
                groupPadding: 0.1,
                borderWidth: 0
			},
		},
        tooltip: {
			enabled: true,
			formatter: function () {
				return this.y;
			},
			followPointer: true,
            shadow: false,
		},

        series: [{
            name: "Gender",
            data: [6125, 3415, 2599],
            color: "#62189b"
        }]
    });
}
function barplot_company_venue(){
    Highcharts.chart('container4', {
        chart: {
            type: 'column',
            style: {
                fontFamily: 'futura'
            }
        },
        exporting:{
            enabled:false
        },
        title: {
            text: 'Big Company gets Larger Venue'
        },
        subtitle: {
            text: 'Average seats of venue size by Company'
        },
        xAxis: {
            categories: ["Big Company", "Small Company"],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Average number of seats'
            }
        },
        legend:{
            enabled:false
        },
        plotOptions:{
			series: {
				states:{
					inactive: {
						opacity: 1
					}
				},
                pointPadding: 0.3,
                groupPadding: 2,
                pointWidth:40,
			},
		},
        tooltip: {
			enabled: true,
			formatter: function () {
				return this.y;
			},
			followPointer: true,
            shadow: false,
		},
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: "Company",
            data: [9574, 2739],
            color: "#62189b"
        }]
    });
}
function barplot_AlbumSale_Gender(){
    Highcharts.chart('container5', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Male Group get more money'
        },
        subtitle: {
            text: 'Total number of Album Sale by Gender'
        },
        xAxis: {
            categories: ["Male", "Female"],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Album Sale'
            }
        },
        legend:{
            enabled:false
        },
        plotOptions:{
            series: {
                states:{
                    inactive: {
                        opacity: 1
                    }
                },
                pointPadding: 0.04,
                groupPadding: 0.06,
            },
        },
        tooltip: {
            enabled: true,
            formatter: function () {
                return this.y;
            },
            followPointer: true,
            shadow: false,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: "Company",
            data: [11575126, 1387977]
        }]
    });
}
function barplot_AlbumSale_Company(){
    Highcharts.chart('container6', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Big Company get more money'
        },
        subtitle: {
            text: 'Total number of Album Sale by Company'
        },
        xAxis: {
            categories: ["Big Company", "Small Company"],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Album Sale'
            }
        },
        legend:{
            enabled:false
        },
        plotOptions:{
            series: {
                states:{
                    inactive: {
                        opacity: 1
                    }
                },
                pointPadding: 0.04,
                groupPadding: 0.06,
            },
        },
        tooltip: {
            enabled: true,
            formatter: function () {
                return this.y;
            },
            followPointer: true,
            shadow: false,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: "Company",
            data: [11122321, 1840782]
        }]
    });

}
function init() {
    data1 = loadJSON('../total_tour_by_year.json');
    data1.then(function (data) {
        lineplot(data);
    })
    data2 = loadJSON('../total_tour_by_gender.json');
    data2.then(function (data) {
        pieplot_gender(data);
    })
    data3 = loadJSON('../concert_by_state.json');
    data3.then(function (data) {
        map(data);
    })
    barplot_venue();
    pieplot_company();
    barplot_company_venue();
    barplot_AlbumSale_Gender();
    barplot_AlbumSale_Company();

}
document.addEventListener('DOMContentLoaded', init, false);
