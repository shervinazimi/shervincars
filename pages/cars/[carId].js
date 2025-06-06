import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarDatails from "../../components/templates/CarDatails";

function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;
  const CarDetails = carsData[carId - 1];
  return <CarDatails {...CarDetails} />;
}

export default CarDetail;
