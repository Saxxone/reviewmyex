export default function ({app, $axios, store, redirect}) {
  $axios.onRequest(config => {
    if (config.url.includes('distributors/upload')) {
      config.headers = {
        'Content-Type': 'multipart/form-data'
      }
    }
    console.log('Making request to ' + config.url)
    if (store.state.auth.loggedIn)
      $axios.setHeader('Authorization', `Bearer ${store.state.auth.user.token}`)
  })

  $axios.onResponse(response => {
    if (response.status === 200 || response.status === 201) {
      response.status = 200
    }
    return response
  })

  $axios.onError(error => {
    // REDIRECT IF NOT AUTHENTICATED USER
    if (error.response && error.response.status === 401) {
      app.$auth.logout()
      app.$auth.reset()
      redirect('/login')
    }

    return Promise.reject(error);
  })


}
