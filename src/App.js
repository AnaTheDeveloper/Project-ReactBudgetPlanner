//Imports.
import './App.css';
import Expenses from "./components/expenses/Expenses";

//Logic.
function App() {

    const expenses = [
        {date: new Date(2022, 3, 24),title: 'Car Insurance', amount: 200.98},
        {date: new Date(2022, 9, 12),title: 'Wifi', amount: 58.67}
    ]


//HTML Page That is Returned After Logic is Called. (JSK->HTML running in JS).
  return (
    <div>
        <p className="app-title-styling">Budget Planner</p>
        <Expenses items={expenses}/>

    </div>
  );
}

//Makes Function Discoverable.
export default App;
