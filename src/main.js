import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import i18n from "./i18n";

import "./filters";
import "./assets/styles.scss";

Vue.config.productionTip = false;

import * as ModalDialogs from "vue-modal-dialogs";
import "./plugins/element.js";
import router from "./router";
Vue.use(ModalDialogs);

Vue.prototype.$dbName = "store";

new Vue({
	store,
	i18n,
	router,
	render: h => h(App),
	beforeCreate() {
		this.$store.commit("init_store", Vue.prototype.$dbName);
	}
}).$mount("#app");

store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem(Vue.prototype.$dbName, JSON.stringify(state));
});
