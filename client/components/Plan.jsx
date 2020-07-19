import React from "react"
import { HashRouter as Redirect } from "react-router-dom"
import { connect } from "react-redux"
import {savePlan} from "../actions/plan"


import PlanColumn from './PlanColumn'

class Plan extends React.Component {
  generateColumns() {
    let columns = []
    for (let i = 1; i <= 7; i++) {
      columns.push(<PlanColumn key={i} dayNumber={i} days={this.props.plans} />)
    }
    return columns
  }

  
handleClick=()=>{
 
   const userId = this.props.auth.user.id
   this.props.dispatch(savePlan(userId, this.props.plans))
  }

  render() {
    const auth = this.props.auth
    const plans = this.props.plans

    return (
      <div className="plan-container">
        {auth.isAuthenticated ? (
          <>
            <div className="plan">{this.generateColumns()}</div>
            <button onClick={this.handleClick}>Save Plan</button>
          </>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ auth, plans }) => {
  return {
    auth,
    plans,
  }
}

export default connect(mapStateToProps)(Plan)
