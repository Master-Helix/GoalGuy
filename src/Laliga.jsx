import React from 'react';
import ForwardRoundedIcon from '@material-ui/icons/ForwardRounded';

const Laliga=()=>{
    return(
        <>
           <div className="laliga_menu">
           <h1 className="title_laliga font-weight-bold text-center py-5">Choose your Favourite LaLiga Team</h1>
           <div className="row row-cols-2 row-cols-md-2 g-1">
           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://www.xtrafondos.com/en/descargar.php?id=3939&resolucion=1920x1080" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">REAL MADRID C.F</h4>
                  <p className="para text-black-500">League Titles - 34<br/>Stadium - Santiago Bernabéu<br/> Top Scorer - Cristiano Ronaldo (450 goals) </p>
                  <a href="https://www.realmadrid.com/en">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://wallpaperaccess.com/full/777518.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">FC BARCELONA</h4>
                  <p className="para text-black-500">League Titles - 26<br/>Stadium - Camp Nou<br/>Top Scorer - Lionel Messi (709 goals)</p>
                  <a href="https://www.fcbarcelona.com/en/">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://c4.wallpaperflare.com/wallpaper/393/1015/689/sports-atletico-madrid-emblem-logo-wallpaper-preview.jpg"className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">ATLETICO de MADRID</h4>
                  <p className="para text-black-500">League Titles - 11<br/>Stadium - Wanda Metropolitano <br/>Top Scorer - Antoine Griezmann (133 goals)</p>
                  <a href="https://en.atleticodemadrid.com/">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://wallpapercave.com/wp/wp2438287.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">SEVILLA FC</h4>
                  <p className="para text-black-500">League Titles - 1<br/>Stadium - Ramon Sanchez-Pizjuan Stadium<br/>Top Scorer - Frédéric Kanouté (131 goals)</p>
                  <a href="https://sevillafc.es/en">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://besthqwallpapers.com/Uploads/23-8-2017/19162/thumb2-athletic-bilbao-football-club-emblem-athletic-bilbao-logo-la-liga.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">ATLETIC BILBAO</h4>
                  <p className="para text-black-500">League Titles - 8<br/>Stadium - San Mamés Stadium<br/> Top Scorer - Telmo Zarra (333 goals)</p>
                  <a href="https://www.athletic-club.eus/en">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://wallpapercave.com/wp/wp2098441.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">VALENCIA</h4>
                  <p className="para text-black-500">League Titles - 6<br/>Stadium - Mestalla Stadium<br/>Top Scorer - Edmundo Suárez (238 goals)</p>
                  <a href="https://www.valenciacf.com/en">
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

export default Laliga;