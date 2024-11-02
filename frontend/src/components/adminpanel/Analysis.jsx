import React, { useEffect, useState } from 'react'
import AnaImg from '../../assets/data.png'
import Up from '../../assets/arrowup.png'
import GraphComponent from './Graph'
import axios from 'axios';
export default function Analysis({handle}) {
  const [data,setData] = useState([]);
  
  const [year,setYear] = useState(2024)
  
  const fetchYear = async (year) => {
    try {
      const response = await axios.get("http://localhost:3000/clientapi/clients-per-month");
      
      //console.log("response=",response1.data)
      let array = {}
      
      response.data.forEach(a=>{
        const year = a._id.year;
        const monthData = {
          name:a._id.month,
          submissions:0,
          clients: a.count
        };
        if(!array[year]){
          array[year] = []
        }
        array[year].push(monthData)
      })
      
      
      setData(array[year])
      

      
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };

  const handleYear = (direction) => {
    
    setYear((prevYear) => (direction === "+" ? prevYear + 1 : prevYear - 1));
    
    
  };
  useEffect(()=>{
    fetchYear(year)
  },[year])
  
  return (
    <div className="max-w-4xl lg:min-h-[620px] mx-auto mt-8 lg:mt-0 text-white bg-gray-800 p-4 rounded-xl " >
        <div className='flex justify-between items-center'>
            <h2 className="text-xl font-semibold  mb-4">Analysis</h2>
            <div className='flex items-center gap-2'>
            <button onClick={handle}>
                <img src={AnaImg} className='w-8 '  />
            </button>
            <button onClick={()=>handleYear("+")}>
              <img src={Up} className='w-4' />
            </button>
            {year}
            <button onClick={()=>handleYear("-")}>
            <img src={Up} className='w-4 rotate-180'  />
            </button>
            </div>
        </div>
        <div className='lg:relative lg:top-20'>
            <GraphComponent data1={data} />
        </div>
        
    </div>
  )
}