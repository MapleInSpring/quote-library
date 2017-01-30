const quotes = (state = [], action) => {
	console.log(action)
	switch(action.type) {
		case 'ADD_QUOTE':
		return {
			...state,
		}
		default: 
		return state
	}
}

export default quotes