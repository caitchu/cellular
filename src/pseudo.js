// App Component: grabbing the API data of all the cell phones 
// Take user's selected brand + selected device and search API for info
	// header 
	// dropdown list
	// input field (model no.)

//Component for where the user enter the brand and model
//Will need a click event (submitting of inputs)
class EnterBrandModel extends React.Component { 
	constructor() {
		super();
	}
	render() {
		return( 
			<div>
				<form onSubmit={this.props.getDeviceByBrandAndModel}>
				<select>
					<option>Samsung</option>
					<option>Nexus</option>
				</select>
				<input></input>
				<button>Compare</button>
				</form>
			</div>
		)
	}
}

//Component for where the information returns on the page
class DisplayDeviceInfo extends React.Component { 
	constructor(){
		super();
	}
	render() {
		return(
			<div>
			</div>
		)
	}
}

//App Component
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			deviceOne: {},
			deviceTwo: {}
		}
	}
	// getDeviceByBrandAndModel() {
			//function should exist in the parent so it can be passed into the children as props! 
	// }
	render() {
		return(
			<div>
				<EnterBrandModel getDeviceByBrandAndModel={this.getDeviceByBrandAndModel} />
				<displayDeviceInfo displayInfo={} />
				<displayDeviceInfo />
			</div>
		)
	}
	componentDidMount() {
			ajax({
			url: `${fonoUrl}`,
			data: {
				token: `${fonoToken}`,
				brand: 'Samsung', //this.state.brand
				device: 'S300' //this.state.device
			}
		}).then((data) => {
			this.setState ({
				devices: data
			});
		})
	}
}

// Results #1 Component: show the data of the selected model 
	// div
	// img of device
	// <li> containing all the info (specs component)


// Results #2 Components: show the data of the second selected model 
		// div
	// img of device
	// <li> containing all the info (specs component)

ReactDOM.render(<App />, document.getElementById('app'));



			props.getDeviceByBrandAndModel(e, this.state.brand, this.state.model)


			<section>
					<Comparison data={this.state.deviceInfo} />
				</section>