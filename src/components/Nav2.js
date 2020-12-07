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
        
       <img className="downloadImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/June20/SWM_DownloadApp._CB410314483_.jpg" alt=""/>
        </div>

            

 </div>

       
</> 
    )
}

export default Nav2
