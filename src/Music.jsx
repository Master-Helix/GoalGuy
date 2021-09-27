import React from 'react';
import useSound from 'use-sound';
import gaana from '../src/Resources/UEFA Champions League Theme Song [On Screen].mp3';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';



function Music() {

  const [play, { stop }] = useSound(
    gaana,
    { volume: 1.0 }
  );


  return (

    <>
    <button className="bajao btn-danger"

      onClick={()=>{
        play();
      }}

      onDoubleClick={()=>{
        stop();
      }}
    >
      <buttonContents>
        <PlayCircleFilledRoundedIcon/>
      </buttonContents>
    </button>
    </>
  );
}

export default Music;