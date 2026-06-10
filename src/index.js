function updateTime() {
  let TokyoElement = document.querySelector("#Tokyo");
  if (TokyoElement) {
    let TokyoDateElement = TokyoElement.querySelector(".date");
    let TokyoTimeElement = TokyoElement.querySelector(".time");
    let TokyoTime = moment().tz("Asia/Tokyo");

    TokyoDateElement.innerHTML = TokyoTime.format("Do MMMM YYYY");
    TokyoTimeElement.innerHTML = TokyoTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  let PretoriaElement = document.querySelector("#Pretoria");
  if (PretoriaElement) {
    let PretoriaDateElement = PretoriaElement.querySelector(".date");
    let PretoriaTimeElement = PretoriaElement.querySelector(".time");
    let PretoriaTime = moment().tz("Africa/Johannesburg");

    PretoriaDateElement.innerHTML = PretoriaTime.format("Do MMMM YYYY");
    PretoriaTimeElement.innerHTML = PretoriaTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
     <div>
         <h2>${cityName}</h2>
         <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
     </div>
     <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}

setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
