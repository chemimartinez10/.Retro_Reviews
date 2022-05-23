import "./styles.css"

function Welcome() {
	return (
		<>
			<main>
				<section>
					<h1 id="primer_encabezado">Reviews más populares</h1>
					<div className="list">
						<div className="capsule">
							<h3>Título</h3>
							<p>Descripcion corta</p>
						</div>
						<div className="capsule">
							<h3>Título</h3>
							<p>Descripcion corta</p>
						</div>
						<div className="capsule">
							<h3>Título</h3>
							<p>Descripcion corta</p>
						</div>
						<div className="capsule">
							<h3>Título</h3>
							<p>Descripcion corta</p>
						</div>
						<div className="capsule">
							<h3>Título</h3>
							<p>Descripcion corta</p>
						</div>
					</div>
				</section>
				<section>
					<div className="hoja">
						<div className="grid-item">item</div>
						<div className="grid-item">item</div>
						<div className="grid-item">item</div>
						<div className="grid-item">item</div>
						<div className="grid-item">item</div>
						<div className="grid-item">item</div>
						<div className="grid-item">item</div>
						<div className="grid-item">item</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default Welcome
