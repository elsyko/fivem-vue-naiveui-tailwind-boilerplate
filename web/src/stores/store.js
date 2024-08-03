import { defineStore } from 'pinia'

let currencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
});

export const useStore = defineStore('store', {
    state: () => ({
        debug: process.env.NODE_ENV === 'development',
    }),

    actions: {
        cFormat: currencyFormat.format,

        SendMessage(endpoint, data) {
            if (process.env.NODE_ENV === 'development') return;
            fetch(`https://${GetParentResourceName()}/${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=UTF-8' }, body: JSON.stringify(data) })
        },

        SendMessageAsync(endpoint, data) {
            return new Promise(resolve => {
                if (process.env.NODE_ENV === 'development') return resolve({});
                fetch(`https://${GetParentResourceName()}/${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=UTF-8' }, body: JSON.stringify(data) })
                .then(res => res.json())
                .then(value => resolve(value))
            })
        },

        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
    },
})