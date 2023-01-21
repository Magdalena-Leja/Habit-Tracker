import "./App.css";
import { useState } from "react";
import DayOfWeek from "./components/DayOfWeek.js";

const daysOfWeek = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];

const daysOfWeekend = ["Sobota", "Niedziela"];

function App() {
  const [addWeekend, setAddWeekend] = useState(false);
  const chosenDays = addWeekend
    ? [...daysOfWeek, ...daysOfWeekend]
    : daysOfWeek;
  return (
    <div className="App">
      <button onClick={() => setAddWeekend(!addWeekend)}>
        dodaj/usuń weekend
      </button>
      {chosenDays.map((dayName) => (
        <DayOfWeek day={dayName} />
      ))}
    </div>
  );
}

export default App;
