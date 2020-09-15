import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
	state = {
		title: '',
		body: '',
	};
	onSubmit = (e) => {
		e.preventDefault();
		const post = {
			title: this.state.title,
			body: this.state.body,
		};
		this.props.createPost(post);
	};
	render() {
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title: </label> <br />
						<input
							type='text'
							name='title'
							value={this.state.title}
							onChange={(e) => this.setState({ title: e.target.value })}
						/>
					</div>
					<br />
					<div>
						<label>Body: </label> <br />
						<textarea
							name='body'
							value={this.state.body}
							onChange={(e) => this.setState({ body: e.target.value })}
						/>
					</div>
					<br />
					<button type='submit'>Sumbit</button>
				</form>
			</div>
		);
	}
}
PostForm.propTypes = {
	createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
