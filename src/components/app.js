//LAST WORKING CODE
import React from 'react';
import ReactDOM from 'react-dom';
import { ajax, when } from 'jquery';  
import Header from './header.js';
import Credits from './credits.js';

// Const
const fonoUrl = 'https://fonoapi.freshpixl.com/v1/getdevice'; 
const fonoToken = 'b7ba9303d66b78ba1f5b1dd595eafdb67283b7b03f7fc06e';

// Components
class App extends React.Component { 
	constructor() {
		super();
		this.state = ({ 
			phone1: {},  
			phone2: {},
			displayData: false
		})
		this.getDeviceByBrandAndModel = this.getDeviceByBrandAndModel.bind(this);
	}

	makeAjaxCall(brandName, modelName) {
		return ajax({
			url: `${fonoUrl}`,
			data: {
				token: `${fonoToken}`,
				brand: brandName, 
				device: modelName
			}
		})
	}

	getDeviceByBrandAndModel(e, brandName, modelName) {
		e.preventDefault();
		const brandName1 = this.userBrand1.value;
		const modelName1 = this.userModel1.value;
		const brandName2 = this.userBrand2.value;
		const modelName2 = this.userModel2.value;

		when(
			this.makeAjaxCall(brandName1,modelName1), this.makeAjaxCall(brandName2, modelName2)
		).then((phone1info, phone2info) => {
			// let phones = [phone1info[0], phone2info[0]]
			console.log(phone1info[0]);
			console.log(phone2info[0]);

			const phone1obj = phone1info[0];
			const phone2obj = phone2info[0]; 
			
			this.setState({
				phone1: phone1info[0][0] || {},
				phone2: phone2info[0][0] || {},
				displayData: true
			});
		});
	}

