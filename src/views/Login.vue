<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="alert alert-danger" v-if="message">
          {{ message }}
        </div>
        <div class="card">
          <div class="card-body">
            <h3 class="mt-2 mb-3">Login</h3>
            <form @submit.prevent="login">
              <div class="form-group pb-2">
                <label for="name">User Name</label>
                <input
                  v-model="username"
                  type="text"
                  class="form-control"
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="form-group pb-2">
                <label for="email">Email</label>
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
              <div class="form-group pb-3">
                <label for="password">Password</label>
                <input
                  v-model="password"
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
    <div class="justify-content-center text-center my-4">
      <div>
        <p>User Name: Mzero</p>
        <p>Email: admin@admin.com</p>
        <p>Password: 123456</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    login() {
      if (
        this.username === "Mzero" &&
        this.email === "admin@admin.com" &&
        this.password === "123456"
      ) {
        // Save to Browser Local  Storage
        localStorage.setItem("auth", this.email);

        this.$router.push("/profile");
      } else {
        this.message = "Email or Password is incorrect";
      }
    },
  },
};
</script>
