const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
      const joueur = buttons[i].innerHTML;
      const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
      let resultat ="";

      if (joueur === robot) {
        resultat = "Egalité";
      }
  
      else if (
        (joueur === "pierre" && robot === "ciseaux") ||
        (joueur === "feuille" && robot === "pierre") || 
        (joueur === "ciseaux" && robot === "feuille")
      ) {
        resultat = "Gagné";
      }
      else {
        resultat = "Perdu";
      }

      document.querySelector(".resultat").innerHTML = `
       <p> Joueur :  ${joueur} </br>
        Robot : ${robot} </br>
        ${resultat} </p>

      `;
  });
}

// for (let s = 0; s < score.length ; s++) {
//   if (resultat = "Gagné") {
//     document.querySelector(".score").innerHTML = ` <p> score : ${s++} </p>`
//   }
// }
// faire un compteur de score c'est trop dur en fait ??????? 