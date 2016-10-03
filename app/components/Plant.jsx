import React from 'react';

const Plant = React.createClass({

  render() {
    return <li>
      <div>
        <h3>{ this.props.plant.common_name }</h3>
        <p>Native: { this.props.plant.is_native.toString() }</p>
      </div>
    </li>;
  }
});

export default Plant;
