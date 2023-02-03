import React from 'react';
import kevinPaint from '../../assets/IMAGES/kevin-paint.jpg';
import EJSCV from '../../assets/IMAGES/EJS-CV-2021.pdf';
import '../../style.css';

function MyCV() {
    return(
        <div className="main">
            <h2>CURRICULUM VITAE</h2>
            <h5>Last updated 30 Mar 2022</h5>
            <p>The following is a link to the most recent version of my CV:  &nbsp;<a href={EJSCV} target="_blank" rel="noreferrer">Now with 10% more, absolutely free!</a></p>
            <p>&nbsp;</p>
            <h3>Other fun things that don't fit on my CV but are still worth mentioning:</h3>
            <p style={{fontSize:"110%;"}}><img src={kevinPaint} alt="I married this man later" style={{ float: "right;", width: "325px;", height: "452px;", margin: "0px 0px 0px 30px;" }} /><strong>Piano &amp; Vocal Performance</strong><br/><small>(2006−Present)</small></p><p>
            </p>
            <ul>
                <li>Benjamin Britten's <i>Ceremony of Carols</i>, soprano soloist, 2015.</li>
                <li>Dan Forrest's <i>Requiem for the Living</i>, soprano soloist, 2014.</li>
                <li>Vocal recitals between 2012 and 2016.</li>
                <li>Piano recitals between 2007 and 2014.</li>
                <li>Robert Beckstrom's opera <i>Job</i>, soprano soloist, 2012.</li>
                <li>Camille Saint-Saëns' <i>Christmas Oratorio</i>, soprano soloist, 2011.</li>
            </ul>
            <p></p>
            <p style={{fontSize:"30%;"}}>&nbsp;</p><p style={{fontSize:"110%;"}}><strong>Traditional &amp; Digital Arts</strong><br/><small>(2004−Present)</small></p><p>Maintenance of digital art gallery.  Independent gathering and management of both solitary and recurrent commission clientele.<br/><strong>At right:</strong>  Digital painting done in 2014.</p><p style={{fontSize:"30%;"}}>&nbsp;</p><p style={{fontSize:"110%;"}}><strong>Roller Figure Skating</strong><br/><small>(1998−2007)</small></p><p>
            </p>
            <ul>
                <li>World Championship participation, 2006.</li>
                <li>National medals received in 1999, 2000, 2006, 2007.</li>
                <li>Regional Champion from 1998−2005.</li>
            </ul><p></p><p>&nbsp;</p><h2>REFERENCES</h2><p style={{fontSize:"110%;"}}><strong>References for my research work:</strong></p><table style={{width:"100%"}}>
                <tbody>
                    <tr>
                        <td><strong>Dr. Tabetha Boyajian</strong><br/>Assistant Professor of Physics &amp; Astronomy<br/>Louisiana State University<strong><br/>email:  boyajian@lsu.edu</strong><small>(225) 578-1161261-A Nicholson Hall, Tower Dr.Baton Rouge, LA 70803-4001</small></td>
                        <td><strong>Dr. Parampreet Singh</strong><br/>Assistant Professor of Physics<br/>Louisiana State University<strong><br/>email:  psingh@phys.lsu.edu</strong><small>(225) 578-7513255-A Nicholson Hall, Tower Dr.Baton Rouge, LA 70803-4001</small></td>
                        <td><strong>Dr. S. Thomas Megeath</strong><br/>Professor of Astronomy<br/>University of Toledo<strong><br/>email:  smegeath@utoledo.edu</strong><small>(419) 530-7812Ritter Astrophysical Research Center 2040Toledo, OH 43606</small></td>
                    </tr>
                </tbody>
            </table><p style={{fontSize:"50%;"}}>&nbsp;</p><p style={{fontSize:"110%;"}}><strong>References for my teaching work:</strong></p><table style={{width:"100%"}}>
                <tbody>
                    <tr>
                        <td><strong>Dr. Steven Hubbard</strong><br/>Visiting Assistant Professor of Physics<br/>Stonehill College<strong><br/>email:  shubbard@stonehill.edu</strong></td>
                        <td><strong>Dr. Rosa Rivera-Hainaj</strong><br/>Associate Vice President<br/>Our Lady of the Lake University<strong><br/>email:  rhainaj@lake.ollusa.edu</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MyCV;