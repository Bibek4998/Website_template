const products = [
  {
    name: "🛠️ TMT Rod",
    description: "Thermo-mechanically treated rod for strong construction.",
    sizePlaceholder: "e.g. 12",
    quantityPlaceholder: "e.g. 100",
    price: "Rs. 350/kg"
  },
  {
    name: "📏 Flat Bar",
    description: "Ideal for welding, fabrication, and brackets.",
    sizePlaceholder: "e.g. 6",
    quantityPlaceholder: "e.g. 80",
    price: "Rs. 320/kg"
  },
  {
    name: "📐 Steel Angle",
    description: "Perfect for framing, supports, and reinforcements.",
    sizePlaceholder: "e.g. 3",
    quantityPlaceholder: "e.g. 60",
    price: "Rs. 310/kg"
  },
  {
    name: "⚙️ Aluminum Sheet",
    description: "High-quality sheets for construction & fabrication.",
    sizePlaceholder: "e.g. 10",
    quantityPlaceholder: "e.g. 50",
    price: "Rs. 640/kg"
  },
  {
    name: "Welding Rods",
    description: "Used in automotive and industrial sectors.",
    sizePlaceholder: "e.g. 8",
    quantityPlaceholder: "e.g. 70",
    price: "Rs. 1540"
  },
  {
    name: "Rubber",
    description: "Used in automotive and industrial sectors.",
    sizePlaceholder: "e.g. 8",
    quantityPlaceholder: "e.g. 70",
    price: "Rs. 1100"
  },
  {
    name: "Silicon Paunch",
    description: "Used in automotive and industrial sectors.",
    sizePlaceholder: "e.g. 8",
    quantityPlaceholder: "e.g. 70",
    price: "Rs. 500"
  },
  {
    name: "Silicon",
    description: "Used in automotive and industrial sectors.",
    sizePlaceholder: "e.g. 8",
    quantityPlaceholder: "e.g. 70",
    price: "Rs. 400"
  },
  {
    name: "Aluminum Cutter",
    description: "Used in automotive and industrial sectors.",
    sizePlaceholder: "e.g. 8",
    quantityPlaceholder: "e.g. 70",
    price: "Rs. 240"
  },
  {
    name: "Aluminum Black",
    description: "Used in automotive and industrial sectors.",
    sizePlaceholder: "e.g. 8",
    quantityPlaceholder: "e.g. 70",
    price: "Rs. 650/kg"
  },
  {
    name: "Gun",
    description: "Used in automotive and industrial sectors.",
    sizePlaceholder: "e.g. 8",
    quantityPlaceholder: "e.g. 70",
    price: "Rs. 1700"
  },
  {
    name: "Aluminum Natural",
    description: "Used in automotive and industrial sectors.",
    sizePlaceholder: "e.g. 8",
    quantityPlaceholder: "e.g. 70",
    price: "Rs. 640/kg"
  },
  {
    name: "Aluminum Clips",
    description: "Used in automotive and industrial sectors.",
    sizePlaceholder: "e.g. 8",
    quantityPlaceholder: "e.g. 70",
    price: "Rs. 390"
  },
  // Add more products as needed
];

const productsGrid = document.getElementById("products-grid");

products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card", "glass");

  productCard.innerHTML = `
    <h2>${product.name}</h2>
    <p class="desc">${product.description}</p>
    <label>Size (inches):</label><input type="number" placeholder="${product.sizePlaceholder}" min="1">
    <label>Quantity (kg):</label><input type="number" placeholder="${product.quantityPlaceholder}" min="1">
    <p class="price">${product.price}</p>
    <div class="btn-group">
      <button class="add-btn">Add to Cart</button>
      <button class="buy-btn">Buy Now</button>
    </div>
  `;

  productsGrid.appendChild(productCard);
});

const toast = document.getElementById("toast");

const showToast = (msg) => {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
};

document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener("click", () => showToast("Added to cart!"));
});

document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener("click", () => showToast("Proceeding to buy..."));
});
