import { MODAL_HEADING_TXT } from "../../../configs/constants"
import "./modal-component.css";
import { loginForm } from "../../../configs/forms/login-form";
import { Row } from "reactstrap";


const ModalComponent = (props) => {
    return (
        <>
            <div className="mask"></div>
            <div className="modal-wrap">
                <h1 className="heading">{MODAL_HEADING_TXT}<button onClick={props.closeEventHandler}>X</button></h1>
                <div className="login-panel">
                    <div className="steps">
                        <h4>Steps to scan QR Code </h4>
                        <ol>
                            <li>Open Paytm App</li>
                            <li>Tap Scan option available at the bottom</li>
                            <li>Point Paytm Scan at QR Code to login</li>
                        </ol>
                    </div>
                    <div className="login-form">
                        
                        {
                             loginForm.length > 0 && loginForm.map((item) => {
                                return <Row>
                                <label for={item.id}>{item.label}</label>
                                <input type={item.type} name={item.name}id={item.id}/>
                                
                                </Row>
                            })
                        }
                        <button className="loginBtn">Login</button>
                    </div>
                </div>

                <div className="footer">
                By signing in, you agree to our privacy policy and terms of use
                </div>
                <div className="modbiel-app">
                 To create an account download Paytm App
                </div>
            </div>

        </>
    )
}

export default ModalComponent