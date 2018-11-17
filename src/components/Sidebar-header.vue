<template>
	<header id="sidebar-header">
		Hello
		<span>
			<el-dropdown trigger="click" class="lang-dropdown" @command="language = $event">
				<span class="el-dropdown-link">
					{{ language  | upper }}<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item v-for="lang in languages" :command="lang">{{ lang | upper }}</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</span>
	</header>
</template>
<script>
export default {
	components: {},
	data() {
		return {};
	},
	computed: {
		languages() {
			return Object.keys(this.$i18n.messages);
		},
		language: {
			get() {
				return this.$i18n.locale;
			},
			set(value) {
				this.$i18n.locale = value;
			}
		}
	},
	methods: {
		change(e) {
			console.log(e);
		}
	},
	mounted() {
		console.log(this.$i18n.locale);
	}
};
</script>
 
<style lang="scss">
@import "@/element-variables.scss";

#sidebar-header {
	background-color: $--color-primary;
	color: #fff;
	padding: 1.2em;
}
.lang-dropdown.el-dropdown {
	color: inherit;
}
</style>
