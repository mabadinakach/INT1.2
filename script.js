
import data from './data.js'
const itemsContainer = document.getElementById('items')

window.onload = handleClientLoad()

let divToast = document.createElement('div')
divToast.setAttribute("aria-live", "polite");
divToast.setAttribute("aria-atomic", "true");
divToast.style.position = "relative"
divToast.style.minHeight = "200px"

let divToast2 = document.createElement('div')
divToast2.id = "toastDiv"
divToast2.style.position = "abosulte"
divToast2.style.top = "0"
divToast2.style.right = "0"

divToast.append(divToast2)

let body = document.getElementById('body')
body.append(divToast)

let container = document.createElement('div')
container.className = "container"
let row = document.createElement('div')
row.className = "row"
for (let i = 0; i<data.length; i++) {
    
    // if (i%3 == 0) {
    //     let brake = document.createElement('div')
    //     brake.className = "w-100"
    //     row.appendChild(brake)
    // }
    
    let column = document.createElement('div')
    column.className = "col"
    let card = document.createElement('div')
    card.className = "card"
    let cardBody = document.createElement('div')
    cardBody.className = "card-body"
    
    let title = document.createElement('h1')
    let button = document.createElement('button')
    let grade = document.createElement('h3')
    
    let dropDown = document.createElement('p')
    
    let missingAssignments = document.createElement('a')
    missingAssignments.innerHTML = "Missing Assignments"
    missingAssignments.className = "btn btn-primary"
    missingAssignments.type = "button"
    missingAssignments.setAttribute("data-toggle", "collapse");
    missingAssignments.setAttribute("aria-controls", "missingAssignments"+i);
    missingAssignments.href = "#missingAssignments"+i
    missingAssignments.setAttribute("aria-expanded", "false");
    missingAssignments.style.margin = "10px"
    missingAssignments.style.backgroundColor = "red"
    
    let gradedAssignments = document.createElement('a')
    gradedAssignments.innerHTML = "Graded Assignments"
    gradedAssignments.className = "btn btn-primary"
    gradedAssignments.type = "button"
    gradedAssignments.setAttribute("data-toggle", "collapse");
    gradedAssignments.setAttribute("aria-controls", "gradedAssignments"+i);
    gradedAssignments.setAttribute("data-target", "#gradedAssignments"+i)
    gradedAssignments.setAttribute("aria-expanded", "false");
    gradedAssignments.style.backgroundColor = "green"
    
    
    
    dropDown.appendChild(gradedAssignments)
    
    
    let infoRow = document.createElement('div')
    infoRow.className = "row"
    let gradedCol = document.createElement('div')
    gradedCol.className = "col"
    let colapseDiv = document.createElement('div')
    colapseDiv.style.margin = "10px"
    colapseDiv.className = "collapse multi-collapse"
    colapseDiv.id = "gradedAssignments"+i
    
    for (let k = 0;k<data[i]["assignments"].length; k++) {
        let gradedDiv = document.createElement('div')
        gradedDiv.innerHTML = data[i]["assignments"][k]
        colapseDiv.appendChild(gradedDiv)
    }
    
    // gradedDiv.id = "missingAssignments"
    colapseDiv.className = "card card-body"
    gradedCol.appendChild(colapseDiv)
    infoRow.append(gradedCol)
    
    
    title.className = "card-title"
    title.innerHTML = data[i]["class"]
    
    grade.className = "card-text"
    //grade.style.color = "green"
    grade.innerHTML = `Grade: ${data[i]["grade"]}`
    
    button.className = "btn btn-primary"
    button.innerHTML = "Details"
    button.id = i
    
    
    cardBody.appendChild(title)
    cardBody.appendChild(grade)
    
    // Object.entries(data[i]["dates"]).forEach(([key, value]) => {
    //     console.log(Object.keys(data[i]["dates"][key])[0])
    //     console.log(Object.values(value)[0])
    //     console.log(Date(Object.values(value)[0]))
    // });
    
    
    if(data[i]["missing"] != null){
        
        let missingCol = document.createElement('div')
        missingCol.className = "col"
        let colapseDiv = document.createElement('div')
        colapseDiv.style.margin = "10px"
        colapseDiv.className = "collapse multi-collapse"
        colapseDiv.id = "missingAssignments"+i
        
        // gradedDiv.id = "missingAssignments"
        colapseDiv.className = "card card-body"
        cardBody.appendChild(infoRow)
        
        // let text = document.createElement('h5')
        // text.innerHTML = "Missing Assignments:"
        // cardBody.appendChild(text)
        for(let j = 0; j<data[i]["missing"].length;j++) {
            let missingDiv = document.createElement('div')
            missingDiv.innerHTML = data[i]["missing"][j]
            
            // console.log(data[i]["missing"][j])
            // let missing = document.createElement('p')
            // missing.innerHTML = data[i]["missing"][j]
            // missing.style.color = "red"
            // cardBody.append(missing)
            
            colapseDiv.appendChild(missingDiv)
        }
        
        missingCol.appendChild(colapseDiv)
        infoRow.append(missingCol)
        dropDown.appendChild(missingAssignments)
        
    }
    
    
    cardBody.appendChild(dropDown)
    cardBody.appendChild(infoRow)
    let center = document.createElement('div')
    center.className = "text-center"
    center.appendChild(button)
    cardBody.appendChild(center)
    
    card.appendChild(cardBody)
    card.style.margin = "10px"
    card.style.minHeight = "150px"
    card.style.width = "520px"
    column.appendChild(card)
    row.appendChild(column)
    container.appendChild(row)
    
    //itemsContainer.appendChild(card)
}

itemsContainer.appendChild(container)
console.log(itemsContainer)

const all_items_button = Array.from(document.querySelectorAll("button"))
console.log(all_items_button)

all_items_button.forEach(elt => elt.addEventListener('click', (index) => {
    console.log(elt.getAttribute('id'))
    console.log(data[elt.getAttribute('id')])
    window.open(data[elt.getAttribute('id')]["link"])
}))

var CLIENT_ID = '486906308520-7gapsff55hia8hj8kvgk3mdctjojtilo.apps.googleusercontent.com';
var API_KEY = 'AIzaSyChNbkCvbk2KBayw2nzgaz-bW5BveZOsO4';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

/**
*  On load, called to load the auth2 library and API client library.
*/
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
*  Initializes the API client library and sets up sign-in state
*  listeners.
*/
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        
        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    }, function(error) {
        appendPre(JSON.stringify(error, null, 2));
    });
}