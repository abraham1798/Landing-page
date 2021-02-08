import React from "react";

export function Cardfooter() {
	return (
		<ul
			className="nav justify-content-center"
			style={{ backgroundColor: "white" }}>
			<li className="nav-item">
				<a
					className="nav-link disabled"
					href="#"
					tabIndex="-1"
					aria-disabled="true">
					<b>
						<strong>Desarrollador:</strong> Abraham Chinchilla
						Aguilar
					</b>
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="abrahamc.a@hotmail.com">
					<i className="fas fa-envelope" /> Email
				</a>
			</li>

			<li className="nav-item">
				<a
					className="nav-link"
					href="https://www.facebook.com/abraham.chinchillaaguilar/"
					tabIndex="-1"
					aria-disabled="false">
					<i className="fab fa-facebook" /> Facebook
				</a>
			</li>
		</ul>
	);
}
