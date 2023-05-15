import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'jan 22',
    a: 110,
    b: 100
  },
  {
    name: 'feb 22',
    a: 50,
    b: 130
  },
  {
    name: 'mar 22',
    a: 120,
    b: 70
  },
  {
    name: 'apr 22',
    a: 90,
    b: 140
  },
  {
    name: 'may 22',
    a: 150,
    b: 130
  },
  {
    name: 'jun 22',
    a: 220,
    b: 90
  },
  {
    name: 'jul 22',
    a: 240,
    b: 50
  },
  {
    name: 'aug 22',
    a: 90,
    b: 30
  },
  {
    name: 'sep 22',
    a: 220,
    b: 240
  },
  {
    name: 'oct 22',
    a: 200,
    b: 120
  },
  {
    name: 'nov 22',
    a: 50,
    b: 30
  },
  {
    name: 'dec 22',
    a: 70,
    b: 70
  },
];

export default class StackedBarChart extends PureComponent {
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
          <Bar dataKey="a" barSize={43} stackId="a" fill="#7F7F7F" />
          <Bar dataKey="b" barSize={43} stackId="a" fill="#84B547" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}