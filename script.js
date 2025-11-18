const item = document.getElementById('item');
const amount = document.getElementById('amount');
const above = document.getElementById('above');

const cards = document.querySelectorAll(".card");



let totalItem = 0;
let totalAmount = 0;

// Loop through all cards

cards.forEach((card) => {
    card.addEventListener("click", () => {
        const priceText = card.querySelector('.price').innerText;
        const price = parseInt(priceText.replace('Rs.', '').trim());
              


        totalItem++;
        totalAmount += price;

        item.innerHTML = `TOTAL ITEMS: ${totalItem}`;
        amount.innerHTML = `TOTAL AMOUNT: Rs.${totalAmount}`;

        above.innerText = totalItem;

    })
})