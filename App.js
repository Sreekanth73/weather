import React from 'react'; 
import Title from './component/Title'
import Form from './component/Form'
import WeatherDetail from './component/WeatherDetail'

const API_KEY = 'd4d0098b87aae44bcc4a77bdf108ff93';

class App extends React.Component {
	state = {
		city:undefined,
		country:undefined,
		temperature:undefined,
		description:undefined,
		humidity:undefined,
		error:undefined
	}

	getWeather = async(e) =>{
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
		
		const data = await api_call.json()
		
		if (city && country) {
			this.setState({
				city:data.name,
				country:data.sys.country,
				temperature:data.main.temp,
				description:data.weather[0].description,
				humidity:data.main.humidity,
				error:""
			})
		} else{
				this.setState({
					city:undefined,
					country:undefined,
					temperature:undefined,
					description:undefined,
					humidity:undefined,
					error:"please enter the values"
				})
		}		
	}
	render(){
		return(
			<div id="center" className="ui raised very padded text container segment">
				<Title />
				<Form getWeather={this.getWeather}/>
				<WeatherDetail
					city={this.state.city}
					country={this.state.country}
					temperature={this.state.temperature}
					description={this.state.description}
					humidity={this.state.humidity}
					error={this.state.error}
				/>
			</div>
		)
	}
}

export default App