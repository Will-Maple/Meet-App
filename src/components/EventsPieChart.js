import { ResponsiveContainer, PieChart, Pie } from 'recharts';

const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

const EventsPieChart = ({ events }) => {

  const data = genres.map(genre => {
    const count = events.filter(event => event.summary.includes(genre));
    return {
      name: genre,
      value: count.length
    };
  })

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };


  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart
        margin={{
          top: 20,
          right: 20,
          bottom: 60,
          left: -30,
        }}>
        <Pie
          data={data}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          fill="#8884d8" />
      </PieChart>
    </ResponsiveContainer>
  )
};


export default EventsPieChart;