function updateTime() {
  let TokyoElement = document.querySelector("#Tokyo");
  let TokyoDateElement = TokyoElement.querySelector(".date");
  let TokyoTimeElement = TokyoElement.querySelector(".time");
  let TokyoTime = moment().tz("Asia/Tokyo");

  TokyoDateElement.innerHTML = TokyoTime.format("Do MMMM YYYY");
  TokyoTimeElement.innerHTML = TokyoTime.format("h:mm:ss [<small>]A[</small>]");
  let PretoriaElement = document.querySelector("#Pretoria");
  let PretoriaDateElement = PretoriaElement.querySelector(".date");
  let PretoriaTimeElement = PretoriaElement.querySelector(".time");
  let PretoriaTime = moment().tz("Africa/Johannesburg");

  PretoriaDateElement.innerHTML = PretoriaTime.format("Do MMMM YYYY");
  PretoriaTimeElement.innerHTML = PretoriaTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}

setInterval(updateTime, 1000);
