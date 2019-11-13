const repoList = document.querySelector(`.projects__list--js`);
const baseURL = `https://api.github.com/users/JakHer/repos?sort=updated`;

fetch(baseURL)
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      let { name, html_url, description, homepage } = repo;
      repoList.innerHTML += `<li class="projects__item">
        <div class="projects__container">
        <img class="projects__img" src="../assets/img/githubIcon.svg" alt="github icon.">
        <h3 class="projects__heading">${name}</h3>
          ${
            description
              ? ` <p class="projects__paragraph">${description}</p>`
              : ""
          }
        </div>
        <div class="projects__links">
    ${
      homepage
        ? `<a class="projects__button projects__button--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer">Demo</a >`
        : ""
    }
    <a class="projects__button projects__button--github" href="${html_url}" target="_blank" rel="nofollow noreferrer" >GitHub</a >
        </div >
      </li > `;
    }
  });
