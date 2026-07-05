import { ArrowRight } from 'lucide-react';
const RenderCard = (props) => {
  return (
      <div className="card h-full w-80 rounded-4xl relative overflow-hidden shrink-0 gap-3"> 
        <img className ="h-full w-full object-cover" src={props.img} alt="Gental Men" />
        <div className="absolute top-0 left-0  h-full w-full flex flex-col justify-between p-8" >
            <h2 className="rounded-full bg-white h-10 w-10 text-2xl flex justify-center items-center">{props.id}</h2>
            <div className ="gap-3 flex flex-col">
                <p className = "text-white text-shadow-amber-50 w-full text-sm"> {props.text}</p>
                <div className="flex justify-between items-center"> 
                    <button className =" px-5 py-2 bg-blue-500 text-white rounded-4xl "> {props.button}</button>
                    <button className="p-2 bg-white text-blue-500 rounded-full"> <ArrowRight /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RenderCard
