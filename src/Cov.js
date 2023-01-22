import React from 'react';
import styled from 'styled-components';
import cover from './img/coverImg.png';
import './App.css'

const Cov = () => {
  return (
    <Wrapper className="cover-photo">
      <div className="cover-img">
        <img src={cover} alt="" />
        <div className="cover-content">
          <h2 style={{color: '#fff', width: '20%'}} className='ramaera-indus'>RAMAERA INDUSTRIES</h2>
          <p>An increadible multi-industrial approach oriented towards financial independence, customer focus and serving the best quality to the people.</p>
          <button className="btn btn-primary exp-btn">Explore More</button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
   .cover-photo {
    position: relative;
    top: 0px;
   }
   .cover-img img{
    height: 90vh;
   }
   .cover-content {
    position: absolute;
    top: 0px;
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff!important;
    align-items: center;
}
`

export default Cov
