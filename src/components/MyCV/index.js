import React from 'react';
import kevinPaint from '../../assets/IMAGES/kevin-paint.jpg';
import EJSCV from '../../assets/IMAGES/EJS-CV-2021.pdf';
import '../../style.css';
import Anime from 'react-anime';

function MyCV() {
    return(
        <Anime
          targets={'.main .row'}
          translateX={['2950px','3000px']}
          opacity={['0%','100%']}
          direction={'normal'}
          easing={'easeInOutSine'}
          delay={50}
          duration={750}
          loop={false}>
        <div className="main row" id="cv">
            <div className="col-12 mx-auto">
                <h2>CURRICULUM VITAE</h2>
            </div>
            <div className="col-11 mx-auto">
                <h5>Last updated 30 Mar 2022</h5>
            </div>
            <div className="col-10 mx-auto">
                <p>The following is a link to the most recent version of my CV:  &nbsp;<a href={EJSCV} target="_blank" rel="noreferrer">Now with 10% more, absolutely free!</a></p>
                <p>&nbsp;</p>
            </div>
            <div className="col-11 mx-auto">
                <h3>Other fun things that don't fit on my CV but are still worth mentioning:</h3>
            </div>
            <div className="col-10 mx-auto">
                   
                <p><strong>Piano &amp; Vocal Performance</strong><br/><small>(2006−Present)</small></p>
                
                    <ul>
                        <li>Benjamin Britten's <i>Ceremony of Carols</i>, soprano soloist, 2015.</li>
                        <li>Dan Forrest's <i>Requiem for the Living</i>, soprano soloist, 2014.</li>
                        <li>Vocal recitals between 2012 and 2016.</li>
                        <li>Piano recitals between 2007 and 2014.</li>
                        <li>Robert Beckstrom's opera <i>Job</i>, soprano soloist, 2012.</li>
                        <li>Camille Saint-Saëns' <i>Christmas Oratorio</i>, soprano soloist, 2011.</li>
                    </ul>
                    <p></p>
                
                <p style={{fontSize:"30%;"}}>&nbsp;</p><p style={{fontSize:"110%;"}}><strong>Traditional &amp; Digital Arts</strong><br/><small>(2004−Present)</small></p><p>Maintenance of digital art gallery.  Independent gathering and management of both solitary and recurrent commission clientele.<br/><strong>Below:</strong>  Digital painting done in 2014.</p><p style={{fontSize:"30%;"}}>&nbsp;</p><p>
                </p>
                <img className="img-fluid" src={kevinPaint} alt="I married this man later" style={{ float: "right;", width: "325px;", height: "452px;", margin: "0px 0px 0px 30px;" }} />
                <br/>
                <p style={{fontSize:"110%;"}}><strong>Roller Figure Skating</strong><br/><small>(1998−2007)</small></p>
                    <ul>
                        <li>World Championship participation, 2006.</li>
                        <li>National medals received in 1999, 2000, 2006, 2007.</li>
                        <li>Regional Champion from 1998−2005.</li>
                    </ul><p></p>
                   
            </div>
            <p>&nbsp;</p>
            <div className="col-11 mx-auto">
                <h2>REFERENCES</h2>
            </div>    
            <div className="col-10 mx-auto">    
                <p style={{fontSize:"110%;"}}><strong>References for my research work:</strong></p>
            </div>
            <div className="col-10 mx-auto">     
                <div className="row">
                
                    
                        <div className="col-lg-4 col-sm-12 mt-4"><strong><u>Dr. Tabetha Boyajian</u></strong><br/>Assistant Professor of Physics &amp; Astronomy<br/>Louisiana State University<strong><br/>email:  <a href="mailto:boyajian@lsu.edu">boyajian@lsu.edu</a></strong><small><br/>phone: <a href="tel:+2255781161">(225) 578-1161</a> <br/>261-A Nicholson Hall, Tower Dr.<br/>Baton Rouge, LA 70803-4001</small></div>
                        <div className="col-lg-4 col-sm-12 mt-4"><strong><u>Dr. Parampreet Singh</u></strong><br/>Assistant Professor of Physics<br/>Louisiana State University<strong><br/>email:  <a href="mailto:psingh@phys.lsu.edu">psingh@phys.lsu.edu</a></strong><small><br/>phone: <a href="tel:+2255787513">(225) 578-7513</a> <br/>255-A Nicholson Hall, Tower Dr.<br/>Baton Rouge, LA 70803-4001</small></div>
                        <div className="col-lg-4 col-sm-12 mt-4"><strong><u>Dr. S. Thomas Megeath</u></strong><br/>Professor of Astronomy<br/>University of Toledo<strong><br/>email:  <a href="mailto:smegeath@utoledo.edu">smegeath@utoledo.edu</a></strong><small><br/>phone: <a href="tel:+4195307812">(419) 530-7812</a> <br/>Ritter Astrophysical Research Center 2040<br/>Toledo, OH 43606</small></div>
                    
                
                </div>
            </div>
            <div className="col-10 mx-auto">
                <p style={{fontSize:"50%;"}}>&nbsp;</p><p style={{fontSize:"110%;"}}><strong>References for my teaching work:</strong></p>
            </div> 
            <div className="col-10 mx-auto"> 
                <div className="row">
                
                    
                        <div className="col-lg-4 col-sm-12 mt-4"><strong><u>Dr. Steven Hubbard</u></strong><br/>Visiting Assistant Professor of Physics<br/>Stonehill College<strong><br/>email:  <a href="mailto:shubbard@stonehill.edu">shubbard@stonehill.edu</a></strong> </div>
                        <div className="col-lg-4 col-sm-12 mt-4"><strong><u>Dr. Rosa Rivera-Hainaj</u></strong><br/>Associate Vice President<br/>Our Lady of the Lake University<strong><br/>email:  <a href="mailto:rhainaj@lake.ollusa.edu">rhainaj@lake.ollusa.edu</a></strong></div>
                    
               
                 </div>
            </div>   
        </div>
        </Anime>
    );
}

export default MyCV;