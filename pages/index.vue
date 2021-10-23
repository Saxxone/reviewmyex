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
import {mapGetters} from 'vuex'

export default {
  components: {UserCard},
  head() {
    return {
      title: 'Review Your Ex | All'
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({users: "users/users"}),
  },
  methods: {}

}
</script>
<style>

</style>
