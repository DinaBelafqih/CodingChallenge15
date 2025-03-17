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