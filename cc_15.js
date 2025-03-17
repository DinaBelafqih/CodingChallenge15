// Task 1 - Base Structure Setup
const riskDashboard = document.getElementById('riskDashboard');

console.log('Risk Dashboard Loaded');

// Task 2 - Adding Risk Items

const riskForm = document.getElementById('riskForm');
const riskNameInput = document.getElementById('riskName');
const riskLevelInput = document.getElementById('riskLevel');
const departmentInput = document.getElementById('department');

function addRiskItem(riskName, riskLevel, department) { //ask risk item function 
  const riskCard = document.createElement('div');
  riskCard.classList.add('riskCard');
  
  riskCard.innerHTML = `
    <strong>${riskName}</strong>
    <p>Level: ${riskLevel}</p>
    <p>Department: ${department}</p>
  `;

  // Add to dashboard
  riskDashboard.appendChild(riskCard);
}

// Handle form submission
riskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const riskName = riskNameInput.value;
  const riskLevel = riskLevelInput.value;
  const department = departmentInput.value;

  if (riskName && riskLevel && department) {
    addRiskItem(riskName, riskLevel, department);

    // Clear form after submission
    riskNameInput.value = '';
    riskLevelInput.value = '';
    departmentInput.value = '';
  }
});

// Test cases 
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

//Task 3 - Removing Risk Items
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard');
    
    riskCard.innerHTML = `
      <strong>${riskName}</strong>
      <p>Level: ${riskLevel}</p>
      <p>Department: ${department}</p>
    `;
  
    // Create Resolve button
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.addEventListener('click', () => {
      riskDashboard.removeChild(riskCard);
    });
  
    riskCard.appendChild(resolveButton); // Add Resolve button to riskCard
  
    // Add to dashboard
    riskDashboard.appendChild(riskCard);
  }

  // Test Case
  addRiskItem("Market Fluctuations", "High", "Finance");
  // Clicking "Resolve" should remove this risk from the dashboard.

  //Task 4- Risk Categorization
  function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard');
    
    // Set background color based on risk level
    if (riskLevel === 'Low') {
      riskCard.style.backgroundColor = '#d7ebf8'; // // Change to blue
    } else if (riskLevel === 'Medium') {
      riskCard.style.backgroundColor = '#d7daf8'; // // Change to purple
    } else if (riskLevel === 'High') {
      riskCard.style.backgroundColor = '#ed969e'; // // Change to Red
    }
  
    riskCard.innerHTML = `
      <strong>${riskName}</strong>
      <p>Level: ${riskLevel}</p>
      <p>Department: ${department}</p>
    `;
  
    // Create Resolve button
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.addEventListener('click', () => {
      riskDashboard.removeChild(riskCard);
    });
  
    riskCard.appendChild(resolveButton);
  
    riskDashboard.appendChild(riskCard);
  }
  addRiskItem("Cybersecurity Threat", "High", "IT");
  addRiskItem("HR Compliance Issue", "Low", "Human Resources");

//Task 5- Bulk Risk Updates 
const bulkUpdateBtn = document.getElementById('bulkUpdateBtn');

bulkUpdateBtn.addEventListener('click', () => {
  const riskCards = document.querySelectorAll('.riskCard');

  riskCards.forEach((card) => {
    const levelElement = card.querySelector('p:nth-child(2)');
    let currentLevel = levelElement.textContent.replace('Level: ', '');

    // Increase risk level
    if (currentLevel === 'Low') {
      currentLevel = 'Medium';
      card.style.backgroundColor = '#d7daf8'; // // Change to purple
    } else if (currentLevel === 'Medium') {
      currentLevel = 'High';
      card.style.backgroundColor = '#ed969e'; // // Change to red
    }

 
    levelElement.textContent = `Level: ${currentLevel}`;
  });
});
addRiskItem("Employee Retention", "Low", "HR");
// Clicking "Increase Risk Levels" should change it to "Medium".

//Task 6- Event Propagation Fix
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard');
  
    // Set background color based on risk level
    if (riskLevel === 'Low') {
      riskCard.style.backgroundColor = '#d7ebf8'; // // Change to blue
    } else if (riskLevel === 'Medium') {
      riskCard.style.backgroundColor = '#d7daf8'; // // Change to purple
    } else if (riskLevel === 'High') {
      riskCard.style.backgroundColor = '#ed969e'; // // Change to red
    }
  
    riskCard.innerHTML = `
      <strong>${riskName}</strong>
      <p>Level: ${riskLevel}</p>
      <p>Department: ${department}</p>
    `;
  
    // Create Resolve button
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
  
    // Stop propagation when clicking the button
    resolveButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent bubbling
      riskDashboard.removeChild(riskCard);
    });
  
    // Stop propagation for riskCard itself
    riskCard.addEventListener('click', (event) => {
      event.stopPropagation();
      console.log(`Clicked on ${riskName}`);
    });
  
    // Append Resolve button to riskCard
    riskCard.appendChild(resolveButton);
  
    // Append to dashboard
    riskDashboard.appendChild(riskCard);
  }
  
  