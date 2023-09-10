import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CountryDetail from "./pages/CountryDetail";


function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCountries, setfilteredCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setAllCountries(data);
      console.log(data);
      setIsLoading(false);
    };

    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  const filterByRegion = (region) => {
    const newCountries = allCountries.filter(
      (eachCountry) => eachCountry.region === region
    );
    console.log(newCountries);
    setfilteredCountries(newCountries);
  };

  const filterBySearch = (search) => {
    const newNations = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(search)
    );
    console.log(newNations);
    setfilteredCountries(newNations);
  };

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage 
              allCountries={ 
                filteredCountries.length > 0 
                ? filteredCountries 
                : allCountries
              } 
              isLoading={isLoading}
              filterByRegion={filterByRegion}
              filterBySearch={filterBySearch} 
              />
            }
          />
          <Route path="/:countryName" element=
          {<CountryDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
