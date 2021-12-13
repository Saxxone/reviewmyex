<template>
  <div class="">
    <div class="d-flex px-2 justify-content-between font-weight-bold mt-3 align-items-center text-12">
      <div class="white-pill">
        <div class="mr-1">
          <img src="/images/pin.svg" class="img-fluid" alt="">
        </div>
        <div>
          Lagos
        </div>
      </div>
      <div @click="showSearch = true" class="white-pill">
        <div class="mr-1">
          <img src="/images/search-purple.svg" class="img-fluid" alt="">
        </div>
        <div>
          Search Twitter
        </div>
      </div>
    </div>
    <div :class="[showSearch ? 'show' : '']" class="search-wrap px-2 pt-3">
      <div class="search-input d-flex align-items-center px-3">
        <div>
          <img src="/images/search.svg" style="width: 20px;" class="img-fluid" alt="">
        </div>
        <b-form-input debounce="1000" @keyup.e.enter="search" class="form-control border-0 bg-transparent"
                      placeholder="search by twitter handle"
                      v-model="filter"/>
      </div>
      <div @click="showSearch=false" class="search-overlay">
      </div>
    </div>
    <div class="py-4 px-2">
      <div v-if="searchResults.length>0">
        <UserCard v-for="user in searchResults" :key="'user'+user.id" :data="user" class="mb-3"/>
      </div>
      <div v-else>
        <UserCard v-for="user in users" :key="'user'+user.id" :data="user" class="mb-3"/>
      </div>
      <div class="py-5"></div>
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
    return {
      showSearch: false,
      filter: '',
      searchResults: []
    }
  },
  computed: {
    ...mapGetters({users: "users/users"}),
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    search() {
      if (this.filter.length > 0) {
        this.$axios.get(`http://localhost:4000/users/search/${this.filter}`).then(res => {
          this.searchResults = res.data.data
        })
      }
    },
    fetchUsers() {
      this.$store.dispatch('users/fetchUsers')
    },
    close() {
      this.showSearch = false
    }
  },
  watch: {
    filter() {
      this.search()
    }
  }

}
</script>
<style>

.search-input {
  border: none;
  background: #FFFFFF;
  box-shadow: 0 20px 60px rgba(65, 11, 24, 0.1);
  border-radius: 30px;
  box-shadow: 0 20px 60px rgba(65, 11, 24, 0.1);
}

.search-input input::placeholder {
  font-size: 12px;
  opacity: 0.7;
}

.search-wrap {
  position: fixed;
  top: 0;
  z-index: 11;
  transform: translateX(100vw);
  width: 100%;
  transition: transform .4s ease-out;
}

.search-wrap.show {
  transform: translateX(0);
  width: 100%;
  transition: transform .4s ease-out;
}

.search-overlay {
  height: 100vh;
  background: transparent;
}
</style>
