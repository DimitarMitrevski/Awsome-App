<template>
  <div class="center-elements">
    <form name="login" @submit.prevent="login">
      <h3>Sign in to your account</h3>
      <input
        type="text"
        placeholder="jhonnythedesigner@gmail.com"
        name="email"
        v-model="username"
        id="email"
      />
      <input
        type="password"
        name="password"
        id="password"
        v-model="password"
        required
        placeholder="******"
      />
      <transition name="fade-in">
        <p class="error" v-show="showErr">
          Invalid credentials, please try again!
        </p>
      </transition>
      <button type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      showErr: false,
    }
  },
  methods: {
    async login() {
      const obj = JSON.stringify({
        username: this.username,
        password: this.password,
      })
      const response = await fetch('/authenticate/login', {
        method: 'POST',
        body: obj,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => res)
      if (response?.token) {
        document.cookie = `token=${response.token}`
        await this.$store.dispatch('getUser', response.user)
        document.location.href = '/users'
      } else {
        this.showErr = true
        setTimeout(() => {
          this.showErr = false
        }, 5000)
      }
    },
  },
}
</script>

<style>
.center-elements {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  display: block;
}
form > input {
  display: block;
  margin: 10px;
  height: 50px;
  width: 260px;
  background: #e5e8ed;
  border: none;
  border-radius: 2px;
  padding-left: 40px;
}
form > input[type='password']::placeholder {
  font-size: 2rem;
  position: absolute;
  top: 15px;
}
form > button {
  display: block;
  margin: 0 auto;
  margin-top: 50px;
  height: 50px;
  width: 300px;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  background: #746bde;
  color: white;
  border-radius: 2px;
}
form > h3 {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
}
form > p {
  text-align: center;
}
.error {
  color: red;
}
.fade-in-enter-active {
  transition: all 0.3s ease;
}
.fade-in-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-in-enter, .fade-in-leave-to
/* .fade-in-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
