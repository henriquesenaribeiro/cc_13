// Task 2: Adding Employee Cards Dynamically
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
