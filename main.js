// Yet another bind demo from VueMastery tutorial
var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    brand: "Vue Mastery",
    altText: "A pair of socks",
    inventory: 0,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    selectedVariant: 0,
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green.jpg",
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue.jpg",
        variantQuantity: 0
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
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    isOnSale() {
      if (this.onSale) return this.product + " are on Sale, and ";
    }
  }
});
