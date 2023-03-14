const myApp = Vue.createApp({
  data() {
    return {
      albumsList: [],
    };
  },
  created() {
    axios
      .get(
        "http://localhost/Esercizi%20Corso%20Boolean/php-dischi-json/API/get-list.php"
      )
      .then((response) => {
        this.albumsList = response.data;
        console.log(this.albumsList);
      });
  },
});
myApp.mount("#root");
