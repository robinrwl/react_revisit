import Section1 from "./components/Section1/Section1"
import cardData from "./components/Section1/cardData";

const App = () => {
  return (
    <div>
      <Section1 cardData={cardData} />
    </div>
  )
}

export default App
