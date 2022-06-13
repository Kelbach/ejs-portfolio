import React from 'react';
import dfjkdsl from '../../assets/images/dfjkdsl.png'
import me2 from '../../assets/images/me-2.png'
import me3 from '../../assets/images/me-3.png'
import lightcurve from '../../assets/images/lightcurve.png'
import hops383 from '../../assets/images/hops383.png'

function About(props) {
    return (
      <section id="about-me">
        <div className="title">
          <h2>About Me</h2>
          <p>
            <a href=''>Links to stuff</a><br/>
            <a href=''>Links to stuff</a><br/>
          </p>
        </div>
        {/* <img id="bio-image" src={bioImg} alt="K. Kelbach " /> */}
        <article>
            <div class="row">
                <div class="side">
                    <h2>Hello!</h2>
                    <p>This is me:</p>
                    <img src={dfjkdsl} alt="Looking more put-together than usual, I confess" style={"width:336px;height:432px;"} />
                    <p>I'm a native of Ohio, USA, currently working in the Department of Physics &amp; Astronomy at LSU in Baton Rouge, Louisiana.  I'm also frequently found in the Department of Astronomy at Case Western Reserve University in Cleveland, Ohio.  I have lots of hobbies, and I love learning new things!</p>
                    <h3>Why astrophysics?</h3>
                    <p>My love for astrophysics began with the unbelievable coolness and mystery of black holes, and has continued with the constant, awe-inspiring feeling of smallness that comes with studying things many orders of magnitude bigger, older, and more profound than humans.</p>
                    <img src={me3}alt="That time I was a guest investigator on the SOFIA aircraft/telescope" style="width:336px;height:246px;"/><br/>
                    <img src={me2} alt="In Bernheim Forest, one of my favorite places" style="width:336px;height:330px;"/><br/>
                    <h2>Contact:</h2>
                    <p><b>Email:</b>  ejsafron@gmail.com<br/><b>Phone:</b>  (440) 864-2581<br/><b>Mailing address:</b>    202 Nicholson Hall<br/>              Baton Rouge, LA 70803</p>
                    <h2>Publications:</h2>
                    <p><a href="http://adsabs.harvard.edu/cgi-bin/nph-abs_connect?return_req=no_params&amp;author=Safron,%20Emily%20J.&amp;db_key=AST">On ADS</a><br/><a href="https://arxiv.org/search/?searchtype=author&amp;query=Safron%2C+E+J">On arXiv</a></p>
                </div>
                <div class="main">
                    <h2>RESEARCH</h2>
                    <h5>Current research interests and projects; updated 18 Dec 2019</h5>
                    <img src={lightcurve} alt="Source:  planethunters.org" style="width:730px;height:300px;" />
                    <p>I currently work under Dr. Tabetha Boyajian at LSU.  My work with her is focused on constraining exoplanetary detection rates via the transit method, in which occultation of a planet between a telescope and a star periodically blocks a measurable percentage of the stars light.  In particular, my goal is to use data from the <a href="https://www.planethunters.org">Planet Hunters</a> citizen science project and the <i>Kepler</i> Space Telescope lightcurves to derive a statistical comparison between detections of exoplanets orbiting M-dwarf stars found by Planet Hunters volunteers and exoplanet detections of the same type found by the automated Transiting Planet Search (TPS) pipeline and data validation scheme designed by the <i>Kepler</i> science team.</p>
                    <p>I'd also like to pursue investigation of any peculiar objects found by Planet Hunters volunteers, if possible, and explore the efficiency of large groups of human classifiers for scientific projects.</p>
                    <h3>Other science-related things I currently do:</h3>
                    <p>As part of my Louisiana Board of Regents Fellowship obligations, I assist in running the Saturday Science Lecture Series at LSU.  Lectures are aimed at high-school education level and take place once per month from September through April, with topics ranging throughout all the sciences.  They are free to the public.  Schedules and topics can be found on <a href="http://www.lsu.edu/physics/colloquia-seminars/saturday-science.php">LSU's Saturday Science page</a>.</p>
                    <p>Since March 2018, I have been an organizer of the Baton Rouge chapter of Astronomy on Tap (AoTBR).  <a href="https://astronomyontap.org/" alt="AoT">Astronomy on Tap</a> is an international collection of events aimed at connecting the general public with real astronomers and astrophysicists in a fun, casual setting.  The AoTBR is the first Gulf Coast addition to this effort, and it's so far been well-received and attended.  Find out about past and future AoTBR events through:
                    </p><ul>
                    <li><a href="https://www.facebook.com/aotbatonrouge/">the AoTBR facebook page</a></li>
                    <li><a href="https://twitter.com/astrotapBR">the AoTBR twitter</a></li>
                    <li>email:  astrotapbr@gmail.com</li>
                    </ul><p></p>
                    <br/>
                    <h2>PAST WORK</h2>
                    <h5>Updated 25 November 2019</h5>
                <img src={hops383} alt="WISE band images of HOPS 383 from Safron et al. 2015" style={"width:730px; height:214px;"}/>
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
        </article>
      </section>
    );
  }

export default About;