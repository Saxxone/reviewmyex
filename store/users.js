export const state = () => ({
  users: [
    {
      id: '1',
      username: 'saxxone',
      name: {
        first_name: 'Kim',
        last_name: 'Stephen',
      },
      image: '/images/user-1.jpeg',
      description: 'Full-time Traveller. Globe Trotter.. Occasional Photographer. Part time Singer/Dancer.',
      meta: {
        rank: 'Top Rated'
      }
    },
    {
      id: '2',
      username: 'saxxone',
      name: {
        first_name: 'Stephen',
        last_name: 'Patrick',
      },
      image: '/images/user-2.jpeg',
      description: 'I Live my life like its the last day. Traveller, Explorer, Developer.',
      meta: {
        rank: 'Top Rated'
      }
    },
    {
      id: '3',
      username: 'saxxone',
      name: {
        first_name: 'Nathan',
        last_name: 'Hawk',
      },
      image: '/images/user-3.jpeg',
      description: 'I Live my life like its the last day. Traveller, Explorer, Developer.',
      meta: {
        rank: 'Top Rated'
      }
    },
  ],
})
export const getters = {
  users: state => {
    return state.users
  }
}
export const mutations = {}
