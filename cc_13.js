// Task 2 - Employee Cards Dynamic Addition
function addEmployeeCard(name, position) {
    const container = document.getElementById("employeeContainer");
    
    // Create employee card
    const card = document.createElement("div");
    card.classList.add("employee-card");
    
    // Employee name
    const employeeName = document.createElement("h3");
    employeeName.textContent = name;
    
    // Employee position
    const employeePosition = document.createElement("p");
    employeePosition.textContent = position;
    
    // Remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent event bubbling
        container.removeChild(card);
    });
    
    // Edit functionality
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
        editEmployeeCard(card, employeeName, employeePosition, removeButton, editButton);
    });
    
    // Append elements to card
    card.appendChild(employeeName);
    card.appendChild(employeePosition);
    card.appendChild(editButton);
    card.appendChild(removeButton);
    
    // Append card to container
    container.appendChild(card);
}

// Task 3: Bulk Update on Employee Cards
function highlightAllEmployees() {
    const cards = Array.from(document.querySelectorAll(".employee-card"));

// Task 4: Implementing Removal of Employee Cards with Event Bubbling
document.getElementById("employeeContainer").addEventListener("click", function() {
    console.log("An employee card was clicked!");
});
    cards.forEach(card => {
        card.classList.add("highlight"); // Assume 'highlight' class is defined in CSS
    });
}
