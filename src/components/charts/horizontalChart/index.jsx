import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Mutual Funds",
        //   21 random data
            data: [44, 55, 41, 67, 22, 43, 21, 49, 45, 50, 56, 61, 58, 63, 60, 66, 70, 72, 75, 80, 85],
        },
        {
            name: "Stocks",
            data: [13, 23, 20, 8, 13, 27, 33, 31, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56],
        },
        {
            name: "Bonds",
            data: [11, 17, 15, 15, 21, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
        },
        {
            name: "Cash",
            data: [21, 7, 5, 5, 11, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
        },
        {
            name: "Other",
            // 21 random data
            data: [21, 7, 5, 5, 11, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
        }
      ],
      options: {
        chart: {
          type: "bar",
          height: 950,
          stacked: true,
          toolbar: {
            show: false,
        },
        },
        plotOptions: {
          bar: {
            horizontal: true,
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
        },
        colors: ['#7F7F7F', '#84B547', '#AA1985', '#887352', '#E76D3B'],
        xaxis: {
          labels: {
            style: {
              colors: "#fff",
            }
          },
        },
        yaxis: {
          show: false,
          reversed: true
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
          horizontalAlign: "left",
          offsetX: 40,
          customLegendItems: ['mutual Funds etf', 'mutual funds', 'insurance', 'pension', 'provident'],
          markers: {
            fillColors: ['#7F7F7F', '#84B547', '#AA1985', '#887352', '#E76D3B'],
          }
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" className="bg-[#000000] min-h-full w-full text-black third">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={1000}
        />
      </div>
    );
  }
}

export default ApexChart;
