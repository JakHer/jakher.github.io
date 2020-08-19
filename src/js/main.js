const repoList = document.querySelector(`.projects__list--js`);
const baseURL = `https://api.github.com/users/JakHer/repos?sort=`;
const sort = `updated`;

const getRepo = async (sort) => {
  try {
    const response = await fetch(`${baseURL}${sort}`);
    const data = await response.json();
    var data2 = data.filter(function (item) {
      return item.name !== `JakHer` && item.name !== `jakher.github.io`;
    });
    console.log(data2);
    return data2;
  } catch (error) {
    console.log(error);
  }
};

getRepo(sort).then((data2) => {
  for (let repo of data2) {
    const { name, html_url, description, homepage } = repo;

    const li = document.createElement(`li`);
    li.classList.add(`projects__item`);

    const div = document.createElement(`div`);
    div.classList.add(`projects__container`);

    const img = document.createElement(`img`);
    img.classList.add(`projects__img`);
    img.setAttribute(`src`, `../assets/img/githubIcon.svg`);
    img.setAttribute(`alt`, `Github icon.`);

    const h3 = document.createElement(`h3`);
    h3.classList.add(`projects__heading`);
    h3.textContent = `${name}`;

    const p = document.createElement(`p`);
    p.classList.add(`projects__paragraph`);
    p.textContent = `${description}`;

    const linkDiv = document.createElement(`div`);
    linkDiv.classList.add(`projects__links`);

    const demo = document.createElement(`a`);
    demo.classList.add(`projects__button`, `projects__button--demo`);
    demo.setAttribute(`href`, `${homepage}`);
    demo.setAttribute(`target`, `_blank`);
    demo.setAttribute(`rel`, `nofollow noreferrer`);
    demo.textContent = `Demo`;

    const github = document.createElement(`a`);
    github.classList.add(`projects__button`, `projects__button--github`);
    github.setAttribute(`href`, `${html_url}`);
    github.setAttribute(`target`, `_blank`);
    github.setAttribute(`rel`, `nofollow noreferrer`);
    github.textContent = `Github`;

    repoList.appendChild(li);
    li.appendChild(div);
    div.appendChild(img);
    div.appendChild(h3);
    li.appendChild(linkDiv);

    description ? div.appendChild(p) : ``;

    homepage ? linkDiv.appendChild(demo) : ``;
    html_url ? linkDiv.appendChild(github) : ``;
  }
});

// const repos = resp;
// for (const repo of repos) {
//   let { name, html_url, description, homepage } = repo;
//   repoList.innerHTML += `<li class="projects__item">
//         <div class="projects__container">
//         <img class="projects__img" src="../assets/img/githubIcon.svg" alt="github icon.">
//         <h3 class="projects__heading">${name}</h3>
//           ${
//             description
//               ? ` <p class="projects__paragraph">${description}</p>`
//               : ""
//           }
//         </div>
//         <div class="projects__links">
//     ${
//       homepage
//         ? `<a class="projects__button projects__button--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer">Demo</a >`
//         : ""
//     }
//     <a class="projects__button projects__button--github" href="${html_url}" target="_blank" rel="nofollow noreferrer" >GitHub</a >
//         </div >
//       </li > `;
// }
//
