/*
const APP = {
  //call the APP.urls.base to see the contents of APP.urls
  urls: {
    base: "https://swapi.dev/api/",
    people: "people/",
    planets: "planets/",
    films: "films/",
    species: "species/",
    vehicles: "vehicles/",
    starships: "starships/"
  },
  init: () => {
    APP.addListeners();
    APP.buildNav();
  },
  addListeners: () => {
    let nav = document.getElementById("nav");
    nav.addEventListener("click", APP.getData);
    footer.addEventListener("click", APP.getData);
  },
  buildNav: () => {
    let df = new DocumentFragment();
    for (let nm in APP.urls) {
      if (nm != "base") {
        let link = document.createElement("a");
        link.href = `${APP.urls.base}${APP.urls[nm]}`;
        link.textContent = nm;
        link.setAttribute("data-link", `${APP.urls.base}${APP.urls[nm]}`);
        df.append(link);
      }
    }
    document.getElementById("nav").append(df);
  },
  getData: (ev) => {
    if (ev) ev.preventDefault();
    //show overlay / loader
    document.querySelector(".overlay").classList.add("active");
    //get the url
    let link = ev.target;
    let url = link.getAttribute("data-link");
    //fetch the data
    fetch(url)
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then(APP.buildList)
      .catch((err) => {
        console.error(err);
        document.querySelector(".overlay").classList.remove("active");
      });
    //call the build function
  },
  buildList: (data) => {
    let m = document.getElementById("main");
    console.log(data);
    //hide the overlay / loader

    document.querySelector(".overlay").classList.remove("active");
    //add the data
    m.innerHTML = data.results
      .map((item) => {
        let nm = item.name || item.title;
        return `<p>${nm}</p>`;
      })
      .join(" ");
    //add the prev/next navigation
    let footer = document.getElementById("footer");
    footer.innerHTML = "";

    if (data.previous) {
      //previous link
      let prev = document.createElement("a");
      prev.href = data.previous;
      let url = new URL(data.previous);
      let labels = url.pathname.split("/");
      let label = labels[labels.length - 2];
      prev.textContent = `<< Previous ${label}`;
      prev.setAttribute("data-link", data.previous);
      footer.append(prev);
    }
    if (data.next) {
      //next link
      let next = document.createElement("a");
      next.href = data.next;
      let url = new URL(data.next);
      let labels = url.pathname.split("/");
      let label = labels[labels.length - 2];
      next.textContent = `Next ${label} >>`;
      next.setAttribute("data-link", data.next);
      footer.append(next);
    }
  }
};

document.addEventListener("DOMContentLoaded", APP.init);
*/
/*
const endpointUrl = "https://swapi.dev/api/people/2/";

const navEl = document.querySelector("#nav");
const mainEl = document.querySelector("#main");
const footerEl = document.querySelector("#footer");
const overlayEl = document.querySelector(".overlay");

async function fetchData(url) {
  try {
    overlayEl.classList.add("active");
    const response = await fetch(url);
    const data = await response.json();
    overlayEl.classList.remove("active");
    return data;
  } catch (error) {
    console.error(error);
  }
}

function renderPerson(person) {
  const personEl = document.createElement("div");
  personEl.innerHTML = `
    <h2>${person.name}</h2>
    <p><strong>Birth Year:</strong> ${person.birth_year}</p>
    <p><strong>Eye Color:</strong> ${person.eye_color}</p>
    <p><strong>Hair Color:</strong> ${person.hair_color}</p>
    <p><strong>Height:</strong> ${person.height} cm</p>
    <p><strong>Mass:</strong> ${person.mass} kg</p>
    <p><strong>Skin Color:</strong> ${person.skin_color}</p>
  `;
  mainEl.appendChild(personEl);
}

function renderFilms(filmUrls) {
  const filmListEl = document.createElement("ul");
  filmListEl.innerHTML = "<h3>Films:</h3>";
  mainEl.appendChild(filmListEl);

  filmUrls.forEach(async (url) => {
    const film = await fetchData(url);
    const filmEl = document.createElement("li");
    filmEl.innerHTML = `<a href="#" data-url="${url}">${film.title}</a>`;
    filmListEl.appendChild(filmEl);
  });
}

function renderFilm(film) {
  const filmEl = document.createElement("div");
  filmEl.innerHTML = `
    <h2>${film.title}</h2>
    <p><strong>Release Date:</strong> ${film.release_date}</p>
    <p><strong>Director:</strong> ${film.director}</p>
    <p><strong>Producer:</strong> ${film.producer}</p>
    <p><strong>Opening Crawl:</strong></p>
    <p>${film.opening_crawl}</p>
  `;
  mainEl.appendChild(filmEl);

  renderCharacters(film.characters);
}

function renderCharacters(characterUrls) {
  const characterListEl = document.createElement("ul");
  characterListEl.innerHTML = "<h3>Characters:</h3>";
  mainEl.appendChild(characterListEl);

  characterUrls.forEach(async (url) => {
    const character = await fetchData(url);
    const characterEl = document.createElement("li");
    characterEl.innerHTML = `<a href="#" data-url="${url}">${character.name}</a>`;
    characterListEl.appendChild(characterEl);
  });
}

async function init() {
  const person = await fetchData(endpointUrl);
  renderPerson(person);
  renderFilms(person.films);
}

navEl.addEventListener("click", async (event) => {
  event.preventDefault();
  if (event.target.matches("[data-url]")) {
    const url = event.target.dataset.url;
    mainEl.innerHTML = "";
    const data = await fetchData(url);
    if (data.title) {
      renderFilm(data);
    } else {
      renderPerson(data);
      renderFilms(data.films);
    }
  }
});

init();

*/

