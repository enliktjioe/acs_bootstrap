
<template>
  <div id="user-container" class="container">
    <div class="row">
      <div class="col-md-7 mrgnbtm">
        <h2>Welcome to ACS Demo</h2>
        <div class="row">
          <span>Name: </span>
          <input
            type="text"
            class="form-control"
            v-model="firstName"
            name="firstname"
            id="firstName"
            aria-describedby="emailHelp"
            placeholder="First Name"
            autocomplete="off"
            v-on:keyup.enter="createUser()"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreateUser",
  data() {
    return {
      firstName: "",
      polling: null,
    };
  },
  methods: {},
};
</script>
