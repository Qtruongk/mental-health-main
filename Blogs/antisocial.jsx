import React from "react";
import { Link } from 'react-router-dom';
import "./antisocial.css";
const Antisocial = () =>{
    return(
        <div className="blog-container-antisocial">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
        </div>
    );
};
export default Antisocial;