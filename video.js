function muestravideo(){
  document.getElementById("play").style.display="none";
}
function iraVideo(indice){
  document.getElementById("container_main").style.display="none";
  document.getElementById("container_video").style.display="";
  ancho = window.innerWidth;
  alto = window.innerHeight;
  altoIframe = alto - 30;
  anchoIframe = ancho - 105;
  document.getElementById("iframe").width = anchoIframe;
  document.getElementById("reproducir").width = anchoIframe
  document.getElementById("iframe").height = anchoIframe / 2;
  document.getElementById("reproducir").height = anchoIframe / 2;  
  switch(indice){
    case 1: 
            break;
    case 2:
        
            document.getElementById("iframe").src = "https://www.youtube.com/embed/i9RuCJTevnc?start=5";
            break;
    case 3: 
           
            document.getElementById("iframe").src = "https://www.youtube.com/embed/A153VZ4Zimg?start=48";
            break;
            break;
    case 4:
           
            document.getElementById("iframe").src = "https://www.youtube.com/embed/2l6m5NQHM3A?start=4";
            break;
    case 5: 
            
            document.getElementById("iframe").src = "https://www.youtube.com/embed/93htaSyBlwg";
            break;
    case 6:
           
            document.getElementById("iframe").src = "https://www.youtube.com/embed/r4ljBABcEZk?start=5";
            break;
    case 7:
           
            document.getElementById("iframe").src = "https://www.youtube.com/embed/YC105Z4MCrs?start=2";
            break;
    case 8:
            
            document.getElementById("iframe").src = "https://www.youtube.com/embed/dHdeMsutk1Y?start=5";
            break;
    default:
        alert("No existe la pelicula");
  }
}
reproducir.addEventListener('click', function() {
        
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { // Para Firefox
          iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { // Para Chrome, Safari y Opera
          iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { // Para Internet Explorer y Edge
          iframe.msRequestFullscreen();
        }
});