<template>
  <nav class="nav navbar-expand-lg vav-dark bg-dark">
    <div class="container-fluid">
      <Navbar></Navbar>
    </div>
  </nav>
  <div class="container-fluid nt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import Navbar from '../components/Navbar'

export default {
  components: {
    ToastMessages,
    Navbar
  },
  provide: {
    emitter
  }
}
</script>
