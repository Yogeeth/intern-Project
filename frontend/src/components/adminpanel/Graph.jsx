

import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const GraphComponent = ({ data1 }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data1 && data1.length !== 0) {
      const updatedData = [];

      for (let i = 0; i < 12; i++) {
        const existingMonth = data1.find(item => item.name === i + 1);

        if (existingMonth) {
          updatedData.push(existingMonth);
        } else {
          updatedData.push({ name: i + 1, submissions: 0, clients: 0 });
        }
      }

      setData(updatedData);
    } else {
      // Clear data if data1 is undefined or empty
      setData([]);
    }
  }, [data1]);




  return (
    <div className="w-full h-96">
      {data.length === 0 ? ( // Check if data is empty
        <div className="flex items-center justify-center h-full text-xl text-gray-500">
          No data available
        </div>
      ) : (
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            
            <Line type="monotone" dataKey="clients" stroke="#82ca9d" />
          </LineChart>
          
        </ResponsiveContainer>
      )}





      
    </div>
  );
};

export default GraphComponent;
