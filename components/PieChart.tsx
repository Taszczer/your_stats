'use client';

import {
  PieChart,
  Pie,
  Cell,
  Label,
} from 'recharts';

export default function CustomPieChart({ percentage, colors, textColor, data }: { percentage: number; colors: string[]; textColor: string; data: { value: number }[] }) {
    console.log(percentage)
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        innerRadius={60}
        outerRadius={90}
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
          value={`${percentage} %`}
          position="center"
          style={{
            fill: textColor,
            fontSize: 32,
            fontWeight: 'normal',
            fontFamily: 'angkor'
          }}
        />
      </Pie>
    </PieChart>
  );
}
