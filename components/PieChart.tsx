'use client';

import {
  PieChart,
  Pie,
  Cell,
  Label,
  ResponsiveContainer,
} from 'recharts';
import { useMediaQuery } from '@/lib/useMediaQuery'; 

export default function CustomPieChart({
  percentage,
  colors,
  textColor,
  data,
}: {
  percentage: string;
  colors: string[];
  textColor: string;
  data: { value: number }[];
}) {
  const isMedium = useMediaQuery('(min-width: 768px)');
  const isHuge = useMediaQuery('(min-width: 1024px)');

  let innerRadius = 40;
  let outerRadius = 60;

  if (isHuge) {
    innerRadius = 60;
    outerRadius = 90;
  } else if (isMedium) {
    innerRadius = 50;
    outerRadius = 75;
  }

  return (
    <ResponsiveContainer>
      <PieChart height={200} width={200}>
        <Pie
          data={data}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          stroke="white"
          strokeWidth={3}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
          <Label
            value={percentage}
            position="center"
            style={{
              fill: textColor,
              fontWeight: 'normal',
              fontFamily: 'angkor',
            }}
            className='text-2xl lg:text-3xl'
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