/*
const APP = {
  // Define the base URL and API endpoints
  urls: {
    base: "https://swapi.dev/api/",
    people: "people/",
    planets: "planets/",
    films: "films/",
    species: "species/",
    vehicles: "vehicles/",
    starships: "starships/"
  },

  // Initialize the app by adding event listeners and building the navigation menu
  init: () => {
    APP.addListeners();
    APP.buildNav();
  },

  // Add event listeners for navigation links and the footer
  addListeners: () => {
    let nav = document.getElementById("nav");
    nav.addEventListener("click", APP.getData);
    footer.addEventListener("click", APP.getData);
  },

  // Build the navigation menu using the API endpoints
  buildNav: () => {
    let nav = document.getElementById("nav");
    let df = new DocumentFragment();

    for (let endpoint in APP.urls) {
      if (endpoint !== "base") {
        let link = document.createElement("a");
        link.href = `${APP.urls.base}${APP.urls[endpoint]}`;
        link.textContent = endpoint;
        link.setAttribute("data-link", `${APP.urls.base}${APP.urls[endpoint]}`);
        df.append(link);
      }
    }

    nav.append(df);
  },

  // Get data from the API and call the build function
  getData: (event) => {
    event.preventDefault();

    let link = event.target;
    let url = link.getAttribute("data-link");

    APP.requestData(url)
      .then((data) => APP.buildList(data))
      .catch((error) => console.error(error));
  },

  // Make an API request and return the response as JSON
  requestData: (url) => {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error("API request failed");
      }
      return response.json();
    });
  },
  buildList: (data) => {
    let m = document.getElementById("main");
    console.log(data);

    // hide the overlay / loader
    document.querySelector(".overlay").classList.remove("active");

    // add the data
    m.innerHTML = data.results
      .map((item) => {
        let nm = item.name || item.title;
        return `<p>${nm}</p>`;
      })
      .join(" ");

    // add the prev/next navigation
    let footer = document.getElementById("footer");
    footer.innerHTML = "";

    if (data.previous) {
      // previous link
      let prevLink = document.createElement("a");
      prevLink.href = data.previous;
      let prevLabel = data.previous.split("/").slice(-2)[0];
      prevLink.textContent = `<< Previous ${prevLabel}`;
      prevLink.setAttribute("data-link", data.previous);
      footer.append(prevLink);
    }

    if (data.next) {
      // next link
      let nextLink = document.createElement("a");
      nextLink.href = data.next;
      let nextLabel = data.next.split("/").slice(-2)[0];
      nextLink.textContent = `Next ${nextLabel} >>`;
      nextLink.setAttribute("data-link", data.next);
      footer.append(nextLink);
    }
  }
};
document.addEventListener("DOMContentLoaded", APP.init);
*/

