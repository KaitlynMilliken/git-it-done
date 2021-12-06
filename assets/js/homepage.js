var getUserRepos = function (user) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    fetch(apiUrl).then((res) => {
        res.json().then((data) => {
            console.log(data);
        });
    });
};

getUserRepos("microsoft");