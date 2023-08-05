import { useEffect, useState } from 'react'
import './App.css'
import ListPups from './components/ListPups';
import SinglePup from './components/SinglePup';

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players"

function App() {
  const [listAll, setListAll] = useState([]);
  const [onePup, setOnePup] = useState(null);
  const [isClick, setIsClick] = useState(false);

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
      setIsClick(true)
    } catch(err) {
      console.error("CAN'T GET DEETS", err)
    }
  }

  const handleGoBack = () => {
    setOnePup(null)
    setIsClick(false)
  }
  return (
    <>
      {
      isClick
      ? <SinglePup onePup={onePup} handleGoBack={handleGoBack}/>
      : <ListPups listAll={listAll} handleDetail={handleDetail}/>
      }
    </>
  )
}

export default App
