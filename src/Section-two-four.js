import React from 'react'
import Project2 from './components/Project2'

const Sectiontwofour = () => {
    const myData = {
        name : 'Making accomodation easier',
        description : 'Introducing capsule hotels in places of extreme need such as examination centres and hospitals to provide comfortable and convenient accommodation at pocket friendly prices.'
   }
  return (
    <div>
        <Project2 myData={myData}/>
    </div>
  )
}

export default Sectiontwofour
