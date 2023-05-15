import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "jan 22",
    a: 1000,
    b: 10,
  },
  {
    name: "feb 22",
    a: 210,
    b: 100,
  },
];

export default class HorizontalChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/stacked-bar-chart-s47i2";

  render() {
    return (
      <ResponsiveContainer className="h-400" width="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Legend />
          <Bar dataKey="a" barSize={43} stackId="a" fill="#7F7F7F" />
          <Bar dataKey="b" barSize={43} stackId="a" fill="#84B547" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
