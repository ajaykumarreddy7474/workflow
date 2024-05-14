import Cards from '../components/Cards'
import DashTable from '../components/DashTable'
import Location2 from '../components/location2'
const Dashboard = () => {
    return (
      <div className="pt-[60px] flex justify-start md:w-full min-h-[100%] bg-blue-400 flex-col lg:h-screen overflow-auto md:bg-red-400 "> 

          <Location2/>
          <Cards/>
          <DashTable/>
      </div>
    )
  }
  
  export default  Dashboard 