import { connect } from 'react-redux'
import QuoteInputComponent from '../components/quote_input_component'
import { addQuote } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onQuoteSubmit: (quote) => {
			dispatch(addQuote(quote))
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(QuoteInputComponent)