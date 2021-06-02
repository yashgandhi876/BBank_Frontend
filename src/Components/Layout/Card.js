import React from "react";

function Card() {
	return (
		<div className="homepage-card col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Nearby Blood Banks</h5>
					<p className="card-text">Get contact details of blood banks in your area.</p>
					<a href="/" className="btn btn-primary">
						Find Blood banks
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;
