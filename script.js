document.addEventListener('mousemove', parallax);
const box = document.querySelector('.box img');

function parallax(e) {
    const x = (window.innerWidth - e.pageX*(3))/100;
    const y = (window.innerHeight - e.pageY*(3))/100;
    box.style.transform = `translateX(${x + 50}px) translateY(${y}px)`;
}

const phoneCard = document.querySelectorAll('.phone-card');

phoneCard.forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('a').click();
    });
});

const form = document.querySelector('form');
const successMsg = document.querySelector('.success-card');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = {
        firstName: form.querySelector('#firstName').value,
        lastName: form.querySelector('#lastName').value,
        originZip: form.querySelector('#originZip').value,
        destinationZip: form.querySelector('#destinationZip').value,
        email: form.querySelector('#email').value,
        phoneNumber: form.querySelector('#phoneNumber').value,
        moveDate: form.querySelector('#moveDate').value,
        bedrooms: form.querySelector('#bedrooms').value,
        referralSource: "Relo-Pro"
    }

    await fetch('https://api.smartmoving.com/api/leads/from-provider/v2?providerKey=63339e6a-57f7-42af-9728-ac50014d5178', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    successMsg.style.display = 'flex';
});