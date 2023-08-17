import React from "react";
import { Link } from 'react-router-dom';
import './bipolar-disorder.css';''
const BipolarDisorder =()=>{
    return(
        <div className="blog-container-bipolar-disorder">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div className="title-blog">
                <p className="conditions-a-z">CONDITIONS A-Z</p>
                <p className="title-blog-head">
                    <b>What Is Bipolar Disorder?</b>
                </p>
                <div className="define-para">
                    <p><b>Bipolar disorder</b> is a mental health condition defined by periods (better known as episodes) of extreme mood disturbances. Bipolar disorder affects a person's mood, thoughts, and behavior. It is a chronic condition, meaning that it is lifelong. Symptoms can be managed, however, with proper treatment.</p>
                </div>
                <div className="table-container">
                    <div className="table-of-contents-6">
                        <b className="table-of-contents-head">Table of contents</b>
                        <ul className="table-of-contents-list">
                            <li className="table-items">Symptoms</li>
                            <li className="table-items">Causes</li>
                            <li className="table-items">Diagnosis</li>
                            <li className="table-items">Treatments</li>
                            <li className="table-items">Coping</li>
                            <li className="table-items">Bipolar Disorder in Children</li>
                        </ul>
                        <div className="description-blog">
                            <p>There are two main types of bipolar disorders: bipolar I and bipolar II. According to the Diagnostic and Statistical Manual of Mental Disorders, bipolar I disorder involves episodes of severe mania and often depression. Bipolar II disorder involves a less severe form of mania called hypomania.</p>
                        </div>
                    </div>
                    <img src="../src/img/image 24.png" className="bipolar-img"></img>
                </div>
                <div className="bipolar-blog">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div className="comment-container">
                        <u className="comment-title">COMMENTS</u>
                        <img src="../src/img/image 69.png" className="comment-icon"/>
                    </div>
                    <div className="comment-chat">
                        <p><b className="comment-user"><i>Reader_xuanphatcalemkemchuoi:</i></b> mình đã biết và chia sẻ đến web nhiều điều hay, bổ ích !!</p>
                        <p><b className="comment-user"><i>Reader_nguoitinhmuadongk23:</i></b> mình đã đã và làm theo blog này và thấy hiệu quả, blog tuyệt vời quá.</p>
                    </div>               
                </div>
            </div>
        </div>
    );
};
export default BipolarDisorder;