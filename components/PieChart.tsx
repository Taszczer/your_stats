'use client';

import {
  PieChart,
  Pie,
  Cell,
  Label,
} from 'recharts';

export default function CustomPieChart({ percentage, colors, textColor, data, size, innerRadius, outerRadius }: { percentage:string; colors: string[]; textColor: string; data: { value: number }[]; size: number; innerRadius: number; outerRadius:number }) {
  return (
    <PieChart width={size} height={size}>
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
                fontSize: 32,
                fontWeight: 'normal',
                fontFamily: 'angkor'
            }}
        />
      </Pie>
    </PieChart>
  );
}
