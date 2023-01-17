
import SingUpForm from "../../sing-up-form/sing-up-form.component";
import SingInForm from "../../sing-in-form/sing-in-form.component";

import "./authentication.styles.scss"

const Authentication = () => {

    return (
        <div className="authentication-container">
            <SingInForm />
            <SingUpForm />
        </div>
    );
};

export default Authentication;