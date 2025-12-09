function generateGemAnswer(event) {
  event.preventDefault();
  //alert("generating gems for you!");

  let gemChoises = document.querySelector("#gem-descriptions");
  gemChoises.innerHTML =
    "Garnet Grounding, Passion and Emotional Stability Aligns with the Fire element while providing grounding";
}

let gemSearchElement = document.querySelector("#gem-search-form");
gemSearchElement.addEventListener("submit", generateGemAnswer);
