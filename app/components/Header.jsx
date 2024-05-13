import { BellIcon, SearchIcon } from '@heroicons/react/outline';
import Image from "next/image";
import T7 from '../../public/four4.jpg';
const Header = () => {
  return (
    <div className="  absolute h-[8%] w-full flex justify-center ">
        <div className="  max-[400px]:w-[100%] w-full flex justify-between items-left px-6 py-4 bg-slate-200 border-b-slate-300 border-2">
        <div className="flex items-center gap-2 md:w-auto ">
          <SearchIcon className="w-6 h-6 text-gray-500" />
          <input type="text" placeholder="Search" className="relative font-semibold border-none px-2 bg-slate-200 max-[420px]:w-20" />
        </div>

        <div className="flex items-center justify-center md:mt-0 ">
          <BellIcon className="w-6 h-6 text-gray-500 mr-2" />
          <div className="h-8 w-8 relative">
            <Image src={T7} alt="Profile Picture" layout="fill" className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
