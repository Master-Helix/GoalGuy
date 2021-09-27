import React from 'react';
import ForwardRoundedIcon from '@material-ui/icons/ForwardRounded';

const Bundesliga=()=>{
    return(
        <>
           <div className="bundesliga_menu">
           <h1 className="title_bund font-weight-bold text-center py-5">Choose your Favourite Bundesliga Team</h1>
           <div className="row row-cols-2 row-cols-md-2 g-1">
           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://www.setaswall.com/wp-content/uploads/2018/04/FC-Bayern-Munich-Wallpaper-22-1920x1080.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">FC BAYERN MUNICH</h4>
                  <p className="para text-black-500">League Titles - 30<br/>Stadium - Allianz Arena<br/>Top Scorer - Gerd Müller (515 goals)</p>
                  <a href="https://fcbayern.com/en">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://wallpaperaccess.com/full/785887.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">BORUSSIA DORTMUND</h4>
                  <p className="para text-black-500">League Titles - 5<br/>Stadium - Signal Iduna Park<br/>Top Scorer - Alfred Preissler (174 goals)</p>
                  <a href="https://www.bvb.de/">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://c4.wallpaperflare.com/wallpaper/620/642/404/soccer-sv-werder-bremen-emblem-logo-hd-wallpaper-preview.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">WERDER BREMEN</h4>
                  <p className="para text-black-500">League Titles - 4<br/>Stadium - Weser Stadium<br/>Top Scorer - Claudio Pizarro (109 goals)</p>
                  <a href="https://www.werder.de/en">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://deepersport.com/wp-content/uploads/2020/12/schalke-04-logo-Copy.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">SCHALKE 04</h4>
                  <p className="para text-black-500">League Titles - 0<br/>Stadium - Veltins Arena<br/>Top Scorer - Klaus Fischer (210 goals)</p>
                  <a href="https://schalke04.de/en/">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://wallpapercave.com/wp/wp4228141.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">FC Nürnberg</h4>
                  <p className="para text-black-500">League Titles - 1<br/>Stadium - Max Morlock Stadion<br/>Top Scorer - Heinz Strehl (131 goals)</p>
                  <a href="https://www.fcn.de/home/">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://images6.alphacoders.com/102/thumb-1920-1024842.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">VfL WOLFSBURG</h4>
                  <p className="para text-black-500">League Titles - 1<br/>Stadium - Volkswagen Arena<br/>Top Scorer - Olaf Ansorge (117 goals)</p>
                  <a href="https://www.vfl-wolfsburg.de/en/">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>
    
           </div>
           </div>
        </>
    );
};

export default Bundesliga;