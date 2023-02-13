const { createApp } = Vue;

createApp({
	data() {
		return {
			tasks: ["Butta la pasta", "Fai la tavola", "Magna el tutto"],
			newTask: "",
		};
	},

	methods: {
		addTask() {},

		removeTask(i) {
			this.tasks.splice(i, 1);
		},
	},
}).mount("#app");
