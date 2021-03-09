import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableHeadColumn,
} from "@material-ui/core";
import UserRow from "./UserRow";

class LeaderboardTable extends Component {
  render() {
    return (
      <div>
        <Table>
          <TableHead displaySelectAll={false}>
            <TableRow>
              <TableHeadColumn></TableHeadColumn>
              <TableHeadColumn>Name</TableHeadColumn>
              <TableHeadColumn>Total Donations</TableHeadColumn>
            </TableRow>
          </TableHead>
          <TableBody displayRowCheckbox={false}>
            {/* map all the data from Main and create new user row */}
            {this.props.data.map((elem, index) => {
              return (
                <UserRow
                  username={elem.username}
                  alltime={elem.alltime}
                  index={index + 1}
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default LeaderboardTable;
