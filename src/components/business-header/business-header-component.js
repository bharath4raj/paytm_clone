import businesslogo from "../../images/business-website-logo.svg";
import Nav from "../common/nav";
import Logo from "../common/logo";
// import { businessNavLinks } from "../../configs/navlinks";


const BusinessHeaderComponent = (props) => {
    return <div className="flex">
        <Logo src={businesslogo}/>
        <Nav menuItems={props.menuItems}/>
        <div className="btnSignIn">
            <button >Sign In</button>
        </div>
    </div>
}

export default BusinessHeaderComponent;