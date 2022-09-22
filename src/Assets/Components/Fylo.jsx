import React from "react"

import logo from "../Images/logo.svg"
import doc from "../Images/icon-document.svg"
import folder from "../Images/icon-folder.svg"
import upload from "../Images/icon-upload.svg"

function Fylo(){

    const icons = [doc, folder, upload]

    return(
        <section className="container container--fylo">
            <img src={logo} alt="Logo" />
            <div className="icon-container">
                {
                    icons.map(i => {
                        return(
                            <div className="icon">
                                <img  src={i} alt="icon" />
                            </div>
                        )
                    
                    })
                }
            </div>
        </section>
    )
}

export default Fylo;