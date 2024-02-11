import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {

  return (
    <div className='grid grid-cols-4'>
      <RevenueCard title={"Amount Pending"} orderCount={13} amount={"92,954.40"}/>
    {/* // //grid grid-cols-5flex justify-center
    //  <div className='grid grid-cols-1 md:grid-cols-3'>
    //   <div className='bg-red-500'>hi</div>
    //   <div className='bg-blue-500'>hello</div>
    //   <div className='bg-green-500'>noob</div>
    //  </div>
    // <div className='bg-red-500 md:bg-blue-500'>hi there</div> */}
    </div>
  )
}

export default App
