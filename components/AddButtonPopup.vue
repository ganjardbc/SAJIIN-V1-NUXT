<template>
    <el-popover
        placement="bottom-end"
        width="180"
        trigger="click">
        <div class="w-full">
            <div v-for="(item, i) in data" :key="i">
                <el-button class="btn-custom__icon btn-custom__no-border btn-custom__align-left w-full">
                    <i :class="`left ${item.icon}`"></i>
                    {{ item.title }}
                </el-button>
            </div>
        </div>
        <template #reference>
            <el-button class="btn-custom__green btn-custom__icon" type="primary">
                <i class="left fa fa-lw fa-plus-circle"></i>
                Create
            </el-button>
        </template>
    </el-popover>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {},
    data() {
        return {
            data: [
                { icon: 'fa fa-lw fa-plus-circle', title: 'Buku Kas', path: '/' },
                { icon: 'fa fa-lw fa-plus-circle', title: 'Produk', path: '/' },
                { icon: 'fa fa-lw fa-plus-circle', title: 'Platform', path: '/' },
                { icon: 'fa fa-lw fa-plus-circle', title: 'Meja', path: '/' },
            ]
        }
    }
})
</script>
