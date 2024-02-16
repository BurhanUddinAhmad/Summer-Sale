let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll('.card');

for(let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener("click", function() {
        // Get the title and price value
        const title = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('span').innerText.split(" ")[1]);

        //appending the title in the title container
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = titleCount + " " + title;
        titleContainer.appendChild(p);
        titleCount++;

        // Calculate Price 
        totalPrice += price;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    });
}

const btn = document.getElementById('apply-btn');
btn.addEventListener("click", function(){
    // Get the value from input 
    const cuoponElement = document.getElementById('input-field').value;
    const cuoponCode = cuoponElement.split(" ").join("").toUpperCase();

    if(totalPrice >= 200){
        if(cuoponCode === "SELL200") {
            // discount
            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);

            // Grand Total 
            const grandTotal = document.getElementById('total');
            grandTotal.innerText = totalPrice - discountAmount.toFixed(2);
            document.getElementById('input-field').value = "";
        } else {
            alert("Invalid Cuopon Code");
            document.getElementById('input-field').value = "";
        }
    } else {
        alert("Please buy at least $200!");
        document.getElementById('input-field').value = "";
    }
});