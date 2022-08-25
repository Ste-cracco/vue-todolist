
const todos = [
	{
		text: 'Fare la spesa',
		done: true,
	},
	{
		text: 'Pulire la cucina',
		done: false,
	},
	{
		text: 'Portare fuori il cane',
		done: false,
	},
	{
		text: 'Andare in palestra',
		done: true,
	},
]

const app = new Vue({
    el: '#root',
    data: {		
		todos,
		testoInserito: ''
    },

    methods: {   
		toggleDone(todo) {
			if(todo.done === true) {
				todo.done = false
			} else {
				todo.done = true
			}
			// console.log(todo)
		},
		
		aggiungiTask() {

			this.testoInserito = this.testoInserito.trim()
			if(this.testoInserito === '') {
				return
			} else {
				this.todos.push({
					text: this.testoInserito,
					done: false
				})
			}

			this.testoInserito = ''
		}
    }	
})