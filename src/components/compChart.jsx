import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const u1yData = [140, 145, 160, 190, 230, 190, 176, 140, 145, 160, 155, 140];
const u2yData = [145, 160, 155, 210, 206, 208, 197, 145, 160, 155, 144, 153];
const u3yData = [160, 157, 165, 205, 241, 206, 136, 145, 155, 170, 128, 138];
const u4yData = [145, 155, 170, 241, 237, 206, 155, 140, 155, 150, 145, 140];
const u5yData = [148, 159, 165, 244, 248, 201, 146, 145, 145, 174, 155, 160];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export default function CompChartComponent() {
  return (
    <div className='linechart'>
    <LineChart
      width={500}
      height={300}
      series={[
        { data: u1yData, label: 'user1' },
        { data: u2yData, label: 'user2' },
        { data: u3yData, label: 'user3' },
        { data: u4yData, label: 'user4' },
        { data: u5yData, label: 'user5' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
    </div>
  );
}
