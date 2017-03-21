//LAST WORKING CODE
import React from 'react';
import ReactDOM from 'react-dom';
import { ajax, when } from 'jquery'; 

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
			phone1others: {},
			phone2others: {}
		})
		this.getDeviceByBrandAndModel = this.getDeviceByBrandAndModel.bind(this);
		this.makeAjaxCall = this.makeAjaxCall.bind(this);
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
				phone1: phone1info[0][0],
				phone2: phone2info[0][0]
			});
		});
	}

	render() {
		return(
			<div className="container">
				<h1>Compare Phone Devices</h1>
				<form className="enterInfo" onSubmit={this.getDeviceByBrandAndModel}>
					<div className="firstDeviceForm">
						<h2>First Device</h2>
						<label htmlFor="userBrand">Phone Brand: </label>
						<input type="text" name="userBrand" ref={ref => this.userBrand1 = ref} defaultValue="Samsung" required />

						<label htmlFor="userModel">Phone Model: </label>
						<input type="text" name="userModel" ref={ref => this.userModel1 = ref} defaultValue="S300" required />
					</div>

					<div className="secondDeviceForm">
						<h2>Second Device</h2>
						<label htmlFor="userBrand">Phone Brand: </label>
						<input type="text" name="userBrand" ref={ref => this.userBrand2 = ref} defaultValue="Samsung" required /> 

						<label htmlFor="userModel">Phone Model: </label>
						<input type="text" name="userModel" ref={ref => this.userModel2 = ref} defaultValue="Note5" required />	
					</div>	
						<input type="submit" value="Compare"/>	
				</form>

				<div className="firstDeviceInfo-container">
					<h3>{this.state.phone1.DeviceName}</h3>
					<ul className="SpecsList">
						<li>2G Bands: {this.state.phone1._2g_bands}</li>
						<li>Alarm: {this.state.phone1.alarm}</li>
						<li>Alert Types: {this.state.phone1.alert_types}</li>
						<li>Announced: {this.state.phone1.announced}</li>
						<li>Battery: {this.state.phone1.battery_c}</li>
						<li>Bluetooth: {this.state.phone1.bluetooth}</li>
						<li>Browser: {this.state.phone1.browser}</li>
						<li>Camera: {this.state.phone1.camera_c}</li>
						<li>Card Slot: {this.state.phone1.card_slot}</li>
						<li>Dimensions: {this.state.phone1.dimensions}</li>
						<li>Display: {this.state.phone1.display_c}</li>
						<li>Features: {this.state.phone1.features_c}</li>
						<li>GPS: {this.state.phone1.gps}</li>
						<li>Infrared Port: {this.state.phone1.infrared_port}</li>
						<li>Java: {this.state.phone1.java}</li>
						<li>Loud Speaker: {this.state.phone1.loudspeaker_}</li>
						<li>Messaging: {this.state.phone1.messaging}</li>
						<li>Phonebook: {this.state.phone1.phonebook}</li>
						<li>Radio: {this.state.phone1.radio}</li>
						<li>Resolution: {this.state.phone1.resolution}</li>
						<li>SIM: {this.state.phone1.sim}</li>
						<li>Standby: {this.state.phone1.stand_by}</li>
						<li>Talk Time: {this.state.phone1.talk_time}</li>
						<li>Technology: {this.state.phone1.technology}</li>
						<li>Type: {this.state.phone1.type}</li>
						<li>Weight: {this.state.phone1.weight}</li>
						<li>WLAN: {this.state.phone1.wlan}</li>
					</ul>	
				</div>

				<div className="infoSecondDevice-container">	
					<h3>{this.state.phone2.DeviceName}</h3>
					<ul className="SpecsList">
						<li>2G Bands: {this.state.phone2._2g_bands}</li>
						<li>Alarm: {this.state.phone2.alarm}</li>
						<li>Alert Types: {this.state.phone2.alert_types}</li>
						<li>Announced: {this.state.phone2.announced}</li>
						<li>Battery: {this.state.phone2.battery_c}</li>
						<li>Bluetooth: {this.state.phone2.bluetooth}</li>
						<li>Browser: {this.state.phone2.browser}</li>
						<li>Camera: {this.state.phone2.camera_c}</li>
						<li>Card Slot: {this.state.phone2.card_slot}</li>
						<li>Dimensions: {this.state.phone2.dimensions}</li>
						<li>Display: {this.state.phone2.display_c}</li>
						<li>Features: {this.state.phone2.features_c}</li>
						<li>GPS: {this.state.phone2.gps}</li>
						<li>Infrared Port: {this.state.phone2.infrared_port}</li>
						<li>Java: {this.state.phone2.java}</li>
						<li>Loud Speaker: {this.state.phone2.loudspeaker_}</li>
						<li>Messaging: {this.state.phone2.messaging}</li>
						<li>Phonebook: {this.state.phone2.phonebook}</li>
						<li>Radio: {this.state.phone2.radio}</li>
						<li>Resolution: {this.state.phone2.resolution}</li>
						<li>SIM: {this.state.phone2.sim}</li>
						<li>Standby: {this.state.phone2.stand_by}</li>
						<li>Talk Time: {this.state.phone2.talk_time}</li>
						<li>Technology: {this.state.phone2.technology}</li>
						<li>Type: {this.state.phone2.type}</li>
						<li>Weight: {this.state.phone2.weight}</li>
						<li>WLAN: {this.state.phone2.wlan}</li>
					</ul>	
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));




