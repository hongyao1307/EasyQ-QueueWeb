<template>
<div class="container-fluid py-5 h-100">
<ul>
  <li class="card" py-5 v-for="item in items" :key="item.CLASS_NAME">
      <div class="card-body">
    <h5 class="card-title"> Course Number :  {{item.CLASS_NUMBER}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Course Name:{{ item. CLASS_NAME}} </h6>
    <h6 class="card-subtitle mb-2 text-muted">Instructor : {{item.INSTRUCTOR_NAME}} </h6>
    <button class="btn btn-warning btn-md my-2 btn-block"> 
        <router-link :to="'/StudentOfficeHour/' + item.CLASS_ID ">Join</router-link>
    </button>
    <button class="btn btn-warning btn-md my-2 btn-block" style="margin-left: 10px"> 
        <router-link :to="'/EventSingle/' + item.CLASS_ID ">Info</router-link>
        <!-- <router-link : to = "'/EventSingle/' + item.CLASS_ID">Info</router-link>  -->
    </button>     
  </div>
 </li>
</ul>
<div class="card text-center" style="margin-top:20px">
        <div class="card-body" >
          <h5 class="card-title">Need to add class?</h5>
          <a href="#" class="btn btn-primary" style="font-weight:bold; background-color: #a3b6f1; border: none;">
            <router-link  to = "/StudentAddClassInfo">Add</router-link>
          </a>
      </div>
    </div>
</div>

</template>
  
<script>
import axios from 'axios'
  export default {
    mounted: function(){
      this.getInfo();
    },
    data() {  
      return{
        userId: getCookie("id"),
        items: []
        // classNumber: '',
        // className: '',
        // instructorName: '',
        // classId: '',
        
      };
    },
    methods:{

      // async getSingleClassInfo(){
      //     var data =
      // }
      // ,
      async getInfo() {
        var data = {
          userId: this.userId,
          // classId: this.classId
        };
        const response = await axios.post('http://100.25.219.17/api/user/student/classes', data, {headers:{'Content-type': 'application/json',}});
        this.items = response.data;

        // this.classNumber = response.data.items.CLASS_NUMBER;
        // this.className = response.data.items.CLASS_NAME;
        // this.instructorName = response.data.items.INSTRUCTOR_NAME;
        // this.classId = response.data.items.CLASS_ID;
        console.log('items', response.data);
        

        
      }
    }
  };

  function getCookie(cname){
    let name = cname + "=";
    let decodeCookie = decodeURIComponent(document.cookie);
    let ca = decodeCookie.split(';');
    for(let i = 0; i < ca.length; i++){
      let c = ca[i];
      while(c.charAt(0) == ' '){
        c = c.substring(1);
      }
      if(c.indexOf(name) == 0){
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
</script>
<style lang="scss" scoped>
 .container-fluid{
   width: 1290px
}
</style>