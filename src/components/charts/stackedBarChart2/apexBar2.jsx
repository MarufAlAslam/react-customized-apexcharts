import React from "react";
import ReactApexChart from "react-apexcharts";

import './style.css'

class ApexBar2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "insurance",
          //   21 random data
          data: [
            34, 59, 81, 70
          ],
        },
        {
          name: "pension",
          data: [
            31, 38, 25, 16
          ],
        },
        {
          name: "provident",
          data: [
            31, 38, 25, 16
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
                enabled: true,
                offsetX: 0,
                style: {
                  fontSize: "13px",
                  color: "#fff",
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
        colors: ["#E76D3B", "#AA1985", "#2DBDA8"],
       
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
            fillColors: ["#E76D3B", "#AA1985", "#2DBDA8"],
          },
          labels: {
          }
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" className="bg-[#000000] min-h-full text-black second">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={482}
        />
      </div>
    );
  }
}

export default ApexBar2;
