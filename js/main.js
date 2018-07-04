var app = new Vue({
    el: "#app",

    data: {
        newtoList: '',
        elemList: [],
        doneList: []
    },

    methods: {
        addToList(){
            var id = this.elemList.length + 1 // increment a key inside the object
            if(this.newtoList.length !== 0){ // prevent to add empty string
                var toPush = {key: id, elem: this.newtoList, isFav: 0}
                this.elemList.push(toPush)
                this.newtoList = '' // empty the input
            }
        },


        deleteElem(key){
            this.elemList = this.elemList.filter(todo => todo.key !== key)
        },

        deleteDone(key){
            this.doneList = this.doneList.filter(todo => todo.key !== key)
        },

        moveToDone(index, key){
            var toPush = this.favList[index] // move to done using index of favlist !
            this.doneList.push(toPush)
            this.deleteElem(key)
        },

        moveToDo(index, key){ 
            var toPush = this.doneList[index] 
            this.elemList.push(toPush)
            this.deleteDone(key)
         },

        favorite(index){  // turn an element to fav (it will also change add a class)
            if(this.favList[index].isFav == 0){
                this.$set(this.favList[index], 'isFav', 1)
            } else{
                this.$set(this.favList[index], 'isFav', 0)
            }
        }
    },

    computed: {
        favList() {
            return _.orderBy(this.elemList, 'isFav', 'desc') // order my list by favorite using lodash
          }
    }
})
   


$(document).ready(function(){
    $('.tabs').tabs(); // initialize the tabs of materialize
  });