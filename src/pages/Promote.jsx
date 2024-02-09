import React, { useState } from 'react'
import fixedImg from "../image/fixed.jpg"
import testImg from "../image/test.jpg"
import fixed2 from "../image/fixed2.jpg"
// import bronze from "../image/bronze-badge.jpg"
// import silver from "../image/silver-badge.jpg"
// import gold from "../image/gold-badge.jpg"
// import diamond from "../image/diamond-badge.jpg"
import {BiMessageRounded} from "react-icons/bi"
import {RiTwitterXFill  } from "react-icons/ri"
import {BiMessageDetail } from "react-icons/bi"
import {BsArrowUpRight} from "react-icons/bs"


import MyModal from '../components/MyModal'
// import { NavLink, Outlet } from 'react-router-dom'

export default function Promote() {

    
    //   const IsActive = {
    //     fontWeight: "bold",
    //     background: 'rgba(20, 21, 23, 0.8)',
    //     border: "none",
    //     borderRadius: "4px",
    // }
    const [showMyModal, setShowMyModal] = useState(false)
    const handleOnClose =()=> setShowMyModal(false)
    
  return (
    <div className='mt-24 relative flex-1 ml-2 mb-20 overflow-x-auto'>
      
    <h1 className="ppp text-3xl lg:text-4xl">Promote Packages Prices</h1>

    <div className="flex flex-col lg:flex-row justify-center items-center">
    <a className='obh flex m-2 justify-center items-center' href='https://t.me/Aiden1A'>
      <BiMessageDetail size={25} className='m-1 p-1 bg-purple-800 rounded-full' />Contact Aiden <BsArrowUpRight  size={25} className='m-1 p-1 '/>
    </a>
    <a className='obh flex m-2 justify-center items-center' href='https://x.com/kojotoken?s=21&t=A5tujRLsd2oS26pZr84trQ'>
      <RiTwitterXFill size={25} className='m-1 p-1 bg-purple-800 rounded-full' /> Enter Twitter <BsArrowUpRight size={25} className='m-1 p-1 ' />
    </a>
    <a className='obh flex m-2 justify-center items-center' href='https://t.me/KOJOCAllS'>
      <BiMessageRounded size={25} className='m-1 p-1 bg-purple-800 rounded-full' /> Join KojoCalls Channel <BsArrowUpRight size={25} className='m-1 p-1 ' />
    </a>
    </div>
      

    <div className="flex  justify-center PromoteCoinPricingModalcontainer">

        <div className='inline-block md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 min-w-[400px] PromoteCoinPricingModal m1'>
          <h1 className='font-bold  text-center text-xl text-purple-800 '>Promoted Coin</h1>
        <div className="col-4  ">
          <div className="IconC">
            <div className="Icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 -4.15 57.875 57.875">
  <g id="Group_37" data-name="Group 37" transform="translate(-1209.722 -1357.465)">
    <path id="Path_95" data-name="Path 95" d="M1224.729,1387.963v16.4l26.032-28.734Z" fill="#626365" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
    <path id="Path_96" data-name="Path 96" d="M1228.118,1390.522l37.479-30.686-17.1,45.207Z" fill="#626365" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
    <path id="Path_97" data-name="Path 97" d="M1211.722,1378.673l16.4,11.712,37.479-30.92Z" fill="#626365" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
  </g>
</svg>
            </div>
          </div>
            <div className=" flex flex-col p-2 ">
                <div className=' flex justify-center flex-col mb-4'><img src={fixedImg} alt="" className="w-full max-w-full h-auto" /></div>
                <span className='flex'><input type="radio" name="options" id="option4" className='mr-2 '/> <label id='radio-label' htmlFor="option4" className=''>$100- 1day+ installation channel     </label> </span>
                
                <span className='flex'><input type="radio" name="options" id="option5" className='mr-2 '/> <label id='radio-label' htmlFor="option5" className=''>$250 - 3days     </label> </span>
                <span className='flex'><input type="radio" name="options" id="option6" className='mr-2 '/> <label id='radio-label' htmlFor="option6" className=''>  $450 - 7days    </label> </span>    
                <button className="buttonck rounded-full w-full my-2" onClick={()=> setShowMyModal(true)}>BOOK YOUR AD</button>
            </div>
        </div>
        </div>



         <div className='inline-block md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 min-w-[400px] PromoteCoinPricingModal m2'>
          <h1 className='font-bold  text-center text-xl text-purple-800 '>Broadcast Banner</h1> 
         <div className="col-4  ">
          <div className="IconC">
            <div className="Icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="45px" height="45px" viewBox="0 0 1024 1024"><path d="M934.32 65.904c10.432 0 17.776 1.938 21.6 3.41 4.592 12.224 10.753 56.031-34.528 101.343L690.4 401.633l1.664 28.656c3.504 59.968 10 167.44 15.6 259.567 4.944 82 9.633 159.44 9.936 166.032.16 4.529.225 5.601-3.999 10.689-9.44 11.472-27.056 30.912-41.904 47.024-23.024-62.032-71.408-193.057-98.128-266.4l-34.336-94.368-71.024 71.024-130.608 125.584-18.192 18.16-.56 25.68c-.432 20.496-.336 57.28-.288 89.712.064 22.592.129 43.12-.031 54.432-.288.528 4.368 1.152 3.936 1.904-2.784-4.464-5.776-9.28-8.944-14.288-26.336-42-62.784-100.096-73.904-118.224l-8.128-13.28-13.344-8.065c-48.528-29.311-102.288-63.151-135.088-84.287 1.136-.656 2.063 2.816 2.815 2.415h2.128c10.32 0 27.376.224 46.496.496 25.008.336 53.376.752 75.088.752 8.32 0 15.712-.064 21.664-.192l25.68-.592 18.16-18.16 125.744-129.712 70.784-70.752-93.935-34.56c-70.592-25.967-205.808-76.464-269.056-100.224 16.223-14.944 35.775-32.688 47.183-42.129 3.184-2.624 5.665-3.967 7.376-3.967l2.256.064c7.056.336 94.688 6.064 179.407 11.6 89.936 5.872 191.44 12.496 249.151 16.16l28.848 1.808 231.024-231.04c32.448-32.4 64.32-37.248 80.449-37.248zm.001-63.997c-37.808 0-84.222 14.526-125.678 55.998L598.035 268.497c-118.624-7.504-422.432-27.6-429.968-27.808a100.693 100.693 0 0 0-4.88-.129c-10.256 0-27.968 1.968-48.128 18.624-23.664 19.569-73.008 65.97-73.008 65.97-11.904 11.935-17.936 26.719-16.496 40.623.88 8.4 5.44 23.712 26.064 31.777 12.528 4.912 211.904 79.504 303.969 113.376L229.844 640.642c-5.569.128-12.465.192-20.257.192-38.336 0-97.776-1.248-121.601-1.248-3.152 0-5.68 0-7.473.064-7.248.224-22.256-3.344-61.84 29.744l-2.816 2.624C3.985 683.89 1.201 695.73.945 703.554c-.256 8.064 1.904 19.68 13.568 29.024 7.008 5.664 96.848 63.184 170.527 107.68 17.665 28.817 98.945 158 103.185 165.008 6.193 10.464 16.32 16.432 28.433 16.816h1.008c11.776 0 23.872-5.84 35.712-17.344 33.504-39.184 28.88-55.407 29.023-62.224.528-21.376-.368-111.936.4-147.84l130.592-125.6c33.376 91.68 106.336 289.008 111.216 301.567 8.128 20.624 23.44 25.153 31.84 26 1.376.16 2.785.225 4.16.225 12.625 0 25.712-5.936 36.432-16.655 0 0 46.256-49.088 65.904-72.976 19.68-23.872 18.913-44.256 18.529-53.872-.16-6.656-18.689-308.816-25.569-426.816L966.561 215.89c74.657-74.689 62.785-164.688 35.057-192.368-12.24-12.304-37.024-21.615-67.297-21.616z"/></svg>
            </div>
          </div>
            <div className=" flex flex-col p-2 ">
                <div className=' flex justify-center flex-col mb-4'><img src={testImg} alt="" className="w-full max-w-full h-auto" /></div>
                <span className='flex'><input type="radio" name="options" id="option7" className='mr-2 '/> <label id='radio-label' htmlFor="option7" className=''>$150 - 1 DAY     </label> </span>
                <span className='flex'><input type="radio" name="options" id="option8" className='mr-2 '/> <label id='radio-label' htmlFor="option8" className=''>$390 - 3days+channel pin   </label> </span>
                <span className='flex'><input type="radio" name="options" id="option9" className='mr-2 '/> <label id='radio-label' htmlFor="option9" className=''>$550 - 7 days+channel pin  </label> </span>    
                <button className="buttonck rounded-full w-full my-2" onClick={()=> setShowMyModal(true)}>BOOK YOUR AD</button>
            </div>
        </div>
         </div>


         <div className='inline-block md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 min-w-[400px] PromoteCoinPricingModal m3'>
          <h1 className='font-bold  text-center text-xl text-purple-800 '>Fixed Banner</h1>
        <div className="col-4  ">
          <div className="IconC">
            <div className="Icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="50px" height="50px" viewBox="0 0 32 32" version="1.1">
                <path d="M6.553 27.602c-0.628 1.306-1.025 2.177-4.522 2.304 0.1-3.374 0.744-3.736 2.031-4.378 0.54-0.27 1.213-0.605 1.941-1.164l-1.218-1.555c-0.575 0.442-1.104 0.674-1.615 0.928-2.145 1.070-3.156 2.123-3.156 7.145l0.017 1.022 0.983-0.022c5.301 0 6.292-1.198 7.285-3.26 0.217-0.452 0.338-0.758 0.705-1.367l-1.483-1.347c-0.444 0.607-0.722 1.183-0.968 1.692zM22.030 5.896c-2.212 0-4.011 1.799-4.011 4.010s1.8 4.011 4.011 4.011 4.011-1.8 4.011-4.011c0-2.211-1.8-4.011-4.011-4.011zM22.030 11.909c-1.104 0-2.003-0.899-2.003-2.002s0.898-2.002 2.003-2.002 2.003 0.899 2.003 2.002c-0 1.104-0.898 2.002-2.003 2.002zM31.993 0.916c-0.030-0.499-0.426-0.899-0.925-0.936 0 0-5.596-0.408-10.98 1.603-1.967 0.735-3.586 1.898-5.097 3.661-1.26 1.47-2.512 4.126-3.617 6.332-0.427 0.851-0.835 1.666-1.181 2.288h-5.563c-0.286 0-0.558 0.123-0.748 0.336l-3.666 3.973c-0.234 0.265-0.312 0.633-0.204 0.969s0.385 0.592 0.729 0.67l5.967 1.364c0.407 0.502 1.084 1.253 2.168 2.456l2.261 2.506 1.217 5.148c0.080 0.339 0.331 0.613 0.663 0.72 0.101 0.032 0.206 0.049 0.309 0.049 0.236 0 0.467-0.083 0.651-0.241l3.705-3.686c0.221-0.189 0.349-0.467 0.349-0.759v-5.16c0.498-0.309 1.381-0.786 2.212-1.251 2.264-1.265 5.645-2.841 7.046-4.087 1.974-1.754 2.692-3.040 3.398-4.941 1.678-4.521 1.322-10.751 1.305-11.014zM28.813 11.233c-0.616 1.659-1.174 2.651-2.852 4.142-1.239 1.101-4.629 2.682-6.694 3.837-1.541 0.861-2.464 1.364-2.869 1.695-0.233 0.189-0.368 0.474-0.368 0.774v5.227l-2.11 2.319-0.899-3.8c-0.039-0.163-0.118-0.314-0.231-0.439-1.839-2.038-4.617-5.119-4.83-5.364-0.139-0.169-0.332-0.289-0.549-0.339l-4.581-1.048 2.247-2.375h5.689c0.348 0 0.671-0.181 0.852-0.476 0.44-0.716 0.95-1.736 1.542-2.915 1.002-1.998 2.248-4.642 3.348-5.926 1.3-1.516 2.619-2.469 4.278-3.089 3.691-1.379 7.499-1.524 9.24-1.511 0.032 1.844-0.037 6.119-1.214 9.289z"/>
            </svg>
            </div>
          </div>
            <div className=" flex flex-col p-2 ">
                <div className=' flex justify-center flex-col mb-4'><img src={fixed2} alt="" className="w-full max-w-full h-auto" /></div>
                <span className='flex'><input type="radio" name="options" id="option1" className='mr-2 '/> <label id='radio-label' htmlFor="option1" className=''>$200 - 1day </label> </span>
                <span className='flex'><input type="radio" name="options" id="option2" className='mr-2 '/> <label id='radio-label' htmlFor="option2" className=''>$450 -3days+channel pin  </label> </span>
                <span className='flex'><input type="radio" name="options" id="option3" className='mr-2 '/> <label id='radio-label' htmlFor="option3" className=''>$890$ -7days+channel pin </label> </span>    

                <button className="buttonck rounded-full w-full my-2" onClick={()=> setShowMyModal(true)}>BOOK YOUR AD</button>
            </div>
        </div>
        </div>

      
        {/* <div className="col-4 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 p-2  ">
            <div className=" flex flex-col ">
              <div className="flex justify-center p-2 rounded bg-black ">
                <NavLink to="." end className=' w-1/4 flex justify-center items-center   p-3 text-sm' id='promote-plan' style={({isActive})=> isActive ? IsActive : null}> <div className="flex flex-col justify-center items-center"><img src={bronze} width={15} height={15} alt="" />Bronze</div> </NavLink>
                <NavLink to="silver" className=' w-1/4 flex justify-center items-center  p-3 text-sm' id='promote-plan' style={({isActive})=> isActive ? IsActive : null}><div className="flex flex-col justify-center items-center"><img src={silver} width={15} height={15} alt="" />Silver</div></NavLink>
                <NavLink to="gold" className=' w-1/4 flex justify-center items-center   p-3 text-sm' id='promote-plan' style={({isActive})=> isActive ? IsActive : null}><div className="flex flex-col justify-center items-center"><img src={gold} width={15} height={15} alt="" />Gold</div></NavLink>
                <NavLink to="diamond" className=' w-1/4 flex justify-center items-center p-3 text-sm' style={({isActive})=> isActive ? IsActive : null}><div className="flex flex-col justify-center items-center"><img src={diamond} width={15} height={15} alt="" />Diamond</div></NavLink>
              </div>
              <div className="flex flex-col h-[250px]" >
                    <Outlet />
                   
               </div>
               <button className="buttonck rounded-full w-full bottom-0" onClick={()=> setShowMyModal(true)}>BOOK YOUR AD</button>
            </div>
        </div> */}

   
    </div>
    <MyModal visible={showMyModal} onClose={handleOnClose} />
    </div>


  )
}
