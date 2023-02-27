import React from 'react';
// import dfjkdsl from '../../assets/IMAGES/dfjkdsl.png';
// import me2 from '../../assets/IMAGES/me-2.png';
// import me3 from '../../assets/IMAGES/me-3.png';
// import lightcurve from '../../assets/IMAGES/lightcurve.png';
// import hops383 from '../../assets/IMAGES/hops383.png';
import About from '../components/About';
import Publications from '../components/Publications';
import Research from '../components/Research';
import MyCV from '../components/MyCV';
// import anime from 'animejs/lib/anime.es.js';
import '../style.css';

function Main(props){

    // anime({
    //     targets: 'main',
    //     translateX: ['-100px','0px'],
    //     duration: 800,
    //     direction: 'alternate',
    //     loop: false
    // });

    return(
        <div className="container-md">
        <section id="about-me" className="">
            <article>   
                    <br/>{props.about ? <About /> : <></>}
                    <br/>{props.res ? <Research /> : <></>}
                    <br/>{props.pubs ? <Publications /> : <></>}
                    <br/>{props.cv ? <MyCV /> : <></>}
              
            </article>
        </section>
        </div>
    )
}

export default Main;