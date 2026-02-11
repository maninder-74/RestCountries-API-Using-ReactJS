import { React, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar"
import "./CountryDetail.css";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"
const CountryDetail = () => {
  const { name } = useParams();
  const [handleData, setHandleData] = useState();

  const handleCountryData = async () => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fulltext=true`)
      .then((res) => res.json())
      .then((data) => setHandleData(data));
  };

  useEffect(() => {
    handleCountryData();
  }, [name]);

  if (handleData) {
    return (
      <>
       <Navbar/>
      <div className="parent">
        {handleData.map((val, index) => {
          return (
            <div key={index}>
              <img src={val.flags.svg} id="flag" alt="" />
              <div className="wrap">
                <div className="countryName">
                  <h3 className="countrytitle">{val.name.common}</h3>
                </div>

                <div className="content">
                  <div className="left">
                    <p>
                      <b>Native Name: </b>
                      {Object.values(val.name.nativeName)[0]?.common}
                    </p>
                    <p>
                      <b>Population: </b>
                      {val.population}
                    </p>
                    <p>
                      <b>Region: </b>
                      {val.region}
                    </p>
                    <p>
                      <b>Sub Region: </b>
                      {val.subregion}
                    </p>
                    <p>
                      <b>Capital: </b>
                      {val.capital[0]}
                    </p>
                  </div>

                  <div className="right">
                    <p>
                      <b>Top Level Domain: </b>
                      {val.tld?.[0]}
                    </p>
                    <p>
                      <b>Currencies: </b>
                      {Object.values(val.currencies)
                        .map((currency) => currency.name)
                        .join(", ")}
                    </p>
                    <p>
                      <b>Languages: </b>{" "}
                      {Object.values(val.languages).join(", ")}
                    </p>
                  </div>
                </div>

                <div className="borders">
                  <h4>
                    Border countries:</h4>         
                  <div className="btnstyle">
                    {val.borders?.map((border, index) => (
                      <Link key={index}   to={`/country/${border}`} className="borderBtn">
                        {border}
                      </Link>
                    ))}
                  </div>
                     
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>);
  } else {
    return <h1>Data not Availabe</h1>;
  }
};
export default CountryDetail;
