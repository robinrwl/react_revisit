
import RenderCard from './RenderCard';

const RightCard = (props) => {
  return (
    <div className = "flex p-5 w-2/3 shrink-0 gap-3 overflow-scroll"> 
      {props.cardData.map((val) => (
    <RenderCard
        key={val.id}
        id={val.id}
        img={val.image}
        text={val.text}
        button={val.button}
    />
))}
    </div>
  )
}

export default RightCard
