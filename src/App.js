import logo from './logo.svg';
import './App.css';
import calc from './immagini/calc.png';
import pixel from './immagini/game.png';
import chat from './immagini/msg.png';
import portfolio from './immagini/R.png';
import expand from './immagini/expand.png';
import React, {useState} from 'react';

export default function App() {
const [tag, setTag]= useState('');



// scrivi il tag nella barra, premi invio, il tag scritto mostrerà l'elemento mentre gli altri saranno invisibili 

const search=(event)=>{
  if (event.key === 'Enter'){
    setTag(event.target.value);
  } 
  }

  const list = {
    calc: ['Calcolatrice', 'Calc', 'calcolatrice', 'calc'],
    game: ['pixel', 'pixel nightmare', 'game'],
    msg: ['chat', 'direct', 'messaggi'],
    port: ['port', 'portfolio']
  }

  const theTag=()=>{
    const tagKeys = Object.keys(list);
    if(tagKeys.includes(tag)){
      setTag(tag);
    } else{
      document.getElementById('error').innerHTML="Couldn't find anything :("
    }
  }


  return (
    <div className="App">

<h2 className='error' id='error'></h2>

      <div className='header'>
      <h1 className='title'>HomeCode</h1>
      <h1 className='title2'>|</h1>
      <input className='input' type='text' placeholder='Cerca qui..' onKeyUp={search}></input>
      <div className='closebox'>
          <img className='two' src={expand}></img>
        </div>
      </div>

<div className='benbox'>
      <h3 className='ben'>Benvenuto su HomeCode, la pagina principale! Qui potrai trovare e vedere tutte le mie principali creazioni. Seleziona cliccando su uno dei box che vedi per testare/vedere il progetto. (Nota: Pixel Nightmare è un progetto non finito al 100%)</h3>
</div>
    
<div className='slide'>
<div className='slidebox'>
   <div className='box' style={{display: tag === '' || list.calc.includes(tag) ? 'block' : 'none'}}>
     <div className='pic'>
      <img className='img' src={calc}></img>
     </div>
     <div className='textbox'>
      <p className='text'>Testa la calcolatrice di Sticky! Questo simpatico stickman, ti può fare compagnia nel mentre fai dei calcoli impegnativi... Potrai vedere cosa dici tramite dei messaggi random visibili ogni 5 secondi.</p>
      
     </div>
     <a className='link' href='https://kpdtc7.csb.app'>The Calculator</a> 
   </div>

   <div className='box' style={{display: tag === '' || list.game.includes(tag) ? 'block' : 'none'}}>
     <div className='pic'>
      <img className='img' src={pixel}></img>
     </div>
     <div className='textbox'>
      <p className='text'>Questo è un brevissimo gioco interattivo (non finito), dove l'intento era quello di creare un gioco dove in base alle opzioni scelte la trama o le azioni della storia cambiano. Puoi provarlo e vedere tutte le varie opzioni per vedere come cambia in breve la sua avventura. </p>
       
     </div>
     <a className='link2' href='https://msfcq9-3000.csb.app'>Pixel Nightmare</a>
   </div>

   <div className='box' style={{display: tag === '' || list.msg.includes(tag) ? 'block' : 'none'}}>
     <div className='pic'>
      <img className='img' src={chat}></img>
     </div>
     <div className='textbox'>
      <p className='text'>Questo è una semplice chat di messaggistica non ancora finita ed ancora in fase di sviluppo. Presto spero di farla diventare funzionante come quelle vere!!</p>
      
     </div>
     <a className='link3' href=''>???</a> 
   </div>

   <div className='box' style={{display: tag === '' || list.port.includes(tag) ? 'block' : 'none'}}>
     <div className='pic'>
      <img className='img' src={portfolio}></img>
     </div>
     <div className='textbox'>
      <p className='text'>Questo è il mio Portfolio. Qui mostro diciamo le mie skills in breve su tutto il programma imparato da solo grazie ai siti come YouTube, ovvero tutorial, W3 Schools e ChatGPT, dove mi hanno dato una grande mano</p>
      
     </div>
     <a className='link4' href=''>???</a> 

   </div>

 

</div>
</div>
</div>
  );
}

