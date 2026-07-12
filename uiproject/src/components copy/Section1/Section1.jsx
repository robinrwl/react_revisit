
import Navbar from "./Navbar";
import Page1Content from "./Page1Content";


const Section1 = (props) => {
  return (
    <div className=" py-10 px-20">
        <Navbar />
        <Page1Content cardData={props.cardData} />
    </div>
  )
}

export default Section1
