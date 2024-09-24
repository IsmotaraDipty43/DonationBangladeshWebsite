// modal mgs
function openModal(donationPlace) {
  const modal = document.getElementById('my_modal');
  const donationMessage = document.getElementById('donationMessage');
  donationMessage.innerText = `${donationPlace}`;
  modal.showModal();
}
// window scorring 

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
const nav = document.getElementById('nav');

  if (window.scrollY > 100) {  
  header.classList.add('backdrop-blur-lg', 'backdrop-filter', 'bg-opacity-30');
  nav.classList.add('bg-nav', 'backdrop-filter', 'bg-opacity-30', 'backdrop-blur-lg'); 
 } else {
        header.classList.remove('backdrop-filter', 'bg-opacity-30', 'backdrop-blur-lg');
        nav.classList.remove('backdrop-filter', 'bg-opacity-30', 'backdrop-blur-lg'); 
        nav.classList.add('bg-nav'); 
   }
 });
// History button function
const donationButton = document.getElementById('donationbutton');
const historyButton = document.getElementById('historybutton');

historyButton.addEventListener('click', function() {
  // Add active classes to history button
  historyButton.classList.add('bg-greenn', 'font-bold');
  historyButton.classList.remove('border', 'border-grayy', 'font-normal', 'bg-white');
  
  // Remove active classes from donation button
  donationButton.classList.add('bg-white', 'border', 'border-grayy', 'font-normal');
  donationButton.classList.remove('font-bold');
  
  // Hide donation card and show history list
  document.getElementById('container-card').classList.add('hidden');
  document.getElementById('allhistoryitem').classList.remove('hidden');
});

// Donation button function
donationButton.addEventListener('click', function() {

  donationButton.classList.add('bg-greenn', 'font-bold');
  donationButton.classList.remove('border', 'border-grayy', 'font-normal', 'bg-white');
 
  historyButton.classList.add('bg-white', 'border', 'border-grayy', 'font-normal');
  historyButton.classList.remove('font-bold');
  document.getElementById('container-card').classList.remove('hidden');
  document.getElementById('allhistoryitem').classList.add('hidden');
});


// Shared function here
// Get the input value
function getInputId(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return  inputValue; 
}
// Get the button value
function getInputButton(id) {
  const inputValue = parseFloat(document.getElementById(id).innerText);
  return  inputValue; 
}

