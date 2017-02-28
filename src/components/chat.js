import React, { Component , PropTypes} from 'react';

class Chat extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  voltar(){
    this.context.router.push('/approved');
  }

  render() {
    return (
      <div>
        <h1>Ola sou o id: {this.props.params.id}</h1>
        <button className="btn btn-primary" onClick={this.voltar.bind(this)} >Voltar</button>
      </div>
    );
  }

}

export default Chat;
