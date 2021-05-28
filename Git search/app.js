document.getElementById('btn').addEventListener('click',search)

function search(){

    document.getElementById('btn').innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
    `

    let username = document.getElementById('username').value

    if(username.length>0){
        let url= "https://api.github.com/users/" + username
        fetch(url)
        .then(res=> res.json()).then(data=>{
            console.log(data)
            if(data.message){
                document.getElementById('searchres').innerHTML =`
                <h3>User Not Found</h3>`
                document.getElementById('btn').innerHTML = `Search`
            }
            else{
                document.getElementById('searchres').innerHTML =`
                    <div class="card p-3" style="width: 18rem;background-color: whitesmoke; margin-right: auto; margin-left: auto;">
                        <img src="${data.avatar_url}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">UserName: ${data.login}</h5>
                            <a href="${data.html_url}" class="btn btn-primary">GitHub Profile</a>
                        </div>
                    </div>
                ` 
                document.getElementById('btn').innerHTML = `Search`
            }
        })
    }
    else{
        alert("Input seems so empty!")
        document.getElementById('searchres').innerHTML =``
        document.getElementById('btn').innerHTML = `Search`
    }
}