const endpointUrl = "https://swapi.dev/api/people/2/";

const navEl = document.querySelector("#nav");
const mainEl = document.querySelector("#main");
//const footerEl = document.querySelector("#footer");
const overlayEl = document.querySelector(".overlay");

async function fetchData(url) {
  try {
    overlayEl.classList.add("active");
    const response = await fetch(url);
    const data = await response.json();
    overlayEl.classList.remove("active");
    return data;
  } catch (error) {
    console.error(error);
  }
}

function renderPerson(person) {
  const personEl = document.createElement("div");
  personEl.innerHTML = `
    <h2>${person.name}</h2>
    <p><strong>Birth Year:</strong> ${person.birth_year}</p>
    <p><strong>Eye Color:</strong> ${person.eye_color}</p>
    <p><strong>Hair Color:</strong> ${person.hair_color}</p>
    <p><strong>Height:</strong> ${person.height} cm</p>
    <p><strong>Mass:</strong> ${person.mass} kg</p>
    <p><strong>Skin Color:</strong> ${person.skin_color}</p>
  `;
  mainEl.appendChild(personEl);
}

function renderFilms(filmUrls) {
  const filmListEl = document.createElement("ul");
  filmListEl.innerHTML = "<h3>Films:</h3>";
  mainEl.appendChild(filmListEl);

  filmUrls.forEach(async (url) => {
    const film = await fetchData(url);
    const filmEl = document.createElement("li");
    filmEl.innerHTML = `<a href="#" data-url="${url}">${film.title}</a>`;
    filmListEl.appendChild(filmEl);
    filmEl.addEventListener("click", async (event) => {
      event.preventDefault();
      mainEl.innerHTML = "";
      const url = event.target.dataset.url;
      const data = await fetchData(url);
      renderFilm(data);
    });
  });
}

function renderFilm(film) {
  const filmEl = document.createElement("div");
  filmEl.innerHTML = `
    <h2>${film.title}</h2>
    <p><strong>Release Date:</strong> ${film.release_date}</p>
    <p><strong>Director:</strong> ${film.director}</p>
    <p><strong>Producer:</strong> ${film.producer}</p>
    <p><strong>Opening Crawl:</strong></p>
    <p>${film.opening_crawl}</p>
  `;
  mainEl.appendChild(filmEl);

  renderCharacters(film.characters);
}

function renderCharacters(characterUrls) {
  const characterListEl = document.createElement("ul");
  characterListEl.innerHTML = "<h3>Characters:</h3>";
  mainEl.appendChild(characterListEl);

  characterUrls.forEach(async (url) => {
    const character = await fetchData(url);
    const characterEl = document.createElement("li");
    characterEl.innerHTML = `<a href="#" data-url="${url}">${character.name}</a>`;
    characterListEl.appendChild(characterEl);
  });
}

async function init() {
  const person = await fetchData(endpointUrl);
  renderPerson(person);
  renderFilms(person.films);
}

navEl.addEventListener("click", async (event) => {
  event.preventDefault();
  if (event.target.matches("[data-url]")) {
    const url = event.target.dataset.url;
    mainEl.innerHTML = "";
    const data = await fetchData(url);
    if (data.title) {
      renderFilm(data);
    } else if (data.name) {
      renderPerson(data);
      renderFilms(data.films);
    } else if (data.length && data[0].title) {
      renderFilm(data[0]);
    }
  }
});
init();
