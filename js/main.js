const { createApp } = Vue;

createApp({
	data() {
		return {
			tasks: [
				{
					todo: "Butta la pasta",
					done: false,
				},
				{
					todo: "Aspetta 10 minuti",
					done: true,
				},
			],
			newTask: { todo: "", done: false },
		};
	},

	methods: {
		addTask() {
			// console.log(this.newTask);
			const newTask = {
				todo: this.newTask.title,
				done: false,
			};
			this.tasks.push(this.newTask);
		},

		removeTask(i) {
			this.tasks.splice(i, 1);
		},
	},
}).mount("#app");
