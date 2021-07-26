// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            json.sort((a,b) => (a.hoursInSpace > b.hoursInSpace) ? -1 : 1);
            for(let i = 0; i < json.length; i++) {
                container = document.getElementById("container");
                if (json[i].active === true) {
                container.innerHTML +=`
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in Space: ${json[i].hoursInSpace}</li>
                                <li style="color:green">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                            <img class="avatar" src=${json[i].picture}>
                    </div>`
                }
                else {
                    container.innerHTML +=`
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in Space: ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                            <img class="avatar" src=${json[i].picture}>
                    </div>`
                };
            };
        });
    });
});