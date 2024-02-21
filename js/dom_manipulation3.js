const phrases = [
  'What is my IP',
  'How many weeks in a year',
  'How many ounces in a cup',
  'How to screenshot on Mac',
  'When is the Super Bowl',
  'When is Easter',
  'When is Father\'s Day',
  'What is Juneteenth',
  'How do I register to vote',
  'When is Thanksgiving'
];

//refactored given example
const handleInput = (inputEl) => {
  const autoCompleteContainer = document.querySelector('.autocomplete');

  const filteredPhrases = phrases
    .filter(sentence => sentence.toLowerCase().includes(inputEl.value.toLowerCase()))
    .slice(0, 5);

  autoCompleteContainer.innerHTML = filteredPhrases.map(value => `<li>${value}</li>`).join('');

  if (inputEl.value.trim() === '') document.querySelector('.autocomplete').innerHTML = '';

  autoCompleteContainer.querySelectorAll('li').forEach(li => {
    li.onclick = (e) => {
      inputEl.value = e.target.textContent;
      autoCompleteContainer.innerHTML = '';
    }
  });
}


// -----------------------list elements----------------------

const productsList = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  },
]

const productsUI = {
  productsContainer: document.getElementById('products'),
  products: [...productsList],
  updateProductsUI: function () {
    this.productsContainer.replaceChildren(...this.products.map(item => this.createProductElement(item)));
  },
  createProductElement: function (productObject) {
    const product = this.createEl('div', {className: 'product'});

    const thumbnailContainer = this.createEl('div', {className: 'thumbnail-container'});
    const photo = this.createEl('img', {src: productObject.thumbnail});
    const discount = this.createEl('div', {className: 'discount', text: productObject.discountPercentage});
    thumbnailContainer.append(photo, discount);

    const descriptionContainer = this.createEl('div', {className: 'description-container'});
    const title = this.createEl('div', {text: productObject.title});
    const rating = this.createEl('div', {text: productObject.rating});
    const description = this.createEl('div', {text: productObject.description});
    descriptionContainer.append(title, rating, description);

    const actionsContainer = this.createEl('div', {className: 'actions-container'});
    const price = this.createEl('div', {className: 'price', text: `$${productObject.price}`});
    const addToCart = this.createEl('button', {className: 'btn-cart', text: 'Add to cart'});
    actionsContainer.append(price, addToCart);

    product.append(thumbnailContainer, descriptionContainer, actionsContainer);
    return product;
  },
  createEl(tag, params = {}) {
    const element = document.createElement(tag);
    if (params.className) element.classList.add(params.className);
    if (params.text) element.innerText = params.text;
    if (params.src) element.src = params.src;
    return element;
  }
}

//initiate products
productsUI.updateProductsUI();

