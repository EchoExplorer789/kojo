import React, { useEffect, useState } from 'react'
import { CiStar } from "react-icons/ci";
import { PiArrowsDownUpBold } from 'react-icons/pi';

export default function NewListing(props) {
  const [trendingCoins, setCryptoLists] = useState(null);
  
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('http://localhost:8080/NewListing.php');

         if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const data = await response.json();
        console.log(data); // Limit to the first 10 coins for example
        
        setCryptoLists(data); // Limit to the first 10 coins for example
       } catch (error) {
         console.error('Error fetching trending coins:', error);
       }
     };

     fetchTrendingCoins();
  }, []);
  
  
    
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
              New Listings
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
            trendingCoins && trendingCoins.map(async (Obj, index)=>{
              // var det = null;
              // await fetch("https://api.dexscreener.com/latest/dex/tokens/"+Obj.address)
              //   .then(r=>r.json())
              //   .then(d=>{
              //     console.log(d);
              //     det = d;
              //   })
              return(
              <tr key={index} onClick={()=>{
                fetch("https://api.dexscreener.com/latest/dex/tokens/"+Obj.address)
                .then(r=>r.json())
                .then(d=>{
                  console.log(d);
                  props.showchart(
                    d.pairs[0].dexId,
                    {
                      name: Obj.name,
                      image: Obj.previewImg_sad,
                      symbol: Obj.symbol,
                      price: d.pairs[0].priceUsd,
                      liquidity: d.pairs[0].liquidity.usd,
                      volume24: d.pairs[0].volume.h24,
                      priceChange24: d.pairs[0].priceChange.h24,
                      BaseLiquidity: d.pairs[0].liquidity.base,
                      quotetoken: d.pairs[0].quoteToken.name
                    }
                  )
                })
              }}>
                <td>
                  <div className="flex justify-center items-center">
                  {<CiStar style={{ fontSize: '24px' }} />}
                  </div>
                </td>
                  <td className=" my-4  min-w-[150px]   whitespace-no-wrap text-white-500 flex sticky left-0 lg:max-w-[250px]"  id='coin-1-row'>
                  <img
                    src={Obj.previewImg_sad}
                    alt=""
                    className="coin_image p-2"
                  />
                  <div className='flex flex-col justify-around'>
                    <p className='text-xs'>{Obj.symbol}</p>
                    <p>{Obj.name}</p> 
                  </div>
                </td>
                <td className="px-2 lg:px-4 pt-4  whitespace-no-wrap text-right min-w-[65px]"><div className="flex justify-center">---</div></td>
                <td className="px-2 lg:px-4 pt-4 whitespace-no-wrap  text-right min-w-[65px]"><div className="flex justify-center">---</div></td>
                <td className="px-2 lg:px-4 pt-4 whitespace-no-wrap text-right min-w-[65px]"><div className="flex justify-center">---</div></td>
                
                <td className="pt-4 whitespace-no-wrap text-white-500  text-right min-w-[100px]" >
                  ---
                </td>
                <td className=" pt-4 whitespace-no-wrap text-white-500 text-right  min-w-[150px]">
                  <div className="flex justify-center">---</div>
                </td>
                <td className=" pt-4 whitespace-no-wrap text-white-500 text-right  min-w-[150px]">
                  <div className="flex justify-center">---</div>
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
