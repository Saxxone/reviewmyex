export const state = () => ({
  me: {
    image: '/images/product-image.png',
    currency: '₦',
    price: '1725',
    name: 'iPhone 11 Pro 256gb',
    category: 'Cell Phone',
    ratings: "5",
    id: 1,
    liked: true
  }
})
export const mutations = {
  like(state, index) {
    state.products[index].like = !state.products[index].like
  },
}
