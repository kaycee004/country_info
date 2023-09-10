import React from 'react'
import Search from '../components/Search'
import Countries from '../components/Countries'
import Loading from '../utils/Loading'

const HomePage = ({ allCountries, isLoading, filterByRegion, filterBySearch }) => {
  return (
    <div>
      <Search filterByRegion={filterByRegion}
      filterBySearch={filterBySearch}/>
      {isLoading && <Loading/>}
      {!isLoading && <Countries allCountries={allCountries}/>}
    </div>
  )
}

export default HomePage