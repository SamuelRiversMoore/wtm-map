import Vue from "vue";
import Router from "vue-router";
import Records from "./views/Records.vue";
import Record from "./views/Record.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "records",
			component: Records
		},
		{
			path: "/:id",
			name: "record",
			component: Record
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
		}
	]
});
