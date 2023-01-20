import React, {useState} from 'react';
// import dfjkdsl from '../../assets/IMAGES/dfjkdsl.png';
// import me2 from '../../assets/IMAGES/me-2.png';
// import me3 from '../../assets/IMAGES/me-3.png';
// import lightcurve from '../../assets/IMAGES/lightcurve.png';
// import hops383 from '../../assets/IMAGES/hops383.png';
import About from '../components/About';
import Publications from '../components/Publications';
import Research from '../components/Research';
import '../style.css';

function Main(){

    const [showAbout, setShowAbout] = useState(false);
    const [showPublications, setShowPublications] = useState(false);
    const [showResearch, setShowResearch] = useState(false);

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

    return(
        <section id="about-me">
            <article>
                <div className="row buttons">
                    {!showAbout ? <button type="button" class="btn btn-primary col-4" onClick={()=>handleAbout()} >About Me</button> : <button type="button" class="btn btn-info col-4" onClick={()=>handleAbout()} >About Me</button>}
                    {!showResearch ? <button type="button" class="btn btn-primary col-4" onClick={()=>handleResearch()} >My Research</button> : <button type="button" class="btn btn-info col-4" onClick={()=>handleResearch()} >My Research</button>}
                    {!showPublications ? <button type="button" class="btn btn-primary col-4" onClick={()=>handlePublications()} >My Publications</button> : <button type="button" class="btn btn-info col-4" onClick={()=>handlePublications()} >My Publications</button>}
                </div>
                <div className="row d-flex m-2">
                    {showAbout ? <About /> : <></>}
                    {showResearch ? <Research /> : <></>}
                    {showPublications ? <Publications /> : <></>}
                </div>
            </article>
        </section>
    )
}

export default Main;