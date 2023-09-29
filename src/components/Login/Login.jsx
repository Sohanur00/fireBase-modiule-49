import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../FireBase/Firebase-init";

const Login = () => {

const auth = getAuth(app)
const provider = new GoogleAuthProvider ();




    return (
        <div>

            <button className="btn ">Google Login</button>

        </div>
    );
};

export default Login;