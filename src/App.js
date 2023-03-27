import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import components and icons
// import NavTabs from './components/NavTabs';
// import About from './components/About';
// import Github from './components/Github';
// import MyCV from './components/MyCV';
import Main from './pages/main';
import dfjkdsl from './assets/IMAGES/dfjkdsl.png';
import './style.css';

function App() {
  // Using useState, set the default value for currentPage to 'Home'
  const currentPage = 'About';
  const [showAbout, setShowAbout] = useState(false);
  const [showPublications, setShowPublications] = useState(false);
  const [showResearch, setShowResearch] = useState(false);
  const [showCV, setShowCV] = useState(false);

  function handleAbout() {
      if (!showAbout){
          setShowAbout(true);
          setShowPublications(false);
          setShowResearch(false);
          setShowCV(false);
      } else {
          setShowAbout(false);
      }
    setTimeout(
      scroll("about"), 5
    ) 
  }

  function handlePublications() {
      if (!showPublications){
          setShowPublications(true);
          setShowAbout(false);
          setShowResearch(false);
          setShowCV(false);
      } else {
          setShowPublications(false);
      }
    setTimeout(
      scroll("publications"), 5
    )
  }    

  function handleResearch() {
      if (!showResearch){
          setShowResearch(true);
          setShowAbout(false);
          setShowPublications(false);
          setShowCV(false);
      } else {
          setShowResearch(false);
      }
    setTimeout(
      scroll("research"), 5
    )
  }

  function handleCV() {
      if (!showCV){
          setShowCV(true);
          setShowAbout(false);
          setShowPublications(false);
          setShowResearch(false);
      } else {
          setShowCV(false);
      }
    setTimeout(
      scroll("cv"), 5
    )
  }

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      default:
        return <Main 
                about={showAbout}
                pubs={showPublications}
                res={showResearch}
                cv={showCV}
                />;
    }
  };

  //scroll function is wonky
  function scroll(id) {
    const section = document.getElementById(id);
    window.scrollTo({
      top: section.current.offsetTop,
    });
  };

  return (
    <div>
    <header>
      <div className="header">
        <h1>Emily Safron</h1>
        <h4>Ph.D. candidate in astrophysics and Louisiana Board of Regents Fellow at Louisiana State University</h4>
        <img id="profile-pic" src={dfjkdsl} alt="Looking more put-together than usual, I confess"  />
      </div>
      { currentPage === 'About Me' && <section className="hero">
      {/* <article>
        <p>Destiny is a gift. Some go their entire lives, living existence as a quiet desperation. Never learning the truth that what feels as though a burden pushing down upon our shoulders, is actually, a sense of purpose that lifts us to greater heights. Never forget that fear is but the precursor to valour, that to strive and triumph in the face of fear, is what is means to be a hero.
        </p>
      </article>  */}
    </section> }
    </header>
    <nav className="button-nav sticky-top d-flex justify-content-around">      
      {!showAbout ? <span><button type="button" className="btn btn-primary sticky-top py-1 mx-0" onClick={()=>handleAbout()} >About Me</button></span> : <button type="button" className="btn btn-info sticky-top py-1 mx-0" onClick={()=>handleAbout()} >About Me</button>}  
      {!showResearch ? <span><button type="button" className="btn btn-primary sticky-top py-1 mx-0" onClick={()=>handleResearch()} >My Research</button></span> : <button type="button" className="btn btn-info sticky-top py-1 mx-0" onClick={()=>handleResearch()} >My Research</button>}     
      {!showPublications ? <span><button type="button" className="btn btn-primary sticky-top py-1 mx-0" onClick={()=>handlePublications()} >My Publications</button></span> : <button type="button" className="btn btn-info sticky-top py-1 mx-0" onClick={()=>handlePublications()} >My Publications</button>}    
      {!showCV ? <span><button type="button" className="btn btn-primary sticky-top py-1 mx-0 px-5" onClick={()=>handleCV()} >My CV</button></span> : <button type="button" className="btn btn-info sticky-top py-1 mx-0 px-5" onClick={()=>handleCV()} >My CV</button>}     
    </nav>
    <div className="booty">{renderPage(currentPage)}</div>
    <footer>
        <div className='contact'>
          <p><u>Email</u>: <a href = "mailto: ejsafron@gmail.com">ejsafron@gmail.com</a></p>
          <p><u>Phone</u>: <a href = "tel:+4408642581">(440) 864-2581</a></p>
          <p><u>Mailing address</u>: 
          Case Western Reserve University, 
          Sears Library 554, 
          2083 MLK Jr. Dr., 
          Cleveland, OH 44106</p>
          
        </div>
        <h4>Built with React by <a href="https://github.com/Kelbach">Kevin Kelbach</a></h4>
    </footer>
    </div>
  );
}  

export default App;
