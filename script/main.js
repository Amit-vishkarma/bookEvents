let listsContainer = document.querySelector(".lists-container");
let aboutMain = document.querySelector(".about-main");
let hr_carousel = document.querySelector(".hr_carousel");

let innerHTMLS2 = "";

rItems.forEach((item) => {
  innerHTMLS2 += ` <div class="card movie-card p-0">
      <img src=${item.Image} class="card-img-top">
      <div class="card-body p-2">
        <h6 class="mb-1">${item.eventName}</h6>
        <small class="text-muted">⭐ ${item.rating}/10</small>
      </div>
    </div>`;
});

if (!hr_carousel) {
  console.log("Element not found!");
} else {
  hr_carousel.innerHTML = innerHTMLS2;
}
function toggleFilter(element) {
  if (element.parentElement.classList.toggle != "active") {
    element.parentElement.classList.toggle("active");
  }
}
function Filter(e) {
  let filterItems = e.id;
  e.classList.toggle("active");
  e.parentElement.classList.toggle("active");

  if (filterItems == "all") {
    filterItems = items;
  } else {
    filterItems = items.filter((item) => item.category == e.id);
  }
  console.log(e.id);
  console.log(filterItems);
  displayItems(filterItems);
}

function displayItems(data) {
  let innerHTMLS = "";

  data.forEach((item) => {
    innerHTMLS += ` <div class="list">
    <div onClick="about(this)" > <a  href="../index1.html" ><img   src="${item.itemImage}" width="100%" alt="image" /></a></div>
    <div class="list-text">
    <h3>${item.title}</h3>
    <p>${item.loaction}</p>
    <p>${item.category}</p>
    <p>$${item.price} onwords</p>
    </div>
    </div>`;
  });

  if (!listsContainer) {
    console.log("Element not found!");
  } else {
    listsContainer.innerHTML = innerHTMLS;
  }
}

function about(e){
  console.log(e);
}
aboutMain.innerHTML = ` <div class=" my-4">
  <!-- TITLE -->
  <div class="title text-center text-lg-start">
    Sareya Nu Dass Do
  </div>

  <!-- MAIN -->
  <div class="row g-4 align-items-start">

    <!-- LEFT -->
    <div class="col-lg-8 col-md-12">
      <div class="banner position-relative">

        <img src="images/list_image.avif" class="img-fluid rounded" alt="error">

        <!-- ARROWS -->
        <div class="arrow left position-absolute top-50 start-0 translate-middle-y">
          &#10094;
        </div>
        <div class="arrow right position-absolute top-50 end-0 translate-middle-y">
          &#10095;
        </div>

        <!-- INTEREST -->
        <div class="interest d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mt-3">

          <div class="tags mb-2 mb-md-0">
            <span class="tag">Stand up Comedy</span>
            <span class="tag">Comedy Shows</span>
          </div>

          <div class="interest-btn-div d-flex align-items-center flex-wrap">
            <div class="like me-3">👍 23 are interested</div>
            <button class="interest-btn">I'm Interested</button>
          </div>

        </div>

      </div>
    </div>

    <!-- RIGHT -->
    <div class="col-lg-4 col-md-12">
      <div class="card p-3 shadow-sm">

        <div class="row mb-2"> <span class="ms-2 ">📅 Sat 28 Mar 2026</span></div>
        <div class="row mb-2"> <span class="ms-2">⏰ 7:00 PM</span></div>
        <div class="row mb-2"> <span class="ms-2"> ⏳ 1 hour 30 minutes</span></div>
        <div class="row mb-2"> <span class="ms-2">👥 Age Limit - 5yrs +</span></div>
        <div class="row mb-2"> <span class="ms-2">🌐 Punjabi, Hindi</span></div>
        <div class="row mb-2"> <span class="ms-2">🎭 Comedy</span></div>
        <div class="row mb-3"> <span class="ms-2">📍 OUZO: Kitchen and Bar, Ludhiana</span></div>

        <div class="price mb-1">₹399 onwards</div>
        <div class="available mb-3">Available</div>

        <button class="book-btn w-100" onClick="bookTicket()">Book Now</button>

      </div>
    </div>

  </div>

</div>`;

function bookTicket() {
  alert("Ticket Booked Successfully");
}

function myFunction() {
  displayItems(items);
}
