import { defineStore } from "pinia"
import { ref } from "vue"

export const useCartStore = defineStore('cart', () => {
  const carList = ref([])
  const addCart = (goods) => {
    // 添加过 count+1 否则 push
    const item = carList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      item.count++
    } else {
      carList.value.push(goods)
    }
  }
  const delCart = (skuId) => {
    carList.value = carList.value.filter((item) => item.skuId !== skuId)
  }
  return {
    carList,
    addCart,
    delCart
  }
},{
  persist: true
})
