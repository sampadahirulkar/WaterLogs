import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const yData = [140,150,200,190,150,170,250,260,180,150,150,140];
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

export default function LineChartComponent() {
  return (
    <div className='linechart'>
    <LineChart
      width={500}
      height={300}
      series={[
        { data: yData, label: 'liters' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
    </div>
  );
}
