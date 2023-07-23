import {Component} from 'react'

import { BsChevronRight } from "react-icons/bs";
import {MdOutlineRoute} from "react-icons/md";
import {MdLocationOn} from "react-icons/md";
import {MdDateRange} from "react-icons/md";
import {MdPerson} from "react-icons/md";
import {MdOutlineCompareArrows} from "react-icons/md";
import {TiTick} from "react-icons/ti";
import VehiclesData from '../VehiclesData/vehiclesData.js';
import './vehicles.css'

const vehiclesList = [
  {
    "id": 1,
    "image": "https://res.cloudinary.com/dgwskqa59/image/upload/v1690125460/cixgxhro6wjuq2mgxpbo.jpg",
    "brand": "Maruti Suzuki",
    "model": "Swift",
    "price": "₹5000",
    "seatingCapacity": 5
  },
  {
    "id": 2,
    "image": "https://res.cloudinary.com/dgwskqa59/image/upload/v1690125528/db2s1a9wrfxvshuqtcjr.jpg",
    "brand": "Hyundai",
    "model": "i20",
    "price": "₹4000",
    "seatingCapacity": 5
  },
  {
    "id": 3,
    "image": "https://res.cloudinary.com/dgwskqa59/image/upload/v1690125588/nfyj7jabq9t8hw1sliav.jpg",
    "brand": "Tata Motors",
    "model": "Nexon",
    "price": "₹6000",
    "seatingCapacity": 5
  },
  {
    "id": 4,
    "image": "https://res.cloudinary.com/dgwskqa59/image/upload/v1690125641/j6uwi6hwzy3ztfie2b3y.jpg",
    "brand": "Mahindra",
    "model": "Scorpio",
    "price": "₹8500",
    "seatingCapacity": 7
  },
  {
    "id": 5,
    "image": "https://res.cloudinary.com/dgwskqa59/image/upload/v1690125711/d2fryj7lxxlpkjz02w7d.jpg",
    "brand": "Toyota",
    "model": "Innova",
    "price": "₹3300",
    "seatingCapacity": 7
  },
  {
    "id": 6,
    "image": "https://res.cloudinary.com/dgwskqa59/image/upload/v1690125757/tglwu6immq4srnrar8nw.jpg",
    "brand": "Honda",
    "model": "City",
    "price": "₹3500",
    "seatingCapacity": 5
  },
  {
    "id": 7,
    "image": "https://res.cloudinary.com/dgwskqa59/image/upload/v1690125808/tzxbtu5rrwltmfmele7d.jpg",
    "brand": "Renault",
    "model": "Kwid",
    "price": "₹6500",
    "seatingCapacity": 5
  },
  {
    "id": 8,
    "image": "https://res.cloudinary.com/dgwskqa59/image/upload/v1690125848/p3xypg7ygeoxekplglod.jpg",
    "brand": "Ford",
    "model": "EcoSport",
    "price": "₹7000",
    "seatingCapacity": 5
  },
  {
    "id": 9,
    "image": "https://res.cloudinary.com/dgwskqa59/image/upload/v1690125914/lebcs9wubrxlemcievqc.jpg",
    "brand": "Volkswagen",
    "model": "Polo",
    "price": "₹6000",
    "seatingCapacity": 5
  },
  {
    "id": 10,
    "image": "https://res.cloudinary.com/dgwskqa59/image/upload/v1690125953/zy8ouq19f1jrcrsa7oa7.jpg",
    "brand": "Skoda",
    "model": "Octavia",
    "price": "₹5000",
    "seatingCapacity": 5
  }
]

  

