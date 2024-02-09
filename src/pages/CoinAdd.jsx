import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import { AiFillFileImage } from "react-icons/ai"
import { MdDelete } from "react-icons/md"
import swal from 'sweetalert';
import axios from 'axios'

export async function action({request}){
    const formData = await request.formData()
   
    var coinId = formData.get("id")
    var address = formData.get("address")
    var chain = formData.get("chain")




    const cmc = await axios.get(`https://kojocalls.onrender.com/api/address/${address}`).catch((Error)=>{
        console.log(Error)
      })
    const cmc_id = cmc?.data[0] ? cmc?.data[0] : "0000"


  try {
    if(document.getElementById("chain")){
        var chain = document.getElementById("chain").value;
    }else{
        var chain = "";
    }
    if(document.getElementById("name")){
        var name = document.getElementById("name").value;
    }else{
        var name = "";
    }
    if(document.getElementById("symbol")){
        var symbol = document.getElementById("symbol").value;
    }else{
        var symbol = "";
    }
    if(document.getElementById("launch_date")){
        var launch_date = document.getElementById("launch_date").value;
    }else{
        var launch_date = "";
    }
    if(document.getElementById("launch_time")){
        var launch_time = document.getElementById("launch_time").value;
    }else{
        var launch_time = "";
    }
    if(document.getElementById("description")){
        var description = document.getElementById("description").value;
    }else{
        var description = "";
    }
    if(document.getElementById("Links")){
        var Links = document.getElementById("Links").value;
    }else{
        var Links = "";
    }
    if(document.getElementById("link")){
        var link = document.getElementById("link").value;
    }else{
        var link = "";
    }
    if(document.getElementById("previewImg_sad")){
        var previewImg_sad = document.getElementById("previewImg_sad").src;
    }else{
        var previewImg_sad = "";
    }
    // var address = document.getElementById("address").value;
    // var name = document.getElementById("name").value;
    // var symbol = document.getElementById("symbol").value;
    // var launch_date = document.getElementById("launch_date").value;
    // var launch_time = document.getElementById("launch_time").value;
    // var description = document.getElementById("description").value;
    // var Links = document.getElementById("Links").value;
    // var link = document.getElementById("link").value;
    // var previewImg_sad = document.getElementById("previewImg_sad").src;
    var fileInput = document.getElementById("previewImg_sad");

if (fileInput) {
  await new Promise((resolve, reject) => {
    fetch(fileInput.src)
      .then(response => response.blob())
      .then(blob => {
        var reader = new FileReader();
        reader.onload = function () {
          var base64data = reader.result;
          previewImg_sad = base64data;
          resolve(); // Resolve the promise when the asynchronous operations are complete
        };
        reader.readAsDataURL(blob);
      })
      .catch(error => reject(error)); // Reject the promise if there's an error
  });

  // Code after the asynchronous operations can be executed here
  console.log("Asynchronous operations have completed");
}
    // fetch(`http://localhost:80/NewListing.php?add_new=yes&chain=${chain}&address=${address}&name=${name}&symbol=${symbol}&launch_date=${launch_date}&launch_time=${launch_time}&description=${description}&Links=${Links}&link=${link}&previewImg_sad=${previewImg_sad}`)
    // .then(r=>r.text())
    // .then(d=>{
    //     console.log(d);
    // })
    await new Promise((resolve, reject) => {
    var postData = {
        add_new: 'yes',
        chain: chain,
        address: address,
        name: name,
        symbol: symbol,
        launch_date: launch_date,
        launch_time: launch_time,
        description: description,
        Links: Links,
        link: link,
        previewImg_sad: previewImg_sad
      };
      
      fetch('/NewListing.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(postData).toString(),
      })
        .then(response => response.text())
        .then(data => {
          console.log(data);
          resolve()
        })
        .catch(error => console.error('Error:', error));
    
    });
  
            document.querySelector("#address").value = ""
            document.querySelector("#id").value = "" 
            document.querySelector("#name").value = ""
            document.querySelector("#symbol").value = "" 
            document.querySelector("#description").value = ""
  } catch (error) {
    if (error.response && error.response.status === 400) {
        // Handle 400 Bad Request errors
        console.error('Bad Request:', error.response.error);
        throw new Error('Invalid input. Please check your data.'); // Throw a custom error message
      } else {
        // Handle other errors
        console.error('POST request failed:', error);
        throw error;
      }
  }

    return null
}

