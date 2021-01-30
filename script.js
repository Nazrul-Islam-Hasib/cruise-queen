//get the ticket input count
let firstClassTicketAmout = parseFloat(document.getElementById('fc-input').value);
let economyClassTicketAmout = parseFloat(document.getElementById('ec-input').value);


//Increment button for First class ticket
const firstClassIncrementBtn = document.getElementById('first-class-increment');
firstClassIncrementBtn.addEventListener('click', function(){ 
    firstClassTicketAmout = ticketCount('fc-input', 'add');
    calculateSubTotal();
})

//Increment button for Economic class ticket
const economyClassIncrementBtn = document.getElementById('economy-class-increment');
economyClassIncrementBtn.addEventListener('click', function(){ 
    economyClassTicketAmout = ticketCount('ec-input', 'add');
    calculateSubTotal();
})

//Decrement button for First class ticket
const firstClassDecrementBtn = document.getElementById('first-class-decrement');
firstClassDecrementBtn.addEventListener('click', function(){
    if(firstClassTicketAmout<=0){
        alert('Ticket can"t be negative' );
    }else{
        firstClassTicketAmout = ticketCount('fc-input', 'sub');
        calculateSubTotal();
    }
    
})

//Decrement button for Economic class ticket
const economyClassDecrementBtn = document.getElementById('economy-class-decrement');
economyClassDecrementBtn.addEventListener('click', function(){
    if(economyClassTicketAmout<=0){
        alert('Ticket can"t be negative' );
    }else{
        economyClassTicketAmout = ticketCount('ec-input', 'sub');
        calculateSubTotal();
    }
   
})


//function to count the no of Ticket
function ticketCount(id, condition){
    if(condition === 'add')
    {
        let counter = parseFloat(document.getElementById(id).value);
        counter++;
        document.getElementById(id).value = counter;
        return counter;
    }
    else{
        let counter = parseFloat(document.getElementById(id).value);
        counter--;
        document.getElementById(id).value = counter;
        return counter;
    }
}

//function to calculate SubTotal
const firstClassTicketCost = 150;
const economyClassTicketCost = 100;
function calculateSubTotal(){
    let subTotalCost = (firstClassTicketAmout*firstClassTicketCost) + (economyClassTicketAmout*economyClassTicketCost);
    document.getElementById('Subtotal').innerText = subTotalCost;
    calculateTotal(subTotalCost);
}


//function to calculate Vat & Total cost
function calculateTotal(subTotalCost){
    let totalVat =  subTotalCost * 0.1;
    let totalCost = subTotalCost - totalVat;
    document.getElementById('vat').innerText = totalVat;
    document.getElementById('total').innerText = totalCost;

// used for booking confirmation modal
    document.getElementById('fc-ticket-count').innerText = firstClassTicketAmout;
    document.getElementById('ec-ticket-count').innerText = economyClassTicketAmout;
    document.getElementById('price-without-vat').innerText = subTotalCost;
    document.getElementById('total-vat').innerText = totalVat;
    document.getElementById('total-price').innerText = totalCost;
}



