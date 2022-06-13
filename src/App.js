import React, { useState } from 'react';
// import components and icons
import NavTabs from './components/NavTabs';
import About from './components/About';
import Github from './components/Github';
import MyCV from './components/MyCV';
// import './style.css';

function App() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About Me':
        return <About />;
      case 'My CV':
        return <MyCV />;
        case 'Github':
          return <Github />;
      default:
        return <About />;
    }
  };

  return (
    <div>
    <header>
      <div class="header">
        <h1>Emily Safron</h1>
        <h4>Ph.D. candidate in astrophysics and Louisiana Board of Regents Fellow at Louisiana State University</h4>
      </div>
      <nav>
        {/* Pass the state value and the setter as props to NavTabs */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Call the renderPage function passing in the currentPage */}
      </nav>
      { currentPage === 'About Me' && <section className="hero">
      {/* <article>
        <p>Destiny is a gift. Some go their entire lives, living existence as a quiet desperation. Never learning the truth that what feels as though a burden pushing down upon our shoulders, is actually, a sense of purpose that lifts us to greater heights. Never forget that fear is but the precursor to valour, that to strive and triumph in the face of fear, is what is means to be a hero.
        </p>
      </article>  */}
    </section> }
    </header>
    <div>{renderPage(currentPage)}</div>
    <footer>
      <h4>Made With Heart by Kevin Kelbach</h4>
    </footer>
    </div>
  );
}  

export default App;
