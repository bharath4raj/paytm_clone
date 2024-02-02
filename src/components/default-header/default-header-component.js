// import { defaultNavLinks } from "../../configs/navlinks";
import defaultlogo from "../../images/logo.svg";
import Logo from "../common/logo";
import Nav from "../common/nav";


const DefaultHeaderComponent = (...props) => {
    
    return <div className="flex">
        <Logo src={defaultlogo}/>
        <Nav menuItems={props.menuItems}/>
        <div className="btnSignIn"> 
            <button >Sign In</button>
        </div>
    </div>
}


export default DefaultHeaderComponent;