
import data from './data.js'
const itemsContainer = document.getElementById('items')
const itemsTable = document.getElementById('items-table')


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


// let tableContainer = document.createElement('div')
// tableContainer.className = "container"
// tableContainer.style.width = "140%"
// tableContainer.style.padding = "20px"
// let tableResponsive = document.createElement('div')
// tableResponsive.className = "table-responsive"
// let table = document.createElement('table')
// table.id = "table"
// table.className = "table table-striped"
// table.style.margin = "0px"
// table.style.padding = "0px"
// table.style.whiteSpace = "pre-wrap"
// table.style.width = "100%"
// let tableHead = document.createElement('thead')
// let tableHeadTr = document.createElement('tr')
// let th1 = document.createElement('th')
// let th2 = document.createElement('th')
// let th3 = document.createElement('th')
// let th4 = document.createElement('th')
// th1.scope = "col"
// th2.scope = "col"
// th3.scope = "col"
// th4.scope = "col"
// th1.innerHTML = "Class"
// th2.innerHTML = "Assignment"
// th3.innerHTML = "Completed"
// th4.innerHTML = ""
// tableHeadTr.append(th1, th2, th3, th4)
// tableHead.append(tableHeadTr)
// let tableBody = document.createElement('tbody')

// table.style.backgroundColor = "white"

// let done = false


// for(let i = 0; i<data.length; i++) {
//     if (data[i]["missingAssignmentsAll"] == null) {
//         if (done == false) {
//             done = true
//             let tr = document.createElement('tr')
//             let td1 = document.createElement('td')
//             let title = document.createElement('h1')
//             title.innerHTML = "Assignments"
//             td1.append(title)
//             let td2 = document.createElement('td')
//             let td3 = document.createElement('td')
//             let td4 = document.createElement('td')
//             tr.append(td1,td2,td3,td4)
//             tableBody.append(tr)
//         }

//         if (data[i]["assignments"] != null) {
//             let tr = document.createElement('tr')
//             tr.className = "table-info"
//             let td1 = document.createElement('td')
//             let title = document.createElement('h3')
//             title.innerHTML = data[i]["class"]
//             td1.append(title)
//             let td2 = document.createElement('td')
//             //td2.innerHTML = `Grade: ${data[i]["grade"]}`
//             let td3 = document.createElement('td')
//             let td4 = document.createElement('td')
//             tr.append(td1,td2,td3,td4)
//             tableBody.append(tr)

//             for (let k = 0;k<data[i]["assignments"].length; k++) {
//                 console.log(data[i]["assignments"][k])
//                 let trClass = document.createElement('tr')
//                 let td1Class = document.createElement('td')
//                 td1.innerHTML = data[i]["assignments"][k]
//                 let td2Class = document.createElement('td')
//                 let td3Class = document.createElement('td')
//                 let td4Class = document.createElement('td')
//                 trClass.append(td1Class, td2Class, td3Class, td4Class)
//                 tableBody.append(trClass)
//             }

            

//             // let trA = document.createElement('tr')
//             // trA.className = "table-info"
//             // let td1A = document.createElement('td')
//             // td1A.innerHTML = data[i]["class"]
//             // let td2A = document.createElement('td')
//             // let td3A = document.createElement('td')
//             // let td4A = document.createElement('td')
//             // trA.append(td1,td2,td3,td4)
//             // tableBody.append(tr)
//         }
        
        

        


//     } else {
//         let tr = document.createElement('tr')
        
//         let td1 = document.createElement('td')
//         let title = document.createElement('h1')
//         title.innerHTML = "Missing Assignments"
//         td1.append(title)
//         let td2 = document.createElement('td')
//         let td3 = document.createElement('td')
//         let td4 = document.createElement('td')
//         tr.append(td1,td2,td3,td4)
//         tableBody.append(tr)

//         Object.entries(data[i]["missingAssignmentsAll"]).forEach(([key, value]) => {
//             let tr = document.createElement('tr')
//             tr.className = "table-danger"
//             let td1 = document.createElement('td')
//             td1.innerHTML = Object.keys(data[i]["missingAssignmentsAll"][key])[0]
//             let td2 = document.createElement('td')
//             td2.innerHTML = Object.values(value)[0]
//             let td3 = document.createElement('td')
//             td3.innerHTML = "❌"
//             let td4 = document.createElement('td')
//             let button = document.createElement('button')
//             button.className = "btn btn-outline-primary"
//             button.innerHTML = "Details"
//             td4.append(button)
//             tr.append(td1,td2,td3,td4)
//             tableBody.append(tr)
//         }) 
        
//     }

    

    

    

// }

// table.append(tableHead)
// table.append(tableBody)
// tableResponsive.append(table)
// tableContainer.append(tableResponsive)
// itemsTable.append(tableContainer)



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

    if (data[i]["assignments"] != null) {
        
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

    }
    
    
    
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

function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        listUpcomingEvents();
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
}

/**
*  Sign in the user upon button click.
*/
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
*  Sign out the user upon button click.
*/
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

