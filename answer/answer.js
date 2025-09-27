// function answer(){

//     document.getElementById('answerrr').innerText="Apnar Monner Modhe Agun Jalaite";
// }
// function answerr(){

//     document.getElementById('answerrr').innerText="Apnak Birokto Korte";
// }


function answer() {
  let r1 = document.getElementById('answerrr');
  r1.innerText = "Apnar M";
  r1.style.display = 'inline'; 
  setTimeout(out, 1500);
}

function answerr() {
  let r1 = document.getElementById('answerrr');
  r1.innerText = " Dite";
  r1.style.display = 'inline'; 
  setTimeout(out, 1500);
}

function out() {
  let r1 = document.getElementById('answerrr');
  if (r1) {
    r1.style.display = 'none'; 
  }
}