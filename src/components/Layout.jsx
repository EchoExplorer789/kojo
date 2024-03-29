import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
// import {HiOutlineSearch} from "react-icons/hi"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Scroll from './Scroll'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
// import FloatingAd from './FloatingAd'
// import Sticker from './Sticker'



export default function Layout() {

  const [scrollData, setScrollData] = useState([])
  const [metaData, setMetaData] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const responsePromoted = await axios.get("https://kojocalls.onrender.com/api/payedpromotion");
        const idsString = responsePromoted.data.map(item => item.cmc_id).join(',');

        const coindata = await axios.post('https://kojocalls.onrender.com/api/coinmarketcap', {
          coinIds: idsString, // Array of coin slugs
        });

        const metadata = await axios.post('https://kojocalls.onrender.com/api/metadata', {
          coinIds: idsString, // Array of coin slugs
        });
        setScrollData(coindata.data.data)
        setMetaData(metadata.data.data)
      } catch (error) {
        console.error(error);
      }
    }
    getData()
  }, [])



  function Openbar() {

    const element = document.querySelector('#sidebar')
    const style = "hidden"

    if (element.classList.contains(style)) {
      if (window.innerWidth > 765) {
        element.classList.remove("hidden")
        element.classList.remove("z-[99]")
        element.classList.add("block")
        // document.querySelector('#outlet').classList.remove("ml-2")
        // document.querySelector('#outlet').classList.add("ml-64")
      } else {
        element.classList.remove("hidden")
        element.classList.add("block")
        element.classList.add("w-full")
      }
    } else {
      element.classList.remove("block")
      element.classList.add("hidden")
      // document.querySelector('#outlet').classList.remove("ml-64")
      // document.querySelector('#outlet').classList.add("ml-2")
    }
  }

  return (
    // top nav bar
    <div className="MainAppLayoutContainer">
      {/* 
      Header
       */}
      <div className="bg-blue-900 flex justify-between MainWebsiteHeaderTop" id='topbar'>
        <div className='p-1 flex items-center rounded-md '>
          <span className='text-[15px]  ml-3 text-xl text-gray-200 font-100'>KOJO TOKEN</span>
        </div>

        <div className="p-1 flex items-center rounded-md px-4 duration-300 cursor-pointerw-auto bg-transparent ml-auto lg:ml-0">
          {/* <HiOutlineSearch className='bi bi-search ' style={{ fontSize: '25px', color: 'white'}}/>
          <input className="text-[16px] lg:ml-4 m-1 p-0 bg-transparent focus:outline-none lg:w-[410px] w-[0px] ml-0"  id='place' placeholder='Search by coin name, symbol or contract address'/> */}
          <GiHamburgerMenu style={{ fontSize: '25px', color: 'white' }} className='m-2 lg:hidden' onClick={Openbar} />
        </div>

        <div className="flex items-center ">

          <Link to="addCoin" className='bg-purple-800 text-white font-semibold py-2 px-8 rounded mx-2 lg:block hidden MainHeaderAddCoinButton'>Add Coin</Link>
          <Link to="promote" className='bg-purple-800 text-white font-semibold py-2 px-8 rounded mx-2 lg:block hidden MainHEaderPromoteCoin'>Promote Coin</Link>
        </div>


      </div>

      {/* <Sticker />  */}

      {/* 
          MAIN LAYOUT
       */}
       <div className="MainAppMiddleLayoutContainer">

          <Navbar toggle={Openbar} />

          <div className="MainAppInnerLayoutContainer">
            <div className="mt-16"><Scroll data={scrollData} metadata={metaData} /></div>

            {/* <div className='flex '> */}

              {/* <FloatingAd /> */}
              <Outlet />


            {/* </div> */}

            <Footer className='mt-auto' />
          </div>
        </div>

    </div>
  )
}
