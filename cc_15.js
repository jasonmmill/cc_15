// Task 1 - Creating the Base Structure
const riskDashboard = document.getElementById("riskDashboard")
console.log("Risk Dashboard Loaded")

// Task 2 - Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    const newCard = document.createElement("div")
    newCard.setAttribute("class", "riskCard")
    
    const riskTitle = document.createElement("h3")
    riskTitle.textContent = riskName

    const riskLabel = document.createElement("label")
    riskLabel.textContent = riskLevel

    const cardDepartment = document.createElement("p")
    cardDepartment.textContent = department

// Task 3 - Removing Risk Items
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Resolve"
    deleteButton.setAttribute("class", "button")

    deleteButton.addEventListener("click", (event) => {
        newCard.remove()
        event.stopPropagation() // Task 6 - Handling Event Propagation
    })
// End Task 3

// Task 4 - Categorizing Risks by Level

    if (riskLevel === "High") {
        newCard.style.backgroundColor = "red"
    }
    else if (riskLevel === "Medium") {
        newCard.style.backgroundColor = "yellow"
    }
    else if (riskLevel === "Low") {
        newCard.style.backgroundColor = "green"
    }
// End Task 4

    newCard.appendChild(riskTitle)
    newCard.appendChild(riskLabel)
    newCard.appendChild(cardDepartment)
    newCard.appendChild(deleteButton)

    riskDashboard.appendChild(newCard)
}

// Task 5 - Implementing Bulk Updates
const increaseRiskLevel = document.createElement("button")
increaseRiskLevel.textContent = "Increase Risk Levels"
increaseRiskLevel.setAttribute("class", "risk-button")

increaseRiskLevel.addEventListener("click", (event) => {
    const riskCards = document.querySelectorAll(".riskCard")
    riskCards.forEach(card => {
        if (card.children[1].textContent === "High") {
            card.children[1].textContent = "High"
        }
        else if (card.children[1].textContent === "Medium") {
            card.children[1].textContent = "High"
        }
        else if (card.children[1].textContent === "Low") {
            card.children[1].textContent = "Medium"
        }
        if (card.children[1].textContent === "High") {
            card.style.backgroundColor = "red"
        }
        else if (card.children[1].textContent === "Medium") {
            card.style.backgroundColor = "yellow"
        }
        else if (card.children[1].textContent === "Low") {
            card.style.backgroundColor = "green"
        }
    })
    event.stopPropagation() // Task 6 - Handling Event Propagation
    console.log("Risk Levels Updated")
})
// End Task 5

riskDashboard.appendChild(increaseRiskLevel)

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