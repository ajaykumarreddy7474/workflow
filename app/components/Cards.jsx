import { HandIcon, MailIcon, UsersIcon } from '@heroicons/react/outline';
const Cards = () => {
  return (
    <div className=" max-[420px]:pt-5 flex flex-col md:flex-row gap-10 px-20 text-black max-[420px]:justify-center items-center">
      {/* Card 1 */}
      <div className="max-[420px]:w-[170%]   bg-white h-40 rounded-lg shadow-md p-3 flex flex-col  justify-start md:w-1/3 bottom-0 left-0 relative border-2 max-[390px]:h-48">
  <div className="flex items-center pt-2 px-2">
    <div>
      <UsersIcon className="w-10 h-10 text-white bg-blue-600 p-2 rounded-md text-xl" />
    </div>
    <div className="ml-4">
      <p className="text-sm text-gray-600">Total Requests</p>
      <p className="text-2xl font-bold ">77,322<span className="text-sm text-green-600 max-[420px]:flex-wrap"> &#9650; 122</span></p>
    </div>
    <div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-full h-2/6 flex pl-3 pt-4 bg-gray-100">
    <h1 className='text-blue-600'>View all</h1>
  </div>
      </div>


      {/* Card 2 */}
      <div className=" max-[420px]:w-[175%] bg-white h-40 rounded-lg shadow-md p-3 flex flex-col  justify-start md:w-1/3 bottom-0 left-0 relative border-2 max-[390px]:h-48">
  <div className="flex items-center pt-2 px-2">
    <div>
      <MailIcon className="w-10 h-10 text-white bg-blue-600 p-2 rounded-md text-xl" />
      
    </div>
    <div className="ml-4">
      <p className="text-sm text-gray-600">Pending Sheets</p>
      <p className="text-2xl font-bold ">58.16%   <span className="text-sm text-green-600 max-[420px]:flex-wrap"> &#9650; 5.4%</span></p>
    </div>
    <div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-full h-2/6 flex pl-3 pt-4 bg-gray-100">
    <h1 className='text-blue-600'>View all</h1>
  </div>
      </div>

      {/* Card 3 */}
      <div className="max-[420px]:w-[175%] bg-white h-40 rounded-lg shadow-md p-3 flex flex-col  justify-start md:w-1/3 bottom-0 left-0 relative border-2 max-[390px]:h-48">
  <div className="flex items-center pt-2 px-2">
    <div>
      <HandIcon className=" w-10 h-10 text-white bg-blue-600 p-2 rounded-md text-xl" />
    </div>
    <div className="ml-4">
      <p className="text-sm text-gray-600">Total Requests</p>
      <p className="text-2xl font-bold ">24.57%<span className="text-sm text-red-600"> &#9660; 3.2%</span></p>
    </div>
    <div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-full h-2/6 flex pl-3 pt-4 bg-gray-100">
    <h1 className='text-blue-600'>View all</h1>
  </div>
      </div>
      
    </div>
    
  );
};

export default Cards;
