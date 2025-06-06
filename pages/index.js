import Categories from "../components/module/Categories";
import CarsPages from "../components/templates/CarsPages";
import carsData from "../data/carsData";
import SearchBar from "../components/module/SearchBar";
import AllButton from "../components/module/AllButton";

function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPages data={cars} />
    </div>
  );
}

export default Index;
