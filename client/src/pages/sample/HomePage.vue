<template>
  <h1>Home</h1>
  <ul :class="$style.links">
    <li>
      <router-link
          :class="$style.link"
          to="/">
        Home
      </router-link>
    </li>
    <li>
      <router-link :class="$style.link"
          to="/hello-world"
      >
        HelloWorld
      </router-link>
    </li>
    <li>
      <router-link
          :class="$style.link"
          to="/user-list">
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
  list-style-type: none;
  font-size: 1.25rem;
  color: forestgreen;
  padding-top: 1.5rem;
}

.link a:hover {
  color: #42b983;
}
</style>
