import {React,useEffect, useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import '../Data/Data.css'
import CountryDetail from '../CountryDetail/CountryDetail';
import {Link} from 'react-router-dom'
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
         <div>
            <Navbar/>
            <Search/>
<main id="main">
         <div className="mainAlign">
          <div className="countries">
{     
     newData.map((item,index)=>{
         return( 
                  <Link to={`country/${item.name.common}`} key={index} className='countriesList'> 
                      <img src={item.flags.svg} alt='flag'/>
                      <div className="details">
                      <h2>{item.name.common}</h2>
                      <p><b>Population:</b>{item.population}</p>
                      <p><b>Region: </b>{item.region}</p>
                      <p><b>Capital: </b>{item.capital}</p>
                    </div>
                 </Link>
            )})   
}
            </div>
          </div>
        </main>
  </div>)
}

else{
     return(
        <div>Data Not Available !</div>
     )
}
}

export default Data
