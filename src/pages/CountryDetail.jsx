import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EachCountry from "../components/EachCountry";
import Loading from "../utils/Loading";

const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await response.json();
      setCountry(data[0]);
      setIsLoading(false);
    };
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  console.log(countryName);
  return <div>
    {!isLoading && <EachCountry country={country} />}
    {isLoading && <Loading/> }
  </div>;
};

export default CountryDetail;
