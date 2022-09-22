import React from "react"

function ProgressBar(){
    return(
        <section className="container container--progress">
            <p>You've used <span>815 GB</span> of your storage</p>
            <div className="progress-container">
                <div className="progress-bar"></div>
            </div>
            <div className="gbs">
                <span>0 GB</span>
                <span>1000 GB</span>
            </div>
            <div className="remaining-gbs">
                <h1>185</h1>
                <h4>GB LEFT</h4>
                <div className="triangle"></div>
            </div>
        </section>
    )
}

export default ProgressBar;