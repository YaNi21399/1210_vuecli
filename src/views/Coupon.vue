<template>
  <!-- <Loading :active="isLoading"></Loading> -->
  <div class="text-end mt-4">
    <button class="btn btn-primary" @click="openCouponModal">
      建立新的優惠券
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ item.due_date }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <CouponModal ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon"></CouponModal>
  <!-- <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"/> -->
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
// import DelModal from '@/components/DelModal.vue'

export default {
  props: {
    config: Object
  },
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        code: ''
      }
    }
  },
  components: {
    CouponModal
  },
  inject: ['emitter'],
  methods: {
    getCoupons () {
      // this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.$http.get(url).then((response) => {
        // this.isLoading = false;
        if (response.data.success) {
          console.log(response)
          this.coupons = response.data.coupons
        }
      })
    },
    openCouponModal () {
      const couponComponent = this.$refs.couponModal
      couponComponent.showModal()
    },
    updateCoupon (item) {
      this.tempCoupon = item
      // 新增
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      this.$http.post(api, { data: this.tempCoupon }).then((res) => {
        console.log(res)
      })
    },
    openDeleteModal () {}
  },
  created () {
    this.getCoupons()
  }
}
</script>
