import { HomeIcon, UsersIcon } from '@heroicons/react/outline';
import Image from "next/legacy/image";
import Link from 'next/link';
import T1 from '../../public/logo.png';
const SideNavbar = () => {
  return (
    <div className="max-[420px]:w-[20%]  w-[90px] flex flex-col  lg:w-72 bg-blue-700 lg:h-screen">
        <div className="flex flex-col pt-5 ml-3">
<div>

        <Link href='/' className=" max-[420px]:ml-[10px] flex items-center gap-2"> <Image src={T1} alt='pic'></Image> <span className="hidden lg:block font-black text-xl">WORKFLOW</span></Link>
</div>

                <div className="flex flex-col pt-10 px-2 " >
                       <ul>
                        <li className="pb-5 text-xl w-full pt-3  hover:bg-blue-800 px-3 rounded-md "><Link href='/dashboard' className="flex gap-2"><HomeIcon className="w-6 h-6 text-white-500" /><span  className="hidden lg:block">Dashboard</span></Link></li>
                        <li className="pb-5 pt-3 text-xl w-full hover:bg-blue-800 px-3 items-center rounded-md"><Link href='/users'  className="flex gap-2"><UsersIcon className="w-6 h-6 text-white" /><span className="hidden lg:block">Users</span></Link></li>
                       </ul>      
                </div>
        </div>
    </div>
  )
}

export default SideNavbar
