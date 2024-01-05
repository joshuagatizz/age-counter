import './App.css'
import Age from "./Age.jsx";
import {useState} from "react";
import ModifierForm from "./ModifierForm.jsx";

function App() {
  const [countDown, setCountDown] = useState(0);
  const [birthDate, setBirthDate] = useState(new Date("2002-09-11"));
  function editCountDown(d) {
    setCountDown(d);
  }
  function editBirthDate(d) {
    setBirthDate(new Date(d));
  }
  return (
    <>
      <h1 className="text-main">You are</h1>
      <Age editCountDown={editCountDown} birthDate={birthDate}/>
      <h1 className="text-main">years old.</h1>
      <h3 className="text-countdown">{countDown} days to go before your next birthday.</h3>
      <ModifierForm birthDate={birthDate} editBirthDate={editBirthDate}/>
    </>
  )
}

export default App
