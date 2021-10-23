<template>
  <div class="user-card">
    <div class="py-4 position-relative">
      <img :src="data.image" alt="" class="img-fluid" style="border-radius: 15px">
      <div class="badge-wrap w-100 d-flex position-absolute align-items-center justify-content-center">
        <div class="badge d-flex align-items-center">
          <div class="text-capitalize ">
            <img src="/images/heart-white.svg" class=" mr-2" alt="">
            <div class="d-inline-block">
              {{ data.meta.rating }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <div class="font-bold-900 text-30">{{ `${data.name.first_name} ${data.name.last_name}` }}</div>
      <div class="font-weight-lighter color-light-grey text-12">{{ data.description }}</div>
    </div>
    <div class="d-flex justify-content-center align-items-center mt-4">
      <div  class="mr-3">
        <div class="action-circle">
          <div>
            <img src="/images/star.svg" class="img-fluid" style="width: 30px" alt="">
          </div>
        </div>
      </div>
      <div>
        <div class="action-circle">
          <div>
            <img src="/images/heart.svg" class="img-fluid" style="width: 30px" alt="">
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
  }
}
</script>

<style scoped>
.user-card {
  height: 606px;
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
  /*min-width: 400px;*/
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
