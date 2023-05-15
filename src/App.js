import Charts from "./components/charts";
import Holdings from "./components/holdings";
import TopBar from "./components/topbar";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Holdings/>
      <Charts/>
    </div>
  );
}

export default App;
