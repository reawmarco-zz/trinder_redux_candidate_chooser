import React from 'react';
import { approveCandidate } from '../actions/index';
import { rejectCandidate } from '../actions/index';
import { connect } from 'react-redux';
import {Link} from 'react-router';

class Candidate extends React.Component {

  approve(){
    this.props.approveCandidate(this.props.candidate);
  }

  reject(){
    this.props.rejectCandidate(this.props.candidate);
  }

  render() {
    return (
      <div>
        <img src={this.props.candidate.imageUrl} style={{width: 400, height: 400}}/>
        {this.props.isLink? <Link to={"chat/"+this.props.candidate.id} >{this.props.candidate.name} </Link>
         : <h1>{this.props.candidate.name}</h1>}
        { this.props.showButtons &&
          <div  role="group" aria-label="Basic example">
            <i className="fa fa-ban fa-4x" aria-hidden="true" onClick={this.reject.bind(this)}></i>
            <i className="fa fa-check-circle fa-4x" aria-hidden="true" onClick={this.approve.bind(this)}></i>
          </div>
          }
      </div>
    );
  }

}

export default connect(null, {approveCandidate,rejectCandidate})(Candidate);
