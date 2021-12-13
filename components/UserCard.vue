<template>
  <div class="user-card" @click="viewUserProfile(data)">
    <div class="py-4 text-center position-relative">
      <div class="d-flex justify-content-center">
        <div style="max-width: 315px; max-height: 361px; overflow: hidden; border-radius: 15px">
          <img :src="data.profile_image_url.replace('_normal','')" alt="" class="img-fluid" style="border-radius: 15px">
        </div>
      </div>
      <div class="badge-wrap w-100 d-flex position-absolute align-items-center justify-content-center">
        <div class="badge d-flex align-items-center">
          <div class="text-capitalize ">
            <img src="/images/heart-white.svg" class=" mr-2" alt="">
            <div class="d-inline-block">
              {{ data.average_rating }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <div class="font-bold-900 text-30">
        <span class="d-inline-block truncate">{{
            `${data.name ? data.name : ''}`
          }}</span>
        <span v-if="data.verified"><img style="width: 16px" src="/images/verified.svg" class="img-fluid mt-n2" alt=""></span>
      </div>

      <div class="font-weight-lighter color-light-grey text-12">{{ data.description }}</div>
    </div>
    <div class="d-flex mb-4 justify-content-center align-items-center mt-4">
      <div class="mr-3">
        <div class="action-circle">
          <div class="text-warning">
            <svg width="24" height="24" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M11.6676 13.9964C11.5474 13.9969 11.4289 13.9691 11.3219 13.9154L7.48873 11.9489L3.65554 13.9154C3.4016 14.0462 3.09379 14.024 2.86217 13.8581C2.63055 13.6921 2.51554 13.4115 2.56572 13.1347L3.31732 8.98823L0.220713 6.04226C0.0238347 5.84975 -0.0484485 5.56643 0.0328117 5.30577C0.121684 5.03874 0.357823 4.84448 0.641611 4.80496L4.92576 4.19367L6.81228 0.415463C6.93786 0.16138 7.20062 0 7.48873 0C7.77683 0 8.03959 0.16138 8.16517 0.415463L10.0742 4.1863L14.3584 4.79759C14.6422 4.83712 14.8783 5.03137 14.9672 5.29841C15.0484 5.55906 14.9762 5.84238 14.7793 6.0349L11.6827 8.98087L12.4343 13.1273C12.4891 13.4092 12.3717 13.6967 12.1336 13.8638C11.9975 13.9573 11.8337 14.0039 11.6676 13.9964V13.9964Z"
                    fill="currentColor"/>

            </svg>

          </div>
        </div>
      </div>
      <div>
        <div class="action-circle">
          <div class="text-danger">
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.01" width="16" height="16" fill="black"/>
              <path
                d="M8.00002 14C7.82281 14.001 7.6525 13.9315 7.52668 13.8067L2.34668 8.62001C0.994384 7.25358 0.994384 5.05311 2.34668 3.68668C3.71011 2.3271 5.91659 2.3271 7.28002 3.68668L8.00002 4.40668L8.72002 3.68668C10.0834 2.3271 12.2899 2.3271 13.6533 3.68668C15.0056 5.05311 15.0056 7.25358 13.6533 8.62001L8.47335 13.8067C8.34754 13.9315 8.17722 14.001 8.00002 14Z"
                fill="currentColor"/>
            </svg>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    data: {type: Object}
  },
  methods: {
    viewUserProfile(data) {
      this.$router.push({path: '/user/' + data.pid, params: {image: this.data.image}})
    }
  }
}
</script>

<style scoped>
.user-card {
  background: #FFFFFF;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 15px;
}

.badge {
  width: fit-content;
  background: linear-gradient(308.16deg, #3023AE -38.29%, #C86DD7 189.48%);
  border-radius: 15px;
  color: #fff;
  padding: 6px 15px;
}

.badge-wrap {
  bottom: 12px;
}

.action-circle {
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background: #FFFFFF;
  box-shadow: 0 10px 20px rgba(65, 11, 24, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
