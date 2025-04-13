import Lottie from "lottie-react";
import Animation from "../assets/Animation.json";

export default function Hero() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center text-center px-4 py-10 gap-8 min-h-screen">
        {/* Text Section */}
        <div className="flex-1 text-left px-6 md:px-14 pb-14">
          <div className="text-lg md:text-2xl uppercase text-gray-600">Welcome to</div>
          <div className="text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 text-transparent bg-clip-text mb-4">
            Work It
          </div>
          <div className="max-w-xl text-base md:text-lg text-gray-700 mx-auto md:mx-0 text-left">
            
WorkIt is an app made specially for students. It helps students who need help with tasks connect with other students who can do those tasks. It’s a platform made for students, by students.

          </div>
        </div>

        {/* Lottie Animation Section */}
        <div className="flex-1 px-6 md:px-10">
          <Lottie animationData={Animation} loop={true} />
        </div>
      </div>
    </div>
  );
}
