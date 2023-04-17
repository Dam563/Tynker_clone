import './App.css';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import baby from "./Images/baby.jpg";
import toy from "./Images/toy.jpg";
import hero from "./Images/hero.webp";
import lang from "./Images/language.webp";
import ap from "./Images/ap.webp";
import bpurple from "./Images/bpurple.jpg";
import purple from "./Images/purple.jpg";
import boys from "./Images/boys.jpg";
import edu from "./Images/edu.webp";
import apple from "./Images/apple.jpg";
import google from "./Images/google.jpg";
import microsoft from "./Images/microsoft.jpg";
import map from "./Images/map-blue.png";
import bbc from "./Images/bbc.jpg";
import pbs from "./Images/pbs.jpg";
import icon_1 from "./Images/icon-app.webp";
import icon_2 from "./Images/icon-junior.webp";
import icon_3 from "./Images/icon-mod.webp";
import facebook from "./Images/facebook.jpg";
import lego from "./Images/lego.png";
import minecraft from "./Images/minecraft.jpg";
import mattel from "./Images/mattel.jpg";
import woman_2 from "./Images/woman2.jpg";
import woman_3 from "./Images/woman3.jpg";
import hotw from "./Images/hotw.jpg";
import barbie from "./Images/barbie.jpg";
import sylvan from "./Images/sylvan.jpg";
import csc from "./Images/csc.jpg";
import ac from "./Images/ac.jpg";
import dea from "./Images/dea.jpg";
import m from "./Images/m.jpg";
import pcga from "./Images/pcga.jpg";
import nppa from "./Images/nppa.jpg";
import mca from "./Images/mca.jpg";
import ppa from "./Images/ppa.jpg";
import student from "./Images/student.png";
import tynker from "./Images/tynker-byjus-logo.png";
import small from "./Images/tynker_small_darktm.png"
  
