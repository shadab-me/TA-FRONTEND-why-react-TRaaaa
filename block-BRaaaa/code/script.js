let userInput = document.querySelector("#userInput");
let content = document.querySelector(".content");
let moviesUI = document.createElement("ul");
moviesUI.setAttribute("class", "movies");
let movieList = [];
let index = 0;
function createUI(movies) {
  moviesUI.innerHTML = "";
  movies.forEach((movie) => {
    let movieUI = document.createElement("li");
    movieUI.setAttribute("class", "movie");
    movieUI.innerText = movie.movieName;
    let status = document.createElement("span");
    status.setAttribute = ("class", "status");
    status.innerText = "x";
    status.setAttribute = "data-index";
    movieUI.appendChild(status);
    moviesUI.appendChild(movieUI);
    content.appendChild(moviesUI);
  });
}

userInput.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    let text = event.target.value;
    movieList.push({
      movieName: text,
      status: false,
    });
    index++;
    createUI(movieList, index);
    event.target.value = "";
  }
});
