<template>
  <div class="review-card">
    <div class="mb-3 d-flex align-items-center">
      <div>
        <div class="user-circle"></div>
      </div>
      <div class="text-14 color-light-grey ml-2" style="opacity: 0.7">Anonymous</div>
    </div>
    <div>
      <p class="text-black font-weight-light text-12">{{review.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCard",
  props: ['review']
}
</script>

<style scoped>
.user-circle {
  background: linear-gradient(308.16deg, #3023AE -38.29%, #C86DD7 189.48%);
  border-radius: 100px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 54px;
}

.review-card {
  background: #FFFFFF;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 15px;
}
.text-black {
  color: #000;
}
</style>
