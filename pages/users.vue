<template>
  <div class="parent">
    <div class="left-side">
      <div class="logo"><h2>Logoipsum</h2></div>
      <ul class="nav">
        <li>Menu Element</li>
        <li>Menu Element</li>
        <li>Menu Element</li>
      </ul>
      <div class="logout">
        <p @click="logout">
          <span class="iconify" data-icon="cil:account-logout"></span>
          <b>Admin</b>
        </p>
      </div>
    </div>
    <div class="right-side">
      <h1>
        Users
        <div class="underline"></div>
      </h1>
      <div class="listings">
        <div
          class="user-card"
          v-for="user in users"
          :key="user.id"
          @click="setUser(user)"
        >
          <img :src="user.image" width="100%" />
          <div class="details">
            <p>
              <b>{{ user.name }}</b> <br />{{ user.address.city }}
            </p>
          </div>
        </div>
      </div>
      <PopUp :user="user" @close="user = null" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      user: null,
    }
  },
  async fetch() {
    this.users = await fetch(
      'https://jsonblob.com/api/jsonBlob/891610589164748800'
    )
      .then((res) => res.json())
      .then((res) => res)
  },
  methods: {
    logout() {
      document.cookie = 'token=; Max-Age=0'
      this.$store.commit('setUser', {})
      document.location.href = '/login'
    },
    setUser(usr) {
      this.user = usr
    },
  },
}
</script>

<style>
.parent {
  display: flex;
  padding: 0;
  margin: 0;
}
.left-side {
  width: 20%;
  height: 100vh;
  padding-left: 20px;
}
.right-side {
  width: 80%;
}
.right-side > h1 {
  text-align: right;
  padding: 20px;
  text-transform: uppercase;
  font-weight: bolder;
  position: relative;
  color: #394149;
  margin-bottom: 20px;
  margin-right: 20px;
}
h1 > .underline {
  width: 112px;
  height: 10px;
  background: #394149;
  position: absolute;
  top: 65px;
  right: 10px;
  border-radius: 50px;
}
.listings {
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  grid-row-gap: 10px;
  padding-right: 30px;
}
.user-card {
  margin: 20px;
  position: relative;
}
.user-card > img {
  border-radius: 10px;
  cursor: pointer;
}
.user-card:hover > img {
  filter: brightness(50%);
  transition: 0.5s ease;
}
.details {
  display: none;
}
.user-card:hover > .details {
  position: absolute;
  display: block;
  top: 50%;
  width: 100%;
  text-align: center;
  transform: translateY(-30px);
  color: white;
  cursor: pointer;
  line-height: 200%;
}
.user-card:hover::after {
  content: '\2709';
  font-size: 1.5rem;
  position: absolute;
  right: 10px;
  top: 10px;
  color: #fff;
}
.left-side > .logo {
  height: 7%;
  display: flex;
  align-items: center;
}
.left-side > .nav {
  height: 78%;
}
.left-side > .logout {
  height: 10%;
  display: flex;
  align-items: flex-end;
}
.nav {
  list-style: none;
  padding: 0 10px;
}
.nav > li {
  margin: 30px auto;
  text-align: center;
  padding: 10px 0px;
  border-top: 2px solid #394149;
  border-bottom: 2px solid #394149;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.3rem;
}
.logout {
  cursor: pointer;
  user-select: none;
}
@media only screen and (max-width: 768px) {
  .listings {
    display: inline-grid;
    grid-template-columns: auto auto;
  }
}
@media only screen and (max-width: 724px) {
  .listings {
    display: inline-grid;
    grid-template-columns: auto;
  }
  .left-side {
    display: none;
  }
  .right-side {
    width: 100%;
  }
}
/* .user-card > .shadow {
  position: absolute;
  width: 100%;
  height: 99%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  bottom: 6px;
  border-radius: 10px;
} */
</style>
