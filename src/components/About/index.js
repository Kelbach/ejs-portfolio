import React from 'react';
// import dfjkdsl from '../../assets/IMAGES/dfjkdsl.png';
import me2 from '../../assets/IMAGES/me-2.png';
import me3 from '../../assets/IMAGES/me-3.png';
// import lightcurve from '../../assets/IMAGES/lightcurve.png';
// import hops383 from '../../assets/IMAGES/hops383.png';
// import anime from 'animejs/lib/anime.es.js';
import Anime from 'react-anime';
import '../../style.css';

function About() {

  // anime({
  //     targets: '.main .row',
  //     translateX: ['-100px','0px'],
  //     duration: 800,
  //     loop: false
  // });

// anime might lead to problems down the road 
// since the main div loads so off screen

    return (
      <Anime
          targets={'.main .row'}
          translateX={['2950px','3000px']}
          opacity={['0%','100%']}
          direction={'normal'}
          easing={'easeInOutSine'}
          delay={50}
          duration={750}
          loop={false}>
      <div className="main row" id="about">
        <div className="col-12 mx-auto"><h2>ABOUT ME</h2></div>
        
        <div className="col-11 mx-auto">
          
          <a href="https://github.com/ejsafron/SATCHEL">GitHub</a>
          
        </div>
      
        <div className="col-10 mx-auto"><h2>Hello!</h2></div>
        <div className="col-9 mx-auto">
          
          {/* <img src={dfjkdsl} alt="Looking more put-together than usual, I confess"  /> */}
          <p>I'm a native of Ohio, USA, currently working in the Department of Physics &amp; Astronomy at LSU in Baton Rouge, Louisiana.  I'm also frequently found in the Department of Astronomy at Case Western Reserve University in Cleveland, Ohio.  I have lots of hobbies, and I love learning new things!
          </p>
        </div>
        <div className="col-10 mx-auto">
          <h3>Why astrophysics?</h3>
        </div>
        <div className="col-9 mx-auto">
          <p>My love for astrophysics began with the unbelievable coolness and mystery of black holes, and has continued with the constant, awe-inspiring feeling of smallness that comes with studying things many orders of magnitude bigger, older, and more profound than humans.
          </p>
          
        </div>
        <div className="gallery col-12 mx-auto">
          <div className="row">
            <div className="col-sm-10 col-lg-5 m-auto">
              <img className="img-fluid" src={me3} style={{width:"100%"}} alt="That time I was a guest investigator on the SOFIA aircraft/telescope" />
            </div>
            <div className="col-sm-10 col-lg-5 m-auto">
              <img className="img-fluid" src={me2} style={{width:"100%"}} alt="In Bernheim Forest, one of my favorite places" />
            </div>
          </div>
        </div>  
      </div>
      </Anime>
    );
  }

export default About;