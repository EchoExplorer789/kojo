import React, { useEffect, useState } from 'react'


export default function Scroll({ data, metadata }) {
  const [TrendingCoins, setTrendingCoins] = useState(null);
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=2');

         if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const data = await response.json();
        console.log(data); // Limit to the first 10 coins for example
         setTrendingCoins(data); // Limit to the first 10 coins for example
       } catch (error) {
         console.error('Error fetching trending coins:', error);
       }
     };

     fetchTrendingCoins();
  }, []);

  useEffect(()=>{
    const b = document.getElementsByClassName("b");
    const m = document.querySelector(".m");
    const m_width = m.getBoundingClientRect().width;
    const b_width = 150;
    const all_b_width = b.length * b_width * 10;
    let currentmargin = 0;
    const ToChange = 20;

    const Animate = () => {
        if(-currentmargin <= (b_width + 10)){
            currentmargin = currentmargin -ToChange;
            if(b[0]){
              b[0].style.marginLeft=currentmargin+"px";
            }
        }else{
            currentmargin = -ToChange * 2;
            const New_b = document.createElement("div");
            if(b[0]){
              New_b.classList=b[0].classList;
              New_b.innerHTML = b[0].innerHTML;
              b[0].style.marginLeft=currentmargin+"px";
              b[0].remove();
            }
            m.appendChild(New_b);
        }
    }

    setInterval(()=>{
        Animate()
    },1000)
  },[])
  
  return (
    <div class="logos flex">
     <div class="m">
        <div class="b">1</div>
        {
          TrendingCoins && TrendingCoins.map((Obj, i)=>{
            return(
              <div class="b" key={i}>
                <div className="r" style={{fontSize: "80%"}}>#{Obj.market_cap_rank}</div>
                <img src={Obj.image} style={{width: "30px"}}/>
                <p style={{fontSize: '90%'}}>{Obj.name}</p>
                <div className="r" style={{fontSize: "80%"}}>{Obj.price_change_24h < 0 ? (
        <span style={{ color: 'red' }}>{Obj.price_change_24h.toFixed(2)}</span>
      ) : (
        <span>{Obj.price_change_24h.toFixed(2)}</span>
      )}</div>
              </div>
            )
          })
        }
    </div>
  </div>
  )
}
