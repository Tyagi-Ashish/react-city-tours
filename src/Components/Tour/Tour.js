import React, { Component } from 'react'
import './tour.scss';

export default class Tour extends Component {
  state = {
    showInfo: false
  }
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }
  render() {
    // console.log(this.props);
    const {id, city, img, name, info} = this.props.tour;
    const {removeTour} = this.props;
    return (

      <article className="tour">
        <div className="img-container">
          <img src={img} alt="cities"/>
          <span className="close-btn" onClick={() => removeTour(id)}>
            <i className="fa fa-window-close "></i>
          </span>
        </div>
        <div className="tour-info">
            <h3>{city}</h3>
            <h4>{name}</h4>
            <h5>info <span onClick={this.handleInfo}><i className="fa fa-arrow-circle-down"></i></span></h5>
            {this.state.showInfo && <p>{info}</p>}
            
        </div>
      </article>

    );
  }
}
