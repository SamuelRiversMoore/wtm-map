import Vue from "vue";
import Router from "vue-router";
import Layers from "./views/Layers.vue";
import Layer from "./views/Layer.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "layers",
			component: Layers
		},
		{
			path: "/:id",
			name: "layer",
			component: Layer,
			props: true
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
