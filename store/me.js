export const state = () => ({
  me: {
    image: '/images/product-image.png',
    first_name: '',
    last_name: '',
    username: '',
  }
})
export const mutations = {
  like(state, index) {
    state.products[index].like = !state.products[index].like
  },
}
