var dataURL = 'https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/quotes.json';

var App = new Vue({
  el: '#app',
  data: {
    quotes: [] // initialize empty array
  },
  mounted() { // when the Vue app is booted up, this is run automatically.
    var self = this // create a closure to access component in the callback below
    $.getJSON(dataURL, function(data) {
      self.quotes = data
    })
  }
})