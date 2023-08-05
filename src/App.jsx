import { useEffect, useState } from 'react'
import './App.css'
import ListPups from './components/ListPups';

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players"

function App() {
  const [listAll, setListAll] = useState([]);

  useEffect(() => {
    const fetchAll = async() => {
      const response = await fetch(API_URL);
      const data = await response.json()
      const results = data.data.players
      console.log(results)
      setListAll(results)
    }
    fetchAll();  
  }, []);

  return (
    <>
      <ListPups listAll={listAll}/>
    </>
  )
}

export default App
