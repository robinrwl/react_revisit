import { useState } from "react"


const App = () => {
const user ={ name:'Robin',age:25,address:{city:'Greate Noida',state:'UP'}}
const [userDet, setUserDet]= useState(user)
const updateuser = ()=>{

  setUserDet(prevUser => ({...prevUser,name:'Robin Rawal',age:28,address:{...prevUser.address,city:'Delhi'}}))
}
  return (
    <div>
      <h1>I'm from {userDet.address.city} my age is {userDet.age} and my name is {userDet.name} which will chnage after clicking button below</h1>
      <button onClick={updateuser}> Update Data</button>
    </div>
  )
}

export default App
