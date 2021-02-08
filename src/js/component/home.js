import React from "react";

import { Navbar } from "./Navbar.js";
import { Jumbotron } from "./Jumbotron.js";
import { Card } from "./Card.js";
import { Cardfooter } from "./Cardfooter";
//create your first component
export function Home() {
	return (
		<div className="text-center">
			<Navbar />

			<Jumbotron />
			<div className="card-deck">
				<Card
					title="Mejores playas de Costa Rica"
					description="Costa Rica es reconocida a nivel mundial por sus hermosas playas y atardeceres lo cual la catapultan en uno de los mejores destinos para sus vacaciones en cualquier época."
					buttonUrl="https://n9.cl/y2afl"
					buttonLabel="Mas información"
					imgUrl="https://static.rutasdeescape.com/wp-content/uploads/2018/06/playas-m%C3%A1s-espectaculares-de-costa-rica.jpg"
				/>
				<Card
					title="Gastronomía de Costa Rica"
					description="Si estás planeando un viaje a este hermoso país natural no dejes de probar su exquisita gastronomía, estamos seguros de que te llevarás una grata sorpresa con la variedad que ofrece este país."
					buttonUrl="https://rutascostarica.viajes/informacion-costa-rica/gastronomia"
					buttonLabel="Mas información"
					imgUrl="https://hablemosdeculturas.com/wp-content/uploads/2017/11/Comida-t%C3%ADpica-de-Costa-Rica.jpg"
				/>
				<Card
					title="Cultura Popular de Costa Rica"
					description="Mucho más que bosques tropicales, playas de gran belleza, o su impresionante biodiversidad, la riqueza de este país también radica en la diversidad de su gente y en su cultura."
					buttonUrl="https://n9.cl/4ke6j"
					buttonLabel="Mas información"
					imgUrl="https://www.periodicomensaje.com/images/2018/traje-tipico-01.jpg"
				/>
				<Card
					title="Diversión en Costa Rica"
					description="Si deseas tener la mejor experiencia en entretenimiento, Costa Rica ofrece un amplio catálogo para todos los miembros de la familia tanto para los más grandes como para los más pequeños."
					buttonUrl="https://crstours.es/"
					buttonLabel="Mas información"
					imgUrl="https://www.douglascedenofotografia.info/wp-content/uploads/2019/06/Fotografo-de-bodas-costa-rica-fotografia-profesional-costa-rica-bodas-guanacaste-douglas-cedeno-pictures-34.jpg"
				/>
			</div>
			<Cardfooter />
		</div>
	);
}
