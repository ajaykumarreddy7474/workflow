import Image from "next/legacy/image";
import T4 from '../../public/four4.jpg';
import T1 from '../../public/one1.jpg';
import T6 from '../../public/six6.jpg';
import T3 from '../../public/three.jpg';
import T2 from '../../public/two2.jpg';

const Table = () => {
  return (
  
      <div className="p-5 h-screen lg:px-20 ">
        <div className="overflow-auto rounded-lg shadow">
        <table className="w-full border-2 border-gray-300 bg-slate-200 rounded-lg">
          <thead className="bg-slate-300 text-slate-500 text-xs border-b-2">
            <tr>
              <th className=" w-20 p-3 text-sm tracking-wide text-left">NAME</th>
              <th className=" p-3 text-sm tracking-wide text-left">TITLE</th>
              <th className="w-24 p-3 text-sm tracking-wide text-left">STATUS</th>
              <th className=" w-24 p-3 text-sm tracking-wide text-left">ROLE</th>
              <th className="w-32 p-3 text-sm tracking-wide text-left"></th>
            </tr>
          </thead>
          <tbody>
            <TableRow image={T1} name="John Doe" email="Jane Cooper@example.com" title="Regional Paradigm Technician" status="Active" role="Owner" job="Optimization" />
            <TableRow image={T2} name="Cody Fisher" email="cody.doefisher@example.com" title="Product Directives Officer" job="Intranet" status="Active" role="Owner" />
            <TableRow image={T4} name="Ether Howard" email="Ether.Howard@example.com" title="Forward response developer" status="Active" role="Member" job="Directives" />
            <TableRow image={T3} name="Jenny Wilson" email="Jenny.wilson@example.com" title="Central Security Manager" status="Active" role="Member" job="Program" />
            <TableRow image={T6} name="Cameron Williamson" email="Cameron.williamson@example.com" title="Internal Applications Engineer" status="Active" role="Admin" job="Mobility" />
            <TableRow image={T6} name="Alex Lincoln" email="alex.lincoln@example.com" title="Product Analyst" status="Active" role="Admin" job="Security" />
          </tbody>
        </table>
      </div>
      </div>
   
  );
}

const TableRow = ({ image, name, email, title, status, role, job }) => {
  return (
    <tr className="border-b border-gray-400">
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 relative">
            <Image src={image} alt="Profile Picture" layout="fill" className="rounded-full" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{email}</div>
          </div>
        </div>
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        <div className="text-sm text-gray-500">{title}<br />{job}</div>
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        <span className="px-2 py-1 text-sm bg-green-300 rounded-full">{status}</span>
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{role}</td>
      <td className="p-3 text-sm  text-blue-400 cursor-pointer whitespace-nowrap">Edit</td>
    </tr>
  );
}

export default Table;
