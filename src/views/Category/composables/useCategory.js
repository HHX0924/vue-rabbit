import { onMounted, ref } from "vue"
import { onBeforeRouteUpdate, useRoute } from "vue-router"
import { getTopCategoryAPI } from "@/apis/category"

export function useCategory () {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id = route.params.id ) => {
    const res = await getTopCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(()=> getCategory())

  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })
  return {
    categoryData
  }
}
