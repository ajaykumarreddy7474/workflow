import { UsersIcon } from '@heroicons/react/outline';
import React from 'react';
const Onecard = () => {
  return (
    <div class="flex flex-col justify-center items-center md:flex-row md:justify-center px-[55px]" >
  
  <div class="max-w-sm lg:w-[30%] md:max-w-full rounded overflow-hidden shadow-lg m-4 relative pb-[60px] bg-gray-100">
  <div class="px-6 py-4">
    <div className="flex items-center">
      <div>
        <UsersIcon className="w-12 h-12 text-white bg-blue-600 p-3 rounded-md" />
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-600">Total Requests</p>
        <p className="text-2xl font-bold text-black">77,322 &nbsp;<span className="text-sm text-green-600"> &#9650; 122</span></p>
      </div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-full text-blue-600 py-2 px-4 bg-gray-200">
          <span>View all</span>
        </div>
</div>


<div class="max-w-full  md:max-w-full  lg:w-[30%]  rounded overflow-hidden shadow-lg m-4 relative pb-[60px] bg-gray-100">
  <div class="px-6 py-4">
    <div className="flex items-center">
      <div>
        <UsersIcon className="w-12 h-12 text-white bg-blue-600 p-3 rounded-md" />
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-600">Pending sheets</p>
        <p className="text-2xl font-bold text-black">58.16%<span className="text-sm text-green-600"> &#9650; 5.4%</span></p>
      </div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-full text-blue-600 py-2 px-4 bg-gray-200">
          <span>View all</span>
        </div>
</div>

<div class="max-w-full  md:max-w-full  lg:w-[30%]  rounded overflow-hidden shadow-lg m-4 relative pb-[60px] bg-gray-100">
  <div class="px-6 py-4">
    <div className="flex items-center">
      <div>
        <UsersIcon className="w-12 h-12 text-white bg-blue-600 p-3 rounded-md" />
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-600">Total Requests</p>
        <p className="text-2xl font-bold text-black">24.57%<span className="text-sm text-red-600"> &#9660; 3.2%</span></p>
      </div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-full text-blue-600 py-2 px-4 bg-gray-200">
          <span>View all</span>
        </div>
</div>
</div>

  )
}

export default Onecard