const countdown = document.querySelector(".countdown");

const interval = setInterval(() => {
  const deadline = new Date(2021, 11, 26, 00, 00, 00);

  const current = new Date();

  const diff = deadline - current;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
  const minutes = Math.floor((diff / (1000 * 60)) % 60) + "";
  const seconds = Math.floor((diff / 1000) % 60) + "";

  countdown.innerHTML = `
    <div data-content="Dias">${days.length === 1 ? `0${days}` : days}</div>
    <div data-content="Horas">${hours.length === 1 ? `0${hours}` : hours}</div>
    <div data-content="Minutos">${
      minutes.length === 1 ? `0${minutes}` : minutes
    }</div>
    <div data-content="Segundos">${
      seconds.length === 1 ? `0${seconds}` : seconds
    }</div>
`;
}, 1000);

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let data = {
    name,
    email,
  };
  let convertData = JSON.stringify(data);
  
  localStorage.setItem("lead", convertData);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
});


