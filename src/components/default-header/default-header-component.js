// import { defaultNavLinks } from "../../configs/navlinks";
import defaultlogo from "../../images/logo.svg";
import Logo from "../common/logo";
import Modal from "../common/modal";
import Nav from "../common/nav";


const DefaultHeaderComponent = (props) => {
    
    return <div className="flex">
        <Logo src={defaultlogo}/>
        <Nav menuItems={props.menuItems}/>
        <div className="btnSignIn"> 
            <button onClick={props.signInClickHandler}>Sign In</button>
            {props.showModal && <Modal closeEventHandler={props.closeModalHandler}/>}
            {/* <Modal/> */}
        </div>
    </div>
}


export default DefaultHeaderComponent;