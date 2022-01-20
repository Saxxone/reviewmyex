<template>
  <div
    class="d-flex justify-content-between align-items-center bg-white bottom-bar-inner text-center">
    <nuxt-link v-for="(tab, index) in tabs" :key="index + 'tab'" :to="tab.url" class="px-2 py-3" style="width: 94px;">
      <div>
        <div class="mb-1">
          <img :src="tab.icon" class="" alt="">
        </div>
        <div class="text-uppercase text-10 font-weight-light">{{ tab.text }}</div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  data() {
    return {
      tabs: [
        {
          icon: '/images/search.svg',
          text: 'Explore',
          url: '/'
        },
        {
          icon: '/images/heart.svg',
          text: 'Likes',
          url: '/#'
        },
        {
          icon: '/images/star.svg',
          text: 'Reviews',
          url: '/#'
        },
        {
          icon: '/images/person.svg',
          text: 'Profile',
          url: '/#'
        },
      ]
    }
  }
}
</script>

<style scoped>
.bottom-bar-inner {
  height: 70px;
}

.nuxt-link-exact-active.nuxt-link-active {
  font-weight: 900;
  position: relative;
}

.nuxt-link-exact-active.nuxt-link-active::before {
  content: "";
  background: linear-gradient(308.16deg, #3023AE -38.29%, #C86DD7 189.48%);
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
