import React, { Component } from 'react';
import { connect } from 'react-redux';
import Candidate from './candidate';


class Rejected extends Component{

    renderCandidate(){
        return this.props.matchs.map((m) => {
            return <Candidate candidate={m} key={m.id} isLink={true} />

        });
    }

    render() {
        return (
            <div  className="container text-center">
                {this.renderCandidate()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        matchs: state.candidates.rejected_list,
    }
}

export default connect(mapStateToProps)(Rejected);
