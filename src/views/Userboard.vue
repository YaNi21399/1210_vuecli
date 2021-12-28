<template>
  <nav class="nav navbar-expand-lg vav-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand text-white" to="/user/cart">用戶端範例</router-link>
    </div>
  </nav>
  <div class="container-fluid nt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: {
    ToastMessages
  }
}
</script>
