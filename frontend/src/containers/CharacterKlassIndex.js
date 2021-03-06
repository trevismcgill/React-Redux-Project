import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row } from "react-bootstrap";
import KlassCard from "../components/KlassCard";
class CharacterKlassIndex extends Component {
	state = {
		search: "",
	};

	render() {
		//Lines 16-25 contain fuzzy search code

		return (
			<div>
				<h1>Character Class Index</h1>
				<input
					type="search"
					onChange={(e) =>
						this.setState(() => ({
							search: e.target.value,
						}))
					}
					value={this.state.search}
					placeholder="search classes"
				/>
				<Container>
					<Row md={4}>
						{this.props.klasses.map((klass) =>
							klass.index.includes(this.state.search.toLowerCase()) ? (
								<KlassCard klass={klass} />
							) : null
						)}
					</Row>
				</Container>
			</div>
		);
	}
}

const mapStateToProps = ({ klasses }) => {
	return {
		klasses: klasses.all,
	};
};

export default connect(mapStateToProps)(CharacterKlassIndex);
