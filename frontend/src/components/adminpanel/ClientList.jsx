import AnaImg from '../../assets/chart.svg'

const ClientList = ({ clients, deleteClient ,handle}) => {
  console.log("client list=",clients);
    return (
      <div className="max-w-4xl lg:min-h-[620px] mx-auto mt-8 lg:mt-0 text-white bg-gray-800 p-4 rounded-xl ">

        <div className="flex justify-between">
            <h2 className="text-xl font-semibold  mb-4">All Clients</h2>
            <div className="flex flex-row-reverse gap-2">
            <div className=" border-2 border-black  h-8 w-8 rounded-full flex justify-center items-center relative top-2 ">{clients.length}</div>
            <button onClick={handle}>
                <img src={AnaImg} className='w-8'  />
            </button>
            </div>
        </div>
        <table className="min-w-full  ">
          <thead>
            <tr className="flex justify-between">
              <th className="py-2  ">Domain</th>
              
              <th className="py-2 px-4">Code</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.length > 0 ? (
              clients.map((client, index) => (
                <tr key={index} className="flex justify-between">
                  <td className="py-2 px-1">{client.domain}</td>
                  
                  <td className="py-2   text-center">{client.code}</td>
                  <td className="py-2  text-center">
                    <button
                      onClick={() => deleteClient(client.code)}
                      className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-4 text-center text-gray-500">
                  No clients added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ClientList;
  