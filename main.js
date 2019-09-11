// Yet another bind demo from VueMastery tutorial
var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    brand: "Vue Mastery",
    image: "./assets/vmSocks-green.jpg",
    altText: "A pair of socks",
    width: "400px",
    inventory: 0,
    inStock: true,
    onSale: false,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue.jpg"
      }
    ],
    sizes: [
      {
        sizeId: 01,
        mySize: "S"
      },
      {
        sizeId: 02,
        mySize: "M"
      },
      {
        sizeId: 03,
        mySize: "L"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart > 0) this.cart -= 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    }
  }
});
