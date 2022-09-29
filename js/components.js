
// const domain = "http://localhost:3000";
const domain = "https://gdsc.mitaoeadmin.repl.co"
// const domain = "https://gdscmitaoe.herokuapp.com"

let month = ["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"];
const getEvents = async ()=>{
    let upcomingEventsDom = "";
    let pastEventsDom = "";
    document.getElementById('upcoming_events_div').innerHTML = `<h1 style="margin:90px auto">Loading Events.....</h1>`;
    let data = await (await fetch(`${domain}/api/event`)).json();
    
    let events = data.pastEvnets;
    console.log(events);
    for(let i = 0;i < events.length;i++){
        let date = new Date(events[i].date)
        
        let m = month[date.getMonth() - 1];
        let event = `
        <div class="col-md-4 col-12">
        <div class="card event-card">
            <img class="card-img-top" src="${domain}/images/events/${events[i].img}" alt="MIT's unite: open source edition">
            <div class="card-body">
                <p class="tagging intermediate float-right">${events[i].tagline}</p>
                <h5 class="card-title">${events[i].title}</h5>
                <p class="card-text">
                    <strong>DATE :</strong> ${date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) } <br>
                    <strong>VENUE :</strong> ${events[i].venu}<br>
                    <strong>TIME :</strong> ${events[i].start_time +" - " +events[i].end_time }
                </p>
                <br>
                <a href="${events[i].link}" target="_blank" class="button float-right"> View Insights</a>
            </div>
        </div>
    </div>
        `;
        pastEventsDom += event;
        // console.log(i);
    }
    events = data.upcomingEvents;
    if(events.length == 0){
        upcomingEventsDom = `<h1 style="margin:90px auto">No Upcoming Events found.....</h1>`
    }
    for(let i = 0;i < events.length;i++){
        let date = new Date(events[i].date)
        
        let m = month[date.getMonth() - 1];
        let event = `
        <div class="col-md-4 col-12">
        <div class="card event-card">
            <img class="card-img-top" src="${domain}/images/events/${events[i].img}" alt="MIT's unite: open source edition">
            <div class="card-body">
                <p class="tagging intermediate float-right">${events[i].tagline}</p>
                <h5 class="card-title">${events[i].title}</h5>
                <p class="card-text">
                    <strong>DATE :</strong> ${date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) } <br>
                    <strong>VENUE :</strong> ${events[i].venu}<br>
                    <strong>TIME :</strong> ${events[i].start_time +" - " +events[i].end_time }
                </p>
                <br>
                <a href="${events[i].link}" target="_blank" class="button float-right"> View Insights</a>
            </div>
        </div>
    </div>
        `;
        upcomingEventsDom += event;
        // console.log(i);
    }
    document.getElementById('upcoming_events_div').innerHTML = upcomingEventsDom;
    document.getElementById('past_events_div').innerHTML = pastEventsDom;
}


//  Members data to be inserted.

let membersDOM = "";
// current teams
const getTeams = async ()=>{
    document.getElementById("current_year_team").innerHTML = `<h1 style="margin:90px auto">Loading Teams....</h1>`; 
    let teams = await (await fetch(`${domain}/api/team`)).json();
    let curr = teams.currentYearTeam;
    if(curr.length == 0){
        membersDOM = `<h1 style="margin:90px auto">No Members Found</h1>`
    }
    for(let i =0;i <curr.length;i++){
    let memberCard = `
    <div class="col-md-4 col-15">
    <div class="card event-card">
        <div class="card hovercard">
            <div class="cardheader">
    
            </div>
            <div class="avatar">
                <img alt="" src="${domain}/images/teams/${curr[i].img}"
                    alt="content avatar" width="150" height="50">
            </div>
            <div class="info">
                <div class="title">
                    <h5><b>${curr[i].name}</b></h5>
                    <p>${curr[i].designation}</p>
                </div>
                <div class="desc">${curr[i].desc} </div>
            </div>
            <div class="bottom">
                <ul class="social-list__inline mt-10">
                    <li>
                        <a href="${curr[i].social.twitter}" target="_blank" rel="noopener">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="${curr[i].social.instagram}" target="_blank" rel="noopener">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="${curr[i].social.github}" target="_blank" rel="noopener">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="${curr[i].social.linkedin}" target="_blank" rel="noopener">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="${curr[i].social.link}" target="_blank" rel="noopener">
                            <i class="fas fa-link"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    `;
    membersDOM += memberCard;
    }
    document.getElementById("current_year_team").innerHTML = membersDOM; 
    

}



getEvents()
getTeams(); // currentYear Team


let teamTemplate = `
<header class="text-center section-header mt-5">
<h2 class="section-title">Past Team - 2020</h2>
</header>
<div class="container-fluid mt-5">
<div class="row" id="team_2020">
    <!-- Team members to be inserted here  -->

    
</div>
</div>
`
