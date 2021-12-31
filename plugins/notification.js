export default ({ app, store }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('notification', (type = '', content = '', display) => {
        if (display)
            return store.dispatch('notifications/showNotification', {type, content}).then(r =>{})
        else
            return store.dispatch('notifications/showNotification', false).then(r =>{})
     })
}
