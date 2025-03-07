import React, { useEffect } from "react";
const SimplePage = () => {
    useEffect(() => {
        document.title = 'https://www.capgemini.com'
     }, [])
    return (
    // container-fluid is //
    <>
    <div className="container-fluid" style={{ backgroundColor: 'green' }}>
        <div className="container" style={{ backgroundColor: 'yellow' }}>
        <h1 style={{ textAlign: 'center' }}>CollegesListSelected</h1>
    </div>
        
    </div>
    <div className="container">
        <div className="row">
            <img src="https://images.jdmagicbox.com/comp/hyderabad/05/040p5461305/catalogue/capgemini-india-gachibowli-hyderabad-bpo-vj0i2h8ykc.jpg"  style={{width:'100%'}}></img>
            <p>Explore more about our Hyderabad offices</p>
        </div>
        
        </div>
</>

    )
}
export default SimplePage