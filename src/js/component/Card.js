import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div
			className="card"
			style={{
				width: "25rem",
				margin: "auto",
				minHeight: "30rem",
				textAlign: "justify"
			}}>
			<img
				src={props.imgUrl}
				className="card-img-top"
				alt="card-img-top"
				style={{ maxHeight: "180px", cover: "object-fit" }}
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-success">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	imgUrl: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};
