<template>
	<div class="message-box dialog-mask">
		<div class="dialog-content card">
			<header><h2>{{$t('record.header')}}</h2></header>
			<div class="block">
				<el-form label-position="top" :model="item" @submit.native.prevent="validate">
					<el-form-item :label="$t('record.title')">
						<el-input v-model="item.title" name="title"></el-input>
					</el-form-item>
				</el-form>
			</div>
			<footer class="align-right">
				<el-button @click.prevent="$close(false)">{{$t('ui.cancel')}}</el-button>
				<el-button @click.prevent="validate" type="primary">{{$t('ui.validate')}}</el-button>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			item: {
				title: ""
			}
		};
	},
	methods: {
		validate() {
			try {
				this.$set(this.record, "title", this.item.title);
				this.$close(this.record);
			} catch (e) {
				this.hasError = true;
				console.error(e);
			}
		}
	},
	mounted() {}
};
</script>
<style lang="scss">
</style>
