export const state = () => ({
    status: true,
    type: 'success',
    content: 'Fuck'
})


export const getters = {
    status: state => state.status
}

export const mutations = {
    showNotification(state, payload) {
        state.status = true
        state.type = payload.type
        state.content = payload.content
    },
    hideNotification(state, payload) {
        state.status = false
        state.type = ''
        state.content = ''
    },
}

export const actions = {
    showNotification(context, payload) {
        context.commit('showNotification', payload)
        if (this.state.type !== '' || this.state.content !== '') {
            setTimeout(() => {
                context.commit('hideNotification', payload)
            }, 7000)
        }
    },
}
