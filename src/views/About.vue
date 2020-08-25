<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:''
    }
  },
  mounted(){
    this.$http.get("/api/w/website/bannerList").then(res=>{
      console.log(res.data.data)
      this.msg = res.data.data
    })
  },
  methods: {
    
  },
}
</script>
