import './App.css'
import Age from "./Age.jsx";
import {useState} from "react";

function App() {
  const [countDown, setCountDown] = useState(0);
  function editCountDown(d) {
    setCountDown(d);
  }
  return (
    <>
      <h1 className="mb-4 sm:text-xs md:text-2xl lg:text-6xl">You are</h1>
      <Age editCountDown = {editCountDown}/>
      <h1 className="mt-4 sm:text-xs md:text-2xl lg:text-6xl">years old.</h1>
      <h3 className="mt-8 sm:text-xs md:text-2xl text-yellow-300 font-bold lg:text-xl">{countDown} days to go before your next birthday.</h3>
    </>
  )
}

export default App
