import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

function nombresDom(){
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extension = ['.com', '.net'];
  
  
  for (let i = 0; i < pronoun.length; i++){
    for (let j = 0; i < adj.length; j++){
      for (let k = 0; k < noun.length; k++){
        for (let l = 0; l < extension.length; l++){
          return pronoun[i] + adj[j] + noun[k] + extension[l]
        }
      }
    }
  }
  

}
console.log(nombresDom());
   
    

  }
  


