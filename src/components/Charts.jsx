import { Line, LineChart } from "recharts";
import React, { PureComponent } from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";


const Charts = ({ data }) => {
  console.log(data);
  return (
    <div className="w-11/12 mx-auto">
      {/* <LineChart width={500} height={400} data={data}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart> */}
      <ResponsiveContainer width={800} height={300}>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
