<template>
  <div class="pb-5">
    <div class="d-flex px-2 justify-content-between font-weight-bold mt-3 align-items-center text-12">
      <div class="white-pill">
        <div class="mr-1">
          <img src="/images/pin.svg" class="img-fluid" alt="">
        </div>
        <div>
          Lagos
        </div>
      </div>
      <div class="white-pill">
        <div class="mr-1">
          <img src="/images/filter.svg" class="img-fluid" alt="">
        </div>
        <div>
          Twitter
        </div>
      </div>
    </div>
    <div class="py-4 px-2">
      <UserCard v-for="user in users" :key="user.id" :data="user" class="mb-3"/>
    </div>
  </div>
</template>
<script>
import UserCard from "~/components/UserCard";

export default {
  components: {UserCard},
  head(){
    return {
      title: 'Review Your Ex | All'
    }
  },
  data() {
    return {
      users: [
        {
          id: '@1t1',
          name: {
            first_name: 'Kim',
            last_name: 'Stephen',
          },
          image: '/images/user-1.jpeg',
          description: 'Full-time Traveller. Globe Trotter.. Occasional Photographer. Part time Singer/Dancer.',
          meta: {
            rating: 'Top Rated'
          }
        },
        {
          id: '@1t2',
          name: {
            first_name: 'Stephen',
            last_name: 'Patrick',
          },
          image: '/images/user-2.jpeg',
          description: 'I Live my life like its the last day. Traveller, Explorer, Developer.',
          meta: {
            rating: 'Top Rated'
          }
        },
        {
          id: '@1t3',
          name: {
            first_name: 'Nathan',
            last_name: 'Hawk',
          },
          image: '/images/user-3.jpeg',
          description: 'I Live my life like its the last day. Traveller, Explorer, Developer.',
          meta: {
            rating: 'Top Rated'
          }
        },
      ],
    }
  },
  methods: {}

}
</script>
<style>

</style>
