<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4 mb-3" v-for="i in [0, 1, 2, 3, 4, 5]" :key="i">
        <div class="card">
          <div class="card-body text-center">
            <img src="@/assets/logo.png" alt="" />
            <p class="text-muted fs-5 fw-bold">Product Name</p>
            <h3 class="my-4">100 KS</h3>
            <button class="btn btn-primary btn-block">More Detail</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
