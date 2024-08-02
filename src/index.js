function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#prompt");
  let apiKey = `b3at1f54094o5ce1cac43e10abb70bf3`;
  let context =
    "You are a romantic poem expert and love to write short poems. You mission is to generate a 6 line poem and add a <br/>. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate an English poem about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${promptInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}
let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);
