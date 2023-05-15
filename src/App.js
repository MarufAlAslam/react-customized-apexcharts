import Charts from "./components/charts";
import Holdings from "./components/holdings";
import Search from "./components/search";
import TopBar from "./components/topbar";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Holdings/>
      <div className="lg:w-1/2 ml-auto p-3 mr-1 pb-0">
      <Search/>
      </div>
      <Charts/>
    </div>
  );
}

export default App;
