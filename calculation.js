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
  historyButton.classList.add('bg-greenn', 'font-bold');
  historyButton.classList.remove('border', 'border-grayy', 'font-normal', 'bg-white');
  donationButton.classList.add('bg-white', 'border', 'border-grayy', 'font-normal');
  donationButton.classList.remove('font-bold');
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

   const accountAmount =   getInputButton('totalMoney');
  const donateAmountNoakhali =  getInputId('donatAmountN');
  const currentBalance =getInputButton('currentbalance');
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

    const accountAmountFeni =  getInputButton('totalMoney');
    const donateAmountFeni =  getInputId('donatAmountf');  
    const currentBalanceFeni = getInputButton('currentbalanceFeni');
    
  
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

  const accountAmountAid = getInputButton('totalMoney'); 
  const donateAmountAid =  getInputId('donatAmountAid');
  const currentBalanceAid =  getInputButton('currentbalanceAid');
  if (isNaN(donateAmountAid) || donateAmountAid.toString().trim() === '' || donateAmountAid <= 0 ) {
    document.getElementById('donatAmountAid').value = '';  
    return alert('Invalid input');
  }
  if (donateAmountAid > accountAmountAid) {
    document.getElementById('donatAmountAid').value = '';  
    return alert('Insufficient Balance');
  }
  const newTotalForAid = currentBalanceAid + donateAmountAid;
  const updatedAccountBalanceAid = accountAmountAid - donateAmountAid;
  document.getElementById('totalMoney').innerText = updatedAccountBalanceAid.toFixed(2); 
  document.getElementById('currentbalanceAid').innerText = newTotalForAid.toFixed(2);  
  document.getElementById('donatAmountAid').value = '';
  openModal('You Have Donated for Humankind');
  const historyCard = document.createElement('div');
  historyCard.className = 'border bg-white border-gray-200 mb-6 p-6 rounded-lg shadow-lg';
  
  historyCard.innerHTML = `
    <p class="text-lg text-black font-bold">${donateAmountAid.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class="text-base text-gray-500">
      ${new Date().toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })}
    </p>
  `;
  const historyAdd = document.getElementById('allhistoryitem');
  historyAdd.insertBefore(historyCard, historyAdd.firstChild);
});

  
     