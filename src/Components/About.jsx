export default function About() {
  return (
    <section id="about" className="p-6 md:p-12 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1  mx-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-josefin font-semibold  text-left  text-blue-600  ">
            About Us
          </h2>
          <div className="pt-4">
           <p>WorkIt is a just platform to connect students. We dont control or interface in your tasks and payments.</p>
           <p>We believe student can support each other and grow together. that's what WorkIt is all about</p>
          </div>

        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://via.placeholder.com/500x400" // replace with your image path
            alt="About illustration"
            className="w-full h-auto max-w-md mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
}
