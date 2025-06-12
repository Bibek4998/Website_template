const cartContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalElement.textContent = "Rs. 0";
    return;
  }

  cart.forEach((item, index) => {
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <span>${item.material} (${item.type}) - ${item.size}" - ${item.quantity}kg = Rs. ${item.total}</span>
      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
    `;
    cartContainer.appendChild(itemEl);
    total += item.total;
  });

  totalElement.textContent = `Rs. ${total}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function checkout() {
    const total = cart.reduce((sum, item) => sum + item.total, 0);
    if (total <= 0) {
      alert("Your cart is empty.");
      return;
    }
  
    const productLabel = cart[0].material + "_" + cart[0].type + "_" + Date.now();
  
    const form = document.createElement("form");
    form.setAttribute("action", "https://rc-epay.esewa.com.np/api/epay/main/v2/form");
    form.setAttribute("method", "POST");
  
    const fields = {
      amt: total,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: total,
      pid: productLabel, // more descriptive ID
      scd: "EPAYTEST",
      su: "http://localhost/success",
      fu: "http://localhost/failure",
    };
  
    for (let key in fields) {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", key);
      input.setAttribute("value", fields[key]);
      form.appendChild(input);
    }
  
    document.body.appendChild(form);
    form.submit();
  }
  