<template>
    <HomePage />
</template>

<script>
import { useMessage, useNotification, useDialog } from 'naive-ui'

import HomePage from './components/HomePage.vue'

export default {
	components: {
		HomePage,
	},
    setup() {
		window.$message = useMessage();
        window.$notification = useNotification();
        window.$dialog = useDialog();
    }
}
</script>