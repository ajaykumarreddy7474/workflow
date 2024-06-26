import { HomeIcon } from '@heroicons/react/outline';

const Location = () => {
  return (
    <div className="max-[420px]:pt-5 max-[420px]:px-2 max-[420px]:h-[10%] w-full ">
      <div className="  flex flex-row items-center justify-start bg-slate-200 border-b-slate-300 p-1 md:mx-20 md:my-5 md:px-10 md:gap-4 text-black">
        <div className="flex items-center gap-2 relative top-0 z-50">
          <HomeIcon className="w-6 h-6" />
          </div>
        <div className=" max-[420px]:w-8 max-[420px]:h-8  relative w-14 h-14 mx-3 bg-slate-100 clip-path-polygon"></div>
        
        <div className="flex items-center">
          <span>Users</span>
        </div>
        
        <div className="max-[420px]:w-8 max-[420px]:h-8  relative w-14 h-14 mx-3 bg-slate-100 clip-path-polygon"></div>
      </div>
      
    </div>
  );
}

export default Location;
