const customerNameInput=document.getElementById('customer-name');
const addCustomerBtn=document.getElementById('add-customer-btn');
const customerList=document.getElementById('customer-list');
const deleteCustomerBtn=document.getElementById('delete-customer-btn');

let customers=[];

addCustomerBtn.addEventListener('click',()=>{
    const name=customerNameInput.value;
    if(name){
        customers.push(name);
        updateCustomerList();
        customerNameInput.value='';
    }
});



function updateCustomerList(){
    customerList.innerHTML = ''; 
   for( i =0; i < customers.length; i++){
    customerList.innerHTML +=` 
        <button class="btn btn-secondary mb-2 w-100 text-start ">#${i+1}-${customers[i]}</button>`;
   
} 
 }


 deleteCustomerBtn.addEventListener('click',()=>{
    customers.pop();
    updateCustomerList();
});

















// function updateCustomerList(){
//     customerList.innerHTML='';
//     customers.forEach((customer, index) => {
//         const button = document.createElement('button');
//         button.className = 'btn btn-secondary mb-2 w-100 text-start';
//         button.textContent = `#${index + 1} - ${customer}`;
//         customerList.appendChild(button);
//     });
// }

// const productsContainer = document.getElementsByClassName('products-container')[0];

//  customerList.innerHTML='';
//     customers.forEach((customer, index) => {
//         const button = document.createElement('button');
//         button.className = 'btn btn-secondary mb-2 w-100 text-start';
//         button.textContent = `#${index + 1} - ${customer}`;
//         customerList.appendChild(button);
//     });

















// function sortCustomers(){
//     customers.sort((a,b)=>a.localeCompare(b));
//     updateCustomerList().pop();
// }





// function filterCustomers(searchTerm){
//     const filteredCustomers = customers.filter(customer => 
//         customer.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     customerList.innerHTML = '';
//     filteredCustomers.forEach((customer, index) => {
//         const button = document.createElement('button');
//         button.className = 'btn btn-secondary mb-2 w-100 text-start';
//         button.textContent = `#${index + 1} - ${customer}`;
//         customerList.appendChild(button);
//     });
// }

