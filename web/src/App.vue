<template>
	<n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
        <n-modal-provider to="#maincontainer">
			<n-message-provider to=".maincontainer" placement="top-right" class="normal-case">
                <n-notification-provider to=".maincontainer" class="normal-case">
                    <n-dialog-provider to=".maincontainer">
						<n-space vertical>
							<Layout id="app" />
						</n-space>
					</n-dialog-provider>
				</n-notification-provider>
			</n-message-provider>
		</n-modal-provider>
	</n-config-provider>
</template>

<script>
import {
	darkTheme,
	NConfigProvider, NModalProvider, NMessageProvider, NNotificationProvider, NDialogProvider
} from 'naive-ui'

import Layout from './Layout.vue'

export default {
	components: {
		NConfigProvider,
		NModalProvider,
		NMessageProvider,
		NNotificationProvider,
		NDialogProvider,

		Layout,
	},
    setup() {
        const themeOverrides = {
            common: {
                primaryColor: '#4498FF',
                primaryColorHover: "#4498FF",
				primaryColorPressed: "#4498FF",
				primaryColorSuppl: "#4498FF",
            },
        }

        return {
            darkTheme,
            themeOverrides,
        }
    },
	methods: {
		eventHandler: function(event) {
			let action = event.data.action
			let data = event.data.data
			this.eventBus.emit(action, data)
		},
		keyHandler: function(event) {
			const key = event.which || event.keyCode;
			if (key === 27) {
                this.store.SendMessage('close')
            }
		}
	},
	mounted() {
		window.addEventListener("message", this.eventHandler);
		window.addEventListener("keydown", this.keyHandler);

		if (this.store.debug) {
			document.getElementById('app').style.backgroundImage = 'url("https://i.ibb.co/zfNPf0J/dev-bg.jpg")';
			document.getElementById('app').style.backgroundSize = 'cover';
			document.getElementById('app').style.backgroundRepeat = 'no-repeat';
			document.getElementById('app').style.backgroundPosition = 'center';
		}
	},
	unmounted() {
		window.removeEventListener("message", this.eventHandler);
		window.removeEventListener("keydown", this.keyHandler);
	}
}
</script>