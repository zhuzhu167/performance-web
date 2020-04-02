var mixin = {
  data() {
    return {
      isadd: false,
      ismod: false,
      iscomf: false,
      msg: "",
    }
  },
  methods: {
    add(msg) {
      this.isadd = true;
      this.ismod = true;
      this.msg = msg;
    },
    mod(msg) {
      this.ismod = true;
      this.msg = msg;
    },
    cancel() {
      this.isadd = false;
      this.ismod = false;
    },
    openreport() {
      this.isreport = true;
    }
  },
}

export default mixin
