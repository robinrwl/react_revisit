import React from 'react'
import Cards from './components/cards.jsx'
import jobs from './components/jobs.jsx'
import './App.css'

const App = () => {
  return (
    console.log(jobs),
    <div className="cardcontainer">
{jobs.map(function(job,idx){
  return <Cards key={job.id} name={job.name} salary={job.salary}  logoimg={job.logo} position = {job.position} posted = {job.posted} location = {job.location} type = {job.type} level = {job.level} />
})}
    </div>
  )
}

export default App
