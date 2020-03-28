<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <div class="fadeIn first">
        <h2 style="font-weight: 340;">绩效管理系统</h2>
      </div>
      <div class="box">
        <form ref="formInline">
          <div prop="account">
            <input type="text" class="fadeIn second" name="login" placeholder="请输入账号" />
          </div>
          <div prop="password">
            <input type="password" class="fadeIn third" name="login" placeholder="请输入密码" />
          </div>
          <input
            style="font-weight: 400;"
            type="button"
            class="fadeIn fourth bg-primary"
            @click="demo()"
            value="登 录"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    demo() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style scoped>
.box >>> .ivu-form-item-error-tip {
  left: 10%;
}
h2 {
  text-align: center;
  font-size: 35px;
  font-weight: 600;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  margin-top: 60px;
  margin-bottom: 45px;
  color: #3f475a;
}
h4 {
  margin-bottom: 40px;
  color: #6a60a9;
}

/* STRUCTURE */

.wrapper {
  background-color: #6a60a9;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
}

#formContent {
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 10px;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #6a60a9;
}

/* FORM TYPOGRAPHY*/

input[type="button"] {
  background-color: #6a60a9;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 17px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="button"]:hover {
  background-color: #6a60a9;
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"],
input[type="password"] {
  background-color: #f6f6f6;
  border: none;
  color: #000;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px;
  width: 70%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #6a60a9;
}

input[type="text"] :placeholder,
input[type="password"]:placeholder {
  color: #cccccc;
}

/* ANIMATIONS */
/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after {
  width: 100%;
}
/* OTHERS */

*:focus {
  outline: none;
}
</style>

</style>