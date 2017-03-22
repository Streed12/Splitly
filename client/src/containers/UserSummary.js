import React, {Component} from 'react';
import { Col } from 'react-bootstrap'


class UserSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalOwed: '0.00',
      billsRemaining: 0
    }
  }

  render() {
    const { totalOwed, billsRemaining } = this.state;

    return (
      <div>
        <Col md={4}></Col>
        <Col md={2}>
          <div><h5>Total Owed</h5></div>
          <div>{totalOwed}</div>
        </Col>
        <Col md={2}>
          <div><h5>Bills Remaining</h5></div>
          <div>{billsRemaining}</div>
        </Col>
        <Col md={4}></Col>
      </div>
    );
  }

}

export default UserSummary;

/* Backup

<div className="usersummary-div" >
        <img
          className="usersummary-userpic-img"
          src={state.userpic ? state.userpic : defaults.userpic}
        />

        <div className="usersummary-details" >
          <table className="usersummary-table">
          <tbody>
            <th className="usersummary-th">Total Money Owed</th>
            <th className="usersummary-th">Bills Remaining</th>
            <tr>
              <td className="usersummary-td">${state.totalOwed ? state.totalOwed : defaults.totalOwed}</td>
              <td className="usersummary-td">{state.billsRemaining ? state.billsRemaining : defaults.billsRemaining}</td>
            </tr>
          </tbody>
          </table>
        </div>

        <div className="usersummary-options">
          <table>
            <tr><td className="usersummary-options-td">+ Add Bill</td></tr>
            <tr><td className="usersummary-options-td">+ Add Friend</td></tr>
            <tr><td className="usersummary-options-td">User Stats</td></tr>
          </table>
        </div>

      </div>

*/

