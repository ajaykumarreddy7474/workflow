

const DashTable = () => {
    return (
     
      <div className="p-5 h-screen lg:px-20  ">
        <div className="overflow-auto rounded-lg shadow ">
        <table className="w-full border-2 border-gray-300 bg-slate-200 rounded-lg text-black">
          <thead className="bg-gray-50 border-b-2 border-gray-200 text-left">
            <tr>
              <th className="w-30 p-3 text-sm font-medium uppercase">Name </th>
              <th className=" p-3 text-sm font-medium uppercase">Date Time </th>
              <th className="w-20 p-3 text-sm font-medium uppercase">status</th>
              <th className="w-36 p-3 text-sm font-medium uppercase"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            <tr>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Jane Copper <br /> <span>Maths</span> </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">7th may 2024 </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <span className="px-3 py-1 text-md font-medium tracking-wide text-green-700 bg-green-400 rounded-xl bg-opacity-40">Completed</span> </td>
              <td className="p-3 text-sm text-blue-500 cursor-pointer whitespace-nowrap">View Details </td>
            </tr>
            <tr >
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Cody Fisher <br /> <span>Physics</span> </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">7th may 2024 </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">  <span className="px-3 py-1 text-md font-medium tracking-wide text-yellow-700 bg-yellow-400 rounded-xl bg-opacity-40"> Pending</span>  </td>
              <td className="p-3 text-sm text-blue-500 cursor-pointer whitespace-nowrap">View Details </td>
            </tr>
            <tr>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Esther Howard <br /> <span>Physics</span> </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">7th may 2024 </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">  <span className="px-3 py-1 text-md font-medium tracking-wide text-red-700 bg-red-400 rounded-xl bg-opacity-40"> Shipped</span>  </td>
              <td className="p-3 text-sm  whitespace-nowrap text-blue-500 cursor-pointer">View Details </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    );
  }
  
  
    
  
  export default DashTable;
  