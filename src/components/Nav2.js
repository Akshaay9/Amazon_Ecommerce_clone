import React from 'react'
import "../Nav.css"
import LocationOnIcon from '@material-ui/icons/LocationOn';


function Nav2() {
    return (
        <>
        <div className="nav2">


        <div className="secondItem">
        <LocationOnIcon className="locIcon"/>
        <span>Hello</span>
        <p className="address">Select Your Address</p>
        </div>

            


        <div className="firstItem">
        <span>Mobile</span>
        
        </div>

            


        <div className="firstItem">
      
        <p>Todays Deal</p>
        </div>

            


        <div className="firstItem">
        
        <p>electronics</p>
        </div>

            


        <div className="firstItem">
        
        <p>Dress</p>
        </div>

            


            
            


        <div className="thirdItem">
        
        <p>Shopping made easy | Download the app</p>
        </div>

            

 </div>

       
</> 
    )
}

export default Nav2
