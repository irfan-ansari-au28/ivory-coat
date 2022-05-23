// console.log('print 1');
// for (let i = 0; i < 5; i++) {
//     console.log("The number is " + i + "<br>");
//   }

// console.log('hello');

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const categories = [
  {
    title: "All",
    url: "all",
    active: "",
  },
  {
    title: "Dry Dog Food",
    url: "dry-dog-food",
    active: "card-selected",
  },
  {
    title: "Grain Free Dry",
    url: "grain-free-dry",
    active: "",
  },
  {
    title: "Chilled",
    url: "chiled",
    active: "",
  },
  {
    title: "Grain Free Frozen",
    url: "grain-free-frozen",
    active: "",
  },
  {
    title: "Wet",
    url: "wet",
    active: "",
  },
  {
    title: "Grain Free Wet",
    url: "grain-free-wet",
    active: "",
  },
];

for (const category of categories) {
  const html = `<div class="card ${category.active}">
  <img class="card-image" src="./assets/images/${category.url}.png" />
  <div class="card-title">${category.title}</div>
</div>`;

  const cardEl = document.getElementById("categories");
  // console.log(cardEl);
  cardEl.insertAdjacentHTML("beforebegin", html);
}

const products = [
  {
    title: "Kangaroo & Brown Rice 1Kg",
    url: "product-image.png",
    maxmPrice: "RRP $19.99",
    discountPrice: "$39.99",
    saveLabel: true,
    newLabel: false,
    productSelected: false,
    cardActive: false,
  },
  {
    title: "Chicken & Brown Rice 1Kg",
    url: "product-image.png",
    maxmPrice: "RRP $19.99",
    discountPrice: "$39.99",
    saveLabel: true,
    newLabel: true,
    productSelected: true,
    cardActive: true,
  },
  {
    title: "Lamb & Brown Rice 1Kg",
    url: "product-image.png",
    maxmPrice: "RRP $19.99",
    discountPrice: "$39.99",
    saveLabel: false,
    newLabel: true,
    productSelected: false,
    cardActive: false,
  },
  {
    title: "Turkey & Brown Rice 1Kg",
    url: "product-image.png",
    maxmPrice: "RRP $19.99",
    discountPrice: "$39.99",
    saveLabel: true,
    newLabel: false,
    productSelected: false,
    cardActive: false,
  },
  {
    title: "Chicken & Brown Rice 1Kg",
    url: "product-image.png",
    maxmPrice: "RRP $19.99",
    discountPrice: "$39.99",
    saveLabel: false,
    newLabel: false,
    productSelected: false,
    cardActive: false,
  },
  {
    title: "Lamb & Brown Rice 1Kg",
    url: "product-image.png",
    maxmPrice: "RRP $19.99",
    discountPrice: "$39.99",
    saveLabel: false,
    newLabel: true,
    productSelected: false,
    cardActive: false,
  },
];

for (const product of products) {
  console.log(product);
  const productHtml = `<div class="products-card">
  <div class="label">
    <div class="save-lebel ${product.saveLabel ? "" : "hide"}">Save $20.00</div>
    <div class="new ${product.newLabel ? "" : "hide"}">New</div>
  </div>
  <div class="product-image ${product.cardActive ? "card-active" : ""}">
    <img
      class="product-img"
      src="./assets/images/${product.url}"
      alt="dog-grain-dry"
    />
  </div>
  <div class="product-selected ${
    product.productSelected ? "" : "selected-hide"
  }">
    Order Free Sample
  </div>
  <div class="product-title ${
    product.cardActive ? "active-title" : ""
  }">Kangaroo & Brown Rice 1Kg</div>
  <div class="product-price-wrap">
    <div class="maxm-price ${
      product.cardActive ? "active-title" : ""
    }">RRP $19.99</div>
    <div class="discount-price">$39.99</div>
  </div>
  </div>`;

  const productCardEl = document.getElementById("products");
  productCardEl.insertAdjacentHTML("beforebegin", productHtml);
  console.log(productCardEl);
}
