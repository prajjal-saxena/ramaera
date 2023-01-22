import React from 'react'
import styled from 'styled-components'
import Techno from '../img/tech.png'


const Project1 = ({myData}) => {

  return (
    <Wrapper className='technology1 marginBotto'>
      <div className="technology container">
        <div className='tech1'>
          <img src={Techno} width="100%" className='up-down' alt="" />
        </div>
        <div className='tech2'>
          <h2>{myData.name}</h2>
          <p>{myData.description}</p>
          <button className='read-more'>Read More<i class="fa fa-circle-thin" aria-hidden="true"></i></button>
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

`
export default Project1
