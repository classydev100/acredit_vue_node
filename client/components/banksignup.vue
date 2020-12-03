<template>
  <v-snackbar v-model="snackbar" :color="color">
    {{ text }}
    <v-btn color="white" text @click="snackbar = false">Close</v-btn>
  </v-snackbar>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        token: ""
      },
      snackbar: true,
      color: "",
      text: "SingUp now. Please wait..."
    };
  },
  mounted() {
    let bankIdHash = this.$route.hash.substr(1);
    let isLogin = bankIdHash.split("&")[1];
    if (!isLogin) {
      let firstParam = bankIdHash.split("=")[1];
      if (firstParam) {
        this.$axios
          .post("users/signUpBankId", { bankToken: firstParam })
          .then(res => {
            if (res.status == 200) {
              this.text = "SignUp success. Please login with BankId.";
              this.color = "success";
              setTimeout(function() {
                window.close();
              }, 3000);
            }
          })
          .catch(err => {
            this.text = err.response.data.msg;
            this.color = "error";
            this.snackbar = true;
            setTimeout(function() {
              window.close();
            }, 2000);
          });
      }
    } else {
      let firstParam = bankIdHash.split("&")[0];
      let userInfo = firstParam.split("=")[1];
      this.userInfo.token = userInfo;
      try {
        this.$auth
          .loginWith("local", { data: this.userInfo })
          .then(res => {
            this.$i18n.setLocale(this.$auth.user.lang).then(window.close());
            window.opener.location.reload();
          })
          .catch(err => {
            this.snackbar = true;
          });
      } catch (err) {
        this.snackbar = true;
      }
    }
  }
};
</script>