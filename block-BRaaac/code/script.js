let userInput = document.querySelector("#userInput");
let content = document.querySelector(".content");
let moviesUI = document.createElement("ul");
moviesUI.setAttribute("class", "movies");
let moviesList = JSON.parse(localStorage.getItem("moviesList")) ?? [];
function elt(type, attr = {}, ...children) {
  let el = document.createElement(type);
  for (const key in attr) {
    if (key.startsWith("data-")) {
      el.setAttribute(key, attr[key]);
    } else if (key.startsWith("class")) {
      el.classList.add(attr[key]);
    } else {
      el[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      el.append(child);
    } else {
      const text = document.createTextNode(child);
      el.append(text);
    }
  });
  return el;
}
function createUI(movies) {
  moviesUI.innerHTML = "";

  movies.forEach((movie, index) => {
    let status = elt(
      "span",
      { class: "status", "data-index": index },
      movie.isWatch ? "Watched" : "Watch"
    );
    let movieUI = elt(
      "li",
      {
        class: "movie",
        "data-id": index,
      },
      status
    );
    movieUI.innerHTML = `<span> ${movie.movieName}</span>`;
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
