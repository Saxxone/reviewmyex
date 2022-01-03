<template>
  <div class="">
    <div class="d-flex px-2 top-bar justify-content-end font-weight-bold mt-3 align-items-center text-12">
      <!--      <div class="white-pill">-->
      <!--        <div class="mr-1">-->
      <!--          <img src="/images/pin.svg" class="img-fluid" alt="">-->
      <!--        </div>-->
      <!--        <div>-->
      <!--          Earth-->
      <!--        </div>-->
      <!--      </div>-->
      <div @click="showSearch = true" class="white-pill">
        <div class="mr-1 ml-auto">
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
        <b-form-input debounce="1000" type="search" @keyup.enter="search" class="form-control border-0 bg-transparent"
                      placeholder="search by twitter handle"
                      v-model="filter"/>
      </div>
      <div @click="showSearch=false" class="search-overlay">
      </div>
    </div>
    <div class="py-4 px-2">
      <div v-if="showSearchResults">
        <UserCard v-for="user in searchResults" :key="'user'+user.id" :data="user" class="mb-3"/>
      </div>
      <div v-else>
        <UserCard v-for="user in users" :key="'user'+user.id" :data="user" class="mb-3"/>
      </div>
      <div class="py-5"></div>
    </div>
    <NotificationSnackbar/>
  </div>
</template>
<script>
import UserCard from "~/components/UserCard";
import NotificationSnackbar from "~/components/notification-snackbar";
import {mapGetters} from 'vuex'

export default {
  components: {UserCard, NotificationSnackbar},
  head() {
    return {
      title: 'Review Your Ex | All'
    }
  },
  data() {
    return {
      showSearch: false,
      filter: '',
      showSearchResults: false,
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
        if (this.filter.charAt(0) === '@') this.filter = this.filter.substring(1);
        this.$axios.get(`https://api.reviewmyex.com/users/search/${this.filter.toLowerCase()}`).then(res => {
          this.showSearchResults = false
          if (res.data.data)
            this.searchResults = res.data.data
          else {
            this.searchResults[0] = res.data
          }
          this.showSearchResults = true
        }).catch(e => {
          this.$notification('error', e.message, true)
          console.log(e.message)
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

.top-bar {
  position: fixed;
  width: 100vw;
  padding: 10px 0;
  top: 0px;
  z-index: 2;
  left: 4px;
  background-color: rgba(255, 255, 255, 0.05);
}
</style>
