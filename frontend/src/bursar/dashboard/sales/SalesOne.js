import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card } from '@material-ui/core';

import Chart from 'react-apexcharts';
import CountUp from 'react-countup';

export default function Stats(props) {

  const  {
    series,
    hardcopy,
    ebooks,
  } = props;



  const chart2Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      color: '#f4772e',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#f4772e'
    },
    colors: ['#f4772e'],
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart2Data = [
    {
      name: 'Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];

  const chart3Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      stacked: true
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '90%'
      }
    },
    colors: ['#4191ff', 'rgba(65, 145, 255, 0.35)'],
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Last week',
      'Last month',
      'Last year',
      'Last quarter'
    ],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart3Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
    }
  ];

  const chart4Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      stacked: true
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: true,
        endingShape: 'rounded',
        columnWidth: '98%'
      }
    },
    colors: ['#1bc943', 'rgba(27, 201, 67, 0.35)'],
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Last week',
      'Last month',
      'Last year',
      'Last quarter'
    ],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart4Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={4}>
          <Card className="card-box mb-4 bg-royal card-box-hover-rise">
            <div className="px-4 pt-4 pb-3">
              <div className="text-uppercase text-muted">EBOOKS</div>
              <div className="d-flex align-items-center pt-3 font-weight-bold display-3">
                <FontAwesomeIcon
                  icon={['far', 'dot-circle']}
                  className="text-warning mr-2"
                />
              {ebooks}
              </div>
            </div>
            <Chart
              options={chart2Options}
              series={chart2Data}
              type="area"
              height={150}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card className="card-box mb-4 bg-royal card-box-hover-rise">
            <div className="px-4 pt-4 pb-3">
              <div className="text-uppercase text-muted">HARDCOPY</div>
              <div className="d-flex align-items-center pt-3 font-weight-bold display-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-success mr-2"
                />

                <span>
                  <CountUp
                    start={0}
                    end={hardcopy}
                    duration={6}
                    deplay={2}
                    separator=""
                    decimals={0}
                    decimal=","
                  />
                </span>
              </div>
            </div>
            <div className="p-1">
              <Chart
                options={chart3Options}
                series={chart3Data}
                type="bar"
                height={142}
              />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="card-box mb-4 bg-royal card-box-hover-rise">
            <div className="px-4 pt-4 pb-3">
              <div className="text-uppercase text-muted">SERIES</div>
              <div className="d-flex align-items-center pt-3 font-weight-bold display-3">
                <FontAwesomeIcon
                  icon={['fas', 'chevron-up']}
                  className="text-warning mr-2"
                />
                {series}
              </div>
            </div>
            <div className="p-1">
              <Chart
                options={chart4Options}
                series={chart4Data}
                type="bar"
                height={142}
              />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
