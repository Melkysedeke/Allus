document.addEventListener("DOMContentLoaded", function () {
    var botaoTopo = document.getElementById("r-button");
    var textoTopo = document.getElementById("r-text");

    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        botaoTopo.style.visibility = "visible";
        botaoTopo.classList.add("fade");
      } else {
        botaoTopo.style.visibility = "hidden";
        botaoTopo.classList.remove("fade");
      }
    });

    window.addEventListener("scroll", function () {
    var alturaPagina = document.body.scrollHeight - this.window.innerHeight;

        if (window.scrollY > alturaPagina - 1 && window.innerWidth > 1340) {
          textoTopo.classList.add("open");
        } else {
          textoTopo.classList.remove("open");
        }
      });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1340) {
        textoTopo.classList.add("open");
      } else {
        textoTopo.classList.remove("open");
      }
    })
  
    botaoTopo.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });