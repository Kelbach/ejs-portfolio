import React, {useState} from 'react';
// import dfjkdsl from '../../assets/IMAGES/dfjkdsl.png';
// import me2 from '../../assets/IMAGES/me-2.png';
// import me3 from '../../assets/IMAGES/me-3.png';
// import lightcurve from '../../assets/IMAGES/lightcurve.png';
// import hops383 from '../../assets/IMAGES/hops383.png';
import About from '../components/About';
import Publications from '../components/Publications';
import Research from '../components/Research';
import MyCV from '../components/MyCV';
import '../style.css';

function Main(){

    const [showAbout, setShowAbout] = useState(false);
    const [showPublications, setShowPublications] = useState(false);
    const [showResearch, setShowResearch] = useState(false);
    const [showCV, setShowCV] = useState(false);

    function handleAbout() {
        if (!showAbout){
            setShowAbout(true);
        } else {
            setShowAbout(false);
        }
    }

    function handlePublications() {
        if (!showPublications){
            setShowPublications(true);
        } else {
            setShowPublications(false);
        }
    }    

    function handleResearch() {
        if (!showResearch){
            setShowResearch(true);
        } else {
            setShowResearch(false);
        }
    }

    function handleCV() {
        if (!showCV){
            setShowCV(true);
        } else {
            setShowCV(false);
        }
    }

    return(
        <div className="container-md">
        <section id="about-me" className="">
            <article>
                              
                {!showAbout ? <button type="button" className="btn btn-primary sticky-top my-3 mx-0" onClick={()=>handleAbout()} >About Me</button> : <button type="button" className="btn btn-info sticky-top my-3 mx-0" onClick={()=>handleAbout()} >About Me</button>}
                    <br/>{showAbout ? <About /> : <></>}
                {!showResearch ? <button type="button" className="btn btn-primary sticky-top my-3 mx-0" onClick={()=>handleResearch()} >My Research</button> : <button type="button" className="btn btn-info sticky-top my-3 mx-0" onClick={()=>handleResearch()} >My Research</button>}
                    <br/>{showResearch ? <Research /> : <></>}
                {!showPublications ? <button type="button" className="btn btn-primary sticky-top my-3 mx-0" onClick={()=>handlePublications()} >My Publications</button> : <button type="button" className="btn btn-info sticky-top my-3 mx-0" onClick={()=>handlePublications()} >My Publications</button>}
                    <br/>{showPublications ? <Publications /> : <></>}
                {!showCV ? <button type="button" className="btn btn-primary sticky-top my-3 mx-0 px-5" onClick={()=>handleCV()} >My CV</button> : <button type="button" className="btn btn-info sticky-top my-3 mx-0 px-5" onClick={()=>handleCV()} >My CV</button>}
                    <br/>{showCV ? <MyCV /> : <></>}
              
            </article>
        </section>
        </div>
    )
}

export default Main;