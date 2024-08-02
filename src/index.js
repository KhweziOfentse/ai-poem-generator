function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Love is forever",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);
