import {Component} from 'react' 

import Header from '../Header/header.js'
import Vehicles from '../Vehicles/vehicles.js';
import ContentPage from '../ContentPage/contentPage.js';
import {MdLocationOn} from "react-icons/md";
import { BsFillForwardFill } from "react-icons/bs";
import './home.css' 

class Home extends Component {
    state = {startLocation: "", 
            endLocation: "", 
            showVehicles: false, 
            dateChange: "",
            adultSelect: ""
        }

    onChangeStartLocation = (event) => {
        this.setState({startLocation: event.target.value})
    }

    onChangeEndLocation = (event) => {
        this.setState({endLocation: event.target.value})
    }

    onSearchVehicles = () => {
        this.setState(prevState => ({showVehicles: true}))

    }

    onChangeDate = (event) => {
        this.setState({dateChange: event.target.value})
    }

    onChangeAdult = (event) => {
        this.setState({adultSelect: event.target.value})
    }

    updateState = () => {
        this.setState({showVehicles: false, startLocation: "", endLocation: "", dateChange: "", adultSelect: ""})
    }

    render() {
        const {startLocation,endLocation, adultSelect, showVehicles, dateChange} = this.state
        return(
            <div>
            <div className='div-cont-home'>
                <Header />
                <div className='sub-div-cont-home'>
                    <div className='input-cont-home'>
                        <div className='input-div-logo'>
                        <input
                            type = "text"
                            placeholder='From: Start typing your pick up location'
                            className='input-start-location-home'
                            value={startLocation}
                            onChange={this.onChangeStartLocation}
                            />
                        <MdLocationOn className='location-logo'/>
                        </div>
                        
                        <p><BsFillForwardFill className='arrow-size-home'/></p>
                        <div className='input-div-logo'>
                        <input
                            type = "text"
                            placeholder='To: Start typing your Drop-off location'
                            className='input-start-location-home'
                            value={endLocation}
                            onChange={this.onChangeEndLocation}
                            />
                        <MdLocationOn className='location-logo'/>
                        </div>
                        
                        <input
                            type = "date"
                            placeholder='To: Enter Start Location'
                            className='date-input-home'
                            onChange={this.onChangeDate}
                            />
                        
                        <select onChange={this.onChangeAdult} className='select-input-home'>
                            <option>1 Adult</option>
                            <option>2 Adults</option>
                            <option>3 Adults</option>
                            <option>4 Adults</option>
                            <option>5+ Adults</option>
                        </select>

                        <button onClick={this.onSearchVehicles} className='button-home'>
                            Search
                        </button>
                    </div>
                    
                </div>
                
            </div>
            <div>
                {showVehicles? <Vehicles updateState={this.updateState} adultSelect={adultSelect} startLocation={startLocation} endLocation={endLocation} dateChange={dateChange}/>: <ContentPage />}
            </div>
            
            </div>
        )
    }
}

export default Home