<template lang="">
    <div>
        <h2>Sign Up</h2>
        <form @submit.prevent="signUP">
            <input type="text" placeholder="Display Name" v-model="displayName">
            <input type="email" placeholder="Display Email" v-model="email">
            <input type="password" placeholder="Display Password" v-model="password">
            <button>Sign Up</button>
        </form>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup(){
        let displayName = ref("")
        let email = ref("")
        let password = ref("")
        let signUP=()=>{
            console.log(displayName.value)
        }
        return{displayName,email,password,signUP}
    }
}
</script>
<style lang="">
    
</style>