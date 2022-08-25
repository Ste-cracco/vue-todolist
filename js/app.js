
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
    },

    methods: {      
    }
})

