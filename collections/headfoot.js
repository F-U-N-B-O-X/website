const pageHead = document.getElementById('pageHead');

gtchtkIt = 0; // Iteration

function createHead(){
  pageHead.innerHTML = "<img src='images/funboxLogoGif.gif' class='headerImage'><br><br>";
  pageHead.innerHTML +=  "<a href='home.html' class='headlink' id='hmbt'>HOME</a>&emsp;\
                          <a href='about.html' class='headlink' id='abbt'>ABOUT</a>&emsp;\
                          <a href='index.html' class='headlink' id='bytk'>BUY TICKETS</a>";
  setTimeout(gltchTik, 5000);
}

function checkPageNumber(pageNumber) {
  var idtochng;
  switch(pageNumber){
    case 0:idtochng = 'hmbt';break;
    case 1:idtochng = 'abbt';break;
    case 2:idtochng = 'bytk';break;
  }
  
  document.getElementById(idtochng).style.textDecoration = "underline";
  document.getElementById(idtochng).style.textDecorationColor = "blue";
  
}

function gltchTik() {
  
  switch(gtchtkIt) {
    case 0:
      byglch = setInterval(gltchTik, 300);
      document.getElementById('bytk').style.color = 'red';
      break;
    case 1:
      document.getElementById('bytk').style.color = 'white';
      break;
    case 2:
      document.getElementById('bytk').style.color = 'green';
      break;
    case 3:
      document.getElementById('bytk').style.color = 'white';
      break;
    case 4:
      document.getElementById('bytk').style.color = 'blue';
      break;
    case 5:
      document.getElementById('bytk').style.color = 'white';
      break;
    case 6:
      clearInterval(byglch);
      gtchtkIt = -1;
      setTimeout(gltchTik, 8000);
      break;
  }
  
  gtchtkIt += 1;
  
}
