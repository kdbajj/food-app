import "./App.css";
import FoodCard from "./components/FoodCard/FoodCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food App</h1>
      </header>
      <FoodCard name={"Makaron"} description={"jdilsjfisjd"} />
    </div>
  );
}

export default App;
