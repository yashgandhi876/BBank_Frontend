import axios from "axios";
import React, { useState, useEffect } from "react";
import "./BloodCamps.css";
import NoDataFound from "./NoDataFound";

function BloodCamps(props) {
	let year = new Date().getFullYear();
	let month = new Date().getMonth();
	let date = new Date().getDate();
	const [allCamps, setAllCamps] = useState([]);
	const [camps, setCamps] = useState([]);
	const [styles, setStyles] = useState({
		all: 'selected',
		active: '',
		upcoming: '',
		past: '',
	});

	useEffect(() => {
		// console.log("in get camp");
		async function getData() {
			try {
				let { data } = await axios.get("/user/getCamp");
				setAllCamps(Array.from(data));
				setCamps(Array.from(data));
				// let arr = Array.from(data);
			} catch (e) {
				console.dir(e);
			}
		}
		getData();
	}, []);


	function handelAll() {
		setStyles({
			all: 'selected',
			active: 'notselected',
			upcoming: 'notselected',
			past: 'notselected',
		})
		setCamps(allCamps);
	}
	function handelActive() {
		setStyles({
			all: 'notselected',
			active: 'selected',
			upcoming: 'notselected',
			past: 'notselected',
		})

		const arr = allCamps.filter(camp => {
			let temptoDate = camp.toDate.split("-");
			let tempFromDate = camp.fromDate.split("-");
			if ((new Date(year, month, date) >= new Date(+tempFromDate[0], +tempFromDate[1] - 1, +tempFromDate[2]))) {
				if ((new Date(year, month, date) <= new Date(+temptoDate[0], +temptoDate[1] - 1, +temptoDate[2]))) {
					console.log(camp.fromDate + ' - ' + camp.toDate);
					console.log("present");
					return camp;
				}
			}
		})
		setCamps(arr);
	}
	function handelUpcoming() {
		setStyles({
			all: 'notselected',
			active: 'notselected',
			upcoming: 'selected',
			past: 'notselected',
		})
		const arr = allCamps.filter(camp => {
			let temptoDate = camp.toDate.split("-");
			let tempFromDate = camp.fromDate.split("-");
			if ((new Date(year, month, date) < new Date(+tempFromDate[0], +tempFromDate[1] - 1, +tempFromDate[2]))) {
				if ((new Date(year, month, date) < new Date(+temptoDate[0], +temptoDate[1] - 1, +temptoDate[2]))) {
					console.log(camp.fromDate + ' - ' + camp.toDate);
					console.log("present");
					return camp;
				}
			}
		})
		setCamps(arr);
	}
	function handelPast() {
		setStyles({
			all: 'notselected',
			active: 'notselected',
			upcoming: 'notselected',
			past: 'selected',
		})
		const arr = allCamps.filter(camp => {
			let temptoDate = camp.toDate.split("-");
			let tempFromDate = camp.fromDate.split("-");
			if ((new Date(year, month, date) > new Date(+tempFromDate[0], +tempFromDate[1] - 1, +tempFromDate[2]))) {
				if ((new Date(year, month, date) > new Date(+temptoDate[0], +temptoDate[1] - 1, +temptoDate[2]))) {
					console.log(camp.fromDate + ' - ' + camp.toDate);
					console.log("present");
					return camp;
				}
			}
		})
		setCamps(arr);
	}

	return camps.length !== 0 ? (
		<div>
			<div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
				<div onClick={handelAll} className={`selectdata ${styles.all}`}>
					All
				</div>
				<div onClick={handelActive} className={`selectdata ${styles.active}`}>
					Active
				</div>
				<div onClick={handelUpcoming} className={`selectdata ${styles.upcoming}`}>
					Upcoming
				</div>
				<div onClick={handelPast} className={`selectdata ${styles.past}`}>
					Past
				</div>
			</div>
			{
				camps.map((temp, index) => (
					<div key={index} className="bloodcamps">
						<div className="campCard">
							<div className="data">
								<h1>{temp.name}</h1>
								<p>{`Address: ${temp.address}, ${temp.city}, ${temp.state}, ${temp.country}, ${temp.pincode}`}</p>
								<p>{`Date: ${temp.fromDate} to ${temp.toDate}`}</p>
								<p>Phone Number: {temp.mobile}</p>
								<p>Email: {temp.emailId}</p>
							</div>
							<div className="inter">
								<a
									style={{ textDecoration: "none" }}
									href={`mailto:${temp.emailId}?subject=Interested in blood donation camp&body=Hi, %0d%0aI am <YOUR NAME> and I'm interested in your ${temp.name} that is to be organised from ${temp.fromDate} to ${temp.toDate} in ${temp.city}.  My blood group is <BLOOD GROUP> and I  am willing to volunteer to donate at your camp and help someone in need. %0d%0aThanks.`}
								>
									<button
										// onClick={handleClick}
										style={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											alignItems: "start",
											width: "auto",
										}}
										disabled={true}
										className="interestedbtn"
									>
										<h4>Interested ??</h4>
									</button>
								</a>
							</div>
						</div>
					</div>
				))
			}
		</div>
	) : (
		<NoDataFound />
	);
}

export default BloodCamps;
