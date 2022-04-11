<template>
    <v-card tile width="28rem" class="mx-auto pa-4 mt-3">
        <v-card-title>
            <p class="mx-auto">Login Here</p>
        </v-card-title>
        <v-card-text>
            <p>Please Sign in to your account and start the adventure</p>
            <v-text-field
                outlined
                
                color="#9155FD"
                label="Enter your Email Here"
                placeholder="salscodes@example.com"
             />
             <v-text-field
                :type="passwordVisible ? 'text' : 'password' "
                label="Enter your Password"
                placeholder=".........."
                outlined
                
                color="#9155FD"
                :append-icon="passwordVisible ? 'mdi-eye-off' : 'mdi-eye' "
                @click:append="passwordVisible = !passwordVisible"
             />
             <div class="d-flex align-center justify-space-between flex-wrap">
                 <v-checkbox 
                 label="Remember me"
                  hide-details=""
                  class="me-3 mt-1"
                  color="#9155fd"
                  >
                 </v-checkbox>
                 <router-link class="mt-1" to="/forgot-password">
                 Forgot Password
                 </router-link>
             </div>
             <v-btn block color="#9155FD" dark class="mt-6">Login</v-btn>
        </v-card-text>
        <v-card-text class="d-flex mt-2">
            <div class="mx-auto">
                <span class="me-5">
                New on our platform?
            </span>
            <router-link to="/user">Create an account</router-link>
            </div>
        </v-card-text>
        <v-card-text class="d-flex align-center mt-2">
            <v-divider />
            <span class="mx-5">or</span>
            <v-divider />
        </v-card-text>

        <v-card-actions class="d-flex align-center">
           <div class="mx-auto">
                <v-btn v-for="(link, index) in socialinks" :key="index" icon class="ms-1">
                <v-icon :color="link.color" >{{link.icon}}</v-icon>
            </v-btn>
           </div>
        </v-card-actions>
    </v-card>
</template>

<script>
import Input from '@/components/Input'
    export default {
        components:{
            Input
        },
        data:()=>({
            passwordVisible: false,
            socialinks: [
                {
                    icon: 'mdi-facebook',
                    color: '#4267b2',
                    colorInDark: '#4267b2',
                },
                {
                    icon: 'mdi-twitter',
                    color: '#1da1f2',
                    colorInDark: '#1da1f2',
                },
                {
                    icon: 'mdi-github',
                    color: '#272727',
                    colorInDark: '#fff',
                },
                {
                    icon: 'mdi-google',
                    color: '#db4437',
                    colorInDark: '#db4437',
                },
            ],
        })
    }
</script>
<style scoped>
    *{
        text-decoration: none;
    }
</style>