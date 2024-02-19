const listSeat = document.getElementById('seatsList');
const singleSeat = document.getElementsByClassName('single-seat');
const seatTaken = document.getElementById('seat-taken');
const applyBtn = document.getElementById('apply-btn');
let seatSelect = 0;
let isSelected = false;
let isTyped = false;
let totalPriceUpdate = 0;


for (const seats of singleSeat) {
    seats.addEventListener('click', function () {
        
        if (seatSelect < 4) {
            seats.classList.add('colorChanged')
            seats.classList.remove('bg-[#F7F8F8]')
            seats.classList.add('bg-[#1DD100]')
            seats.setAttribute('disabled', '')
            seatSelect = seatSelect + 1;
            setTextElementValueById('booked-seat', seatSelect);

            const seatsLeft = getTextElementValueById('seats-left');
            const seatUpdate = seatsLeft - 1;
            setTextElementValueById('seats-left', seatUpdate);

            const ticketPrice = getTextElementValueById('ticket-price');
            const para = document.createElement('p');
            const text = seats.innerText;
            para.innerText = text;
            const para2 = document.createElement('p');
            para2.innerText = 'Economy';
            const para3 = document.createElement('p');
            para2.innerText = ticketPrice;
            seatTaken.append(para, para2, para3);

            
            totalPriceUpdate = seatSelect * ticketPrice;
            setTextElementValueById('total-price', totalPriceUpdate);
            const grandTotal = totalPriceUpdate;
            setTextElementValueById('grand-total', grandTotal);

            // const applyBtn = document.getElementById('apply-btn');
            
            isSelected = true;

            if (seatSelect === 4) {
                applyBtn.removeAttribute('disabled');
            }
            else {
                applyBtn.setAttribute('disabled', true);
            }
        }
        else {
            alert('Cannot select more');
        }
    })
}

const couponApply = document.getElementById('coupon-apply');
// const applyBtn = document.getElementById('apply-btn');

applyBtn.addEventListener('click', function () {
    const new15 = getInputTextById('new15');
    const couple20 = getInputTextById('couple20');
    const insertCoupon = getInputValueById('insert-coupon');

    if (insertCoupon === new15) {
        const newTotal = totalPriceUpdate * 0.15;
        const grandTotal = totalPriceUpdate - newTotal;
        setTextElementValueById('grand-total', grandTotal);
        couponApply.classList.add('hidden');
        setValueElementById('insert-coupon', '');
        applyBtn.setAttribute('disabled', true);
    }
    else if(insertCoupon === couple20){
        const coupleTotal = totalPriceUpdate * 0.20;
        const grandTotal = totalPriceUpdate - coupleTotal;
        setTextElementValueById('grand-total', grandTotal);
        couponApply.classList.add('hidden');
        setValueElementById('insert-coupon', '');
        applyBtn.setAttribute('disabled', true);
    }
    else{
        alert('Invalid Coupon');
    }
})

function check(){

    isTyped = true;
}
function next(){
    if(isSelected === true && isTyped === true){

    }
}