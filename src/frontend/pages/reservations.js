window.handleReservationsRequest = params => {
  document.body.innerHTML = `
  <!-- Links (sit on top) -->
  <div class="w3-top">
    <div class="w3-row w3-padding w3-black">
      <div class="w3-col s3">
        <a href="/" class="w3-button w3-block w3-black"><img src="https://logodix.com/logo/72166.gif"
        style="height:2rem; width:3rem"> Our Meal Sharing</a>
      </div>
      <div class="w3-col s3">
        <a href="/meals" class="w3-button w3-block w3-black">MENU</a>
      </div>
      <div class="w3-col s3">
        <a href="/reservations" class="w3-button w3-block w3-black">RESERVATION</a>
      </div>
      <div class="w3-col s3">
        <a href="/reviews" class="w3-button w3-block w3-black">REVIEWS</a>
      </div>
    </div>
  </div>
  
  <ul class="reservations"></ul>`;

  fetch("/api/reservations")
    .then(response => response.json())
    .then(reservations => {
      const ul = document.querySelector(".reservations");
      reservations.forEach(reservation => {
        const li = document.createElement("li");
        li.innerHTML = `
     
      <div class="w3-row-padding w3-padding-16">
      <div class="w3-third w3-margin-bottom">
          <h1>${reservation.id}</h1>
          </div></div>
      
      
      `;
        ul.appendChild(li);
      });
    });
};