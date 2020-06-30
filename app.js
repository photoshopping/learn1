let slider = document.querySelector(".slider-contenedora");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth;
});

setInterval(function () {
  slides();
}, intervalo);

function slides() {
  slider.style.transform = "translate(" + width * contador + "px)";
  slider.style.transition = "transform .8s";
  contador++;

  if (contador == sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador = 1;
    }, 1500);
  }
}

$(document).ready(function () {
  $("ul.tabs li a:first").addClass("active");
  $(".secciones article").hide();
  $(".secciones article:first").show();

  $("ul.tabs li a").click(function () {
    $("ul.tabs li a").removeClass("active");
    $(this).addClass("active");
    $(".secciones article").hide();

    var activeTab = $(this).attr("href");
    $(activeTab).show();
    return false;
  });
});
