import React from "react";
import ReactApexChart from "react-apexcharts";

import './style.css'

class ApexBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Mutual Funds",
          //   21 random data
          data: [
            44, 55, 41, 67, 22, 43, 21, 49, 45, 50, 56, 61
          ],
        },
        {
          name: "Stocks",
          data: [
            13, 23, 20, 8, 13, 27, 33, 31, 32, 34, 36, 38
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 450,
          stacked: true,
          toolbar: {
            show: false,
        },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              total: {
                enabled: false,
                offsetX: 0,
                style: {
                  fontSize: "13px",
                  fontWeight: 900,
                },
              },
            },
          },
        },
        stroke: {
          width: 0,
          colors: ["#fff"],
        },
        colors: ["#7F7F7F", "#84B547"],
       
        xaxis: {
          categories: ["Jan 22", "Feb 22", "Mar 22", "Apr 22", "May 22", "Jun 22", "Jul 22", "Aug 22", "Sep 22", "Oct 22", "Nov 22", "Dec 22"],
          labels: {
            formatter: function (val) {
              return val ;
            },
           style: {
                colors: "#fff",
           }
          },
        },
        yaxis: {
          title: {
            text: undefined,
          },
          reversed: false,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          offsetX: 40,
          markers: {
            fillColors: ["#7F7F7F", "#84B547"],
          },
          labels: {
          }
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" className="bg-[#000000] min-h-full text-black first">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={450}
        />
      </div>
    );
  }
}

export default ApexBar;
