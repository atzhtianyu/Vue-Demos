<template>
  <form class="login_form">
    <div class="login_form_r1">
      <login-textfield label="First name" icon="user" />
      <login-textfield label="Last name" />
    </div>
    <div class="login_form_r2">
      <login-textfield label="Email address" icon="envelope-o" />
    </div>
    <div class="login_form_r3">
      <login-textfield label="Enter password" icon="lock" />
    </div>
    <div class="login_form_r4">
      <login-textfield label="Confirm password" icon="lock" />
    </div>
    <div class="login_form_r5">
      <login-checkbox label="Keep me sign in"/>
      <label>Forget password</label>
    </div>
  </form>
</template>

<script>
import LoginTextfield from './LoginTextfield.vue';
import LoginCheckbox from './LoginCheckbox.vue';
export default {
  components: {
    LoginTextfield,
    LoginCheckbox
  }
};
</script>

<style>
.login_form {
  padding: 20px;
}

.login_form > div {
  padding-bottom: 10px;
  display: flex;
  min-height: 40px;
  justify-content: space-between;
  transition: all 0.6s ease;
}


</style>
