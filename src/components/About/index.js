import React from 'react';
// import dfjkdsl from '../../assets/IMAGES/dfjkdsl.png';
import me2 from '../../assets/IMAGES/me-2.png';
import me3 from '../../assets/IMAGES/me-3.png';
// import lightcurve from '../../assets/IMAGES/lightcurve.png';
// import hops383 from '../../assets/IMAGES/hops383.png';
import '../../style.css';

function About() {

  


    return (
      <div className="main row">
        <div className="col-12 mx-auto"><h2>ABOUT ME</h2></div>
        
        <div className="col-11 mx-auto">
          <p>
          <a href="https://github.com/ejsafron/SATCHEL">GitHub</a>
          </p>
        </div>
      
        <div className="col-10 mx-auto"><h2>Hello!</h2></div>
        <div className="col-9 mx-auto">
          <p>This is me:</p>
          {/* <img src={dfjkdsl} alt="Looking more put-together than usual, I confess"  /> */}
          <p>I'm a native of Ohio, USA, currently working in the Department of Physics &amp; Astronomy at LSU in Baton Rouge, Louisiana.  I'm also frequently found in the Department of Astronomy at Case Western Reserve University in Cleveland, Ohio.  I have lots of hobbies, and I love learning new things!</p>
          <h3>Why astrophysics?</h3>
          <p>My love for astrophysics began with the unbelievable coolness and mystery of black holes, and has continued with the constant, awe-inspiring feeling of smallness that comes with studying things many orders of magnitude bigger, older, and more profound than humans.</p>
          <div className="gallery">
            <img src={me3} style={{width:"100%"}} alt="That time I was a guest investigator on the SOFIA aircraft/telescope" /><br/>
            <img src={me2} style={{width:"100%"}} alt="In Bernheim Forest, one of my favorite places" /><br/>
          </div>
        </div>
      
      </div>
    );
  }

export default About;