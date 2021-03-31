var app = new Vue({
  el: "#app",
  data: {
    list: [],
    newItem: "",
  },
  methods: {
    getList() {
      axios
        .get("https://node-crud-777.herokuapp.com/user/getList")
        .then((res) => {
          this.list = res.data.Result;
        })
        .catch((err) => {
          console.log("XHR錯誤");
        });
    },
    addItem() {
      const data = {
        content: this.newItem,
      };
      axios
        .post("https://node-crud-777.herokuapp.com/user/addList", data)
        .then((res) => {
          this.newItem = "";
          this.getList();
        })
        .catch((err) => {
          console.log("XHR錯誤");
        });
    },
    removeItem(_id) {
      const data = {
        id: _id,
      };
      axios
        .post("https://node-crud-777.herokuapp.com/user/deleteList", data)
        .then((res) => {
          this.getList();
        })
        .catch((err) => {
          console.log("XHR錯誤");
        });
    },
  },
  created() {
    this.getList();
  },
});
