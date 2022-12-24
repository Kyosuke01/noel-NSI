const nav_home = document.querySelector(".nav-home1");
const nav_liste = document.querySelector(".nav-liste1");
const nav_venezuela = document.querySelector(".nav-venezuela1");
const burger = document.querySelectorAll(".box");

const TL1 = new TimelineMax({ paused: true });

TL1.from(nav_home, 1.3, { opacity: 0 }, "+=0.3")
  .from(nav_liste, 1.3, { opacity: 0 }, "-=0.75")
  .from(nav_venezuela, 1.3, { opacity: 0 }, "-=0.75");

TL1.play();

alert("✅ Vous vous trouvez bien sur le site de Xavier et Baptiste !");
alert(
  "⚠️ Vous pouvez écouter de la belle musique à l'aide de la source audio se situant à côté des autres pages !"
);
