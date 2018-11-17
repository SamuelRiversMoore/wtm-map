<template>
	<div class="sidebar-content">
		<el-button class="button full-width row" @click="createRecord" type="primary" plain>{{$t('records.add')}}</el-button>
		<div>
			<template v-for="record in records">
			    <el-card shadow="never" class="row">
			        <h3>{{record.title}}</h3>
			    </el-card>
			</template>
		</div>
	</div>
</template>


<script>
// modals
import { create } from "vue-modal-dialogs";
import Record from "@/components/modals/record";
const CreateRecordModal = create(Record, "record");

export default {
	components: {},
	data() {
		return {};
	},
	computed: {
		records: {
			get() {
				return this.$store.state.records;
			},
			set(value) {
				this.$store.commit("set_records", value);
			}
		}
	},
	methods: {
		createRecord() {
			return new Promise((resolve, reject) => {
				let newRecord = {
					title: "",
					color: "",
					markers: []
				};

				CreateRecordModal(newRecord).then(result => {
					if (result) {
						this.$store.dispatch("addRecord", result).then(() => {
							this.$router.push({ name: "record", params: { id: result.title } });
						});
					}
				});
			});
		},
		editMarker(marker) {
			CreateRecordModal(marker);
		}
	}
};
</script>
