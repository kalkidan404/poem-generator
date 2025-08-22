let poemElement = document.querySelector(".poem");
let submitbttn = document.querySelector(".input-bttn");
let searchinput = document.querySelector(".search-input");
let title = document.querySelector(".poem-input");
function generator(event) {
  event.preventDefault();
  new Typewriter(".poem", {
    strings:
      "The tree that never had to fight For sun and sky and air and light",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  let prompt = searchinput.value;
  poempro(prompt);
}

function poempro(prompt) {
  let context = "";

  let apikey = "";
  let apiurl = "";

  axios.get(apiurl).then(handleresponse);
}
function handleresponse(response) {
  poemElement.innerHTML = response.data.answer;
}
title.addEventListener("submit", generator);
