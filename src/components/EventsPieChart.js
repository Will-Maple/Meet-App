import { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

const EventsPieChart = ({ events }) => {
  const [data, setData] = useState([])


  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    const data = genres.map(genre => {
      const count = events.filter(event => event.summary.includes(genre));
      return {
        name: genre,
        value: count.length
      };
    })
    return data;
  }


  return (
    <ResponsiveContainer>
      <PieChart width="99%" height={400}>
        <Pie
          data={data}
          dataKey="value"
          labelLine={false}
          label
          outerRadius={130}
          fill="#8884d8" />
      </PieChart>
    </ResponsiveContainer>
  )
};


export default EventsPieChart;