<template>
    <div class="dl-main">
        <div class="dl-header pl-4 pr-4 bg-custom__main flex flex-row content-center items-center">
            <div class="basis-1/2">
                <el-button class="btn-custom__transparent btn-custom__txt-white btn-custom__no-border" size="large" circle>
                    <i class="fa fa-lw fa-bars"></i>
                </el-button>
            </div>
            <div class="basis-1/2 flex flex-row justify-end items-center">
                <add-button-popup />
                <notification-popup />
                <div class="border-l pl-2 ml-2">
                    <profile-popup />
                </div>
            </div>
        </div>
        <div class="dl-container">
            <div class="dl-sidebar bg-white shadow-lg">
                <div class="dl-sidebar__header flex flex-row justify-center items-center">
                    <nuxt-link to="/store">
                        <img class="block mx-auto max-h-7 max-w-full sm:mx-0 sm:shrink-0" src="/img/logo.png" alt="" />
                    </nuxt-link>
                </div>
                <div class="dl-sidebar__content p-2">
                    <sidebar-menu :data="dataSidebar" />
                </div>
                <div class="dl-sidebar__footer flex flex-row justify-center items-center">
                    <el-button class="btn-custom__transparent btn-custom__txt-black btn-custom__no-border" size="large" circle>
                        <i class="fa fa-lw fa-chevron-right"></i>
                    </el-button>
                </div>
            </div>
            <div class="dl-content">
                <div class="p-4">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {},
    data() {
        return {
            dataSidebar: [
                { icon: 'fa fa-lg fa-store', title: 'Toko', path: '/store/stores' },
                { icon: 'fa fa-lg fa-laptop', title: 'Kasir', path: '/store/cashier' },
                { icon: 'fa fa-lg fa-list-ul', title: 'Pesanan', path: '/store/orders' },
                { icon: 'fa fa-lg fa-list-ol', title: 'Pengeluaran', path: '/store/expenses' },
                { icon: 'fa fa-lg fa-book-open', title: 'Buku Kas', path: '/store/cashbooks' },
                { icon: 'fa fa-lg fa-box', title: 'Produk', path: '/store/products' },
                { icon: 'fa fa-lg fa-flag', title: 'Platform', path: '/store/platforms' },
                { icon: 'fa fa-lg fa-th-large', title: 'Meja', path: '/store/tables' },
                { icon: 'fa fa-lg fa-users', title: 'Karyawan', path: '/store/employees' },
                { icon: 'fa fa-lg fa-cogs', title: 'Pengaturan', path: '/store/settings' },
            ]
        }
    }
})
</script>
