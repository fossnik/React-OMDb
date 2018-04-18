import React from 'react'
import {handleResponse} from "../../helpers";
import {API_URL} from "../../config";

class List extends React.Component {
	constructor() {
		super();

		// initial state
		this.state = {
			loading: false,
			error: null,
			result: null,
		}
	}

	componentDidMount() {
		this.setState({ loading: true });

		fetch(`${API_URL}/?i=tt3896198&apikey=1a0d6229`)
			.then(handleResponse)
			.then(data => {
				// console.log('Success', data);
				this.setState({ result: data, loading: false });
			})
			.catch(error => {
				console.log('Error', error);
				this.setState({ error: error, loading: false });
			})
	}

	render() {
		console.log(this.state);

		if (this.state.loading)
			return <div>Loading...</div>;
		else if (this.state.result == null)
			return "";
		else
			// return (
			// 	<div>
			// 	<h3>{this.state.result.Title}</h3>
			// 		<dl>
			// 			<dt>Year</dt><dd>{this.state.result.Year}</dd>
			// 			<dt>Actors</dt><dd>{this.state.result.Actors}</dd>
			// 			<dt>Runtime</dt><dd>{this.state.result.Runtime}</dd>
			// 			<dt>Rating</dt><dd>{this.state.result.Rated}</dd>
			// 		</dl>
			// 	</div>
			// )
		{
			let rows = [];
			for (let a in this.state.result) {
				rows.push(
					<dt>{a}</dt>,
					<dd>{this.state.result[a].toString()}</dd>
				)
			}
			return <dl>{rows}</dl>;
		}

	}
}

export default List;