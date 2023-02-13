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
			newTask: { todo: "", done: "" },
			selected: "A",
			options: [
				{ text: "Seleziona", value: "A" },
				{ text: "COMPLETATO", value: "B" },
				{ text: "DA COMPLETARE", value: "C" },
			],
			error: false,
		};
	},

	methods: {
		addTask() {
			let boolTask = true;

			if (this.options.value == "B") {
				boolTask = true;
			} else if (this.options.value == "A") {
				this.error = true;
			} else {
				boolTask = false;
			}

			const newTask = {
				todo: this.newTask.todo,
				done: boolTask,
			};

			console.log(newTask);
			this.tasks.push(newTask);
		},

		removeTask(i) {
			this.tasks.splice(i, 1);
		},
	},
}).mount("#app");
