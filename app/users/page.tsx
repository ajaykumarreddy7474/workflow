import Table from '../components/Table';
import Location from '../components/location';
const Users = () => {
    return (
      <div className="pt-[60px] flex justify-between md:w-full min-h-[100%] bg-blue-400 flex-col  "> 
        <Location/>
        <Table/>

      </div>
    )
  }
  
  export default  Users 