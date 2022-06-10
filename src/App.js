import { useState, useEffect } from "react";
import "./App.css";
import list from "./assets/list";

function App() {
  const [word, setWord] = useState("");
  const [index, setIndex] = useState(0);
  const [today, setToday] = useState(new Date());

  const handler = (num) => {
    setIndex(index + num);
    const newDate = today;
    newDate.setDate(newDate.getDate() + num);
    setToday(newDate);
  };

  const capitalize = (string) => {
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
  };

  useEffect(() => {
    let properIndex = null;
    const secret = list.filter((item, index) => {
      const testDate = new Date(item.date);
      const itemDate = testDate.toDateString();
      const todayDate = today.toDateString();

      if (todayDate === itemDate) {
        console.log("Today: ", todayDate);
        console.log("Word Date: ", itemDate);
        properIndex = index;
        return item;
      }
    });

    const newState = list[properIndex - 1];
    setIndex(properIndex - 1);
    setWord(newState.word);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>{today.toDateString()}</h3>
        <h1>{capitalize(list[index].word)}</h1>
        <div className="container">
          <button onClick={() => handler(-1)}>Prev</button>
          <button onClick={() => handler(+1)}>Next</button>
        </div>
        <span>
          <p><strong>You're welcome!<br />Come back tomorrow for the new word!</strong></p>
        </span>
      </header>
    </div>
  );
}

export default App;
