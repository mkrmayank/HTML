fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("h").innerHTML = `
        <img class="shadow mb-5" src="${data.img}" style="border-radius: 50%;width: 300px;" alt="">
        <h3 class="my-3">${data.name}</h3>
        <p><b>${data.designation}</b></p>
        <p class="mt-2">${data.bio}</p>
    `;
    data.skills.map(skill=>{
        document.getElementById('skills').innerHTML += `
            <span class="badge rounded-pill shadow bg-primary ml-1">${skill}</span>
        `
    })
    data.projects.map(project=>{
        document.getElementById('proj').innerHTML += `
        <div class="card shadow mt-2 mx-1" style="width: 13rem;">
          <div class="card-body p-3">
            <h5 class="card-title">${project.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${project.type}</h6>
            <p class="card-text">${project.description}</p>
          </div>
        </div>
        `
    })
  })
  .catch((e) => {
    console.log(e);
  });
