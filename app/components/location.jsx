import { HomeIcon } from '@heroicons/react/outline';

const Location = () => {
  return (
    <div className="overflow-y-auto">
      <div className="overflow-x-auto">
        <div className="  max-[420px]:max-w-[80%] h-[10%]">
          <div className=" flex flex-row items-center justify-start bg-slate-200 border-b-slate-300 p-1 md:mx-20 md:my-5 md:px-10 md:gap-4 text-black">
            <div className="flex items-center gap-2 relative">
              <HomeIcon className="w-6 h-6" />
            </div>
            <div className="w-8 h-8 relative mx-3 bg-slate-400 clip-path-polygon"></div>
            <div className="flex items-center">
              <span>Manage Users</span>
            </div>
            <div className="w-8 h-8 relative mx-3 bg-slate-400 clip-path-polygon"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
