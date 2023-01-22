import React from 'react'
import Project1 from './components/Project1'

const Sectiononethree = () => {
    const myData = {
        name : 'Unleasing the strength of Technology',
        description : 'We believe in innovation and excellence hence, our approach in the field of technology is focused to relish incredible customer experience and stabilising business models for tomorrow.'
   }
  return (
    <div>
      <Project1 myData={myData}/>
    </div>
  )
}

export default Sectiononethree
