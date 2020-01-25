import React from 'react'

class Form extends React.Component{

	render(){
		return(
			<div id="child">
				<form onSubmit= {this.props.getWeather} className="ui form">

					<div className="equal width fields">
    					<div className="field">
      						<label>CITY</label>
      						<div className="ui fluid input">
      							<input type="text" name="city" placeholder="city" />
      						</div>
    					</div>
    					<div className="field">
      						<label>COUNTRY</label>
      						<div className="ui fluid input">
      							<input type="text" name="country" placeholder="country" />
      						</div>
    					</div>
  					</div>
					<button className="ui olive button">Click</button>
				</form>
			</div>
		);
	}
};

export default Form;