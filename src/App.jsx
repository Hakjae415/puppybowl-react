import { useEffect, useState } from 'react'
import './App.css'
import ListPups from './components/ListPups';

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players"

function App() {
  const [listAll, setListAll] = useState([]);
  const [onePup, setOnePup] = useState(null);

  useEffect(() => {
    const fetchAll = async() => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json()
        const results = data.data.players
        console.log(results)
        setListAll(results)
      } catch(err) {
        console.error("Trouble Loading Puppers", err)
      }
    }
    fetchAll();  
  }, []);

  const handleDetail = async(id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`)
      const data = await response.json()
      const results = data.data.player
      console.log(results)
      setOnePup(results)
    } catch(err) {
      console.error("CAN'T GET DEETS", err)
    }
  }

  return (
    <>
      <ListPups listAll={listAll} handleDetail={handleDetail}/>
    </>
  )
}

export default App
