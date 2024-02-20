
// -----------------------list elements----------------------

const productss = [
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

const productsUi = {
  productsElement: document.getElementById('products'),
  products: [...productss],
  createProduct: function (){
    const product = document.createElement('div');
    product.className = 'product';
  }
}

