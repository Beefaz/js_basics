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
      inputEl.value = e.target.innerTextContent;
      autoCompleteContainer.innerHTML = '';
    }
  });
}


// -----------------------list elements----------------------
const productsUI = {
  productsContainer: document.getElementById('products'),
  products: [...product_list], //accessed from products.js, loaded in html head
  mount() {
    this.updateProductsUI()
  },
  updateProductsUI() {
    this.productsContainer.replaceChildren(...this.products.map(item => this.createProductElement(item)));
  },
  createProductElement(product) {
    const productContainer = this.createEl('div', {className: 'product'});

    //thumbnail left
    const thumbnailContainer = this.createEl('div', {className: 'thumbnail-container'});
    const photo = this.createEl('img', {src: product.thumbnail});
    thumbnailContainer.append(photo);
    if (product.discountPercentage) {
      const discount = this.createEl('div', {
        className: 'discount',
        innerText: `-${product.discountPercentage}%`
      });
      thumbnailContainer.append(discount);
    }

    //description center
    const descriptionContainer = this.createEl('div', {className: 'description-container'});
    const title = this.createEl('div', {
      className: 'title',
      innerText: product.title
    });
    const starsContainer = this.createEl('div', {className: 'stars'});
    const stars = this.createStars(5, product.rating);
    const description = this.createEl('div', {
      className: 'description',
      innerText: product.description
    });
    starsContainer.append(...stars);
    descriptionContainer.append(title, starsContainer, description);

    //actions right
    const actionsContainer = this.createEl('div', {className: 'actions-container'});
    const priceContainer = this.createEl('div', {
      className: `price-container ${product.discountPercentage ? ' discounted' : ''}`
    });
    const price = this.createEl('div', {
      className: `price`,
      innerText: `$${product.price.toFixed(2)}`
    });
    const addToCart = this.createEl('button', {
      className: 'btn-add-to-cart',
      innerText: 'Add to cart',
      onclick() {
        cart.addItem(product.id);
        cart.updateCartBtnUI();
      },
    });
    priceContainer.append(price);
    actionsContainer.append(priceContainer, addToCart);
    if (product.discountPercentage) {
      const discountedPrice = this.createEl('div', {
        className: 'price-discounted',
        innerText: `$${(product.price * (100 - product.discountPercentage) / 100).toFixed(2)}`
      });
      priceContainer.prepend(discountedPrice);
    }

    productContainer.append(thumbnailContainer, descriptionContainer, actionsContainer);
    return productContainer;
  },
  createEl(tag, params = {}) {
    const element = document.createElement(tag);
    if (params.style) {
      Object.assign(element.style, {...params.style});
      delete params.style;
    }
    Object.assign(element, params);
    return element;
  },
  createStars(starAmount, rating) {
    const fillRatios = Array(starAmount).fill(0).map(() => {
      if (rating >= 1) {
        rating--
        return 1;
      }
      if (rating > 0) return rating--;
      return 0;
    })

    return fillRatios.map((number) => {
      const fillRatioPercent = number.toFixed(2) * 100;
      return this.createEl('div', {
        className: 'star',
        style: {background: `linear-gradient(to right, rgb(255, 205, 0) ${fillRatioPercent}%, rgb(221, 221, 221) ${fillRatioPercent}%)`}
      });
    });
  }
}
//initiate products
productsUI.mount();

const cart = {
  cartButton: document.getElementById('cart-redirect'),
  cartItemCount: document.getElementById('cart-item-count'),
  items: [],
  mount() {
    const existingItems = JSON.parse(localStorage.getItem('cart-items'));
    if (existingItems) this.items = existingItems;
    this.updateCartBtnUI();
  },
  addItem(id) {
    const itemIndex = this.items.findIndex(item => item.id === id);
    if (itemIndex >= 0) this.items[itemIndex].amountInCart++;
    if (itemIndex < 0) this.items.push({
      ...product_list.find(item => item.id === id),
      amountInCart: 1,
    })
    this.updateLocalStorage();
  },
  updateCartBtnUI() {
    const itemCount = this.items.reduce((count, val) => val.amountInCart ? count + val.amountInCart : count, 0);
    this.cartItemCount.innerText = `${itemCount}`;
  },
  updateLocalStorage() {
    const existingItems = JSON.parse(localStorage.getItem('cart-items'));
    if (existingItems) localStorage.removeItem('cart-items');
    localStorage.setItem('cart-items', JSON.stringify(this.items));
  },
};
//initiate cart
cart.mount();


