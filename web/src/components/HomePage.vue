<template>
    <div
        v-show="showHomeDialog"
        class="absolute w-full h-full flex items-center justify-center backdrop-blur"
        style="background: linear-gradient(45deg, rgba(48,104,208,0.1) 0%, rgba(48,148,208,0.1) 50%, rgba(48,104,208,0.1) 100%);"
    >
        <n-card
            closable
            @close="showHome = !showHome"
            v-show="showHomeDialog"
            class="w-1/4"
        >
            <img src="https://i.ibb.co/JQBdPSc/0b3bcc468c4a5d8d461cf5dbe8967ee6.gif" class="rounded w-full" />
        </n-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showHome: true,
        }
    },
    computed: {
        showHomeDialog() {
            return this.showHome && this.store.debug
        },
    },
}
</script>