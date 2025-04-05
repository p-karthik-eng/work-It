export default function Hero() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center text-center px-4 py-10 gap-8 min-h-screen">
        {/* Text Section */}
        <div className="flex-1 text-left px-6 md:px-10 pb-14">
          <div className="text-lg md:text-2xl uppercase text-gray-600">Welcome to</div>
          <div className="text-4xl md:text-8xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 text-transparent bg-clip-text mb-4">
            Work It
          </div>
          <div className="max-w-xl text-base md:text-lg text-gray-700 mx-auto md:mx-0 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati nam quisquam nobis ratione similique dolore soluta perferendis aperiam veritatis, saepe ut temporibus illum cupiditate in, quas earum quidem rem!
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 px-6 md:px-10">
          <img
            src="https://via.placeholder.com/400x300" // Replace with actual image
            alt="Hero visual"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
