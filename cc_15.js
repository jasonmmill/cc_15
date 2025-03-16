// Task 1 - Creating the Base Structure
const riskDashboard = document.getElementById("riskDashboard")
console.log("Risk Dashboard Loaded")

// Task 2 - Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    const newCard = document.createElement("div")
    newCard.setAttribute("class", "riskCard")
    newCard.innerHTML = `<h3>${riskName}</h3><label>Priority: ${riskLevel}</label><p>Department: ${department}</p>`
    riskDashboard.appendChild(newCard)
}

addRiskItem("Data Breach", "High", "IT")
addRiskItem("Supply Chain Disruption", "Medium", "Operations")