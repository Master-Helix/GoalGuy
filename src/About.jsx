import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import bgvideo from '../src/Resources/twirling pine loop.mp4';


const About=()=>{
    return(
        <>
        <video autoPlay loop muted id='video'>
          <source src={bgvideo} type='video/mp4' />
        </video>
        <div className="about_menu">
           <div className="about_text my-5 mx-5">
            <h2 className="about_title">Thanks for Visiting!</h2><br/>
            <h3 className="about_para">
             Created By <span className="name_tag">&nbsp; RAKSHIT PANDEY &nbsp; </span> aka  &nbsp; <span className="name_tag">Master Helix</span><br/><br/>
             <h3>This Website targets Top Popular Teams in Top Leagues<br/>
             Select and Know about your Fav Team and <br/>Explore More about your Team!</h3><br/>
            </h3>
            <h4 className="about_title"> FOOTBALL FOREVER :)</h4><br/>

           <div className="about_btn">
               <a href="https://www.instagram.com/master.helix/" target="_bla"><button className="btn3 btn-outline-warning"><InstagramIcon/></button></a>&nbsp;&nbsp;&nbsp;&nbsp;
               <a href="https://www.facebook.com/rakshit.pandey1/" target="_bla"><button className="btn3 btn-outline-warning"><FacebookIcon/></button></a>&nbsp;&nbsp;&nbsp;&nbsp;
               <a href="https://www.linkedin.com/in/rakshit-pandey-49211119b/" target="_bla"><button className="btn3 btn-outline-warning"><LinkedInIcon/></button></a>&nbsp;&nbsp;&nbsp;&nbsp;
           </div>

           </div>
        </div>
        </>
    );
};

export default About;