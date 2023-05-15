import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'jan 22',
    a: 120,
    b: 130,
    c: 200
  },
  {
    name: 'apr 22',
    a: 220,
    b: 100,
    c: 120
  },
  {
    name: 'aug 22',
    a: 220,
    b: 200,
    c: 90
  },
  {
    name: 'dec 22',
    a: 200,
    b: 110,
    c: 120
  },
];

export default class StackedBarChart2 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

  render() {
    return (
      <ResponsiveContainer className="h-400" width="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{fill: 'transparent'}} />
          <Legend />
          <Bar dataKey="a" barSize={80} stackId="a" fill="#E76D3B" />
          <Bar dataKey="b" barSize={80} stackId="a" fill="#AA1985" />
          <Bar dataKey="c" barSize={80} stackId="a" fill="#2DBDA8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}