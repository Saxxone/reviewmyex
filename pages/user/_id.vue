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
    <div style="height: 190px"></div>
    <div class="px-2 pb-5">
      <div class="text-center color-light-grey font-bold-900 text-30" v-if="user.others_reviews.length < 1">
        No Reviews Yet
      </div>
      <div v-else>
        <review-card v-for="(review, index) in user.others_reviews" :review="review" :key="'review'+index" class="mb-3">
        </review-card>
      </div>
    </div>

    <div class="chat-circle text-center" :class="[showChat ? 'show' : '']" @click="showChat = !showChat">
      <img src="/images/message-square-outline-white.svg" class="img-fluid mr-2" alt=""> Write Review
    </div>
    <div :class="[showChat ? 'show' : '']" class="chat-wrap p-2">
      <div class="chat-wrap-content ">
        <div class="d-flex mb-4">
          <div>Send Review</div>
          <div @click="close" class="close-btn ml-auto">
            <div>
              <img src="/images/cancel.svg" class="img-fluid" style="opacity: 0.6; width: 10px" alt="">
            </div>
          </div>
        </div>
        <div class="review-input px-2">
          <b-form-group description="Your username will be kept anonymous">
            <label>Username</label>
            <b-input type="text" placeholder="your twitter username e.g @twitter" v-model="review.username"/>
          </b-form-group>
          <b-form-group>
            <label>Your review</label>
            <b-textarea class="form-control mr-3" v-model="review.content"></b-textarea>
          </b-form-group>
          <div>
            <div class="">
              <button class="btn btn-primary text-white"
                      :disabled="review.content.length < 1  ||  review.username.length < 1"
                      @click="sendReview">
                Save
              </button>

            </div>
          </div>
        </div>
      </div>
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
      review: {
        content: '',
        username: ''
      },
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
    sendReview() {
      const review_for = this.$route.params.id
      if (this.review.username.charAt(0) === '@') this.review.username = this.review.username.substring(1);
      let review = {
        review_for: review_for,
        review_by: this.review.username,
        content: this.review.content
      }
      this.$axios.post('http://localhost:4000/reviews/create', review).then(res => {
        this.close()
        this.getUserData()
        this.review = {
          content: '',
          username: ''
        }
        this.$notification('success', 'saved', true)
      }).catch(e => {
        this.$notification('error', e.message, true)
      })
    },
    close() {
      this.showChat = false
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
  bottom: 30px;
  right: 14px;
  height: 54px;
  font-weight: 800;
  font-size: 12px;
  width: fit-content;
  padding: 0 16px;
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);*/
  z-index: 10;
  transition: transform .4s ease-in-out;
}

.review-input {
  border: none;

}

.btn-primary {
  width: 100%;
  height: 50px;
  box-shadow: 0 10px 20px rgba(65, 11, 24, 0.1);
}

input::placeholder {
  font-size: 14px;

}

.chat-wrap {
  position: fixed;
  bottom: 30px;
  width: 100%;
  transform: translateY(120vw);
  transition: transform .4s ease-out;

}

.chat-wrap-content {
  background-color: white;
  border: 1px solid #cfcfcf;
  padding: 18px 10px;
  box-shadow: 0 10px 20px rgba(65, 11, 24, 0.1);
}

.chat-wrap.show {
  transform: translateX(0);
  width: 100%;
  transition: transform .4s ease-out;
}

.review-input {
  /*height: 54px;*/
  resize: none;
}

.review-input textarea, .review-input input {
  background-color: white;
  margin-bottom: 10px;
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

.close-btn {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

label {
  font-size: 14px !important;
}
</style>
