import { defineStore } from "pinia"
import { ref, computed } from "vue"
import { useUserStore } from "@/stores/user"
import { insertCartAPI, findNewCartListAPI } from "@/apis/cart"

export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  const carList = ref([])
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if (isLogin.value) {
      await insertCartAPI({skuId, count})
      const res = await findNewCartListAPI()
      carList.value = res.result
    } else {
      const item = carList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        item.count++
      } else {
        carList.value.push(goods)
      }
    }
  }
  const delCart = (skuId) => {
    carList.value = carList.value.filter((item) => item.skuId !== skuId)
  }
  // 计算属性
  // 1. 总的数量 所有项的count之和
  const allCount = computed(() => carList.value.reduce((a, c) => a + c.count, 0))
  // 2. 总价 所有项的count*price之和
  const allPrice = computed(() => carList.value.reduce((a, c) => a + c.count * c.price, 0))
  // 3. 已选择数量
  const selectedCount = computed(() => carList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
// 4. 已选择商品价钱合计
  const selectedPrice = computed(() => carList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
  // 是否全选计算属性
  const isAll = computed(() => carList.value.every((item) => item.selected))
  // 单选
  const singleCheck = (skuId, selected) => {
    const item = carList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }
  //全选
  const allCheck = (selected) => {
    carList.value.forEach(item => item.selected = selected)
  }

  return {
    carList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    allCheck,
    isAll,
    selectedCount,
    selectedPrice
  }
},{
  persist: true
})
