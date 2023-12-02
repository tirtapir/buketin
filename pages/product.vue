<template>
  <div>
    <!-- <div
      class="bg-red-500 mt-5 w-full py-5"
      v-for="product in dataAllProduct.productData"
      :key="product._id"
    >
      <div @click="getDetail(product._id)">
        {{ product.name }}
      </div>
    </div>

    {{ detailedProduct }} -->
    <!-- {{ data.productData[0].name }} -->
  </div>
</template>

<script setup>
// const detailedProduct = ref("Belum ada data yg di klik")
// const { data: dataAllProduct } = useFetch(
//   "https://buketin-api-1acd4a8e66f4.herokuapp.com/product"
// );

// const getDetail = async function (id) {
//   const { data: dataDetail } = await useFetch(
//     `https://buketin-api-1acd4a8e66f4.herokuapp.com/product/${id}`
//   );

//   detailedProduct.value = dataDetail.value

// };

// const { dataDetail: data } = useFetch(
//   "https://buketin-api-1acd4a8e66f4.herokuapp.com/product/656797a5d2c4189791b19bd4"
// );
</script>
