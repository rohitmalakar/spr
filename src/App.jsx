import { useState } from 'react'
import './App.css'
import video from './assets/thunderstorm.mp4'

// 0 = sissor
// 1 = paper
// 2 = rock

import {Howl, Howler} from 'howler';

// const cors = require('cors');
// app.use(cors());

// Setup the new Howl.
const sound = new Howl({
  src: ['./public/ryu.mp3']
});

// Play the sound.
sound.play();

// Change global volume.
Howler.volume(0.2);


function App() {

  // state set 
  const [com, setCom] = useState(0);
  // selected id
  const [selId, setselId] = useState(0); 

  // result state
  const [result, setResult] = useState(0);

  // score state
  const [comScore, setComScore] = useState(0);
  const [userScore, setUserScore] = useState(0);

  // action screen
  const [actionScreen, setActionScreen] = useState("hide");

  const actionscreen = () => {
    
  }

  // result screen
  const [resultScreen, setResultScreen] = useState("hide");
  const [final_screen, setFinal_screen] = useState("hide");
  

  function refreshPage() {
    window.location.reload(false);
  }

  const gameStart = (name) => {
  
    setActionScreen("show");
    setTimeout(
      () => setResultScreen("show"), 
      1500
    );
    setTimeout(
      () => setFinal_screen("show"),
      1800
    );
    // setTimeout(
    //   () => setActionScreen("hide"), 
    //   1500
    // );
    // setActionScreen("hide");

    if(name.target.id === "sissors"){
      // set used selected id
      setselId(name.target.id);
      
      // generate random number from 0-2 and set to com 
      const ramdomnumb = Math.floor(Math.random() * 3);
      setCom(ramdomnumb);

      console.log("start loop check sissors");
      console.log(ramdomnumb);

        // check randoomnumber with target id 
        if(ramdomnumb === 0){
          console.log("You win !");
          setResult("You win");
          
          
        }else if (ramdomnumb === 1){
          console.log("draw");
          setResult("draw");
        }else{
          console.log("You lose !");
          setResult("You lose");
          
        }

    }else if(name.target.id === "paper"){
      // set used selected id
      setselId(name.target.id);

      console.log("start loop check paper");
      // generate random number from 0-2 and set to com 
      const ramdomnumb = Math.floor(Math.random() * 3);
      setCom(ramdomnumb);
      
        
        // check randoomnumber with target id 
        if(ramdomnumb === 0){
          console.log("draw");
          setResult("draw");
        }else if (ramdomnumb === 1){
          console.log("You lose !");
          setResult("You lose !");
          
        }else{
          console.log("You win !");
          setResult("You win !");
          
        }
    }else if(name.target.id === "rock"){
      // set used selected id
      setselId("rock");

      console.log("start loop check rock");
      // generate random number from 0-2 and set to com 
      const ramdomnumb = Math.floor(Math.random() * 3);
      setCom(ramdomnumb);
        
        // check randoomnumber with target id 
        if(ramdomnumb === 0){
          console.log("You lose !");
          setResult("You lose !");
          
        }else if (ramdomnumb === 1){
          console.log("You win !");
          setResult("You win !");
          
        }else{
          console.log("draw");
          setResult("draw");
        }
    }
  }

  const compNumberToString = () => {
    if(com === 0){
      return "scissors";
    }else if(com === 1){
      return "paper";
    }else{
      return "rock";
    }
  }
  return (
    <>
      <div>

        <video className='videoTag' autoPlay loop muted>
            <source src={video} type='video/mp4' />
        </video>

        <div id="score" className='score'>
          <div className="topName">
            YOU 
          </div>
          <div className="topName com">
            COM
          </div>
        </div>
        <div id="actionScreen" className={actionScreen}>
          <video className='videoTag' autoPlay loop muted>
              <source src={video} type='video/mp4' />
          </video>
          {/* <div className="topName">YOU <br />
            1 </div>
          <div className="topName com">COM <br />
            1</div> */}
          <div className="rock p1"></div>
          <div className="rock p2"></div>
        </div>
        <div id="resultScreen" className={resultScreen}>
        <video className='videoTag' autoPlay loop muted>
            <source src={video} type='video/mp4' />
        </video>
          {/* <div className="topName">YOU <br />
            1</div>
          <div className="topName com">COM <br />
            1 </div> */}
          <div className={`${selId} p1`}></div>
          <div className={`com${com} p2`}></div>

          <div className={`${final_screen} final_screen ${result}`}>

          </div>

          {/* <div>Computer {com} </div>
          <div>You picked {selId} </div>
          <div>Result {result} </div> */}
          <div className="restartbtnWrap">
            <button className='resetartbtn' onClick={refreshPage}>Restart</button>
          </div>
        </div>

          <div className='buttons_start'>
            <button id="sissors" name="0" className="actionbtn" onClick={gameStart}>scissors</button>
            <button id="paper" name="1" className="actionbtn" onClick={gameStart}>paper</button>
            <button id="rock" name="2" className="actionbtn" onClick={gameStart}>rock</button>
          </div>
       </div>
    </>
  )
}

export default App




// const [count, setCount] = useState(0);

//   // const [computerOpt, setComputerOpt] = useState(0);

//   // const [userPicked, setUserPicked] = useState(0);

//   const [p1, setP1] = useState(0);
//   const [comp, setComp] = useState(0);

//   const getramdomnumb = Math.floor(Math.random() * 3);
//   const [usrpick, setUsrpick] = useState(0);
  
//   const gameStart = (name) => {
//     if(name.target.id === "sissors"){
//       setUsrpick(0);
//     }else if(name.target.id === "paper"){
//       setUsrpick(1);
//     }else{
//       setUsrpick(2);
//     }
//     // console.log(usrpick);

//     if(usrpick == getramdomnumb){
//       console.log("draw");
//     }
//     if(usrpick === 0 && getramdomnumb === 1){
//       console.log("you win");
//     }
//     if(usrpick === 0 && getramdomnumb === 2){
//       console.log("you lose");
//     }

//     // setP1(name.target.id);
//     // // console.log(name.target.id);
//     // console.log("user: " + p1);
//     // console.log("com: " + getramdomnumb); 
//   }