// noakhali donation function
document.getElementById('noakhalibtn').addEventListener('click', function() {

  const accountAmount = parseFloat(document.getElementById('totalMoney').innerText); 
  const donateAmountNoakhali = parseFloat(document.getElementById('donatAmountN').value); 
  const currentBalance = parseFloat(document.getElementById('currentbalance').innerText); 

  // Input validation for the donation amount
  if (isNaN(donateAmountNoakhali) || donateAmountNoakhali <= 0) {
    document.getElementById('donatAmountN').value = '';  
    return alert('Invalid input');
  }
  if (donateAmountNoakhali > accountAmount) {
    document.getElementById('donatAmountN').value = '';  
    return alert('Insufficient Balance');
  }

  const newTotalForNoakhali = currentBalance + donateAmountNoakhali;
  const updatedAccountBalance = accountAmount - donateAmountNoakhali;
  document.getElementById('totalMoney').innerText = updatedAccountBalance.toFixed(2);
  document.getElementById('currentbalance').innerText = newTotalForNoakhali.toFixed(2); 
  document.getElementById('donatAmountN').value = '';
  openModal('You Have Donated for Noakhali'); 
  
  const historyCard = document.createElement('div');
  historyCard.className = 'border bg-white border-gray-200 mb-6 p-6 rounded-lg  shadow-lg';
  
  historyCard.innerHTML = `
    <p class="text-lg text-black font-bold">${donateAmountNoakhali.toFixed(2)} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
    <p class="text-base text-gray-500">
      ${new Date().toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })}
    </p>
  `;
  
  const historyAdd = document.getElementById('allhistoryitem');
  historyAdd.insertBefore(historyCard, historyAdd.firstChild);
});



  // Donate button for feni
  document.getElementById('fenibtn').addEventListener('click', function() {

    const accountAmountFeni = parseFloat(document.getElementById('totalMoney').innerText); 
    const donateAmountFeni = parseFloat(document.getElementById('donatAmountf').value);     
    const currentBalanceFeni = parseFloat(document.getElementById('currentbalanceFeni').innerText); 
    
  
    if (isNaN(donateAmountFeni) || donateAmountFeni.toString().trim() === '' || donateAmountFeni <= 0 ) {
      document.getElementById('donatAmountf').value = '';  
      return alert('Invalid input');
    }
  
  
    if (donateAmountFeni > accountAmountFeni) {
      document.getElementById('donatAmountf').value = '';  
      return alert('Insufficient Balance');
    }
  

    const newTotalForFeni = currentBalanceFeni + donateAmountFeni;
    const updatedAccountBalanceFeni = accountAmountFeni - donateAmountFeni;
    
    document.getElementById('totalMoney').innerText = updatedAccountBalanceFeni.toFixed(2); 
    document.getElementById('currentbalanceFeni').innerText = newTotalForFeni.toFixed(2);   
    document.getElementById('donatAmountf').value = '';
  
 
    openModal('You Have Donated for Feni');
    const historyCard = document.createElement('div');
    historyCard.className = 'border bg-white border-gray-200 mb-6 p-6 rounded-lg shadow-lg';
    
    historyCard.innerHTML = `
      <p class="text-lg text-black font-bold">${donateAmountFeni.toFixed(2)} Taka is Donated for flood relief in Feni, Bangladesh</p>
      <p class="text-base text-gray-500">
        ${new Date().toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </p>
    `;
 
    const historyAdd = document.getElementById('allhistoryitem');
    historyAdd.insertBefore(historyCard, historyAdd.firstChild);
  });
  
// donate for humankind
document.getElementById('humankindbtn').addEventListener('click', function() {

  const accountAmountAid = parseFloat(document.getElementById('totalMoney').innerText);  
  const donateAmountAid = parseFloat(document.getElementById('donatAmountAid').value);   
  const currentBalanceAid = parseFloat(document.getElementById('currentbalanceAid').innerText); 
  
  // Input validation for the donation amount
  if (isNaN(donateAmountAid) || donateAmountAid.toString().trim() === '' || donateAmountAid <= 0 ) {
    document.getElementById('donatAmountAid').value = '';  
    return alert('Invalid input');
  }

  // Check for sufficient balance in the account
  if (donateAmountAid > accountAmountAid) {
    document.getElementById('donatAmountAid').value = '';  
    return alert('Insufficient Balance');
  }

  // Calculate the new balances after the donation
  const newTotalForAid = currentBalanceAid + donateAmountAid;
  const updatedAccountBalanceAid = accountAmountAid - donateAmountAid;
  
  // Update the displayed account and Aid balances
  document.getElementById('totalMoney').innerText = updatedAccountBalanceAid.toFixed(2); 
  document.getElementById('currentbalanceAid').innerText = newTotalForAid.toFixed(2);  
  document.getElementById('donatAmountAid').value = '';

  // Open a confirmation modal after successful donation
  openModal('You Have Donated for Humankind');

  // Create a history card for the donation
  const historyCard = document.createElement('div');
  historyCard.className = 'border bg-white border-gray-200 mb-6 p-6 rounded-lg shadow-lg';
  
  historyCard.innerHTML = `
    <p class="text-lg text-black font-bold">${donateAmountAid.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class="text-base text-gray-500">
      ${new Date().toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })}
    </p>
  `;
  
  // Add the history card to the donation history section
  const historyAdd = document.getElementById('allhistoryitem');
  historyAdd.insertBefore(historyCard, historyAdd.firstChild);
});

  
     