import React from 'react'
import styled from 'styled-components'
import Techno from '../img/tech.png'

const Project2 = ({myData}) => {
  return (
    <Wrapper className='technology1 marginBotto'>
    <div className="technology container">
      
      <div className='tech2 tech22'>
        <h2>{myData.name}</h2>
        <p>{myData.description}</p>
        <button className='read-more'>Read More<i class="fa fa-circle-thin" aria-hidden="true"></i></button>
      </div>
      <div className='tech1'>
        <img src={Techno} className='up-down' width="100%" alt="" />
      </div>
    </div>
    
   </Wrapper>
  )
}

let Wrapper = styled.section`
  .technology {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .tech1 {
    width: 40%;
  }
  .tech2 {
    width: 40%;
    text-align: right;
    color: #f1f1f1;
  } 
  .tech22{
    text-align: left!important;
  }
`
export default Project2
