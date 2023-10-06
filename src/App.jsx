import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './assets/utils/getRandomNumber'
import LocationInfo from './assets/components/LocationInfo'
import ResidentCard from './assets/components/ResidentCard'

function App() {

  const [inputValue, setInputValue] = useState(getRandomNumber(126))

 
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'hello' }`
 
  const  [ location, getLocation, hasError ] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputSearch = useRef()

  const hanleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }

 
 
  return (
   <div>
    <h1>proyecto 3</h1>
    <form onSubmit={hanleSubmit}>
      <input ref={inputSearch} type="text" />
      <button>search</button>
    </form>

    {
      hasError
         ? <h2>❎ hey! you nust provide an id from 1 to 126😖</h2>
         : (
      <>
      <LocationInfo
    location={location} />
    <div>
      {
        location?.residents.map(url => (
          <ResidentCard 
            key={url}
            url={url}
          /> 
        ))
      }
    </div>
    </>
    )
    }
   </div>
  )
}

export default App
