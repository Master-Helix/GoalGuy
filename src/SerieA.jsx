import React from 'react';
import ForwardRoundedIcon from '@material-ui/icons/ForwardRounded';

const SerieA=()=>{
    return(
        <>
           <div className="serie_menu">
           <h1 className="title_serie font-weight-bold text-center py-5">Choose your Favourite SerieA Team</h1>
           <div className="row row-cols-2 row-cols-md-2 g-1">
           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://wallpaperaccess.com/full/1097799.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">JUVENTUS</h4>
                  <p className="para text-black-500">League Titles - 36<br/>Stadium - Allianz Stadium<br/>Top Scorer - Alessandro Del Piero (290 goals)</p>
                  <a href="https://www.juventus.com/en/">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://i.pinimg.com/originals/fe/7d/06/fe7d069dd3ea5b3466e216fd95189fa7.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">AC MILAN</h4>
                  <p className="para text-black-500">League Titles - 18<br/>Stadium - San Siro Stadium<br/>Top Scorer - Gunnar Nordahl (221 goals) </p>
                  <a href="https://www.acmilan.com/en">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://images.squarespace-cdn.com/content/v1/593614a03e00beb2f0d520ad/1529904789816-XJ18XHLVJBHJIRZ62M83/1_-1bWRL6cKaDB-FNR753lMg.png?format=1000w" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">INTER MILAN</h4>
                  <p className="para text-black-500">League Titles - 19<br/>Stadium - San Siro Stadium<br/>Top Scorer - Giuseppe Meazza (255 goals)</p>
                  <a href="https://www.inter.it/en">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://wallpapercave.com/wp/wp4394265.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">LAZIO</h4>
                  <p className="para text-black-500">League Titles - 2<br/>Stadium - Stadio Olimpico<br/>Top Scorer - Ciro Immobile (150 goals)</p>
                  <a href="https://www.sslazio.it/ru">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://img.wallpapersafari.com/desktop/1680/1050/35/27/9kFbzd.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">ROMA FC</h4>
                  <p className="para text-black-500">League Titles - 3<br/>Stadium - Stadio Olimpico<br/>Top Scorer - Francesco Totti (307 goals)</p>
                  <a href="https://www.asroma.com/">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://besthqwallpapers.com/Uploads/28-8-2018/63404/thumb2-ssc-napoli-4k-italian-football-club-logo-2d-art.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">NAPOLI</h4>
                  <p className="para text-black-500">League Titles - 2<br/>Stadium - Diego Armando Maradona Stadium<br/>Top Scorer - Dries Mertens (360 goals)</p>
                  <a href="https://www.sscnapoli.it/">
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

export default SerieA;