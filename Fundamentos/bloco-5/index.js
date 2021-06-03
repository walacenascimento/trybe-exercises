  /*
  Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
  - document.getElementById()
  - document.getElementsByClassName()
  - document.getElementsByTagName() */
  /* 1 - Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê    daqui a 2 anos. 
  (Não  gaste tempo pensando no texto e sim realizando o exercício)
  Resolvido */

  // document.getElementsByTagName('p')[1].innerText = "Ganhar 3.500 e estar em um empresa   cabulosa!!";
  function texto(){
    let paragrafo = document.getElementsByTagName('p')[1];
    paragrafo.innerText = "Me tornar um desenvolvedor FullStack !";

  }
  texto();

  // function changeText() {
  //   let paragraph = document.getElementsByTagName('p')[1];
  //   paragraph.innerHTML = "Ganhar 3.500 e estar em um empresa cabulosa!!"
  // }
  // changeText();

  /* 2 - Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)). RESOLVIDO */
  function alterarCor(){
    let cor = document.getElementsByClassName('main-content')[0];
    cor.style.background = 'rgb(76,164,109)';
  }
  alterarCor();

  /* 3 - Crie uma função que mude a cor do quadrado vermelho para branco.
  RESOLVIDO */
  function alterarCorCentro(){
    let cor = document.getElementsByClassName('center-content')[0];
    cor.style.background = 'rgb(255,255,255)';
  }
  alterarCorCentro();

  /* 4 - Crie uma função que corrija o texto da tag <h1>.
  RESOLVIDO */
  function corrigiTitulo() {
    let titulo = document.getElementsByTagName('h1')[0];
    titulo.innerHTML = "Exercício 5.1 - JavaScript";
  }
  corrigiTitulo();


/* 5 - Crie uma função que modifique todo o texto da primeira tag <p> para maiúsculo.
RESOLVIDO*/
function upperCase(){
let textUpper = document.getElementsByTagName('p')[0];
textUpper.innerHTML = textUpper.innerHTML.toUpperCase();
}
upperCase();

/* 6 - Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function showParagraphs() {
  let paragraphs = document.getElementsByTagName('p');
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerHTML);
  }
}
showParagraphs();

