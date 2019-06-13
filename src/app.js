var dataURL = 'https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/quotes.json'



new Vue({
  el: '#app',
  data () {
    return{
      size: 15,
      search: '',
      json: null,
      selectedCategory: "All",
      pageNumber: 0,
  }},

  methods:{
    nextPage(){
       var count = this.pageCount
       if(this.pageNumber < count - 1){
       this.pageNumber++;}
    },
    prevPage(){
      if(this.pageNumber > 0){
      this.pageNumber--;}
    }
},


  



  computed: {


    pageCount: function(){
      if(this.json != null){
      var l = this.filteredBoth.length;
      s = this.size;
      return Math.ceil(l/s);}
},


      paginatedData: function(){
        if(this.json != null){
              var l = this.filteredBoth;
              const start = this.pageNumber * this.size
              const end = start + this.size;
              return l.slice(start, end);}
      },
 

    filteredSearch: function () {
      this.pageNumber = 0
      var str = this.search
      if(str != '') {
      return this.json.filter(function(media){
        return  media.quote.toLowerCase().includes(str.toLowerCase()) || media.source.toLowerCase().includes(str.toLowerCase()) || media.theme.toLowerCase().includes(str.toLowerCase())
      })}
      else{
        return this.json
      }
      

    },


		filteredMedia: function() {
		var category = this.selectedCategory;
			if(category === "All") {
        this.pageNumber = 0
				return this.json;
			} else {
        this.pageNumber = 0
				return this.json.filter(function(media) {
        return media.theme === category
				});
			}
      

    },


   filteredBoth: function(){
     var l1 = this.filteredSearch
     var l2 = this.filteredMedia
     if (l1 && l2 != null){
      return l1.filter(value => -1 !== l2.indexOf(value))}
   },


   
    
   
    
  },

  


 

  created: function () {
    fetch(dataURL)
      .then(r => r.json())
      .then(json => {
        this.json=json;
      });
  },


});

