export default function About() {
  return (
    <section id="about" className="p-6 md:p-12 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-josefin font-semibold  text-left  bg-gradient-to-r from-black to-blue-600 text-transparent bg-clip-text">
            About Us
          </h2>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quibusdam animi perferendis harum. Eveniet delectus ullam ipsa nobis, enim quaerat distinctio sunt magni, saepe debitis amet! Quos quis enim alias.
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
