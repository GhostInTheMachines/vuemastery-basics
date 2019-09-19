// Product component
Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
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
      <button
        v-on:click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
      >
        Add to cart
      </button>
      <button
        v-on:click="removeFromCart"
      >
        Remove
      </button>
      <p>User is premium: {{ premium }} </p>
      <p>Shipping: {{ shipping }}</p>
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
          variantQuantity: 1
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
      ]
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant]);
    },
    // removeFromCart() {
    //   if (this.$emit("remove-from-cart", this.variants[this.selectedVariant]))
    //     this.$emit("remove-from-cart", this.variants[this.selectedVariant]);
    // },
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
    },
    shipping() {
      if (this.premium) {
        return "Free";
      } else {
        return 2.99;
      }
    }
  }
});
// Root Vue instance
var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(obj) {
      obj.variantQuantity -= 1;
      this.cart.push(obj.id);
    },
    removeFromCart(obj) {
      if (obj) {
        this.obj.variantQuantity += 1;
        this.cart.pop(obj);
      }
    }
  }
});
