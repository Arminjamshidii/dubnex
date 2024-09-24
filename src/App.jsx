
// import './App.css'
import Banner from './components/Banner'
import Chart from './components/Chart'
import Easypay from './components/Easypay'
import Footerpage from './components/Footerpage'
import GuideCrypto from './components/GuideCrypto'
import Hotprice from './components/Hotprice'
import MenuOpen from './components/MenuOpen'
import Nav from './components/Nav'
import Signin from './components/Signin'

function App() {

  return (
    <div className='bg-customBlack w-customW1440 min-h-screen flex flex-col items-center'>
      <Nav/>
      <Banner/>
      <Hotprice/>
      <Chart/>
      <Easypay/>
      <GuideCrypto/>
      <Signin/>
      <MenuOpen/>
      <Footerpage/>
    </div>
  )
}

export default App