export default function CoinAdd() {

    const [image ,setImage] = useState(null)
    const [fileName ,setFileName] = useState(null)
    const [address , setAddress] = useState('0xaA28a9EBbfA851ac9a1597Aa1dd2AF2A5d208EB8')
    // const promoted = useActionData()

   

    function handleChange(e) {
        setAddress(e.target.value)
    }

    async function getCoin() {
        const url = `https://api.dexscreener.com/latest/dex/tokens/${address}`
        
        axios.get(url).then((response)=>{
            //document.querySelector("#id").value = response.data.id 
            document.querySelector("#name").value = response.data.pairs[0].baseToken.name 
            document.querySelector("#symbol").value = response.data.pairs[0].baseToken.symbol 
            //document.querySelector("#description").value = response.data.description.en
            //console.log( response.data.description.en)
            //setImage(response.data.image.small)
/* 

            const secondApiUrl = `https://api.coingecko.com/api/v3/coins/${response.data.id}?localization=false&tickers=false&market_data=false&community_data=true`;

            // Make the second API call
            axios.get(secondApiUrl)
              .then((secondApiResponse) => {
                // You can now use data from the second API response
                document.querySelector("#launch_date").value = secondApiResponse.data.genesis_date
                console.log(secondApiResponse.data.genesis_date)
                
              })
              .catch((secondApiError) => {
                console.error(secondApiError);
              }); */
           
        }).catch((Error)=>{
            console.log(Error)
        })
        
    }

    function showPreview({target:{files}}) {
        files[0] && setFileName(files[0].name)
        if (files) {
            setImage(URL.createObjectURL(files[0]))
        }
    }

    function deleteFile() {
        setFileName("No Selected File")
        setImage(null)  
    }

    useEffect(() => {
        // Code to run when the component is mounted
        getCoin();
      }, []);


    const [a_Date,seta_Date] = useState('2023-06-08');
    const [a_time,seta_time] = useState('08:00');

  return (
    <div>
        <Form 
            method="post" 
            className='flex flex-col '
        >
            <div className="pb-2 pl-2 lg:flex w-full pr-2">
            <input type="text" name='id' id='id' className='hidden' />
           <div className='lg:w-1/2'>
           <h1 className="text-[25px] text-gray-300 mt-8 mb-8">Contract Details</h1>
            <div className='flex mb-5 sect'>
                <div className='w-1/2 pr-4'>
                    <label htmlFor="fruit" className="block mb-2 text-gray-400">Chain</label>
                    <select id="chain" name="chain" className="w-full p-2 border rounded-full  text-gray-400" required>
                        <option value="eth" className='text-gray-400 p-2 '>ETH</option>
                        <option value="bnb" className='text-gray-400 p-2 '>BNB</option>
                        <option value="sol" className='text-gray-400 p-2 '>SOL</option>
                        <option value="poly" className='text-gray-400 p-2 '>POLY</option>
                        <option value="opti" className='text-gray-400 p-2 '>OPTI</option>
                        <option value="aval" className='text-gray-400 p-2 '>AVAL</option>
                        <option value="arbi" className='text-gray-400 p-2 '>ARBI</option>
                    </select>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="address" className="block mb-2 text-gray-400">Contract Address</label>
                    <input 
                        type="text" 
                        name="address" 
                        id="address" 
                        className="w-full p-2 border rounded-full  text-gray-400" 
                        onBlur={getCoin} 
                        value={address}
                        onChange={handleChange}
                    />
                </div>
            </div>
           

            <h1 className="text-[25px] text-gray-300 mt-8 mb-8">Coin Details</h1>
            <div className="sect">
                <div className='flex mb-5'>
                    <div className='w-1/2 pr-4'>
                        <label htmlFor="address" className="block mb-2 text-gray-400">Name <span className="text-red-500">*</span></label>
                        <input type="text" name="address" id="name" className="w-full p-2 border rounded-full  text-gray-400" required/>
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="address" className="block mb-2 text-gray-400">Symbol <span className="text-red-500">*</span></label>
                        <input type="text" name="symbol" id="symbol" className="w-full p-2 border rounded-full  text-gray-400" required/>
                    </div>
                </div>

                <div className='flex mb-5'>
                    <div className='w-1/2 pr-4'>
                        <label htmlFor="address" className="block mb-2 text-gray-400">Launch Date <span className="text-red-500">*</span></label>
                        <input type="date" value={a_Date} onInput={(event)=>{seta_Date(event.target.value)}} name="address" id="launch_date" className="w-full p-2 border rounded-full  text-gray-400" required/>
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="address" className="block mb-2 text-gray-400">Launch Time <span className="text-red-500">*</span></label>
                        <input type="time" value={a_time} onInput={(event)=>{seta_time(event.target.value)}} name="address" id="launch_time" className="w-full p-2 border rounded-full  text-gray-400" required/>
                    </div>
                </div>
                <label htmlFor="address" className="block mb-2 text-gray-400">Coin Overview <span className="text-red-500">*</span></label>
                <textarea type="time" name="address" id="description" className="w-full p-2 border rounded-full  text-gray-400"required ></textarea>
            </div>
           </div>

           <div className='m-3 lg:w-1/2 w-full'>
           <h1 className="text-[25px] text-gray-300 mt-8 mb-8">Contract Details</h1>
            <div className="sect">
                <div id="imageContainer" className='p-4  cursor-pointer flex-col items-center justify-center  max-w-[300px]' onClick={()=> document.querySelector("#imageUpload").click()}>
                {image ? (
                <img src={image} alt="" width={100} height={80} id="previewImg_sad" className='m-auto mb-2' />
                ) : (
                <>
                    <span className="block mb-2 text-gray-400 text-[20px]">Click To Upload Logo</span>
                    <span className="block mb-2 text-gray-200 text-[12px]">File should not exceed 1MB</span>
                </>
                )}
                            
                
                    <input type="file" id="imageUpload" name="imageUpload" accept="image/*" className='hidden' onChange={showPreview}/>
                </div>
                <div className="flex w-full mt-2">
                    <AiFillFileImage className='text-white' />
                    <span className='flex'>
                        <span className='text-[8px] lg:text-[12px] text-gray-300 '>{fileName}</span>
                        <MdDelete onClick={deleteFile} className='text-white'  />
                    </span>
                </div>
            </div>
            <h1 className="text-[25px] text-gray-300 mt-8 mb-8">Links</h1>  
            <div className='flex mb-5 w-full sect' >
                <div className='w-1/2 pr-4'>
                    <label htmlFor="fruit" className="block mb-2 text-gray-400">Platform</label>
                    <select id="Links" name="fruit" className="w-full p-2 border rounded-full  text-gray-400">
                        <option value="Twitter" className='text-gray-400 p-2 bg-white'>Twitter</option>
                        <option value="Instagram" className='text-gray-400 p-2 bg-white'>Instagram</option>
                        <option value="Telegram" className='text-gray-400 p-2 bg-white'>Telegram</option>
                        <option value="Discord" className='text-gray-400 p-2 bg-white'>Discord</option>
                    </select>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="address" className="block mb-2 text-gray-400">Link</label>
                    <input type="text" name="address" id="link" className="w-full p-2 border rounded-full  text-gray-400" />
                </div>
            </div>
            
           </div>
            </div>

           <div className="flex justify-center mb-5">
           <button type="submit" className='p-5 rounded-full bg-purple-800 text-white w-2/3' >Submit</button>
           </div>
         </Form>
    </div>
  )
}