class Vehicles extends Component {
    render() {
        const {startLocation, updateState, adultSelect, endLocation, dateChange} = this.props
        const onClickState =() => (
            updateState()
        )
            
        return (
            <div className='div-cont-vehicles'>
                <div className='div-head-container-path'>
                    <p>Home</p>
                    <p><BsChevronRight className='react-icon-color'/></p>
                    <p>Destinations</p>
                </div>
                <div className='main-cont-vehi'>
                    <div className='sub-first-cont-vehi'>
                        <div className='sub-inner-first-cont-vehi'>
                            <p className='para-route'><MdOutlineRoute /> Route</p>
                            <hr className='hr-veh'/>
                            <p className='pb-3'>Trip Details</p>
                            <div>
                                <p><MdLocationOn /> {startLocation}</p>
                                <p><MdLocationOn /> {endLocation}</p>
                                <p><MdDateRange /> {dateChange}</p>
                            </div>
                            <hr className='hr-veh'/>
                            <div className='para-route'>
                                <p><MdPerson /> {adultSelect}</p>
                                <p><MdOutlineCompareArrows /> One-way</p>
                            </div>
                            <button onClick={onClickState} className='btn-change-route-veh'>
                                Change route
                            </button>
                        </div>
                        <div className='sub-inner-first-cont-vehi'>
                            <h3 className='heading-indclude-sub'>Included in the price</h3>
                            <hr className='hr-veh'/>
                            <div className='sec-sub-including-prices-vehi'>
                                <p><TiTick className='tick-vehi'/> Free amedments</p>
                                <p><TiTick className='tick-vehi'/> Professional driver</p>
                                <p><TiTick className='tick-vehi'/> Instant confirmation</p>
                                <p><TiTick className='tick-vehi'/> Free cancellation </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='sub-main-second-cont-vehi'>
                    {vehiclesList.map(item => (
                        <VehiclesData key={item.id} item={item}/>
                    //     <div className='sub-second-cont-vehi'>
                    //     <div className='sub-initial-second-vehi'>
                    //         <div className='sec-first-sub-cont'>
                    //             <img src={item.image}
                    //                 alt="imageCar" 
                    //                 className='image-car'
                    //                 />
                    //             <h3>{item.brand}</h3>
                    //                 {/* <p>or similar</p> */}
                    //         </div>
                    //         <div className='sec-sec-sub-cont-vehi'>
                    //             <h3>Service overview</h3>
                    //             <div className='sec-sec-sub-sub-cont-vehi'>
                    //                 <MdGroup className='md-group-vehi'/>
                    //                 <div className='sub-passengers-vehi'>
                    //                     <p className='heading-service-vehi'>Passengers</p>
                    //                     <p>Min: 1 - Max: {item.seatingCapacity}</p>
                    //                 </div>
                    //             </div>
                    //             <div className='sec-sec-sub-sub-cont-vehi'>
                    //                 <PiSuitcaseRollingBold className='md-group-vehi'/>
                    //                 <div className='sub-passengers-vehi'>
                    //                     <p className='heading-service-vehi'>Suitcases capacity</p>
                    //                     <p>1 Medium suitcases</p>
                    //                 </div>
                    //             </div>
                    //             <div className='sec-sec-sub-sub-cont-vehi'>
                    //                 <FaRoute className='md-group-vehi'/>
                    //                 <div className='sub-passengers-vehi'>
                    //                     <p className='heading-service-vehi'>Route information</p>
                    //                     <p>28.0 km - 27 mins</p>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //         <div className='sec-sec-sub-cont-vehi'>
                    //             <h3>Included in the price</h3>
                    //             <div className='sec-sub-including-prices-vehi'>
                    //                 <p><TiTick className='tick-vehi'/> Free amedments</p>
                    //                 <p><TiTick className='tick-vehi'/> Professional driver</p>
                    //                 <p><TiTick className='tick-vehi'/> Instant confirmation</p>
                    //                 <p><TiTick className='tick-vehi'/> Free cancellation Up to 24hours before your arrival</p>
                    //             </div>
                    //         </div>
                    //         <div className='sec-last-sub-part-price'>
                    //             <h2> {item.price}</h2>
                    //             <p>Final Price</p>
                    //             <div>
                    //                 <button className='btn-booknow-vehi'>
                    //                     Book now
                    //                 </button>
                    //             </div>
                    //             <div className='mail-icons-sub-cont'>
                    //                 <button><MdMail className='md-mail-vehi'/></button>
                    //                 <button><MdOutlineWhatsapp className='md-mail-vehi'/></button>
                    //             </div>
                                
                    //         </div>
                    //     </div>
                    //     <div className='sec-sub-footer'>
                    //         <p><PiArrowsInSimpleFill className='opp-arrow-vehi'/> Meet & Greet</p>
                    //         <p><MdOutlineDoorSliding className='opp-arrow-vehi'/> Door-to-Door</p>
                    //         <p><MdOutlineHomeRepairService className='opp-arrow-vehi'/> Porter service</p>
                    //     </div>
                    // </div>
                        ))}
                        
                    </div>
                    
                </div>
                <div class="bg-container-new pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center text-center text-md-left">
                    <div class="mb-3">
                        <h1 class="image1"> Rahul Cabs</h1> 
                    </div>
                    <div class="d-flex flex-row justify-content-center mb-3 text-md-left">
                        <div class="icon-border text-center d-flex flex-column justify-content-center mr-2">
                            <i class="fa-brands fa-google icon-google"></i>
                        </div>
                        <div class="icon-border text-center d-flex flex-column justify-content-center mr-2">
                            <i class="fa-brands fa-twitter icon-google"></i>
                        </div>
                        <div class="icon-border text-center d-flex flex-column justify-content-center mr-2">
                            <i class="fa-brands fa-instagram icon-google"></i>
                        </div>
                        <div class="icon-border text-center d-flex flex-column justify-content-center mr-2">
                            <i class="fa-brands fa-linkedin icon-google"></i>
                        </div>
                    </div>
                    <p class="paragraph-address"> 37, Ayur Vigyan nagar, New Delhi, India. </p>
                </div>
                <div class="col-6 col-md-6 col-lg-3 ">
                    <h1 class="heading-get-to-know-us pb-2"> Get to know us </h1>
                    <p class="paragraph-get-to-know-us"> About us </p>
                    <p class="paragraph-get-to-know-us"> Career </p>
                    <p class="paragraph-get-to-know-us"> Press Release </p>
                    <p class="paragraph-get-to-know-us"> gift a smile </p>
                </div>
                <div class="col-6 col-md-6 col-lg-3 ">
                    <h1 class="heading-get-to-know-us pb-2"> Contact with us </h1>
                    <p class="paragraph-get-to-know-us"> Facebook </p>
                    <p class="paragraph-get-to-know-us"> Twitter </p>
                    <p class="paragraph-get-to-know-us"> Instagram </p>
                    <a href="https://www.linkedin.com/in/rahulgundluru/" target='blank' class="paragraph-get-to-know-us"> linkedin </a>
                </div>
                <div class="col-6 col-md-6 col-lg-3 ">
                    <h1 class="heading-get-to-know-us pb-2"> Let US Help You </h1>
                    <p class="paragraph-get-to-know-us"> 100% Purchase Protection </p>
                    <p class="paragraph-get-to-know-us"> Your Account </p>
                    <p class="paragraph-get-to-know-us"> Return Center </p>
                    <p class="paragraph-get-to-know-us"> Help </p>
                </div>
                <div class="col-12 text-center">
                    <hr class="horizontal" />
                    <h1 class="copyright-rahul"> <i class="fa-regular fa-copyright"></i> 2023 by Rahul Gundluru. created with React. </h1>
                </div>
            </div>

        </div>
    </div>
            </div>
        )
    }
}

export default Vehicles