const listSeat = document.getElementById('seatsList');
const singleSeat = document.getElementsByClassName('single-seat');
const seatTaken = document.getElementById('seat-taken');
const applyBtn = document.getElementById('apply-btn');
let seatSelect = 0;
let isSelected = false;
let totalPriceUpdate = 0;


for (const seats of singleSeat) {
    seats.addEventListener('click', function () {
        
        if (seatSelect < 4) {
            seats.classList.add('bg-[#1DD100]')
            seats.classList.remove('bg-[#F7F8F8]')
            seatSelect = seatSelect + 1;
            setTextElementValueById('booked-seat', seatSelect);

            const seatsLeft = getTextElementValueById('seats-left');
            const seatUpdate = seatsLeft - 1;
            setTextElementValueById('seats-left', seatUpdate);

            const div = document.createElement('div');
            div.classList.add('font-inter', 'text-base', 'flex', 'justify-between', 'p-4', 'text-[#03071299]');

            const ticketPrice = getTextElementValueById('ticket-price');

            const para = document.createElement('p');
            const text = seats.innerText;
            para.innerText = text;

            const para2 = document.createElement('p');
            para2.innerText = 'Economy';

            const para3 = document.createElement('p');
            para3.innerText = ticketPrice;

            div.append(para, para2, para3);
            seatTaken.appendChild(div);

            
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
            alert('Cannot select more than 4 seats');
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

function next() {
    
}