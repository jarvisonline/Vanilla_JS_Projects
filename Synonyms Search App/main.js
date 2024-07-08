let userInput = document.querySelector(".container .search-box input");
let resultBox = document.querySelector(".container .result-box");

let getSynonyms = (word) => {
  let li = "";
  let url = `https://api.datamuse.com/words?rel_syn=${word}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        li += `<li>${data[i].word}</li>`;
      }
      if (data.length == 0) {
        resultBox.innerHTML = `<span class="msg"> No Result Found!</span>`;
      } else {
        resultBox.innerHTML = li; 
      }
    });
};

userInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && e.target.value != "") {
    getSynonyms(e.target.value);
  }
});
