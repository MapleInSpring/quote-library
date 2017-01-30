export const addQuote = (text) => {
	return {
		type: 'ADD_QUOTE',
		payload: {
			quote: text
		}
	}
}