/**
* Append a pre element to the body containing the given message
* as its text node. Used to display the results of the API call.
*
* @param {string} message Text to be placed in pre element.
*/
function appendPre(message) {
    var pre = document.getElementById('alert-container');
    var text = document.createElement('div')
    text.className = "alert alert-success text-center"
    text.style.width = "500px"
    text.role = "alert"
    text.innerHTML = message + '\n'
    //var textContent = document.createTextNode(message + '\n');
    pre.appendChild(text);
}

function appendPreInfo(message) {
    var pre = document.getElementById('alert-container');
    var text = document.createElement('div')
    text.className = "alert alert-primary text-center"
    text.style.width = "500px"
    text.role = "alert"
    text.innerHTML = message + '\n'
    //var textContent = document.createTextNode(message + '\n');
    pre.appendChild(text);
}

function showToast(message) {
    var divToast = document.getElementById('toastDiv')
    
    let toast = document.createElement('div')
    toast.className = "toast"
    toast.setAttribute("role", "alert")
    toast.setAttribute("aria-live", "assertive")
    toast.setAttribute("aria-atomic", "true")

    let toastHeader = document.createElement('div')
    toastHeader.className = "toast-header"

    let title = document.createElement('strong')
    title.className = "mr-auto"
    title.innerHTML = "Calendar"
    let small = document.createElement('small')
    small.className = "text-muted"
    small.innerHTML = "just now"
    let button = document.createElement('button')
    button.type = "button"
    button.className = "ml-2 mb-1 close"
    button.setAttribute("data-dismiss","true")
    button.setAttribute("aria-label","Close")

    toastHeader.append(title)
    toastHeader.append(small)
    toastHeader.append(button)

    let bodyToast = document.createElement('div')
    bodyToast.className = "toast-body"
    bodyToast.innerHTML = message

    toast.append(toastHeader)
    toast.append(bodyToast)
    

    divToast2.append(toast)
}

/**
* Print the summary and start datetime/date of the next ten events in
* the authorized user's calendar. If no events are found an
* appropriate message is printed.
*/
function listUpcomingEvents() {

    console.log("here")
    
    for (let i = 0; i<data.length; i++) {
        Object.entries(data[i]["dates"]).forEach(([key, value]) => {
            console.log(key)
            console.log(Object.keys(data[i]["dates"][key])[0])
            console.log(Object.values(value)[0])
            var date = Date.parse(Object.values(value)[0])
            var dateEpoch = new Date(date)
            var year = dateEpoch.getFullYear();
            var month = dateEpoch.getMonth() + 1;
            var day = dateEpoch.getDate();
            var dateTime = year + "-" + month + "-" + day
            console.log(dateTime)
            var event = {
                'summary': `${data[i]["class"]} - ${Object.keys(data[i]["dates"][key])[0]}`,
                'location': '',
                'description': `${Object.keys(data[i]["dates"][key])[0]} due today`,
                'start': {
                    'dateTime': dateTime+'T22:00:00-07:00',
                    'timeZone': 'America/Los_Angeles'
                },
                'end': {
                    'dateTime': dateTime+'T22:59:00-07:00',
                    'timeZone': 'America/Los_Angeles'
                },
                'recurrence': [
                    // 'RRULE:FREQ=DAILY;COUNT=2'
                ],
                'attendees': [
                    
                ],
                'reminders': {
                    'useDefault': false,
                    'overrides': [
                        {'method': 'popup', 'minutes': 1440},
                        {'method': 'popup', 'minutes': 10},
                    ]
                }
            };

            var request = gapi.client.calendar.events.insert({
                'calendarId': 'primary',
                'resource': event
            });
            
            gapi.client.calendar.events.list({
                'calendarId': 'primary',
                'timeMin': (new Date()).toISOString(),
                'showDeleted': false,
                'singleEvents': true,
                'maxResults': 30,
                'orderBy': 'startTime'
            }).then(function(response) {
                var events = response.result.items;
            
                if (events.length > 0) {
                    for (let j = 0; j < events.length; j++) {
                        var event = events[j];
                        var when = event.start.dateTime;
                        if (!when) {
                            when = event.start.date;
                        }
                        if (event.summary == `${data[i]["class"]} - ${Object.keys(data[i]["dates"][key])[0]}`) {
                            console.log("existe")
                            appendPreInfo(`Event already in calendar: ${data[i]["class"]} - ${Object.keys(data[i]["dates"][key])[0]}`)
                            return
                        } 
                        //appendPre(event.summary + ' (' + when + ')')
                    }
                    request.execute(function(event) {
                        appendPre('Event added to calendar: ' + `${data[i]["class"]} - ${Object.keys(data[i]["dates"][key])[0]}`);
                        console.log("added event")
                        //$('.toast').toast('show');
                    });
                } else {
                    //appendPre('No upcoming events found.');
                }
            });
                
        });
    }   
}

function supportsEmoji () {
    var ctx = document.createElement("canvas").getContext("2d");
    ctx.fillText("😗", -2, 4);
    return ctx.getImageData(0, 0, 1, 1).data[3] > 0; // Not a transparent pixel
  }
  
  console.log( supportsEmoji() );