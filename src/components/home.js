import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCandidates, approveCandidate, rejectCandidate } from '../actions/index';
import Candidate from './candidate';

class Home extends Component{

  componentWillMount() {
    if(!this.props.candidates) {
      this.props.fetchCandidates();
    }
  }

  renderCandidate(){
      return (
        <div>
          <Candidate showButtons={true} candidate={this.props.current} />
        </div>
      );
  }

  render() {
    if(!this.props.current){
      return <div><h1>Acabo!!!</h1></div>
    }
    return (
      <div  className="container text-center">
        {this.renderCandidate()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    candidates: state.candidates.next_candidates,
    current: state.candidates.current_candidate
  }
}

export default connect(mapStateToProps, {fetchCandidates, approveCandidate,rejectCandidate})(Home);
