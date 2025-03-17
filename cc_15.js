// Task 1 - Creating the Base Structure
const riskDashboard = document.getElementById("riskDashboard") // select dashboard container
const nameInput = document.getElementById("riskName") // select name input from form
const priorityInput = document.getElementById("riskPriority") // select priority input from form
const departmentInput = document.getElementById("riskDepartment") // select department input from form
const submitButton = document.getElementById("submitButton") // select submit button
console.log("Risk Dashboard Loaded") // log message

// Task 2 - Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) { // function to create a risk card
    const newCard = document.createElement("div") // create div tag
    newCard.setAttribute("class", "riskCard") // set css class
    
    const riskTitle = document.createElement("h3") // create h3 tag
    riskTitle.textContent = riskName // text content inside h3

    const riskLabel = document.createElement("label") // create label tag
    riskLabel.textContent = riskLevel // text content inside label

    const cardDepartment = document.createElement("p") // create p tag
    cardDepartment.textContent = department // text content inside p tag

// Task 3 - Removing Risk Items
    const deleteButton = document.createElement("button") // create button
    deleteButton.textContent = "Resolve" // text content inside button
    deleteButton.setAttribute("class", "button") // set css class

    deleteButton.addEventListener("click", (event) => { // event listener on click
        newCard.remove() // remove card on click of button
        console.log(`${riskName} Card Resolved`)
        event.stopPropagation() // Task 6 - Handling Event Propagation
    })
// End Task 3

// Task 4 - Categorizing Risks by Level

    if (riskLevel === "High") { // if risk level is high, background color changes to red
        newCard.style.backgroundColor = "red"
    }
    else if (riskLevel === "Medium") { // if risk level is medium, background color changes to yellow
        newCard.style.backgroundColor = "yellow"
    }
    else if (riskLevel === "Low") { // if risk level is low, background color changes to green
        newCard.style.backgroundColor = "green"
    }
// End Task 4

    newCard.appendChild(riskTitle) // append title to card
    newCard.appendChild(riskLabel) // append priority to card
    newCard.appendChild(cardDepartment) // append department to card
    newCard.appendChild(deleteButton) // append resolve button to card

    riskDashboard.appendChild(newCard) // append card to dashboard
}

submitButton.addEventListener("click", () => { // event listener on click
    const name = nameInput.value // name is value from name input
    const priority = priorityInput.value // priority is value from priority input
    const department = departmentInput.value // department is value from department input

    addRiskItem(name, priority, department) // call function with parameters from HTML inputs

    nameInput.value = "" // empty input after use
    priorityInput.value = "" // empty input after use
    departmentInput.value = "" // empty input after use
})

// Task 5 - Implementing Bulk Updates
const increaseRiskLevel = document.createElement("button") // create button
increaseRiskLevel.textContent = "Increase Risk Levels" // text content inside button
increaseRiskLevel.setAttribute("class", "risk-button") // set css class

increaseRiskLevel.addEventListener("click", (event) => { // event listener on click 
    const riskCards = document.querySelectorAll(".riskCard") // find all risk cards using query selector all
    riskCards.forEach(card => { // for each card
        if (card.children[1].textContent === "High") { // if risk level is high, keep at high
            card.children[1].textContent = "High"
        }
        else if (card.children[1].textContent === "Medium") { // if risk level is medium, change to high
            card.children[1].textContent = "High"
        }
        else if (card.children[1].textContent === "Low") { // if risk level is low, change to medium
            card.children[1].textContent = "Medium"
        }
        if (card.children[1].textContent === "High") { // if risk level is high, background color changes to red 
            card.style.backgroundColor = "red"
        }
        else if (card.children[1].textContent === "Medium") { // if risk level is medium, background color changes to yellow
            card.style.backgroundColor = "yellow"
        }
        else if (card.children[1].textContent === "Low") { // if risk level is low, background color changes to green
            card.style.backgroundColor = "green"
        }
    })
    event.stopPropagation() // Task 6 - Handling Event Propagation
    console.log("Risk Levels Updated") // log message
})
// End Task 5

riskDashboard.appendChild(increaseRiskLevel) // append button to dashboard
 
// Task 2 Test Cases
addRiskItem("Data Breach", "High", "IT")
addRiskItem("Supply Chain Disruption", "Medium", "Operations")

// Task 3 Test Case
addRiskItem("Market Fluctuations", "High", "Finance")

// Task 4 Test Cases 
addRiskItem("Cybersecurity Threat", "High", "IT")
addRiskItem("HR Compliance Issue", "Low", "Human Resources")

// Task 5 Test Case
addRiskItem("Employee Retention", "Low", "HR")