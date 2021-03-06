import Vue from "vue";

Vue.filter("capitalize", value => {
	if (!value) return "";
	value = value.toString();
	return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter("upper", value => {
	if (!value) return "";
	return value.toString().toUpperCase();
});
