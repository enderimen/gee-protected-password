import Vue from 'vue';
import VueI18n from 'vue-i18n';
import tr from "@/assets/languages/tr.json";
import en from "@/assets/languages/en.json";
import ar from "@/assets/languages/ar.json";

Vue.use(VueI18n);

const messages = {
    tr,
    en,
    ar
};

export const i18n = new VueI18n({locale: 'tr', messages, fallbackLocale: 'tr'});