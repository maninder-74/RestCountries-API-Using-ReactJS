import {React,useEffect, useState} from 'react'
import '../Data/Data.css'

const Data = () => {
// 
    const [newData,setnewData] = useState([]);

    const fetchData = async() =>{

     fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,subregion,languages,currencies,borders')
    .then((res)=>res.json())
    .then((data)=>setnewData(data))
}

useEffect(()=>{
   fetchData();
},[])

if(newData){
        return (
<main id="main">
         <div className="mainAlign">
          <div className="countries">
{     
     newData.map((item)=>{
         return(
                  <a href="#" className='countriesList'> 
                      <img src={item.flags.svg} alt='flag'/>
                      <div className="details">
                      <h2>{item.name.common}</h2>
                      <p><b>Population:</b>{item.population}</p>
                      <p><b>Region: </b>{item.region}</p>
                      <p><b>Capital: </b>{item.capital}</p>
                    </div>
                 </a>
            )})   
}
            </div>
          </div>
        </main>
  )
}else{
     return(
        <div>Data Not Available !</div>
     )
}
}

export default Data
