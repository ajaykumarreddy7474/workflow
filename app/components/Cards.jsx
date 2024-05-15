import { HandIcon, MailIcon, UsersIcon } from '@heroicons/react/outline';

const Cards = () => {
  return (
    <div className="pt-10 flex flex-col gap-6 md:flex-row md:justify-center md:items-center md:gap-10 px-4 md:px-20  ">
      {/* Card 1 */}
      <div className="flex-1  bg-white rounded-lg shadow-md p-4 md:h-40 relative border-2  max-[420px]:bg-red-500 ">
        <div className="flex items-center">
          <div>
            <UsersIcon className="w-12 h-12 text-white bg-blue-600 p-3 rounded-md" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">Total Requests</p>
            <p className="text-2xl font-bold text-black">77,322<span className="text-sm text-green-600"> &#9650; 122</span></p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full text-blue-600 py-2 px-4 bg-gray-100">
          <span>View all</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex-1 max-w-[420px] bg-white rounded-lg shadow-md p-4 md:h-40 relative border-2 ">
        <div className="flex items-center">
          <div>
            <MailIcon className="w-12 h-12 text-white bg-blue-600 p-3 rounded-md" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">Pending Sheets</p>
            <p className="text-2xl font-bold text-black">58.16%<span className="text-sm text-green-600"> &#9650; 5.4%</span></p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full text-blue-600 py-2 px-4 bg-gray-100">
          <span>View all</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex-1 max-w-[420px] bg-white rounded-lg shadow-md p-4 md:h-40 relative border-2">
        <div className="flex items-center">
          <div>
            <HandIcon className="w-12 h-12 text-white bg-blue-600 p-3 rounded-md" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">Total Requests</p>
            <div className="max-[420px]:flex max-[420px]:flex-col">
            <p className="text-2xl font-bold text-black">24.57%<span className="text-sm text-red-600"> &#9660; 3.2%</span></p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full text-blue-600 py-2 px-4 bg-gray-100">
          <span>View all</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
