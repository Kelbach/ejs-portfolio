import React from "react";
import lightcurve from "../../assets/IMAGES/lightcurve.png";
import hops383 from "../../assets/IMAGES/hops383.png";

function Research(){


    return(
        <div className="main row">
            <div className="col-12 mx-auto"><h2>RESEARCH</h2></div>
            <div className="col-11 mx-auto"><h5>Current research interests and projects; updated 18 Dec 2019</h5></div>
            <div className="col-9 mx-auto">
                <img className="img-fluid" src={lightcurve} alt="Source:  planethunters.org" />
            </div>
            <div className="col-10 mx-auto mt-1">
                <p>I currently work under Dr. Tabetha Boyajian at LSU.  My work with her is focused on constraining exoplanetary detection rates via the transit method, in which occultation of a planet between a telescope and a star periodically blocks a measurable percentage of the stars light.  In particular, my goal is to use data from the <a href="https://www.planethunters.org">Planet Hunters</a> citizen science project and the <i>Kepler</i> Space Telescope lightcurves to derive a statistical comparison between detections of exoplanets orbiting M-dwarf stars found by Planet Hunters volunteers and exoplanet detections of the same type found by the automated Transiting Planet Search (TPS) pipeline and data validation scheme designed by the <i>Kepler</i> science team.</p>
                <p>I'd also like to pursue investigation of any peculiar objects found by Planet Hunters volunteers, if possible, and explore the efficiency of large groups of human classifiers for scientific projects.</p>
            </div>  
            <div className="col-11 mx-auto">  
                <h3>Other science-related things I currently do:</h3>
            </div>
            <div className="col-10 mx-auto">
                <p>As part of my Louisiana Board of Regents Fellowship obligations, I assist in running the Saturday Science Lecture Series at LSU.  Lectures are aimed at high-school education level and take place once per month from September through April, with topics ranging throughout all the sciences.  They are free to the public.  Schedules and topics can be found on <a href="http://www.lsu.edu/physics/colloquia-seminars/saturday-science.php">LSU's Saturday Science page</a>.</p>
                <p>Since March 2018, I have been an organizer of the Baton Rouge chapter of Astronomy on Tap (AoTBR).  <a href="https://astronomyontap.org/" alt="AoT">Astronomy on Tap</a> is an international collection of events aimed at connecting the general public with real astronomers and astrophysicists in a fun, casual setting.  The AoTBR is the first Gulf Coast addition to this effort, and it's so far been well-received and attended.  Find out about past and future AoTBR events through:
                </p>
            </div>
            <div className="col-10 mx-auto">
                <ul>
                <li><a href="https://www.facebook.com/aotbatonrouge/">the AoTBR facebook page</a></li>
                <li><a href="https://twitter.com/astrotapBR">the AoTBR twitter</a></li>
                <li>email:  astrotapbr@gmail.com</li>
                </ul>
            </div><p></p>
            <br/>
            <div className="col-12 mx-auto">
                <h2>PAST WORK</h2>
            </div>
            <div className="col-9 mx-auto">
            <h5>Updated 25 November 2019</h5>
                <img className="img-fluid" src={hops383} alt="WISE band images of HOPS 383 from Safron et al. 2015"/>
            </div>
            <div className="col-10 mx-auto mt-1">
                <p>In early 2013, I began work on episodic accretion outbursts in very young stellar objects (YSOs) with Dr. S. Thomas Megeath and Dr. William J. Fischer at the University of Toledo.  These events constitute some of the most extreme variability that a YSO experiences, causing increases in luminosity that can sometimes be of more than a factor of 200.  Large-scale surveys of star-forming regions allow for comparisons of populations of YSOs and discoveries of new events to help constrain the properties of these accretion outbursts.  The goal of my team was to compare observations of YSOs in the Orion Molecular Cloud Complex by the <i>Spitzer</i> Space Telescope and the Wide-field Infrared Survey Explorer (WISE), investigate new outburst candidates in the region, and examine whether or not the outburst frequency suggested by our analysis were consistent with episodic accretion theory as a solution to the Luminosity Problem.</p>
                <p>This body of work motivated the discovery of the first Class 0 FU Orionis type accretion outburst, known as HOPS 383 (shown above in WISE bands).  Publication of the larger survey comparison is still in progress.</p>
                <p>Related:</p>
                <p></p><ul>
                    <li><i>HOPS 383: An Outbursting Class 0 Protostar in Orion.</i>  <strong>Safron, E. J.</strong>, Fischer, W. J., Megeath, S. T., et al., ApJ., 800, L5, 2015.  DOI:  <a href="http://iopscience.iop.org/article/10.1088/2041-8205/800/1/L5/meta">10.1088/2041-8205/800/1/L5</a></li>
                    <li><i>Constraining the Rate of Protostellar Accretion Outbursts in the Orion Molecular Clouds.</i>  Fischer, W. J., <strong> Safron, E. J.,</strong> &amp; Megeath, S. T., ApJ, 872, 183, 2019.  DOI:  <a href="http://iopscience.iop.org/article/10.3847/1538-4357/ab01dc/meta">10.3847/1538-4357/ab01dc</a></li>
                    </ul><p></p>
                <p>During 2013 and parts of 2016 and 2017, I also worked with Dr. Parampreet Singh at LSU on various topics in theoretical Loop Quantum Cosmology (LQC).  I wrote simulations to study geodesics in Big Bounce models, and examined exotic singularities in anisotropic Bianchi type-I spacetime.</p>
            </div>
        </div>
    )
}

export default Research;