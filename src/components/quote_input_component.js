import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';


class QuoteInputComponent extends Component {
	onSubmit() {
		// console.log(this.refs.quoteInput.value);
		this.props.onQuoteSubmit(this.refs.quoteInput.value)
	}

	render() {
		return (
			<div className="quote-input-container">
				<Textarea
					ref="quoteInput"
				></Textarea>
				<button
					onClick={this.onSubmit.bind(this)}
				>submit</button>
			</div>
			)
	}
}

export default QuoteInputComponent;