import React from 'react';
import ForwardRoundedIcon from '@material-ui/icons/ForwardRounded';

const Epl=()=>{
    return (
        <> 
          <div className="epl_menu">
          <h1 className="title_epl font-weight-bold text-center py-5">Choose your Favourite Premier League Team</h1>
           <div className="row row-cols-1 row-cols-md-2 g-4">
           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://cdn.statically.io/img/i.pinimg.com/originals/3a/6a/65/3a6a654029c0998052ba8d36823fa3d2.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">MANCHESTER UNITED</h4>
                  <p className="para text-black-500">League Titles - 13<br/>Stadium - OLD TRAFFORD<br/>Top Scorer - Wayne Rooney (253 goals) </p>
                  <a href="https://www.manutd.com/">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
                  </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://c4.wallpaperflare.com/wallpaper/188/87/652/soccer-manchester-city-f-c-logo-wallpaper-preview.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">MANCHESTER CITY</h4>
                  <p className="para text-black-500">League Titles - 5<br/>Stadium - ETIHAD Stadium<br/>Top Scorer - Sergio Agüero (390 goals) </p>
                  <a href="https://www.mancity.com/">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
                  </a>               
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://wallpaperaccess.com/full/545474.png" className="card-img-top" alt="..." />
               <div className="card-body">
                 <h4 className="card-title text-center">CHELSEA</h4>
                  <p className="para text-black-500">League Titles - 5<br/>Stadium - STAMFORD BRIDGE<br/>Top Scorer - Frank Lampard (648 goals)</p>
                  <a href="https://www.chelseafc.com/en">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
                  </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://wallpapercave.com/wp/wp1813543.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">LIVERPOOL</h4>
                  <p className="para text-black-500">League Titles - 1<br/>Stadium - ANFIELD Stadium<br/>Top Scorer - Ian Rush (307 goals)</p>
                  <a href="https://www.liverpoolfc.com/">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
                   </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2a82653-fe92-455b-9424-de663749ac13/d8c4pb9-9f080def-650f-4e57-b1ca-56c15f26d93e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UyYTgyNjUzLWZlOTItNDU1Yi05NDI0LWRlNjYzNzQ5YWMxM1wvZDhjNHBiOS05ZjA4MGRlZi02NTBmLTRlNTctYjFjYS01NmMxNWYyNmQ5M2UuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wirTfFxaPHUYh7D_iwDnHdSqM-vzANUlbRw2XWpGSE4" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h4 className="card-title text-center">ARSENAL</h4>
                  <p className="para text-black-500">League Titles - 3<br/>Stadium - EMIRATES Stadium<br/>Top Scorer - Thierry Henry (228 goals)</p>
                  <a href="https://www.arsenal.com/">
                  <button className="btn btn-danger  btn-outline-info"><ForwardRoundedIcon/></button>
               </a>
               </div>
           </div>
           </div>

           <div className="col">
           <div className="card text-center border-2 border-dark">
              <img src="https://wallpaperaccess.com/full/1331172.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                 <h4 className="card-title text-center">TOTTENHAM HOTSPUR</h4>
                  <p className="para text-black-500">League Titles - 0<br/>Stadium - Tottenham Hotspur Stadium<br/>Top Scorer - Harry Kane(336)</p>
                  <a href="https://www.tottenhamhotspur.com/">
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

export default Epl;