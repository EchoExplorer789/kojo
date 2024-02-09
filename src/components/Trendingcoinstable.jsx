import React, { useEffect, useState } from 'react'
import { CiStar } from "react-icons/ci";
import { PiArrowsDownUpBold } from 'react-icons/pi';

export default function Trendingcoinstable(props) {
  const trendingCoins = props.setCryptoLists;


  
    return (
      <div>
        <table className=" lg:w-full" style={{background: "#1a1b1e", borderRadius: "10px",margin: "2.5%", width: '94%'}} id='table'>
      <thead>
       
        <tr>
        {/* <Link> </Link> */}
        <th className="px-6 py-4  text-left text-xs leading-4 font-bold text-white-500 uppercase tracking-wider ">
            #
          </th>
          <th className=" py-4  text-right text-xs  leading-4 font-bold text-white-500 uppercase tracking-wider sticky left-0 min-w-[150px] lg:min-w-[250px]" id='coin-1-row'>
            <div className="flex text-18 ">
            Trending Coins
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className="  text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[65px] ">
            <div className="flex justify-center text-18 ">
            1H
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className="  text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[65px] ">
           <div className="flex  justify-center text-18"> 24H
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}</div>
          </th>
          <th className="  text-xs leading-4 font-bold text-white-500  uppercase tracking-wider min-w-[65px] ">
            <div className="flex justify-center text-18 ">
            7d
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className=" py-4  text-right text-xs leading-4 lg:mx-60 font-bold text-white-500 uppercase tracking-wider min-w-[100px] ">
            <div className="flex text-18 justify-end pl-3 ">
            Price
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>
          <th className=" py-4  text-right text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[150px] ">
            <div className="flex text-18 justify-center">
            Market Cap
            {<PiArrowsDownUpBold style={{ fontSize: '14px' }}/>}
            </div>
          </th>

          <th className=" py-4  text-18 text-min-w-[200px] left  text-xs leading-4 font-bold text-white-500 uppercase tracking-wider ">
            <div className="flex text-18  justify-center">Launch Date</div>
          </th>
         
          {/* <th className=" py-4  text-18 text-left text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[100px]">
            <div className="flex text-18  justify-end"> </div>
          </th> */}
          {/* <th className=" py-4  text-18 text-left text-xs leading-4 font-bold text-white-500 uppercase tracking-wider min-w-[100px]">
            <div className="flex text-18  justify-center">Votes</div>
          </th> */}
        </tr>
        
      </thead>
      <tbody className="">
        {
          trendingCoins && trendingCoins.map((Obj, index)=>{
            return(
            <tr key={index} onClick={
              ()=>{
                props.showchart(Obj.symbol,{
                  "name":Obj.name,
                  "symbol":Obj.symbol,
                  "price":Obj.current_price,
                  "supply":Obj.total_supply,
                  "market":Obj.market_cap,
                  "volume":Obj.total_volume,
                  "rank":Obj.market_cap_rank,                  
                  "max_supply":Obj.max_supply,                  
                  "image":Obj.image,                  
                })
              }}>
              <td>
                <div className="flex justify-center items-center">
                {<CiStar style={{ fontSize: '24px' }} />}
                </div>
              </td>
                <td className=" my-4  min-w-[150px]   whitespace-no-wrap text-white-500 flex sticky left-0 lg:max-w-[250px]"  id='coin-1-row'>
            {/* <Link 
              to={`coin/${crypto?.slug}`} 
              state={{type : "normal",cmc_id : crypto?.id}}
              className='flex whitespace-no-wrap sticky left-0  lg:max-w-[250px]'
            > */}
            <img
              src={Obj.image}
              alt=""
              className="coin_image p-2"
            />
              <div className='flex flex-col justify-around'>
                <p className='text-xs'>{Obj.symbol}</p>
                <p>{Obj.name}</p> 
              </div>
              {/* </Link>  */}
            </td>
            {parseFloat(Obj.price_change_percentage_1h_in_currency) ?
            parseFloat(Obj.price_change_percentage_1h_in_currency) > 0 ? 
                  <td className="px-2 lg:px-4 pt-4  whitespace-no-wrap text-green-500 text-right min-w-[65px]">
                  <div className="flex justify-center">{parseFloat(Obj.price_change_percentage_1h_in_currency).toFixed(2)}</div>
                  </td> : 
                  <td className="px-2 lg:px-4 pt-4  whitespace-no-wrap text-red-500 text-right min-w-[65px]">
                  <div className="flex justify-center">{parseFloat(Obj.price_change_percentage_1h_in_currency).toFixed(2)}</div>
                  </td> : <td className="px-2 lg:px-4 pt-4  whitespace-no-wrap text-right min-w-[65px]"><div className="flex justify-center">0</div></td>
            }
            {parseFloat(Obj.price_change_percentage_24h_in_currency) ?
            parseFloat(Obj.price_change_percentage_24h_in_currency) > 0 ? 
                  <td className="px-2 lg:px-4 pt-4 whitespace-no-wrap text-green-500 text-right min-w-[65px]">
                  <div className="flex justify-center">{parseFloat(Obj.price_change_percentage_24h_in_currency).toFixed(2)}</div>
                  </td> : 
                  <td className="px-2 lg:px-4 pt-4 whitespace-no-wrap text-red-500 text-right min-w-[65px]">
                  <div className="flex justify-center">{parseFloat(Obj.price_change_percentage_24h_in_currency).toFixed(2)}</div>
                  </td> : <td className="px-2 lg:px-4 pt-4 whitespace-no-wrap  text-right min-w-[65px]"><div className="flex justify-center">0</div></td>
            }
            {parseFloat(Obj.price_change_percentage_7d_in_currency) ?
            parseFloat(Obj.price_change_percentage_7d_in_currency) > 0 ? 
                  <td className="px-2 lg:px-4 pt-4 whitespace-no-wrap text-green-500 text-right min-w-[65px]">
                  <div className="flex justify-center">{parseFloat(Obj.price_change_percentage_7d_in_currency).toFixed(2)}</div>
                  </td> : 
                  <td className="px-2 lg:px-4 pt-4 whitespace-no-wrap text-red-500 text-right min-w-[65px]">
                  <div className="flex justify-center">{parseFloat(Obj.price_change_percentage_7d_in_currency).toFixed(2)}</div>
                  </td> : <td className="px-2 lg:px-4 pt-4 whitespace-no-wrap text-right min-w-[65px]"><div className="flex justify-center">0</div></td>
            }
            <td className="pt-4 whitespace-no-wrap text-white-500  text-right min-w-[100px]" >
              ${parseFloat(Obj.current_price).toFixed(5)}
            </td>
            <td className=" pt-4 whitespace-no-wrap text-white-500 text-right  min-w-[150px]">
              <div className="flex justify-center">{Obj.market_cap}</div>
            </td>
            <td className=" pt-4 whitespace-no-wrap text-white-500 text-right  min-w-[150px]">
              <div className="flex justify-center">{Obj.atl_date.slice(0, 10)}</div>
            </td>
            
            </tr>
            );
          })
        }
        
      </tbody>
    </table>
    
    </div>
  )
}

