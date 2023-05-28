import { useEffect, useState } from "react";
import Charts from "./components/charts";
import Holdings from "./components/holdings";
import Search from "./components/search";
import TopBar from "./components/topbar";

function App() {

  return (
    <div className="App">
      <TopBar />
      <Holdings />
      <main>
        <div className="chartts">
          <div className="w-[55%] ml-auto p-3 mr-1 pb-0">
            <Search />

          </div>
          <Charts />
        </div>
      </main>
    </div>
  );
}

export default App;
