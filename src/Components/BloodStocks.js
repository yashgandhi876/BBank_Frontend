import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Footer from "./Layout/Footer";

const columns = [
	{
		name: "BBank Name",
		selector: "name",
		sortable: true,
		// minWidth: "900",
		wrap: true,
	},
	{
		name: "Email",
		selector: "emailId",
		sortable: true,
		wrap: true,
	},
	{
		name: "Mobile Number",
		selector: "mobile",
	},
	{
		name: "Pincode",
		selector: "pincode",
		sortable: true,
		wrap: true,
	},
	{
		name: "A+",
		selector: "Apos",
		sortable: true,
	},
	{
		name: "A-",
		selector: "Aneg",
		sortable: true,
	},
	{
		name: "B+",
		selector: "Bpos",
		sortable: true,
	},
	{
		name: "B-",
		selector: "Bneg",
		sortable: true,
	},
	{
		name: "O+",
		selector: "Opos",
		sortable: true,
	},
	{
		name: "O-",
		selector: "Oneg",
		sortable: true,
	},
	{
		name: "AB+",
		selector: "ABpos",
		sortable: true,
		maxWidth: "10",
	},
	{
		name: "AB-",
		selector: "ABneg",
		sortable: true,
		maxWidth: "10",
	},
];

const isIndeterminate = (indeterminate) => indeterminate;
const selectableRowsComponentProps = { indeterminate: isIndeterminate };

function BloodStocks() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function getData() {
			try {
				let data = await axios.get("/user/getStock");
				// console.log(data.data);
				setData(data.data);
			} catch (e) {
				// console.log(e);
			}
		}
		getData();
	}, []);

	return (
		<div>
			<div style={{ width: "95%", margin: "15px auto", minHeight: "50vh" }}>
				<Card>
					<DataTable
						title="Blood Stocks Data"
						columns={columns}
						data={data}
						defaultSortField="email"
						sortIcon={<SortIcon />}
						pagination
						selectableRows

						selectableRowsComponent={Checkbox}
						selectableRowsComponentProps={selectableRowsComponentProps}
					/>
				</Card>
			</div>
			<div style={{ width: "100%", marginTop: "10px", paddingTop: "10px" }} className="m-0">
				<Footer />
			</div>
		</div>
	);
}

export default BloodStocks;
