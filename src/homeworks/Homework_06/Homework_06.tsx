import "./styles.css";

// 1. Определяем интерфейс для машины
interface Car {
  brand: string;
  price: number;
  isDiesel: boolean;
}

// 2. Массив машин с типизацией
const cars: Car[] = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
  { brand: "Audi", price: 50000, isDiesel: true },
];

// 3. Компонент
function Homework_06() {
  return (
    <div className="cars_wrapper">
      {cars.map((car, index) => (
        <div key={index} className="car_card">
          <h2>{car.brand}</h2>
          <p>Цена: {car.price} $</p>
          <p>Тип топлива: {car.isDiesel ? "Дизель" : "Бензин"}</p>
        </div>
      ))}
    </div>
  );
}

export default Homework_06;
