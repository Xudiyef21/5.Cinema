const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('ammount');
const select = document.getElementById('movie');




container.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle("selected");

        total() 
    }
});

select.addEventListener("change", function(e){
    total();
});


function total(){
    let selectedSeatCount=container.querySelectorAll('.seat.selected').length;
    let price = select.value;

    amount.innerText=selectedSeatCount*price;
    count.innerText=selectedSeatCount;
};