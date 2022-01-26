import './App.css';
import Card from "./Card";
const carTypes =[
  {
    image: "./images/icon-sedans.svg",
    title: "SEDANS",
    content: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
  },
  {
    image: "./images/icon-suvs.svg",
    title: "SUVS",
    content: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
  },
  {
    image: "./images/icon-luxury.svg",
    title: "LUXURY",
    content: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
  }
]

function App() {
  return (
    <div className="App">
      {/* <Card imageSrc={"./images/icon-sedans.svg"} title={"SEDANS"} content={"Choose a sedan"}/> */}
      {
        carTypes.map(carModel => {
          return (
            <Card 
              imageSrc= {carModel.image}
              title= {carModel.title}
              content= {carModel.content}
            />
          )
        })
      }
    </div>
  );
}

export default App;
