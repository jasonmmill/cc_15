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
        event.stopPropagation()
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

// Task 2 Test Cases
addRiskItem("Data Breach", "High", "IT")
addRiskItem("Supply Chain Disruption", "Medium", "Operations")

// Task 3 Test Cases 
addRiskItem("Market Fluctuations", "High", "Finance")

// Task 4 Test Cases 
addRiskItem("Cybersecurity Threat", "High", "IT")
addRiskItem("HR Compliance Issue", "Low", "Human Resources")