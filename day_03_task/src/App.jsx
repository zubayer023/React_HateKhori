import CarApp from "./component/CarApp";
import Cards from "./component/Cards";

import Search from "./component/Search";

function App() {
  return (
    <div className=" mx-auto p-4">
      <CarApp />
      <Search />
      <Cards />
    </div>
  );
}

export default App;
