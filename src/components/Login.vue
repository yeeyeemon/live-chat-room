<template lang="">
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input type="email" placeholder="Display Email" v-model="email">
            <input type="password" placeholder="Display Password" v-model="password">
            <button>Login</button>
        </form>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup(){
        let email = ref("")
        let password = ref("")
        let login=()=>{
            console.log(email.value,password.value)
        }
        return{email,password,login}
    }
}
</script>
<style lang="">
    
</style>