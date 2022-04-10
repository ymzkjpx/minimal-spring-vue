<template>
  <h1>Minimal Spring Vue by Vite.</h1>
  <ul :class="$style.links">
    <li :class="$style.link" >
      <router-link
          to="/">
        Home
      </router-link>
    </li>
    <li :class="$style.link">
      <router-link
          to="/hello-world"
      >
        HelloWorld
      </router-link>
    </li>
    <li :class="$style.link">
      <router-link
          to="/user-list"
      >
        UserList
      </router-link>
    </li>
  </ul>
</template>

<style module>
.links {
  list-style-type: none;
}

.link {
  font-size: 1.25rem;
  color: forestgreen;
  padding-top: 1.5rem;;
}

.link a:hover {
  color: #42b983;
}
</style>
