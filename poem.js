let poemElement = document.querySelector(".poem");
let submitbttn = document.querySelector(".input-bttn");
let searchinput = document.querySelector(".search-input");
let title = document.querySelector(".poem-input");
let process = document.querySelector(".process");
function generator(event) {
  event.preventDefault();

  let prompt = searchinput.value;
  poempro(prompt);
}

function poempro(prompt) {
  let context =
    "give me a short poem using the prompt as a title with each lines separated the right way and every time asked the same topic generate a neew poem for it";

  let apikey = "de072a3do70f178f6a0bt43f94a33afc";
  let apiurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  axios.get(apiurl).then(handleresponse);
}
function handleresponse(response) {
  process.innerHTML = `<div class="blink">⏳generating a poem about ${searchinput.value}</div> `;
  poemElement.innerHTML = response.data.answer;

  new Typewriter(".poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}
title.addEventListener("submit", generator);
