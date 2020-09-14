import React, { Component } from 'react';

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
		fetch('http://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(post),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
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

export default PostForm;
