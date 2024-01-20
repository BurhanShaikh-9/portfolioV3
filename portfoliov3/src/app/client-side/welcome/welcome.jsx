'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Ba from '../../../assets/ba.png'
import ha from '../../../assets/ha.png'
import noon from '../../../assets/noon.png'
import { useInView } from 'react-intersection-observer';

export const Welcome = () => {
  const [refNoon, inViewNoon] = useInView();

  const [refHa, inViewHa] = useInView();

  const [refBa, inViewBa] = useInView();
 
  return (
    <React.Fragment >
      <div className="container">
        <div className="welcomeInner">
        <div className="inner">
            <Image className={`no ${inViewNoon ? 'fade-in' : 'fade-out'}`} style={{ transitionDelay: '1.5s' }} id="baId" src={noon} draggable="false" alt="" ref={refNoon} />
            <Image className={`ha ${inViewHa ? 'fade-in' : 'fade-out'}`} style={{ transitionDelay: '1s' }} id="haId" src={ha} draggable="false" alt="" ref={refHa} />
            <Image  className={`ba ${inViewBa ? 'fade-in' : 'fade-out'}`} style={{ transitionDelay: '0.5s' }}  id="naId" src={Ba} draggable="false" alt="" ref={refBa} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}