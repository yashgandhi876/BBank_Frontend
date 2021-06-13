import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "./Layout/Footer";
import "./BloodCamps.css";
import NoDataFound from "./NoDataFound";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
if (typeof window !== "undefined") {
	injectStyle();
}

function ValidateBBank() {
	const [banks, setBanks] = useState([]);

	async function handleClick(idd) {
		// console.log(idd);
		try {
			// console.log(`in get data of ${idd}`);
			await axios.put(`/admin/setvalidebank/${idd}`);
			let { data } = await axios.get("/admin/validateBloodBanks");
			// console.log("data from blood bank use effect ");
			// console.log(data);
			setTimeout(() => {
				setBanks(Array.from(data));
			}, 2000);
			toast.success("validated successfully", {
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
			console.dir(e);
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

	useEffect(() => {
		async function getData() {
			try {
				let { data } = await axios.get("/admin/validateBloodBanks");
				// console.log("data from blood bank use effect ");
				// console.log(data);
				setBanks(Array.from(data));
			} catch (e) {
				// console.log("not autheticated user");
				// console.dir(e);
			}
		}
		getData();
	}, []);

	return banks.length !== 0 ? (<div>
		<div style={{ minHeight: "50vh" }}>
			{
				banks.map((temp) => (
					<div key={temp.bankId} className="bloodcamps">
						<div className="campCard">
							<div className="data">
								<h1>{temp.name}</h1>
								<p>{`Address: ${temp.address}, ${temp.city}, ${temp.state}, ${temp.country}, ${temp.pincode}`}</p>
								<p>Phone Number: {temp.mobile}</p>
								<p>Email: {temp.emailId}</p>
							</div>
							<div className="inter">
								<button onClick={() => handleClick(temp.bankId)} className="interestedbtn pointer">
									Validate This BBank {"  "}
									<i className="fa fa-check-square"></i>
								</button>
							</div>
						</div>
						<ToastContainer position="bottom-right" />
					</div>
				))
			}
		</div>
		<div style={{ width: "100%", marginTop: "10px", paddingTop: "10px" }} className="m-0">
			<Footer />
		</div>
	</div>
	) : (
		<NoDataFound />
	);
}

export default ValidateBBank;
