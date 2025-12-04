import "./styles.css";

interface Car {
  brand: string;
  price: number;
  isDiesel: boolean;
}

const cars: Car[] = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
  { brand: "Audi", price: 50000, isDiesel: true },
];

function Homework_06() {
  const carCards = cars.map((car: Car) => (
    <div key={car.brand} className="car_card">
      <h2>{car.brand}</h2>
      <p>Цена: {car.price} $</p>
      <p>Тип топлива: {car.isDiesel ? "Дизель" : "Бензин"}</p>
    </div>
  ));

  return <div className="cars_wrapper">{carCards}</div>;
}

export default Homework_06;
