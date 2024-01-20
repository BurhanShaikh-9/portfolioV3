'use client'



import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useInView } from 'react-intersection-observer';
import Spline from '@splinetool/react-spline';

export const About = () => {


  const [refLeft, inRefLeftPic] = useInView();
  const [refRight, inRefRightPic] = useInView();
  const sceneRef = useRef(null);

  return (
    <React.Fragment >
      <div className="container">
        <div className="aboutInner">
          <div className={`leftSection ${inRefLeftPic ? 'fade-left-in' : 'fade-left-out'}`} style={{ transitionDelay: '0.3s' }} ref={refLeft}>
            <Spline className='splineObj0' scene="https://prod.spline.design/Scl97y9aZXgpILci/scene.splinecode" />
          </div>
          <div className="rightSection">
            <div className={`rightInner ${inRefRightPic ? 'fade-in' : 'fade-out'}`} style={{ transitionDelay: '0.1s' }} ref={refRight}>
              <h1> <span> &lt;</span>h1<span>&gt;</span> ABOUT <span>&lt;</span>/h1<span>&gt;</span> </h1>
              <p>
                I am a Software Engineer, who keeps looking for the opportunity to get better, to learn and to improve my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}