Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBEueVyUF6ZWIfBu54xiBhWSFQdO_k7Nfg"
  }
})

const map = new Vue({
  el: '#app',
  data: {
    message: 'This map',
    cameras: [],
    infoWindows: [],
    zoom: 8,
    center: {
      lat: 36.1627,
      lng: -86.7816
    },

  },
  mounted() {
    axios.get('/api/cameras/')
      .then(response => this.cameras = response.data,
            error => console.error(error))
      .catch(error => console.error(error))
  },
  methods: {
    openInfoWindow: function (camera) {
      this.infoWindows.push({
        options: {
          content: `
            <h1>${camera.description}<h1>
            <img src="/api/stream/test/">
          `
        },
        position: camera.location.coordinates[0]
      })
    }
  }
})
