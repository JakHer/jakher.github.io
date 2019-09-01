const repoList = document.querySelector(`.projects__list--js`);

fetch(`https://api.github.com/users/JakHer/repos?sort=updated`)
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      let {
        name,
        html_url,
        description,
        homepage
      } = repo;
      repoList.innerHTML +=
        `<li class="projects__item">
        <div class="projects__container">
        <img src="../assets/img/githubIcon.svg" alt="github icon.">
        <h3 class="projects__heading">${name}</h3>
        <p class="projects__paragraph">${description ? description : ''}</p>
        </div>

        <div class="projects__links">
    ${homepage ? `<a class="projects__demo" href="${homepage}" target="_blank rel=" nofollow noreferrer"" > Demo</a >` : ''
        }
    <a class="projects__demo" href="${html_url}" target="_blank rel=" nofollow noreferrer"" > GitHub</a >
        </div >
      </li > `
      console.log(html_url)
    }
  })
