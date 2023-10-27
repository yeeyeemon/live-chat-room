<template>
    <div class="container welcome">
        <div v-if="isLogin">
            <Login></Login>
            <p>not a member?<span @click="isLogin=!isLogin">create account?</span> </p>
           
        </div>
      <div v-else>
        <SignUp></SignUp>
         <p> Already Member? <span @click="isLogin=!isLogin">login account?</span></p>  
      </div>
      
    </div>
</template>
<script>
import { ref } from 'vue'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
export default {
  components: {Login, SignUp },
  setup(){
    let isLogin = ref(true)
    return {isLogin}
  }
    
}
</script>
<style>
    .welcome{
        padding: 20px 0;
        text-align: center;
    }
    .welcome form{
        width: 300px;
        margin: 20px auto;
    }
    .welcome label{
        display: block;
        margin: 20px 0 10px;
    }
    .welcome input{
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #eee;
        outline: none;
        color: #999;
        margin: 10px auto;

    }
    .welcome span{
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;

    }
    .welcome button{
        margin: 20px auto;
    }
</style>