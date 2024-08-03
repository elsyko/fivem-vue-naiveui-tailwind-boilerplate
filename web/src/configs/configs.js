import { h } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default function setup(app) {
    app.config.globalProperties.$icon = (icon) => {
        return () => h(FontAwesomeIcon, { icon: icon });
    };

    app.config.globalProperties.$notify = (notify) => {
        window.$message[notify.type || 'info'](notify.message, {
            duration: notify.duration || 5000,
            closable: (notify.closable === null || notify.closable === undefined || notify.closable === true) ? true : false,
            keepAliveOnHover: (notify.keepAlive === false) ? false : true,
            icon: notify.icon ? () => h(FontAwesomeIcon, { icon: notify.icon }) : null,
        });
    };

    app.config.globalProperties.$message = (message) => {
        window.$notification[message.type || 'info']({
            title: message.title || undefined,
            content: message.message || undefined,
            meta: message.meta || undefined,
            duration: message.duration || 5000,
            avatar: message.avatar || undefined,
            closable: (message.closable === null || message.closable === undefined || message.closable === true) ? true : false,
            keepAliveOnHover: (message.keepAlive === false) ? false : true,
        });
    };

    app.config.globalProperties.$dialog = {
        warning: (options) => window.$dialog.warning(options),
        error: (options) => window.$dialog.error(options),
        success: (options) => window.$dialog.success(options),
        info: (options) => window.$dialog.info(options),
    };
}