<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      增加一個產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="200">購買時間</th>
        <th width="200">Email</th>
        <th width="200">購買款項</th>
        <th width="200">應付金額</th>
        <th width="200">是否付款</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in orders" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
        <td class="text-right">{{ $filters.currency(item.price) }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-success" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDeleteModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      orders: []
    }
  },
  methods: {
    getOrders () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log(res.data)
          this.orders = res.data.orders
          // this.pagination = res.data.pagination
        }
      })
    }
  }
}
</script>
