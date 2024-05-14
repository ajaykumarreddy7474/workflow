import Table from '../components/Table';
import Location from '../components/location';
const Users = () => {
    return (
      <div className="pt-[60px] flex justify-start md:w-full min-h-[100%] bg-blue-400 flex-col  h-screen"> 
        <Location/>
        <Table/>

      </div>
    )
  }
  
  export default  Users 