const photoUpload = document.querySelector("#photoUpload");
const uploadUI = document.querySelector("#uploadUI");
const photos = document.querySelector("#photos");
const createSlideShow = document.querySelector("#createSlideShow");

const createCarousel = (photoList) => {
  const carousel = document.createElement("div");
  const id = "carousel" + Date.now();
  carousel.className = "carousel slide";
  let slides = "";
  let indicators = " ";
  photoList.forEach((photo, index) => {
    slides += `
    <div class="carousel-item  ${index === 0 && "active"}">
     <img src="${photo}" class="d-block w-50 mx-auto " alt="...">
  </div>`;
    indicators += `
    <button type="button" ${
      index === 0 && `class="active"`
    } data-bs-target="#${id}" data-bs-slide-to="${index}" class="active" aria-current="true" aria-label="Slide 1"></button>`;
  });

  carousel.innerHTML = `
  <div id="${id}" class="carousel slide">
  <div class="carousel-indicators">
   ${indicators}
  </div>
  <div class="carousel-inner">
   ${slides}
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  `;
  document.body.append(carousel);
};

photoUpload.addEventListener("change", (event) => {
  //   console.log(event.target.files[0]);

  [...event.target.files].forEach((file) => {
    const img = new Image();

    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      console.log(event.target);
      img.src = event.target.result;
      console.log(img);
      // document.body.append(img);
      img.classList.add("photo");

      photos.append(img);
    });
    reader.readAsDataURL(file);
  });
});
uploadUI.addEventListener("click", () => {
  photoUpload.click();
});

createSlideShow.addEventListener("click", () => {
  const allPhoto = [...document.querySelectorAll(".photo")];

  createCarousel(
    allPhoto.map((el) => {
      return el.src;
    })
  );
  // createCarousel();
});
uploadUI.addEventListener("dragover", (event) => {
  event.preventDefault();
});

uploadUI.addEventListener("drop", (event) => {
  event.preventDefault();
  console.log(event.dataTransfer.files);

  [...event.dataTransfer.files].forEach((file) => {
    const img = new Image();

    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      console.log(event.target);
      img.src = event.target.result;
      console.log(img);
      // document.body.append(img);
      img.classList.add("photo");

      photos.append(img);
    });
    reader.readAsDataURL(file);
  });
});
