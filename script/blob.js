const blob = document.getElementById("blob");


$(document).ready(function () {
  window.onpointermove= event => { 
  const { pageX, pageY } = event;
  blob.animate({
    left: `${pageX}px`,
    top: `${pageY}px`
  }, { duration: 3000, fill: "forwards" });
}
});