
import './vehiclesData.css'


import {MdGroup} from "react-icons/md";
import {PiSuitcaseRollingBold} from "react-icons/pi";
import {FaRoute} from "react-icons/fa";
import {TiTick} from "react-icons/ti";
// import {MdOutlineEuroSymbol} from "react-icons/md";
import {MdMail} from "react-icons/md";
import {MdOutlineWhatsapp} from "react-icons/md";
import {PiArrowsInSimpleFill} from "react-icons/pi";
import {MdOutlineDoorSliding} from "react-icons/md";
import {MdOutlineHomeRepairService} from "react-icons/md";
const VehiclesData = (props) => {
    const {item} = props
    return (
        <div className='sub-second-cont-vehi'>
            <div className='sub-initial-second-vehi'>
                <div className='sec-first-sub-cont'>
                    <img src={item.image}
                         alt="imageCar" 
                         className='image-car'
                         />
                    <h3 className='heading-brand heading-brand-model'>{item.brand}</h3>
                    {/* <p>or similar</p> */}
                </div>
                <div className='sec-sec-sub-cont-vehi'>
                    <h3 className='heading-brand'>Service overview</h3>
                        <div className='sec-sec-sub-sub-cont-vehi'>
                            <MdGroup className='md-group-vehi'/>
                            <div className='sub-passengers-vehi'>
                                <p className='heading-service-vehi'>Passengers</p>
                                <p>Min: 1 - Max: {item.seatingCapacity}</p>
                            </div>
                            </div>
                            <div className='sec-sec-sub-sub-cont-vehi'>
                                <PiSuitcaseRollingBold className='md-group-vehi'/>
                                <div className='sub-passengers-vehi'>
                                    <p className='heading-service-vehi'>Suitcases capacity</p>
                                    <p>1 Medium suitcases</p>
                                </div>
                            </div>
                                <div className='sec-sec-sub-sub-cont-vehi'>
                                <FaRoute className='md-group-vehi'/>
                                    <div className='sub-passengers-vehi'>
                                        <p className='heading-service-vehi'>Route information</p>
                                        <p>28.0 km - 27 mins</p>
                                    </div>
                                </div>
                            </div>
                <div className='sec-sec-sub-cont-vehi'>
                    <h3 className='heading-brand-new'>Included in the price</h3>
                        <div className='sec-sub-including-prices-vehi'>
                            <p><TiTick className='tick-vehi'/> Free amedments</p>
                            <p><TiTick className='tick-vehi'/> Professional driver</p>
                            <p><TiTick className='tick-vehi'/> Instant confirmation</p>
                            <p><TiTick className='tick-vehi'/> Free cancellation Up to 24hours before your arrival</p>
                        </div>
                </div>
                <div className='sec-last-sub-part-price'>
                    <h2> {item.price}</h2>
                    <p>Final Price</p>
                    <div>
                        <button className='btn-booknow-vehi'>
                            Book now
                        </button>
                    </div>
                    <div className='mail-icons-sub-cont'>
                        <button><MdMail className='md-mail-vehi'/></button>
                        <button><MdOutlineWhatsapp className='md-mail-vehi'/></button>
                    </div>             
                </div>
            </div>
            <div className='sec-sub-footer'>
                <p><PiArrowsInSimpleFill className='opp-arrow-vehi'/> Meet & Greet</p>
                <p><MdOutlineDoorSliding className='opp-arrow-vehi'/> Door-to-Door</p>
                <p><MdOutlineHomeRepairService className='opp-arrow-vehi'/> Porter service</p>
            </div>
        </div>
    )
}

export default VehiclesData