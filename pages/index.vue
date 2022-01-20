<template>
  <div class="">
    <div class="container mb-4" v-if="!showSearchResults">
      <h1 class="font-bold-900 mt-5 mb-3 pt-4">Review My Ex</h1>
      <p class="color-light-grey">Rate and review your ex or that special date. Warn others about predators or show some
        love by telling someone how much you loved
        being with them.</p>
      <b-input debounce="1000" type="search" @keyup.enter="onClickSearch" class="search-input-mod mb-3 bg-transparent"
               placeholder="search by twitter handle e.g @twitter"
               v-model="searchUsername"/>
      <button class="btn btn-primary text-white"
              @click="onClickSearch">
        <b-spinner small label="Spinning" v-if="isLoading"></b-spinner>
        Search
      </button>
    </div>

    <div class="d-flex px-2 top-bar justify-content-between font-weight-bold mt-3 align-items-center text-12">
      <div @click="showSearchResults=false; fetchUsers();" class="" v-if="showSearchResults">
        <div style="opacity: 0.6" class="mr-1 d-flex align-items-center justify-content-center text-center back-button">
          <div>
            <img src="/images/cancel.svg" width="16px" class="img-fluid" alt="">
          </div>
        </div>
      </div>
      <div @click="showSearch = true" class="white-pill ml-auto">
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
                      placeholder="search by twitter handle e.g @twitter"
                      v-model="filter"/>
      </div>
      <div @click="showSearch=false" class="search-overlay">
      </div>
    </div>
    <div class="py-4 px-2">
      <div v-if="users.length < 1 && searchResults.length < 1" class="d-flex justify-content-center align-items-center">
        <div>
          <b-spinner type="grow"></b-spinner>
        </div>
      </div>

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
      title: 'Review Your Ex | All',
      meta: [
        {hid: 'og:image', property: 'og:image', content: '/review.jpeg'}
      ]
    }
  },
  data() {
    return {
      showSearch: false,
      filter: '',
      searchUsername: '',
      showSearchResults: false,
      searchResults: [],
      isLoading: false
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
        this.isLoading = true
        if (this.filter.charAt(0) === '@') this.filter = this.filter.substring(1);
        this.$axios.get(`https://api.reviewmyex.com/users/search/${this.filter.toLowerCase()}`).then(res => {
          this.showSearchResults = false
          if (res.data.data)
            this.searchResults = res.data.data
          else {
            this.searchResults[0] = res.data
          }
          this.isLoading = false
          this.showSearchResults = true
        }).catch(e => {
          this.$notification('error', e.message, true)
          console.log(e.message)
          this.isLoading = false
        })
      }
    },
    onClickSearch() {
      console.log("hello")
      if (this.searchUsername.length > 0) {
        this.isLoading = true
        if (this.searchUsername.charAt(0) === '@') this.searchUsername = this.searchUsername.substring(1);
        this.$axios.get(`https://api.reviewmyex.com/users/search/${this.searchUsername.toLowerCase()}`).then(res => {
          this.showSearchResults = false
          if (res.data.data)
            this.searchResults = res.data.data
          else {
            this.searchResults[0] = res.data
          }
          this.isLoading = false
          this.showSearchResults = true
        }).catch(e => {
          this.$notification('error', e.message, true)
          console.log(e.message)
          this.isLoading = false
        })
      }
    },
    async fetchUsers() {
      await this.$store.dispatch('users/fetchUsers')
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

.search-input-mod {
  border: 1px solid #a889cb;
  height: 48px;
  background: #FFFFFF;
  box-shadow: 0 20px 60px rgba(65, 11, 24, 0.1);
  border-radius: 5px;
  color: #3023AE;
}

.search-input-mod::placeholder {
  font-size: 14px;
}
</style>
