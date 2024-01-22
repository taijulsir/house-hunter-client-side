import Lottie from "lottie-react";
import errorAnimation from "../../Shared/LottieAnimation/Animation - 1700797183774.json"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <div className="lg:w-[700px] lg:h-[700px] lg:mx-auto">
                <Lottie
                    animationData={errorAnimation}
                    options={defaultOptions}
                    height={400}
                    width={400}>
                </Lottie>
            </div>
            <div className="text-center mt-20">
                <Link to='/'>
                    <button className="btn bg-teal-500 font-bold">Go Home</button>
                </Link>
            </div>
        </>
    );
};

export default ErrorPage;