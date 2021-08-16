<template>
  <div class="hello">
    <h1>{{time}}</h1>
  </div>
</template>

<script>
import { filterTime }  from '../utils/time.js'
export default {
  name: 'HelloWorld',
  data(){
    return {
      time:'',
      startDate:new Date('2021/05/07 13:26:00').getTime()
    }
  },
  props: {
    msg: String,
  },
  created(){
    this.overTime()
  },  
  methods:{
    overTime() {
      setTimeout(() => {
        this.time = filterTime(this.startDate)
        this.overTime()
      }, 1000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
