import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SportsRoundedIcon from '@material-ui/icons/SportsRounded';
import Music from './Music';

const Home=()=>{
    return (
        <>
        <div className="home">
           <div className="home_text py-4">
             <h1 className="heading_text">Welcome to GOALGUY!</h1>
             <br/>
             <h3> Home for Football Freaks</h3><br/>
              <p className="para_home text-center my-4">Choose, Know, Explore More about your Team and get Directed to your Team's Website! 
             <br/><br/>
             <NavLink exact activeClassName="active_class" to ='/Leagues'>
             <button className="btn  btn-info btn-outline-dark btn-lg">Kick Off! <SportsRoundedIcon/></button>
             </NavLink>
             <br/><br/></p>
             <h4>Play Some Vibes!<br/></h4>
               <h6>(Click only Once to Play and Double Click to Stop)</h6>  
             <Music/><br/><br/>
             <NavLink exact activeClassName="active_class" to ='/Report'>
             <button className="btn2 btn-outline-light my-3">Report Bug</button>
             </NavLink>
            </div>
        </div>
        </>
    );
};

export default Home;