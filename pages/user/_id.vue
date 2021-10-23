<template>
  <div class="pb-5">
    <div class="position-relative">
      <div class="w-100 py-4 px-1 position-absolute d-flex align-items-center justify-content-between">
        <div @click="goBack" class="cursor-pointer px-2">
          <img src="/images/chevron-left-white.svg" class="img-fluid" alt="">
        </div>
        <div class="cursor-pointer px-2">
          <img src="/images/more-vertical-outline-white.svg" class="img-fluid" alt="">
        </div>
      </div>
      <div :style="{backgroundImage: 'url('+user.image+')'}" class="user-profile"></div>
      <div class="d-flex justify-content-center">
        <div class="detail-card">
          <div class="badge-wrap d-flex position-absolute align-items-center justify-content-center">
            <div class="badge d-flex align-items-center">
              <div class="text-capitalize ">
                <img src="/images/heart-white.svg" class=" mr-2" alt="">
                <div class="d-inline-block">
                  {{ user.meta ? user.meta.rating : '' }}
                </div>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <div class="font-weight-bold text-center text-14">
              {{ `${user.name ? user.name.first_name : ''} ${user.name ? user.name.last_name : ''}` }}
            </div>
            <div class="text-center mb-4 font-weight-light text-12 text-lowercase">
              <a v-if="user.name"
                 :href="'https://mobile.twitter.com/'+ user.name.first_name.toLowerCase() + user.name.last_name.toLowerCase()"
                 target="_blank">
                @{{ user.name ? user.name.first_name + user.name.last_name : '' }}
              </a>
            </div>
            <div class="d-flex mb-2 color-light-grey align-items-center font-weight-light text-12" v-for="tag in tags"
                 :key="tag.icon">
              <div class="mr-2">
                <img :src="tag.icon" class="img-fluid mb-1" alt="">
              </div>
              <div>
                {{ tag.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 300px"></div>
    <div class="px-2 pb-5 mb-5">
      <review-card v-for="review in reviews" :review="review" class="mb-3">
      </review-card>
    </div>

    <div class="chat-circle text-center">
      <img src="/images/message-square-outline-white.svg" class="img-fluid" alt="">
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
      user: {},
      tags: [
        {
          icon: '/images/bulb.svg',
          text: '213 reviews'
        },
        {
          icon: '/images/bookmark.svg',
          text: 'Tea Totaller, Loves Photography & Travel'
        },
        {
          icon: '/images/food.svg',
          text: 'Steaks, BBQ, Hotdogs, Salads'
        },
      ],
      reviews: [
        {
          icon: '/images/bulb.svg',
          text: 'Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. '
        },
        {
          icon: '/images/bookmark.svg',
          text: 'Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. '
        },
        {
          icon: '/images/food.svg',
          text: 'Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. '
        },
      ]
    }
  },
  computed: {
    ...mapGetters({users: "users/users"}),
  },
  mounted() {
    this.getUserData()
  },
  methods: {
    getUserData() {
      const id = this.$route.params.id
      this.user = this.users[id - 1]
    },
    goBack() {
      this.$router.go(-1)
    }
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
  bottom: 75px;
  right: 14px;
  height: 54px;
  width: 54px;
}
</style>