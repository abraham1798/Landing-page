import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron mx-3">
			<h1 className="display-4">¿ Quieres visitar Costa Rica ?</h1>

			<hr className="my-4" />
			<p>En este sitio podrás encontrar lo mejor de nuestra cultura.</p>
			<a
				className="btn btn-info"
				href="https://www.visitcostarica.com/es"
				role="button">
				Sitio Oficial
			</a>
		</div>
	);
}
