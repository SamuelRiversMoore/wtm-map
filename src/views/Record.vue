<template>
	<el-tabs type="border-card">
		<template v-for="record in records">
			<el-tab-pane :label="record.title">
				<record-content :record="record"/>
			</el-tab-pane>
		</template>
	</el-tabs>
</template>

<script>
import RecordContent from "@/components/Record/content";
export default {
	name: "home",
	components: { RecordContent },
	computed: {
		records: {
			get() {
				return this.$store.state.records;
			},
			set(value) {
				this.$store.commit("set_records", value);
			}
		}
	}
};
</script>
