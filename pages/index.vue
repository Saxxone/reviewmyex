<template>
  <div>
    <div class="py-4 px-2 mt-4">
      <UserCard v-for="user in users" :key="user.id" :data="user"/>
    </div>
  </div>
</template>
<script>

import UserCard from "~/components/UserCard";

export default {
  components: {UserCard},
  data() {
    return {
      users: [
        {
          id: '@1t1',
          name: {
            first_name: 'Timothy',
            last_name: 'Garza',
          },
          image: '/images/user-1.jpeg',
          description: 'Full-time Traveller. Globe Trotter.. Occasional Photographer. Part time Singer/Dancer.',
          meta: {
            rating: 'Top Rated'
          }
        }
      ]
    }
  },

}
</script>
<style>

</style>