	render() {	
		let results = "";
		if (this.state.displayData === true && Object.keys(this.state.phone1).length > 0 && Object.keys(this.state.phone2).length > 0) { 
		 	results = (
				<div id="anchor" className="bothPhones-container">
					<div className="firstPhone-container">
						<h3>{this.state.phone1.DeviceName}</h3>
						<ul className="SpecsList">
							<li><span>2G Bands:</span> {this.state.phone1._2g_bands}</li>
							<li><span>Alert Types:</span> {this.state.phone1.alert_types}</li>
							<li><span>Announced:</span> {this.state.phone1.announced}</li>
							<li><span>Battery:</span> {this.state.phone1.battery_c}</li>
							<li><span>Bluetooth:</span> {this.state.phone1.bluetooth}</li>
							<li><span>Browser:</span> {this.state.phone1.browser}</li>
							<li><span>Camera:</span> {this.state.phone1.camera_c}</li>
							<li><span>Card Slot:</span> {this.state.phone1.card_slot}</li>
							<li><span>Dimensions:</span> {this.state.phone1.dimensions}</li>
							<li><span>Display:</span> {this.state.phone1.display_c}</li>
							<li><span>Features:</span> {this.state.phone1.features_c}</li>
							<li><span>GPS:</span> {this.state.phone1.gps}</li>
							<li><span>Infrared Port:</span> {this.state.phone1.infrared_port}</li>
							<li><span>Java:</span> {this.state.phone1.java}</li>
							<li><span>Loud Speaker:</span> {this.state.phone1.loudspeaker_}</li>
							<li><span>Messaging:</span> {this.state.phone1.messaging}</li>
							<li><span>Phonebook:</span> {this.state.phone1.phonebook}</li>
							<li><span>Radio:</span> {this.state.phone1.radio}</li>
							<li><span>Resolution:</span> {this.state.phone1.resolution}</li>
							<li><span>SIM:</span> {this.state.phone1.sim}</li>
							<li><span>Standby:</span> {this.state.phone1.stand_by}</li>
							<li><span>Talk Time:</span> {this.state.phone1.talk_time}</li>
							<li><span>Technology:</span> {this.state.phone1.technology}</li>
							<li><span>Type:</span> {this.state.phone1.type}</li>
							<li><span>Weight:</span> {this.state.phone1.weight}</li>
							<li><span>WLAN:</span> {this.state.phone1.wlan}</li>
						</ul>
					</div>	
					<div className="secondPhone-container">
						<h3>{this.state.phone2.DeviceName}</h3>
						<ul className="SpecsList">
							<li><span>2G Bands:</span> {this.state.phone2._2g_bands}</li>
							<li><span>Alert Types:</span> {this.state.phone2.alert_types}</li>
							<li><span>Announced:</span> {this.state.phone2.announced}</li>
							<li><span>Battery:</span> {this.state.phone2.battery_c}</li>
							<li><span>Bluetooth:</span> {this.state.phone2.bluetooth}</li>
							<li><span>Browser:</span> {this.state.phone2.browser}</li>
							<li><span>Camera:</span> {this.state.phone2.camera_c}</li>
							<li><span>Card Slot:</span> {this.state.phone2.card_slot}</li>
							<li><span>Dimensions:</span> {this.state.phone2.dimensions}</li>
							<li><span>Display:</span> {this.state.phone2.display_c}</li>
							<li><span>Features:</span> {this.state.phone2.features_c}</li>
							<li><span>GPS:</span> {this.state.phone2.gps}</li>
							<li><span>Infrared Port:</span> {this.state.phone2.infrared_port}</li>
							<li><span>Java:</span> {this.state.phone2.java}</li>
							<li><span>Loud Speaker:</span> {this.state.phone2.loudspeaker_}</li>
							<li><span>Messaging:</span> {this.state.phone2.messaging}</li>
							<li><span>Phonebook:</span> {this.state.phone2.phonebook}</li>
							<li><span>Radio:</span> {this.state.phone2.radio}</li>
							<li><span>Resolution:</span> {this.state.phone2.resolution}</li>
							<li><span>SIM:</span> {this.state.phone2.sim}</li>
							<li><span>Standby:</span> {this.state.phone2.stand_by}</li>
							<li><span>Talk Time:</span> {this.state.phone2.talk_time}</li>
							<li><span>Technology:</span> {this.state.phone2.technology}</li>
							<li><span>Type:</span> {this.state.phone2.type}</li>
							<li><span>Weight:</span> {this.state.phone2.weight}</li>
							<li><span>WLAN:</span> {this.state.phone2.wlan}</li>
						</ul>
					</div>	
				</div>
				)
			} else if (this.state.displayData === true && (Object.keys(this.state.phone1).length === 0) && Object.keys(this.state.phone2).length > 0) {
				results = (
					<div className="bothPhones-container">
						<p className="warning">Darn. Can't find the first phone. Check spelling, or spacing since sometimes we're silly.</p>
					</div>
				)
			} else if (this.state.displayData === true && (Object.keys(this.state.phone1).length > 0) && Object.keys(this.state.phone2).length === 0) {
				results = (
					<div className="bothPhones-container">
						<p className="warning">Darn. Can't find the second phone. Check spelling, or spacing since sometimes we're silly.</p>
					</div>
				)
			} else if (this.state.displayData === true && (Object.keys(this.state.phone1).length === 0) && Object.keys(this.state.phone2).length === 0) {
				results = (
					<div className="bothPhones-container">
						<p className="warning">Darn. Can't find either phone. Check spelling, or spacing since sometimes we're silly.</p>
					</div>
				)
			}

		return(
			<div className="container">
				<div className="heroImage">
					<Header />
					
					<form onSubmit={this.getDeviceByBrandAndModel}>
						<div className="formContainer">
							<div className="firstDeviceForm">
								<h3>First Device</h3>
								<label htmlFor="userBrand">Phone Brand: </label>
								<input type="text" name="userBrand" ref={ref => this.userBrand1 = ref} required placeholder="i.e. Samsung" />

								<label htmlFor="userModel">Phone Model: </label>
								<input type="text" name="userModel" ref={ref => this.userModel1 = ref} required placeholder="i.e. Note8" />
							</div>

							<div className="secondDeviceForm">
								<h3>Second Device</h3>
								<label htmlFor="userBrand">Phone Brand: </label>
								<input type="text" name="userBrand" ref={ref => this.userBrand2 = ref} required placeholder="i.e. Apple" /> 

								<label htmlFor="userModel">Phone Model: </label>
								<input type="text" name="userModel" ref={ref => this.userModel2 = ref} required placeholder="i.e. Iphone 7"/>	
							</div>	
						</div>
							<input className="btnCompare" type="submit" value="Compare"/>
							<a href="#anchor"><img src="./images/arrowdown.png" alt="arrow down" /></a>
					</form>
				</div>
			
				<div className="results">
					{results}
				</div>
				
				<Credits />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));




