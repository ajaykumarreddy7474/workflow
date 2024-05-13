import Cards from '../components/Cards'
import DashTable from '../components/DashTable'
import Location2 from '../components/location2'
const Dashboard = () => {
    return (
      <div className="  pt-20 lg:pt-0 flex justify-center md:w-full min-h-[100%] bg-blue-400  flex-col"> 
          <Location2/>
          <Cards/>
           <DashTable/>
      </div>
    )
  }
  
  export default  Dashboard 