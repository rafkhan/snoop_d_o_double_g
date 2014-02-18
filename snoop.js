(function() {

  img = document.createElement("img");
  img.src = "http://www.ultradz.com/forum/gfx/comic/snoop_dogg.gif";
  img.style.width = "5%";
  img.style.position = "absolute";
  img.mouseEnabled = false;

  document.body.appendChild(img);

  document.onmousemove = function(e) {
    console.log("asd");
    img.style.left = (e.clientX + 1) + 'px';
    img.style.top = (e.clientY + 1) + 'px';
  };
})();
