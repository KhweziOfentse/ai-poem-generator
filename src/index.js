function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#prompt");
  let apiKey = `b3at1f54094o5ce1cac43e10abb70bf3`;
  let context =
    "You are a world-class chef with a few Michelin stars under you name.You have found a way to make popular food with less work and short, straight to the point recipe in basic HTML. Make sure to include measurements to recipe. Separate each ingredient with a <br />. Seperate each instruction with a <br />. Make sure to follow the user instructions";
  let prompt = `User instructions: Generate a Recipe ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#recipe");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Recipe about ${promptInput.value} ...... this may take a while. Hang tight</div>`;

  axios.get(apiUrl).then(displayRecipe);
}
let formElement = document.querySelector("#recipe-form");
formElement.addEventListener("submit", generateRecipe);
