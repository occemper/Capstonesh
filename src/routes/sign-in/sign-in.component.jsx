import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

function SignIn() {
    async function logGoogleUser() {
        const response = await signInWithGooglePopup();
        console.log(response);

    }

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    );
};

export default SignIn;