import AuthTemplate from "../components/template/AuthTemplate";
import HeaderOrganism from "../components/organisms/HeaderOrganism";

function AuthPage() {
    return(
        <div>
            <HeaderOrganism/>
            <div className='flex justify-center h-dvh items-center'>
                <AuthTemplate/>
            </div>
        </div>
    );
}
export default AuthPage;