import React from 'react'

class WeatherDetail extends React.Component{
	render(){
		return(
			<div id="detail">
				{this.props.city &&  <p>CITY:{this.props.city}</p>}
				{this.props.country && <p> COUNTRY:{this.props.country}</p>}
				{this.props.temperature && <p>TEMPERATURE:{this.props.temperature}</p>}
				{this.props.description && <p>DESCRIPTION : {this.props.description}</p>}
				{this.props.humidity && <p>HUMIDITY:{this.props.humidity}</p>}
				{this.props.error && <h3><p style={{color:'orange'}}>{this.props.error}</p></h3>}
			</div>
		);
	}
}

export default WeatherDetail