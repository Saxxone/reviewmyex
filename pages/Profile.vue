<template>
  <div class="" v-if="user.username">
    <div class="position-relative">
      <div class="w-100 py-4 px-1 position-absolute d-flex align-items-center justify-content-between">
        <div @click="goBack" class="cursor-pointer d-flex align-items-center justify-content-center back-button">
          <div>
            <img src="/images/chevron-left-white.svg" class="img-fluid mb-1" alt="">
          </div>
        </div>
        <div class="cursor-pointer px-2">
          <img src="/images/more-vertical-outline-white.svg" class="img-fluid" alt="">
        </div>
      </div>
      <div :style="{backgroundImage: 'url('+ user.profile_image_url.replace('_normal','')+')'}"
           class="user-profile"></div>
      <div class="d-flex justify-content-center">
        <div class="detail-card">
          <div class="badge-wrap d-flex position-absolute align-items-center justify-content-center">
            <div class="badge d-flex align-items-center">
              <div class="text-capitalize ">
                <img src="/images/heart-white.svg" class=" mr-2" alt="">
                <div class="d-inline-block">
                  {{ user.average_rating ? user.average_rating : '' }}
                </div>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <div class="font-weight-bold text-center text-14">
             <span class="d-inline-block truncate">{{
                 `${user.name ? user.name : ''}`
               }}</span>
              <span v-if="user.verified"><img style="width: 16px" src="/images/verified.svg" class="img-fluid mt-n2"
                                              alt=""></span>
            </div>
            <div class="text-center font-weight-light text-12 text-lowercase">
              <a v-if="user.username"
                 :href="'https://mobile.twitter.com/'+ user.username.toLowerCase()"
                 target="_blank">
                @{{ user.username ? user.username : '' }}
              </a>
            </div>
            <div class="text-center small mb-1 font-weight-light text-12 text-lowercase">
              <img src="/images/star.svg" style="width: 12px" alt="">
              <img src="/images/star.svg" style="width: 12px" alt="">
              <img src="/images/star.svg" style="width: 12px" alt="">
              <img src="/images/star.svg" style="width: 12px" alt="">
              <img src="/images/star.svg" style="opacity: 0.3; width: 12px" alt="">
            </div>
            <div
              class="d-flex mb-2 text-center justify-content-center color-light-grey align-items-center font-weight-light text-12">
              <div>
                {{ user.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 140px"></div>
    <div class="px-2 pb-5">
      <review-card v-for="(review, index) in user.reviews_by_me" :review="review" :key="'review'+index" class="mb-3">
      </review-card>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "user",
  layout: 'general',
  data() {
    return {
      showChat: false,
    }
  },
  computed: {
    ...mapGetters({user: "users/user"}),
  },
  mounted() {
    this.getUserData()
  },
  methods: {
    getUserData() {
      const username = this.$route.params.id
      console.log(username)
      this.$store.dispatch('users/getUser', username)
    },
    goBack() {
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped>
.user-profile {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
}

.detail-card {
  background: #FFFFFF;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 15px;
  position: absolute;
  top: 370px;
  width: calc(100vw - 30px);
}

.badge {
  width: fit-content;
  background: linear-gradient(308.16deg, #3023AE -38.29%, #C86DD7 189.48%);
  border-radius: 15px;
  color: #fff;
  padding: 6px 15px;
}

.badge-wrap {
  top: -12px;
  width: calc(100vw - 60px);
}

.chat-circle {
  background: linear-gradient(308.16deg, #3023AE -38.29%, #C86DD7 189.48%);
  border-radius: 100px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 30px;
  right: 14px;
  height: 54px;
  font-weight: 800;
  font-size: 12px;
  width: fit-content;
  padding: 0 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  z-index: 10;
  transition: transform .4s ease-in-out;
}

.review-input {
  border: none;

}

.action-circle {
  width: 54px;
  height: 54px;
  border-radius: 100px;
  background: #FFFFFF;
  box-shadow: 0 10px 20px rgba(70, 12, 23, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
}

.chat-wrap {
  position: fixed;
  bottom: 30px;
  width: 100%;
  transform: translateX(-120vw);
  transition: transform .4s ease-out;
}

.chat-wrap.show {
  transform: translateX(0);
  width: 100%;
  transition: transform .4s ease-out;
}

.review-input textarea {
  vertical-align: middle;
  border-radius: 100px;
  height: 54px;
  resize: none;
  width: calc(100vw - 60px);
  box-shadow: 0 10px 20px rgba(65, 11, 24, 0.1);
}

.chat-circle.show {
  transform: translateX(180px);
  transition: transform .4s ease-in-out;
}

.back-button {
  background-color: rgba(0, 0, 0, 0.25);
  width: 36px;
  height: 36px;
  border-radius: 4px;
}
</style>
