import React, { useState, useEffect } from "react";
import axios from "axios";

function StockModel(props) {
	const [blood, setBlood] = useState([]);

	useEffect(() => {
		async function getData() {
			try {
				console.log(`in get data of ${props.id}`);
				const data = await axios.get(`/bloodbank/getStockOfBank/${props.id}`);
				console.log("data: ");
				console.log(data.data);
				let obj = {
					Apos: data.data.Apos,
					Aneg: data.data.Aneg,
					Bpos: data.data.Bpos,
					Bneg: data.data.Bneg,
					ABpos: data.data.ABpos,
					ABneg: data.data.ABneg,
					Opos: data.data.Opos,
					Oneg: data.data.Oneg,
				};
				setBlood(obj);
			} catch (e) {
				console.log("in catch");
				console.dir(e);
			}
		}
		getData();
	}, []);

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				width: "100%",
				height: "100vh",
				position: "fixed",
				top: "0",
				left: "0",
				backgroundColor: "rgba(0,0,0,0.2)",
				margin: "auto",
			}}
			className="flex justify-content-center  border"
		>
			<div
				style={{ width: "900px", height: "530px", backgroundColor: "rgba(255,255,255,1)", borderRadius: "5px" }}
				className="m-auto p-4 flex"
			>
				<div
					style={{ flexWrap: "wrap", overflowY: "scroll", height: "500px" }}
					className="flex justify-content-between"
				>
					<div style={{ display: "flex", margin: "auto" }}>
						<button
							onClick={props.hideModel}
							style={{ display: "flex", margin: "auto" }}
							className="btn btn-primary"
						>
							<i
								style={{ display: "flex", alignContent: "center", margin: "auto" }}
								className=" fa fa-arrow-left"
							></i>
							<label className="m-1" htmlFor="">
								back
							</label>
						</button>
						<h1 style={{ width: "100%", margin: "auto" }} className="">
							Blood Stocks
						</h1>
					</div>
					<hr />
					<div style={{ display: "flex", justifyContent: "space-around", width: "80%", margin: "auto" }}>
						<h5 htmlFor=""> A+</h5>
						<h5 htmlFor=""> {blood.Apos}</h5>
					</div>
					<hr />
					<div style={{ display: "flex", justifyContent: "space-around", width: "80%", margin: "auto" }}>
						<h5 htmlFor=""> A-</h5>
						<h5 htmlFor=""> {blood.Aneg}</h5>
					</div>
					<hr />

					<div style={{ display: "flex", justifyContent: "space-around", width: "80%", margin: "auto" }}>
						<h5 htmlFor=""> B+</h5>
						<h5 htmlFor=""> {blood.Bpos}</h5>
					</div>
					<hr />
					<div style={{ display: "flex", justifyContent: "space-around", width: "80%", margin: "auto" }}>
						<h5 htmlFor=""> B-</h5>
						<h5 htmlFor=""> {blood.Bneg}</h5>
					</div>
					<hr />
					<div style={{ display: "flex", justifyContent: "space-around", width: "80%", margin: "auto" }}>
						<h5 htmlFor=""> O+</h5>
						<h5 htmlFor=""> {blood.Opos}</h5>
					</div>
					<hr />
					<div style={{ display: "flex", justifyContent: "space-around", width: "80%", margin: "auto" }}>
						<h5 htmlFor=""> O-</h5>
						<h5 htmlFor=""> {blood.Oneg}</h5>
					</div>
					<hr />
					<div style={{ display: "flex", justifyContent: "space-around", width: "80%", margin: "auto" }}>
						<h5 htmlFor=""> AB+</h5>
						<h5 htmlFor=""> {blood.ABpos}</h5>
					</div>
					<hr />
					<div style={{ display: "flex", justifyContent: "space-around", width: "80%", margin: "auto" }}>
						<h5 htmlFor=""> AB-</h5>
						<h5 htmlFor=""> {blood.ABneg}</h5>
					</div>
					<hr />
				</div>
			</div>
		</div>
	);
}

export default StockModel;
