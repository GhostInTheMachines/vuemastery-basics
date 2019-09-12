// Product component
Vue.component("product", {
  template: `
    <div class="product">
    <div class="product-image">
      <img :src="image" :alt="altText" />
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">{{ isOnSale }}In Stock</p>
      <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold Out</p>
      <p :class="{ textDecoration: !inStock }" v-else>Out of Stock</p>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
      <h2>Variants</h2>
      <div
        class="color-box"
        v-for="(variant, index) in variants"
        :key="variant.variantId"
        :style="{ backgroundColor: variant.variantColor }"
        @mouseover="updateProduct(index)"
      ></div>
      <div>
        <h2>Sizes</h2>
        <ul id="size-list">
          <li v-for="(size, sizeId) in sizes" :key="sizeId">
            {{ size.mySize }}
          </li>
        </ul>
      </div>
      <div class="cart">
        <p>Cart({{ cart }})</p>
      </div>
      <button
        v-on:click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
      >
        Add to cart
      </button>
      <button
        v-on:click="removeFromCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
      >
        Remove
      </button>
    </div>
  </div>
    `,
  data() {
    return {
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
    };
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
// Root Vue instance
var app = new Vue({
  el: "#app"
});
