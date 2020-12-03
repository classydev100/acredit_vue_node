<template>
	<div style="background: rgba(0, 0, 0, 0.14); height: 100%">
		<div class="d-flex justify-center">
			<v-card width="600" style="margin-top: 50px; padding: 20px 20px 30px 50px;">
				<v-alert
					type="error"
					v-model="alert"
					dismissible
					color="red"
					border="left"
					elevation="2"
					colored-border
				>This user does not exit!</v-alert>
				<v-row>
					<v-card-title>{{ $t('forgetPass.title') }}</v-card-title>
					<v-card-text>{{ $t('forgetPass.text') }}</v-card-text>
					<v-col cols="12" md="12" sm="12">
						<v-text-field
							outlined
							dense
							v-model="userEmail"
							:rules="[rules.required, rules.valid]"
							:label="$t('email')"
							required
						/>
					</v-col>
				</v-row>

				<v-row>
					<v-col>
						<v-btn large color="#336882" @click="getuserEmail()">
							<span style="color: white;">{{ $t('forgetPass.send') }}</span>
						</v-btn>
					</v-col>
				</v-row>
			</v-card>

			<v-dialog v-model="sent_email" persistent max-width="600px">
				<v-card outlined>
					<v-card-title class="py-3 my-1">
						<h4>{{ $t('forgetPass.modal.title') }}</h4>
						<v-spacer />
						<v-btn depressed :to="$t('link') + 'login'">
							<v-icon class="black--text">mdi mdi-close</v-icon>
						</v-btn>
					</v-card-title>

					<v-divider />

					<v-card-text class="pa-8">{{ $t('forgetPass.modal.text') }}</v-card-text>

					<v-card-actions class="grey lighten-3 pa-5">
						<v-btn depressed :to="$t('link') + 'login'">{{ $t('forgetPass.modal.login') }}</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			rules: {
				required: value => !!value || this.$t("hints.required"),
				valid: v => /.+@.+\..+/.test(v) || this.$t("hints.mailNotValid")
			},
			userEmail: "",
			alert: false,
			sent_email: false
		};
	},
	methods: {
		async getuserEmail() {
			// await this.$axios.setToken(this.$auth.getToken("local"));
			await this.$axios.post("/mail/", { email: this.userEmail }).then(res => {
				console.log(res.status);
				if (res.status === 200) {
					this.sent_email = true;
				} else {
					this.alert = true;
				}
			});
		},

		returnLogin() {
			this.$router.push(this.$t("link") + "login");
		}
	},
	mounted() {
		if (this.$auth.loggedIn) this.$router.push(this.$t("link") + "invoices");
	}
};
</script>
