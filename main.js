// Yet another bind demo from VueMastery tutorial
var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green.jpg",
    altText: "A pair of socks",
    width: "400px",
    inventory: 0,
    onSale: false,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
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
  }
});
