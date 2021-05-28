


fetch('https://api.github.com/users')
.then(res=>res.json())
.then(data=>{
    data.map(user=>{
        document.getElementById('res').innerHTML +=`
            <div class="card p-3 mt-5" style="width: 18rem;background-color: whitesmoke; margin-right: 20px;">
                <img src="${user.avatar_url}" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">UserName: ${user.login}</h5>
                <a href="${user.html_url}" class="btn btn-primary">GitHub Profile</a>
                </div>
            </div>
        `
    })
    }
    )
    .catch(e=>{
        console.log(e)
    })