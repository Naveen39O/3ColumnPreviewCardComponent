import './App.css';
import Card from "./Card";
import {ReactComponent as SedanIcon} from "./images/icon-sedans.svg";
import {ReactComponent as SuvsIcon} from "./images/icon-suvs.svg";
import {ReactComponent as LuxuryIcon} from "./images/icon-luxury.svg";

const carTypes =[
  {
    image: <SedanIcon/>,
    title: "SEDANS",
    content: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
  },
  {
    image: <SuvsIcon/>,
    title: "SUVS",
    content: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
  },
  {
    image: <LuxuryIcon/>,
    title: "LUXURY",
    content: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
  }
]

function App() {
  return (
    <div className="App">
      <div className = "row">
        {
          carTypes.map((carModel, index) => {
            return (
              <Card 
                key = {index}
                image= {carModel.image}
                title= {carModel.title}
                content= {carModel.content}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
