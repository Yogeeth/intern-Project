import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function EnterCode({ handle }) {
    const [data, setData] = useState("");  
    const navigate = useNavigate();
    const handleSubmit = () => {
        handle(data); 
        navigate(`/form/${data}`);
    };

    return (
        <div className='min-h-screen bg-gray-900 flex justify-center items-center'>
            <div className='bg-white w-fit h-fit p-4 rounded-xl'>
                {/* Title */}
                <div>
                    <p className='p-1 text-gray-700'>Enter The Code</p>
                </div>
                
                {/* Input and Submit */}
                <div className='flex gap-2'>
                    <input 
                        type="text" 
                        placeholder='12ASDYGK' 
                        className='border border-blue-600 p-2 rounded-xl'
                        value={data}
                        onChange={(e) => setData(e.target.value)}  
                    />
                    <button 
                        className='p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors'
                        onClick={handleSubmit}  
                    >
                        ENTER
                    </button>
                </div>
            </div>
        </div>
    );
}
