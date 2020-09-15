import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}
	render() {
		const postItems = this.props.posts.map((post) => {
			return (
				<div key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
				</div>
			);
		});
		return (
			<div>
				<h1>Post</h1>
				{postItems}
			</div>
		);
	}
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
};

const mapStatetoProps = (state) => ({
	posts: state.posts.items,
});

export default connect(mapStatetoProps, { fetchPosts })(Posts);
