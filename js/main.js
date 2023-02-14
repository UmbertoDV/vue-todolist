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
			if (this.selected == "B") {
				let boolTask = true;
				boolTask = true;

				let newTask = {
					todo: this.newTask.todo,
					done: boolTask,
				};

				this.error = false;
				this.tasks.push(newTask);
			} else if (this.selected == "A") {
				this.error = true;
			} else if (this.selected == "C") {
				let boolTask = true;
				boolTask = false;

				let newTask = {
					todo: this.newTask.todo,
					done: boolTask,
				};

				this.error = false;
				this.tasks.push(newTask);
			}
		},

		removeTask(i) {
			this.tasks.splice(i, 1);
		},

		doneTodo(task) {
			task.done = !task.done;
		},
	},
}).mount("#app");
