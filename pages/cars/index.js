import Categories from "../../components/module/Categories";
import CarsPages from "../../components/templates/CarsPages";
import carsData from "../../data/carsData";
import SearchBar from "../../components/module/SearchBar";

function Details() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPages data={carsData} />
    </div>
  );
}

export default Details;
