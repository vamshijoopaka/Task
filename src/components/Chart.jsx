import React from 'react';
import PropTypes from 'prop-types';
import HightchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts'


function Chart(props) {
    const {
        series = [],
        categories,
        type,
        xAxisTitle,
        yAxisTitle,
        title,
        plotOptions = {},
    } = props;
    const options = {
        chart: {
            type,
            scrollbar: {
                enabled: true,
            },
            height: 500,
        },
        title: {
            text: title,
        },
        xAxis: {
            categories,
            title: xAxisTitle,
        },
        yAxis: {
            title: {
                text: yAxisTitle,
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color:
                        'gray',
                },
            },
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false,
                },
                marker: {
                    radius: 2,
                }
            },
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                },
            },
            pie: {
                showInLegend: true,
            },
            ...plotOptions,
        },
        credits: {
            enabled: false,
        },
        series,
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500,
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom',
                        },
                    },
                },
            ],
        },
    };
    return <HightchartsReact
        highcharts={Highcharts}
        options={options}
    />;
}
Chart.propTypes = {
    series: PropTypes.array.isRequired,
    categories: PropTypes.array,
    type: PropTypes.string.isRequired,
    xAxisTitle: PropTypes.string,
    yAxisTitle: PropTypes.string,
    title: PropTypes.string,
    plotOptions: PropTypes.object,
}
export default Chart;
