function searchGems(response) {
  let gemChoises = document.querySelector("#gem-descriptions");
  gemChoises.innerHTML = response.data.answer;
}

function generateGemAnswer(event) {
  event.preventDefault();

  let zodiakSignElement = document.querySelector("#zodiakSign");
  let yearInputElement = document.querySelector("#yearInput");

  let apiKey = "t3f3af9b184481d0306edc82cbo6ff8c";
  let prompt = `User instructions: Please provide a list of gems that are recommended for zodiak sign ${zodiakSignElement.value} born in ${yearInputElement.value}`;
  let context =
    "You are well known gemologist and have a vast knowledge in astrology. Your mission is to list 4 gems and that meet user instructions. Please list each gem inside <li> element and separate each element by <br />. Add short description for each gem. Make sure intro is short and inside <h4> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //console.log("Searching info on gems");
  //console.log(`Prompt: ${prompt}`);

  let gemElement = document.querySelector("#gem-descriptions");
  gemElement.classList.remove("hidden");
  gemElement.innerHTML = `Loading.....`;

  axios.get(apiUrl).then(searchGems);
}

let gemSearchElement = document.querySelector("#gem-search-form");
gemSearchElement.addEventListener("submit", generateGemAnswer);
