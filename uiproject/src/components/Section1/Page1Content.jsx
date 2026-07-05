import Leftcontent from "./Leftcontent"
import Rightcontent from "./Rightcontent"

const Page1Content = (props) => {
  return (
    <div className ="flex justify-center gap-10 px-10 py-6 h-[80vh]">
      <Leftcontent />
      <Rightcontent cardData={props.cardData}/>
    </div>
  )
}

export default Page1Content
