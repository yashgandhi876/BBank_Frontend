import React, { useState, useEffect } from "react";
import Footer from "./Layout/Footer";
import "./SignUp.css";
import axios from "axios";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
// import { useHistory } from "react-router-dom";
if (typeof window !== "undefined") {
	injectStyle();
}

function UpdateStock({ id }) {
	// let history = useHistory();
	const [stocks, setStocks] = useState({
		Apos: 0,
		Aneg: 0,
		Bpos: 0,
		Bneg: 0,
		ABpos: 0,
		ABneg: 0,
		Opos: 0,
		Oneg: 0,
	});

	useEffect(() => {
		let data;
		// console.log("in use effect ");
		async function getData() {
			try {
				data = await axios.get(`/bloodbank/getStockOfBank/${id}`);
				// console.log("data of data of stocks: ");
				// console.log(data.data);
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
				setStocks(obj);
			} catch (e) {
				// console.log("in catch");
				// console.dir(e);
			}
		}
		getData();
	}, []);

	async function submitHandler() {
		try {
			// console.log(stocks);
			let tempData = stocks;
			const result = await axios.put("/bloodbank/updateStock", tempData);
			// console.log(result);
			toast.success("Stock updated successfully", {
				position: "bottom-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (e) {
			// console.log("in catch");
			// console.dir(e);
			toast.error(e.response.data.message, {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	}

	return (
		<>
			<h1 className="m-3">Update Stocks</h1>
			<div style={{ display: "flex", margin: "auto", width: "19%", justifyContent: "space-between" }}>
				<div>

					<label className="mx-auto my-2 px-2" htmlFor="">
						<h5 style={{ margin: "0px" }}>A+</h5>
					</label>
				</div>
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

					<input
						type="number"
						className="px-2 mx-2"
						value={stocks.Apos}
						onChange={(e) => {
							setStocks({ ...stocks, Apos: +e.target.value });
						}}
						autoComplete="true"
						min="0"
						required
					/>
				</div>
			</div>
			<div style={{ display: "flex", margin: "auto", width: "19%", justifyContent: "space-between" }}>
				<div>

					<label className="mx-auto my-2 px-2" htmlFor="">
						<h5 style={{ margin: "0px" }}>A-</h5>
					</label>
				</div>
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

					<input
						type="number"
						className="px-2 mx-2"
						value={stocks.Aneg}
						onChange={(e) => {
							setStocks({ ...stocks, Aneg: +e.target.value });
						}}
						autoComplete="true"
						min="0"
						required
					/>
				</div>
			</div>
			<div style={{ display: "flex", margin: "auto", width: "19%", justifyContent: "space-between" }}>
				<div>

					<label className="mx-auto my-2 px-2" htmlFor="">
						<h5 style={{ margin: "0px" }}>B+</h5>
					</label>
				</div>
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

					<input
						type="number"
						className="px-2 mx-2"
						value={stocks.Bpos}
						onChange={(e) => {
							setStocks({ ...stocks, Bpos: +e.target.value });
						}}
						autoComplete="true"
						min="0"
						required
					/>
				</div>
			</div>
			<div style={{ display: "flex", margin: "auto", width: "19%", justifyContent: "space-between" }}>
				<div>

					<label className="mx-auto my-2 px-2" htmlFor="">
						<h5 style={{ margin: "0px" }}>B-</h5>
					</label>
				</div>
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

					<input
						type="number"
						className="px-2 mx-2"
						value={stocks.Bneg}
						onChange={(e) => {
							setStocks({ ...stocks, Bneg: +e.target.value });
						}}
						autoComplete="true"
						min="0"
						required
					/>
				</div>
			</div>
			<div style={{ display: "flex", margin: "auto", width: "19%", justifyContent: "space-between" }}>
				<div>

					<label className="mx-auto my-2 px-2" htmlFor="">
						<h5 style={{ margin: "0px" }}>O+</h5>
					</label>
				</div>
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

					<input
						type="number"
						className="px-2 mx-2"
						value={stocks.Opos}
						onChange={(e) => {
							setStocks({ ...stocks, Opos: +e.target.value });
						}}
						autoComplete="true"
						min="0"
						required
					/>
				</div>
			</div>
			<div style={{ display: "flex", margin: "auto", width: "19%", justifyContent: "space-between" }}>
				<div>

					<label className="mx-auto my-2 px-2" htmlFor="">
						<h5 style={{ margin: "0px" }}>O-</h5>
					</label>
				</div>
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

					<input
						type="number"
						className="px-2 mx-2"
						value={stocks.Oneg}
						onChange={(e) => {
							setStocks({ ...stocks, Oneg: +e.target.value });
						}}
						autoComplete="true"
						min="0"
						required
					/>
				</div>
			</div>
			<div style={{ display: "flex", margin: "auto", width: "19%", justifyContent: "space-between" }}>
				<div>

					<label className="mx-auto my-2 px-2" htmlFor="">
						<h5 style={{ margin: "0px" }}>AB+</h5>
					</label>
				</div>
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

					<input
						type="number"
						className="px-2 mx-2"
						value={stocks.ABpos}
						onChange={(e) => {
							setStocks({ ...stocks, ABpos: +e.target.value });
						}}
						autoComplete="true"
						min="0"
						required
					/>
				</div>
			</div>
			<div style={{ display: "flex", margin: "auto", width: "19%", justifyContent: "space-between" }}>
				<div>

					<label className="mx-auto my-2 px-2" htmlFor="">
						<h5 style={{ margin: "0px" }}>AB-</h5>
					</label>
				</div>
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

					<input
						type="number"
						className="px-2 mx-2"
						value={stocks.ABneg}
						onChange={(e) => {
							setStocks({ ...stocks, ABneg: +e.target.value });
						}}
						autoComplete="true"
						min="0"
						required
					/>
				</div>
			</div>
			<div className="m-4">
				<button onClick={submitHandler} className="btn btn-primary" style={{ width: "200px", borderRadius: "50px", padding: "5px", margin: "30px auto", height: "43px", fontSize: "20px", backgroundColor: "#0979FA" }}>
					Update Stocks
				</button>
			</div>
			<div style={{ width: "100%", marginTop: "10px", paddingTop: "10px" }} className="m-0">
				<Footer />
			</div>
			<ToastContainer position="bottom-right" />
		</>
	);
}

export default UpdateStock;
