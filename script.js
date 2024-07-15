function fetchrepo(event) {
    event.preventDefault();
    const gitname = document.getElementById("gitname").value.trim(); 
    if(gitname==""){
        alert("Github Username is required to fetch the repositories!");
        document.getElementById("gitname").focus();
    }
    const repoUrl = `https://api.github.com/users/${gitname}/repos`;
    fetch(repoUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Repository data:', data);
            displayRepoDetails(data); 
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayRepoDetails(data) {
    const repoDetailsDiv = document.getElementById('repoDetails');
    repoDetailsDiv.innerHTML = ''; 

    if (data.length === 0) {
        repoDetailsDiv.innerHTML = '<p>No repositories found.</p>';
        return;
    }
    data.forEach(repo => {
        const repoDiv = document.createElement('div');
        repoDiv.innerHTML = `
            <h2>${repo.name}</h2>
            <p>Description: ${repo.description || 'No description'}</p>
            <p>URL: <a href="${repo.html_url}" target="_blank">${repo.html_url}</a></p>
            <p>Owner: ${repo.owner.login}</p>
            <p>Created at: ${new Date(repo.created_at).toLocaleDateString()}</p>
            <hr>
        `;
        repoDetailsDiv.appendChild(repoDiv);
    });
}