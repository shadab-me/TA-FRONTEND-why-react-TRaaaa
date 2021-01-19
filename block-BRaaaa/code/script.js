let userInput = document.querySelector("#userInput");
let content = document.querySelector(".content");
let moviesUI = document.createElement("ul");
moviesUI.setAttribute("class", "movies");
let moviesList = JSON.parse(localStorage.getItem("moviesList")) ?? [];
function createUI(movies) {
  moviesUI.innerHTML = "";
  movies.forEach((movie, index) => {
    let movieUI = document.createElement("li");
    movieUI.setAttribute("class", "movie");
    movieUI.setAttribute("data-id", index);
    movieUI.innerHTML = `<span> ${movie.movieName}</span>`;
    let status = document.createElement("span");
    status.setAttribute("class", "status");
    status.textContent = movie.isWatch ? "Watched" : "Watch";
    status.setAttribute("data-index", index);
    movieUI.appendChild(status);
    moviesUI.appendChild(movieUI);
    content.appendChild(moviesUI);
  });
  localStorage.setItem("moviesList", JSON.stringify(moviesList));
}

userInput.addEventListener("keyup", function (event) {
  if (event.keyCode == 13 && event.target.value.trim()) {
    let text = event.target.value;
    moviesList.unshift({
      movieName: text,
      isWatch: false,
    });
    event.target.value = "";
    createUI(moviesList);
  }
});
function updateStatus(index) {
  moviesList[index].isWatch = !moviesList[index].isWatch;
  localStorage.setItem("moviesList", JSON.stringify(moviesList));
  createUI(moviesList);
}

content.addEventListener("click", (event) => {
  if (event.target.classList.contains("status")) {
    updateStatus(event.target.dataset.index);
  }
});
createUI(moviesList);
