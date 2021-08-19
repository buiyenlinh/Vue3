<template>
  <h2>This is users page</h2>
  <router-link to="/users/yenlinh">Home</router-link> |
  <router-link to="/users/yenlinh/profile">Profile</router-link>
  <router-view></router-view>
</template>

<style scoped>
.router-link-exact-active {
  color: green;
}
</style>