const pageHead = document.getElementById('pageHead');

gtchtkIt = 0; // Iteration

function createHead(){
  pageHead.innerHTML = "<img src='images/funboxLogoGif.gif' class='headerImage'><br><br>";
  pageHead.innerHTML += "<a class='headlink'>HOME</a>&emsp;<a class='headlink'>ABOUT</a>&emsp;<a id='bytk' class='headlink'>BUY TICKETS</a>";
  setTimeout(gltchTik, 5000);
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
      setTimeout(gtchtkIt, 8000);
      break;
  }
  
  gtchtkIt += 1;
  
}
