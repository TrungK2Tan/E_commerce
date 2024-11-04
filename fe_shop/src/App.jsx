import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Category from './components/Category/Category'
import Services from './components/Services/Services'
import Hero from './components/Hero/Hero'
import headphone from "./assets/banner/headphone.png";
import smartwatch from "./assets/category/smartwatch2.png";

import Products from './components/Products/Products'
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import AOS from "aos"
import "aos/dist/aos.css"
const HeroData = {
  discount:"30% OFF",
  title:"Fine Smile",
  date:"10 Jan to 28 Jan",
  image: headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Mo ta ve mot san phan nao do bla bla cho no nhieu 1 xiu",
  bgColor:"#f42c37"
}
const HeroData2 = {
  discount:"12% OFF",
  title:"Happy Hours",
  date:"14 Jan to 28 Jan",
  image: smartwatch,
  title2:"Smart Solo ",
  title3:"Winter Sale",
  title4:"Mo ta ve mot san phan nao do bla bla cho no nhieu 1 xiu",
  bgColor:"#2dcc6f"
}
const App = () => {
  const [orderPopup,setOrderPopup]= React.useState(false);
  const handleOrderPopup = ()=>{
    setOrderPopup(!orderPopup);
  }
  React.useEffect(()=>{
    AOS.init(
      {
        duration:800,
        easing:"ease-in-sine",
        delay:100,
        offset:100,
      }
    );
    AOS.refresh();
  },[])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Banner handleOrderPopup={handleOrderPopup}/>
      <Category/>
      <Services/>
      <Hero data={HeroData}/>
      <Products/>
      <Hero data={HeroData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App