const App= () => {
  return (  
  <div className="tynker">
    <div className="hero-sec">
    <div className="nav">
  <div className="nav-con">
    <div><img src={tynker} alt="" className="nav-img"/></div>
    <div className="navconb">
    <div className="nav2">
      <div className='dropdown'>
      <button className='nav2-btn'>PLAY</button>
      <div className="drp">
      <a href="">Coding Games</a>
      <a href="">Minecraft</a>
      <a href="">Hour of Coding</a>
      <a href="">Start Coding</a>
      </div>
      </div>
      <div className='dropdown'>
      <button className='nav2-btn'>PARENTS</button>
      <div className="drp">
    
      <a href="">Live Classes</a>
      <a href="">Self-Paced Program</a>
      <a href="">Curriculum</a>
      <a href="">Plans & Pricing</a>
      </div>
      </div>
      <div className='dropdown'>
      <button className='nav2-btn'>EDUCATORS</button>
      <div className="drp">
      <a href="">Overview</a>
      <a href="">School Curriculum</a>
      <a href="">Request a Quote</a>
      <a href="">Training & PD</a>
      </div>
      </div>
      <div className='dropdown'>
      <button className='nav2-btn'>WHY CODE?</button>
      <div className="drp">
      <a href="">What is Coding?</a>
      <a href="">Why Coding Matters</a>
      <a href="">Coding eBooks</a>
      <a href="">Mobile Apps</a>
      </div>
      </div>
    </div>       
     <div className="nav3">
    <button className='nav3-btn'>JOIN FOR FREE</button>
   <button className='nav3-btn2'>LOG IN</button>
    </div>
    </div>
  </div>
  </div>
  <div className='hero-sec-1'>
  <div className="hero-sec-text">
        <h2 className="hero-title">Coding Made Easy</h2>  <br/>
       <p className="hero-text">The fun way to learn programming and develop <br/>
          problem-solving & critical thinking skills! Ages 5-18</p><br/>
          <button className='hero-btn'>GET STARTED FOR FREE</button> <br/><br/>
          <a href="https://www.tynker.com/parents/pricing" className='hero-a'>At-home plans from $7.50 per month</a>
      </div>
      <div className="hero-img">
         <img src={hero} alt="" /> 
      </div>
      </div>
    </div>
   <div className="sec-2">
           <div className="sec-2-img">
             <div><img src={lang} alt="" className='img-2' /></div>
           </div>
           <div className="sec-2-text">
             <h2>The #1 Coding Platform for Kids and <br/> Teens</h2>
             <p>Tynker powers the creativity of over 60 million kids and serves thousands <br/>
                of schools and educators worldwide.</p> <br/>
             <p>Our interactive story-based learning allows kids to learn the basics with easy <br/>
                block-based coding challenges before seamlessly transitioning to real-world <br/>
                 text-based languages like <strong>JavaScript</strong> and <strong>Python.</strong></p><br/>

              <p>With 70+ award-winning courses, there’s a learning path for every kid, no <br/>
                matter their age or level. We have over 5,000 learning modules, backed by <br/>
                hundreds of built-in tutorials and hands-on projects.</p><br/>
                <button className='sec-2-btn'>START CODING NOW</button>
           </div> 
           </div>
           <div className="section-3">
           <div className="sec-3">
           <div className="sec-3-a">
          <div className="sec-3-img">
          <div><img src={boys} alt=""/></div>
          </div>
          <div className="sec-3-text">
            <h4>Parents</h4>
            <p>Coding is quickly becoming an essential skill, one that will prepare <br/>
              your kids to succeed in an increasingly digital world.</p><br/>
              <p>Tynker offers a range of options to learn coding: Your children can <br/>
                learn to code with our self-paced, immersive game-like courses, and <br/>
                then advance to learning real-world Python and JavaScript.</p><br/>
                <p>Select the option that’s best for your child!</p>
                <button className='sec-3-btn'>LEARN MORE</button>
                </div>
          </div>
          <div className="sec-3-b">
            <div className="sec-3b-img">
            <div><img src={edu} alt=""/></div>
            </div>
            <div className="sec-3-b-text">
              <h4>Educators</h4>
              <p>Join over 100,000 schools that use Tynker to engage students with <br/>
                coding and connect with other educators who love to code!</p><br/>
              <p>Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can<br/>
                create a free account, set up your virtual classroom, and assign ready-<br/>
                made lesson plans!</p><br/>
              <p>Tynker empowers K-12 educators with free PD, standards-aligned <br/>
                curricula, cross-curricular STEM coding, AP Computer Science courses,<br/>
                  and many great coding resources.</p>
                  <button className='sec-3-btn'>LEARN MORE</button>
            </div>
          </div>
         </div>
         </div>
         <div className="sec-4">
           <div className="sec-4-head">
           <h3>3 Highly-Rated Mobile Apps for Learning Code</h3>
           <p>Download Tynker apps and learn to code on the go.</p>
           <button className='sec-4-btn'>LEARN MORE</button>
           </div>
           <div className="sec-4-body">
           <div className="sec4-img">
             <div><img src={toy} alt=""/></div>
             </div>
             <div className="sec-4-text">
              <div className='sec4t'>
                <div><img src={icon_2} alt="" /></div>
                <div className='sec4t-text'>
                <h5>Tynker Junior</h5>
             <p>Tap-Tap picture coding with voice-overs. Pre-<br/>
                 readers solve story-based puzzles and build their<br/>
                  first programs in coding sandboxes. Ages 5-7</p>
                  {/* <span>4.4</span>
                    <span>2,200+ reviews</span> */}
                  </div>
                  </div>
                  <div className='sec4t'>
                  <div><img src={icon_1} alt="" /></div>
                  <div className='sec4t-text'>
                    <h5>Tynker</h5>
                  <p>Drag-and-drop block coding with a full-featured <br />
                     workshop. Build games and apps, compose music <br />
                     and art, control smart devices, and much, much <br /> more. Ages 7-12</p>
                     </div>
                     </div>
                     <div className='sec4t'>
                     <div><img src={icon_3} alt="" /></div>
                     <div className='sec4t-text'>
                      <h5>Mod Creator</h5>
                   <p>Drag-and-drop Minecraft modding. Design skins,<br /> 
                    blocks and items. Modify mob behaviors. Create <br />
                    mods and add ons. Explore worlds! Ages 7-12</p>
                    </div> 
                    </div> 
             </div>
           </div>
         </div>
         <div>
         <h3 className='sec5'>A Mini-Computer for the Internet of Things!</h3>
         <div className="sec-5">
              <div className="sec-img">
                  <div><img src={baby} alt=""/></div>
              </div>
              <div className="sec5-text">
  <p>The BBC Doctor Who HiFive Inventor is a visually <br/>
  stunning IoT-enabled hand-shaped mini-computer <br/>
  designed to teach kids how to control robots or <br/>
  interface with IoT systems to investigate the world <br/>around them.</p>

  <p>Younger students will begin their learning journey with <br/>
       visual block coding and advanced students with <br/> Micropython.</p>

  <p>The HiFive Inventor was developed by Tynker in <br/>
      collaboration with BBC Learning and SiFive, a fabless <br/> RISC-V semiconductor company.</p>

      <p>Learn More:</p>
      <a href="https://www.hifiveinventor.com/">https://www.hifiveinventor.com/</a>
              </div>
          </div>
          </div>
          <div className="sec-6">
            <div className="sec-6-text">
              <h3>Why Should Kids and Teens Learn to Code with Tynker?</h3> <br />
              <p className="sec-6-text1">Because <strong>technology</strong> is so integrated into virtually every aspect of our lives, learning about it is <strong>more<br/>
              important than ever.</strong> For kids, our coding platform makes it convenient and fun to gain <br/> knowledge 
               that will serve them well throughout their lives. You can count on our <strong>trusted methods</strong> to <br/> help them 
               develop and grow their capabilities with computers.</p> 
               <p className="sec-6-text2">Tynker isn’t just for schools and coding camps, though. Parents who value <strong>STEM education</strong> and want <br/>
               their children to know how to learn to code should know that our kids programming platform can be 
               used at <br/> home, too. Tynker offers a range of solutions with icon-coding for pre-readers, block-based 
               coding, and <br/> advanced courses in Python, JavaScript, data science, art, and image processing.
              There are individual <br/>and family home plans, and our online coding classes for all ages
                are an excellent way for them to gain <br/>the supplemental STEM skills needed for their future.</p>
            </div>
            <div className="sec-6-card">
              <div className="card1">
                <h6 className="card-head">CODING BENEFITS</h6>
                <p>Top 10 reasons to code</p>
                <p>Kids Coding Basics</p>
                <p>Develop 21st Century Skills</p>
                <p>Download eBooks on Coding</p>
              </div>
              <div className="card2">
                <h6 className="card-head">CODING GUIDES</h6>
                <p>What is Coding for kids?</p>
                <p>Coding with Minecraft</p>
                <p>Coding with Electronic Kits</p>
                <p>Coding with Connected Toys</p>
                <p>More Coding Resources</p>
              </div>
              <div className="card3">
                <h6 className="card-head">TYNKER HIGHLIGHTS</h6>
                <p>What's New in Tynker?</p>
                <p>COVID-19 Impact report</p>
                <p>Meet our Featured Makers</p>
                <p>Seasonal Coding Projects</p>
                <p>Celebrating Women in STEM</p>
              </div>
              <div className="card4">
                <h6 className="card-head">CODING IN SCHOOLS</h6>
                <p>K-12 School Plans</p>
                <p>AP Computer Science Principles</p>
                <p>AP Computer Science A</p>
                <p>Remote Learning</p>
                <p>K-12 Success Stories</p>
              </div>
            </div>
            <div className="sec-6-b">
              <h3>Trusted by Leading Brands</h3>
              <p>Our methods for learning to code all are provided within a safe , moderated community that is built <br />
              around encouraging students to gain confidence in their abilities and do so without fear of failure.</p>
               <Row className="sec-6-row">
                <Col className='row_1'>
                <div className="img-apple"> <img src={apple}alt="" width={150} /></div>
                </Col>
                <Col>
                <div><img src={google} alt="" width={150}/></div>
                </Col>
                <Col>
                <div><img src={microsoft} alt=""width={150} /></div>
                </Col>
                <Col>
                <div><img src={sylvan} alt="" width={150} /></div>
                </Col>
                <Col>
                <div><img src={pbs} alt="" width={150}/></div>
                </Col>
                <Col>
                <div><img src={bbc} alt="" width={150}/></div>
                </Col>
               </Row>
               <Row>
               <Col>
                <div><img src={facebook} alt="" width={150} /></div>
                </Col>
                <Col>
                <div><img src={lego} alt="" width={150}/></div>
                </Col>
                <Col>
                <div><img src={minecraft} alt="" width={150}/></div>
                </Col>
                <Col>
                <div><img src={mattel} alt="" width={150}/></div>
                </Col>
                <Col>
                <div><img src={hotw} alt="" width={150}/></div>
                </Col>
                <Col>
                <div><img src={barbie} alt="" width={150}/></div>
                </Col>
               </Row>
            </div>
            <div className="sec-6-c">
              <h3>Join Tynker's Global Community</h3>
              <button className='sec-6c-btn'>SIGN UP FREE</button>
              <div className="hp-map"><img src={map} alt="" /></div>
              {/* Testimonials */}
              <div className='sec-6-card'>
                  <div className='sec-6-card1'>
                    <p>I thought a game was <br />going to be extremely <br /> hard to make, but <br /> Tynker made it really easy.</p>
                  <div className="testimonial">
                    <div className='asc6'>
                      <div>
                    <h5>Tynker Featured <br />Maker</h5>
                    </div>
                    <div><img src={student} alt="" /></div>
                    </div>
                  </div>
                  </div>
                  <div className="sec-6-card2">
                    <p>There's so much <br />opportunity once they <br />understand how coding  <br />works. It's amazing to <br />
                    see them create <br />incredible things <br />themselves.</p>
                    <div className="testimonial">
                    <div className='asc6'>
                      <div className='tesc'>
                    <h5>Charlotte R.</h5>
                    <p>Parent | Melborne,</p>
                    <p>Australia</p>
                    </div>
                   <div><img src={woman_2} alt="" /></div>
                    </div>
                  </div>
                  </div>
                  <div className="sec-6-card3"> 
                    <p>Tynker has made <br /> programming fun,<br />exciting, and simple and <br />will help lead kids into <br />their future.
                    </p>
                    <div className="testimonial">
                    <div className='asc6'>
                      <div>
                    <h5>Valerie S.</h5>
                    <p>5th Grade Teacher |</p>
                    <p>California, US</p>
                    </div>
                    <div><img src={woman_3} alt="" /></div>
                    </div>
                  </div>
                  </div>
              </div>
              <div className="sec-6-d">
              <Row>
                <Col>
                <div><img src={csc} alt="" /></div>
                </Col>
                <Col>
                <div><img src={m} alt="" width={100} /></div>
                </Col>
                <Col>
                <div><img src={ac} alt="" width={100} /></div>
                </Col>
                <Col>
                <div><img src={pcga} alt="" width={100}/></div>
                </Col>
                <Col>
                <div><img src={csc} alt="" /></div>
                </Col>
                <Col>
                <div><img src={nppa} alt="" width={150} /></div>
                </Col>
                <Col>
                <div><img src={mca} alt="" width={100}/></div>
                </Col>
                <Col>
                <div><img src={dea} alt="" width={100}/></div>
                </Col>
                <Col>
                <div><img src={ppa} alt="" /></div>
                </Col>
              </Row>
              </div>
            </div>
            <div className="sec-7">
            <h2 className="sec-7-head">Frequently asked questions</h2> <br/>
            <a href="#" className='sec-7-a'>Is coding good for kids?</a> <br /> <br />
            <a href="#" className='sec-7-a'>How do I start my child coding?</a><br /> <br />
            <a href="#" className='sec-7-a'>What age is best to introduce coding to kids?</a><br /><br />
            <a href="#" className='sec-7-a'>Which is the best coding for kids program?</a><br /><br />
            <a href="#" className='sec-7-a' >Which is the best coding for kids program?</a><br /><br />
            <a href="#" className='sec-7-a'>Which is the best coding for kids program?</a><br /><br />
            <a href="#" className='sec-7-a'>Why is coding needed?</a><br /><br />
            <a href="#" className='sec-7-a'>Why should we use Tynker coding for kids?</a><br /><br />
            <a href="#" className='sec-7-a'>How to I teach my 7 year old to code?</a><br /><br />
            <a href="#" className='sec-7-a'>What options are there for coding for kids?</a>
            </div>
          </div>
          <div className="footer">
             <div className='foot'>
              <Row>
              <Col>
              <div className="about">
                <h6>ABOUT</h6>
                <p>Tynker is the world's leading K-12 creative coding platform, enabling 
                students of all ages to learn to code at  home, school, and on the go. Tynker’s
                highly successful coding curriculum  has been used by one in three U.S. K-8
                schools, 100,000 schools globally, and over 60 million kids across 150 countries.</p>
                </div>   
                </Col>
                <Col className='resource'>
              <h6>RESOURCES</h6>
               <div>
                <p>Blog</p>
                <p>About Us</p>
                <p>Press</p>
                <p>Jobs</p>
                <p>Mobile Apps</p>
                <p>Coding eBooks</p>
                <p>Forum</p>
                <p>Store</p>
                <p>CS Authors</p>
                </div>
                </Col>
                <Col className='parent'>
              <h6>PARENTS</h6>
              <div>
                <p>Overview</p>
                <p>Give a Gift</p>
                <p>Redeem</p>
                <p>Why Coding</p>
                <p>Featured Makers</p>
              </div>
              </Col>
              <Col className='educators'>
             <h6>EDUCATORS</h6>
              <div>
                <p>Overview</p>
                <p>Elementary</p>
                <p>Midlle School</p>
                <p>High School</p>
                <p>AP CS Courses</p>
                <p>Coding eBooks</p>
                <p>PD</p>
                <p>Hour of Code</p>
                <p>STEM Projects</p>
                <p>Request a Quote</p>
              </div>
              </Col>
              <Col className='p-foot'>
              <h6>PARENT NEWSLETTER</h6>
              <div className='foot-btn'>
              <input type="text" placeholder='Enter your email'/>
              <button className="sec-7-btn"> OK</button>
              </div>
              </Col>
              </Row>
              </div>
            <div className='underline'></div>
            <div className='foot-div'>
              <img src={small} alt="" />
              <span className='foot-span'>&copy; 2022 Neuron Fuel</span>
              <a href="" className='foot-link'>Terms &amp; Conditions</a>
              <a href="" className='foot-link'>PRIVACY POLICY</a>
              <a href="" className='foot-link'>Kids &amp; Online Safety</a>
              <a href="" className='foot-link'>About Us</a>
              <a href="" className='foot-link'>Contact Us</a>
            </div>
          </div>
       </div>
      
  );
}

export default App;
