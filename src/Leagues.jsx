import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SportsSoccerRoundedIcon from '@material-ui/icons/SportsSoccerRounded';





const Leagues=()=>{
    return(
        <>
          <div className="league_menu">
          <h1 className="title_league text-center py-5">Choose your Favourite LEAGUE</h1>
          <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card text-center border-2 border-dark">
              <img src="https://wallpapercave.com/wp/wp3737423.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">PREMIER LEAGUE</h5><br/>
                  <p className="card-text">Region - ENGLAND<br/> Latest Champion - Manchester City<br/>
                  Most Championships - Manchester United (13)</p>
                  <NavLink exact activeClassName="active_class" to ='/Epl'>
                  <button className="btn btn-outline-success"><SportsSoccerRoundedIcon/></button>
                  </NavLink>
               </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-center border-2 border-dark">
              <img src="https://i0.wp.com/sports-nova.com/wp-content/uploads/2021/01/La-Liga.png" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">LA LIGA</h5><br/>
                  <p className="card-text">Region - SPAIN<br/> Latest Champion - Atletico de Madrid<br/>
                  Most Championships - Real Madrid (34)</p>
                  <NavLink exact activeClassName="active_class" to ='/Laliga'>
                  <button className="btn btn-outline-success"><SportsSoccerRoundedIcon/></button>
                  </NavLink>
               </div>
            </div>
            </div>

            <div className="col">
            <div className="card text-center border-2 border-dark">
              <img src="https://www.soccerbible.com/media/93701/1-serie-a-logo-new.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">SERIE-A</h5><br/>
                  <p className="card-text">Region - ITALY<br/> Latest Champion - Internazionale<br/>
                  Most Championships - Juventus (36)</p>
                  <NavLink exact activeClassName="active_class" to ='/SerieA'>
                  <button className="btn btn-outline-success"><SportsSoccerRoundedIcon/></button>
                  </NavLink>
               </div>
            </div>
            </div>

            <div className="col">
            <div className="card text-center border-2 border-dark">
              <img src="http://movietvtechgeeks.com/wp-content/uploads/2015/03/german-bundesliga-soccer-week-24-review-2015.jpg" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">BUNDESLIGA</h5><br/>
                  <p className="card-text">Region - GERMANY<br/> Latest Champion - Bayern Munich<br/>
                  Most Championships - Bayern Munich (30)</p>
                  <NavLink exact activeClassName="active_class" to ='/Bundesliga'>
                  <button className="btn btn-outline-success"><SportsSoccerRoundedIcon/></button>
                  </NavLink>
               </div>
             </div>
            </div>
          </div>
          </div>
        </>
    );
};

export default Leagues;