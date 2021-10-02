<template>
  <div v-if="user">
    <div class="background-black" @click="$emit('close')"></div>

    <div
      class="user-info"
      :style="{ 'background-image': `url(${user.image})` }"
    >
      <div class="close" @click="$emit('close')">X</div>

      <div class="contact-info">
        <p>
          <span class="iconify" data-icon="vs:profile"></span>

          {{ user.name }}
        </p>
        <p>
          <span class="iconify" data-icon="fluent:mail-28-filled"></span>
          <a
            :href="`mailto: ${user.email}?subject=We%20are%20hiring!&body=Hello%20${user.name}.%20We'd%20like%20to%20propose%20you%20an%20offer.`"
          >
            {{ user.email }}</a
          >
        </p>
        <p>
          <span class="iconify" data-icon="bx:bxs-phone"></span>
          {{ user.phone }}
        </p>
        <p>
          <span class="iconify" data-icon="clarity:house-solid"></span>
          {{ user.address.city }}, {{ user.address.street }}
        </p>
        <p>
          <span
            class="iconify"
            data-icon="emojione-monotone:globe-with-meridians"
          ></span>
          {{ user.website }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopUp',
  props: ['user'],
}
</script>

<style>
.background-black {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 80%;
  height: 100vh;
  top: 0px;
  animation: fade-in 0.3s ease-in;
  /* z-index: 1; */
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.user-info {
  position: fixed;
  width: 60%;
  top: 50%;
  height: 50vh;
  margin: 0 10%;
  transform: translateY(-25vh);
  background: white;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}
.close {
  font-size: 30px;
  cursor: pointer;
  user-select: none;
  position: absolute;
  position: absolute;
  top: 10px;
  right: 20px;
}
/* .row {
  height: 100%;
} */
.profile-img {
  width: 30%;
  height: 100%;
  display: inline-block;
}
.contact-info {
  padding-top: 10px;
  padding-left: 40vh;
}
.contact-info > p {
  margin: 20px 0;
  font-size: 1.5vw;
  display: flex;
  align-items: center;
}
.contact-info p > .iconify {
  padding: 4px;
  margin-right: 15px;
  border: 2px solid black;
  border-radius: 50%;
}
.contact-info a {
  text-decoration: none;
  color: black;
}
@media only screen and (max-width: 768px) {
  .user-info {
    height: 36vh;
  }
  .contact-info {
    padding-left: 28vh;
  }
  .contact-info > p {
    margin: 10px 0;
    font-size: 1rem;
  }
}
@media only screen and (max-width: 724px) {
  /* .user-info {
    height: 30vw;
  } */
  .contact-info {
    padding: 0;
    margin: 0 auto;
  }
  .contact-info > p {
    margin: 10px 0;
    font-size: 1rem;
  }
  .background-black {
    width: 100%;
    left: 0;
  }
  .user-info {
    min-height: 50vh;
    width: 90%;
    left: -5%;
    background-image: none !important;
  }
}
</style>
