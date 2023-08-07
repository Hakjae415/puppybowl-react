import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import ListPups from './components/ListPups';
import SinglePup from './components/SinglePup';
import CreateForm from './components/createForm';
import NavBar from './components/NavBar';

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players";

function App() {
  const [listAll, setListAll] = useState([]);
  const [onePup, setOnePup] = useState(null);
  const [isClick, setIsClick] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAll = async() => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const results = data.data.players;
        console.log(results);
        setListAll(results);
      } catch(err) {
        console.error("Trouble Loading Puppers", err);
      }
    }
    fetchAll();  
  }, []);

  const handleDetail = async(id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      const results = data.data.player;
      console.log(results);
      setOnePup(results);
      setIsClick(true);
      navigate(`/pups/${id}`)
    } catch(err) {
      console.error("CAN'T GET DEETS", err);
    }
    
  };

  const handleGoBack = () => {
    setOnePup(null);
    setIsClick(false);
    navigate('/')
  };


  return (
    <>
      <NavBar/>
      <CreateForm />
      <Routes>
        <Route path="/" element={<ListPups listAll={listAll} handleDetail={handleDetail}/>} />
        <Route path="/pups/:id" element={<SinglePup onePup={onePup} handleGoBack={handleGoBack}/>} />
        <Route path="/pups/register" element={<CreateForm/>}/>
      </Routes>  
    </>
  )
}

export default App;
