<template>
  <div id="notification-snackbar" class="notification-snackbar d-flex justify-content-center text-white">
    <div class="content-wrap">
      <div
        :class="[type === 'success' ? 'notification-snackbar-success' : '', type === 'error' ? 'notification-snackbar-error' : '', ] "
        class="d-flex align-items-center notification-snackbar-content">
        <div class="d-flex align-items-center flex-grow-1">
          <div class="mr-2 notification-snackbar-icon">
            <span class="text-white" v-if="type === 'error'">
             <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M13,10H11V6H13V10M13,12H11V14H13V12M22,4V16A2,2 0 0,1 20,18H6L2,22V4A2,2 0 0,1 4,2H20A2,2 0 0,1 22,4M20,4H4V17.2L5.2,16H20V4Z" />
</svg>
            </span>
            <span class="text-white" v-else-if="type === 'success'">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
</svg>
            </span>
          </div>
          <div class="flex-grow-1 pl-2">
            <div class="">{{ content }}</div>
          </div>
        </div>
        <div class="text-white ml-3">
          <span class="text-white" @click="closeNotification">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
          </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notificationSnackbar",
  computed: {
    status() {
      return this.$store.state.notifications.status
    },
    content() {
      return this.$store.state.notifications.content
    },
    type() {
      return this.$store.state.notifications.type
    }
  },
  methods: {
    closeNotification() {
      this.$store.commit('notifications/hideNotification', false)
    }
  },
  watch: {
    status(newVal, oldVal) {
      console.log(newVal)
      if (newVal === true)
        document.querySelector("#notification-snackbar").classList.add('show')
      else {
        document.querySelector("#notification-snackbar").classList.remove('show')
      }
    }
  }
}
</script>

<style scoped>
.notification-snackbar {
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 2000;
  transform: translateY(400px);
  transition: transform .4s ease-in-out;
}

.notification-snackbar-error {
  background: #FF2A52;
}

.notification-snackbar-success {
  background: #45B26B;
}

.notification-snackbar-content {
  max-width: 495px;
  width: 100%;
  margin: 10px;
  box-shadow: 0 23px 44px rgba(176, 183, 195, 0.14);
  min-height: 74px;
  border-radius: 5px;
  padding: 20px;
}

@media all and (min-width: 768px) {
  .notification-snackbar-content {
    margin-left: 250px !important;
  }
}

.notification-snackbar.show {
  transform: translateY(-70px);
  transition: transform .4s ease-in-out;
}


.notification-snackbar-icon {
  padding-right: 24px;
  padding-left: 16px;
  opacity: 0.4;
  border-right: 1px solid rgba(255, 255, 255, 1);
}

.notification-snackbar-icon i {
  font-size: 20px;
}

</style>
