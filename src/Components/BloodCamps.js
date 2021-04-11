import React, {useState} from 'react';
import "./BloodCamps.css";


function BloodCamps(){
    const [active, setActive]  = useState(false);

    function handleClick(){
        setActive(true);
    }

    return (
        <div className="bloodcamps">
            <div className="campCard">
                <div className="data">
                    <h1>Blood Camp Name</h1>
                    <p>Address: Near Shivaji nagar, Pune</p>
                    <p>Date: 20th may to 30th may 2021</p>
                    <p>Phone Number: 9876543210</p>
                    <p>Email: bloodcamps@gmail.com</p>
                </div>
                <div className="inter">
                    <button onClick={handleClick} disabled={active} className="interestedbtn">
                    Interested
                    <i className="ml-3 fa fa-hand-peace-o" style={{fontSize:"28px", color:"white"}}></i>
                    </button>
                </div>

            </div>
        </div>
    );

}

export default BloodCamps;