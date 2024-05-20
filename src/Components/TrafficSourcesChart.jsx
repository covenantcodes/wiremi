import { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { date: 'Jan 01', websiteBlog: 400, socialMedia: 700 },
  { date: 'Jan 02', websiteBlog: 500, socialMedia: 600 },
  { date: 'Jan 03', websiteBlog: 400, socialMedia: 400 },
  { date: 'Jan 04', websiteBlog: 700, socialMedia: 500 },
  { date: 'Jan 05', websiteBlog: 300, socialMedia: 600 },
  { date: 'Jan 06', websiteBlog: 500, socialMedia: 700 },
  { date: 'Jan 07', websiteBlog: 200, socialMedia: 500 },
  { date: 'Jan 08', websiteBlog: 400, socialMedia: 600 },
  { date: 'Jan 09', websiteBlog: 700, socialMedia: 500 },
  { date: 'Jan 10', websiteBlog: 500, socialMedia: 400 },
  { date: 'Jan 11', websiteBlog: 400, socialMedia: 300 },
  { date: 'Jan 12', websiteBlog: 300, socialMedia: 200 },
];

export default class TrafficSourcesChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" orientation="left" stroke="#27A0FD" />
          <YAxis yAxisId="right" orientation="right" stroke="#2FE784" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="websiteBlog" barSize={20} fill="#27A0FD" />
          <Line yAxisId="right" type="monotone" dataKey="socialMedia" stroke="#2FE784" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
