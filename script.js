function myFunction() {
    var x = document.getElementById("menucont");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  const quality1 = document.getElementById("firsth");
  const quality2 = document.getElementById("secondh");
  if(window.innerWidth >= 768) {
      quality1.innerHTML = "quality work recently done";
      quality2.innerHTML = "Project"
  }else {
      quality1.innerHTML = "quality work ";
      quality2.innerHTML = "recently done Project";
  }

const buttons = document.querySelectorAll('.btn');


function handleButtonClick(event) {
buttons.forEach(button => button.classList.remove('active'));

let type = event.target.classList[1];
event.target.classList.add('active');

const filters = document.querySelectorAll(".filter");

filters.forEach(element => {
  let wrapport = document.querySelector(".wrapport");

  if (!element.dataset.originalTransform) {
    element.dataset.originalTransform = window.getComputedStyle(element).transform || "none";
  }

  if(type == "all") {
    element.style.display = "block";
    element.style.transform = element.dataset.originalTransform; 
  }
  
  else if(element.classList[2] != type) {
    element.style.display = "none";
    console.log (type);
  }
  else {
    
    element.style.display = "block";
    element.style.transform = "none";
    element.style.margin = "0 10px 0 10px"
    wrapport.style.justifyContent = "start";
  }
});
}




buttons[0].classList.add('active');

buttons.forEach(button => {
button.addEventListener('click', handleButtonClick);
});


////////////////


////////////////
const swiperEl = document.querySelector('swiper-container')

const params = {
  injectStyles: [`
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      color: #000;
      opacity: 1;
      background: rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
    }

    .swiper-pagination-bullet-active {
      color: #fff;
      background: #007aff;
      transform: scale(1.2); /* This applies the scaling when active */
    }

    .swiper-pagination-bullet:hover {
      transform: scale(1.1); /* Optional: scales up slightly on hover */
    }
  `],
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
}

Object.assign(swiperEl, params)

swiperEl.initialize();

function toggleWillDellVisibility() {
  const el = document.querySelectorAll(".willdel"); 
  if (window.innerWidth <= 768) {
      el.forEach(element => {
          element.style.display = "none";
      });
  } else {
      el.forEach(element => {
          element.style.display = "flex"; 
      });
  }
}

toggleWillDellVisibility();

window.addEventListener("resize", toggleWillDellVisibility);





