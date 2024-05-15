// import Cards from '../components/Cards'
import DashTable from '../components/DashTable'
import Location2 from '../components/location2'
import Onecard from '../components/Onecard'
const Dashboard = () => {
    return (
      <div className="pt-[60px] flex justify-start md:w-full min-h-[100%] bg-blue-400 flex-col  h-screen overflow-auto"> 
          <Location2/>
          <Onecard/>
          <DashTable/>
      </div>
    )
  }
  
  export default  Dashboard 