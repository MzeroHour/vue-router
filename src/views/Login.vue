<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="mt-2 mb-3">Login</h3>
            <form action="">
              <div class="form-group pb-2">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="form-group pb-2">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
              <div class="form-group pb-3">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter Your Password"
                />
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary btn-block pb-2">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <small>
              <p class="text-muted mt-2">
                Don't have an account? <a href="">Register</a>
              </p></small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
