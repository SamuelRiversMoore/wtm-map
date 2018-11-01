import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import i18n from "./i18n";

import "./assets/styles.scss";

Vue.config.productionTip = false;

import * as ModalDialogs from "vue-modal-dialogs";
Vue.use(ModalDialogs);

new Vue({
	store,
	i18n,
	render: h => h(App)
}).$mount("#app");
