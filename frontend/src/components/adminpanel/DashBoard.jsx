import { useEffect, useState } from 'react';
import CreateClientForm from './CreateClientList';
import ClientList from './ClientList';
import Analysis from './Analysis';
import axios from "axios"; 
const DashBoard = () => {
  const [clients, setClients] = useState([]);
  const [drop, setDrop] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/clientapi/client");
        //console.log("data=",response.data.data);
        setClients(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

    };

    fetchData();
  }, []);
  const handleDrop = () => {
    setDrop((prev) => !prev);
  };
  // Function to add a new client
  // const addClient = async(client,e) => {
  //   console.log("add")
  //   e.preventDefault();
  //   console.log("Client=",client)
  // try {
  //   const res = await axios.post("http://localhost:3000/clientapi/client",client
  //   );

    
  
  // } catch (error) {
  //   console.error("Error posting data:", error);
  // }

  // };
  const addClient = async (client, e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/clientapi/client", client);
      window.location.reload();
      
      
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  
  //console.log(clients)

  // Function to delete a client
  const deleteClient = async(domain) => {
  
    const result = clients.find(item => item.code === domain);
    console.log(result._id)

    try {
      const response = await axios.delete(`http://localhost:3000/clientapi/delete/${result._id}`);
      console.log('Document deleted successfully:', response.data);
      window.location.reload();
      return response.data;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Error:', error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request
        console.error('Request error:', error.message);
      }
    }


    



  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <h1 className="text-center text-3xl font-bold text-blue-600 mb-8">Admin Dashboard</h1>
      <div className='p-4 lg:grid lg:grid-cols-2 w-full'>
        <div className='lg:px-4'  >
            <CreateClientForm addClient={addClient} />
            
        </div>
        <div className='lg:px-5'>

            {
                drop ?
                (
                    <ClientList clients={clients}  deleteClient={deleteClient} handle={handleDrop} />
                ):(
                    <div >
                        <Analysis handle={handleDrop}/>

                    </div>
                )

            }
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
