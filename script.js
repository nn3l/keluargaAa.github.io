let fullimgBox = document.getElementById("fullimgBox");
let fullimg = document.getElementById("fullimg");

function openFullImg(pic) {
  fullimgBox.style.display = "flex";
  fullimg.src = pic;
}

function closeFullImg () {
    fullimgBox.style.display = 'none'
}
