<template>
    <div class="w-96 py-8 px-8 pt-10 pb-10 max-w-sm mx-auto rounded-xl shadow-lg">
        <div class="mb-10 flex items-center justify-center">
            <img class="block mx-auto h-14 sm:mx-0 sm:shrink-0" src="/img/logo.png" alt="" />
        </div>
        <div class="mb-4">
            <div class="mb-1 text-sm">Username</div>
            <el-input type="text" placeholder="" size="large" v-model="form.username" />
        </div>
        <div class="mb-6">
            <div class="mb-1 text-sm">Password</div>
            <el-input type="password" placeholder="" size="large" :show-password="true" v-model="form.password" />
        </div>
        <el-button class="w-full btn-custom__main" size="large" type="danger" @click="onSubmit">Login</el-button>
        <div class="mt-6 text-xs text-center text-gray-400">App Version 1.0.0</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        definePageMeta({
            layout: 'login'
        })
    },
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('on submit', this.form)
            console.log('on router', this.$router.push({ path: '/store' }))
        }
    }
})
</script>
