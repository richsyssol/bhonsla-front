import { students3 } from "../../../../public/assets/index";

const OurFundamentals = () => {
  return (
    <div className="bg-gray-100 mt-10 p-4 sm:p-6 rounded-lg shadow-md flex flex-col lg:flex-row items-center w-full mx-auto mb-6">
      {/* Left Side - Text Content */}
      <div className="w-full lg:w-1/2 px-4 sm:px-6 mb-6  lg:mb-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-4">
          Our Fundamentals
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
          Army and Navy Academy is a military school for boys that is centered
          on a unique and singular mission: to forge virtue in young men for
          life. We feel that cultivating academic excellence and training
          exceptional scholar-athletes is the bare minimum of what a military
          boarding school should do. Our focus on virtue and character
          development makes us a unique opportunity for any young man looking to
          thrive in an increasingly challenging world.
        </p>
        <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
          We prioritize virtue in all that we do, a fact that is reflected in
          the environment of dignity and respect that pervades our campus. Our
          core values of Honor, Integrity, Gratitude, Compassion, Respect, and
          Responsibility don’t just guide our cadets: they are guidelines that
          help us all strive to uplift, serve, and inspire others.
        </p>
        <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
          We are a certified kindness company, and our programming utilizes the
          strategies and outcomes of the Anti-Defamation League No Place for
          Hate program. Our commitment to cadet safety extends beyond physical
          security; it encompasses the emotional and social well-being of every
          member of our global campus.
        </p>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          We invite you to join us in doing our part to shape a world where
          human excellence is defined not only by achievement, but by character.
          Welcome to Army and Navy Academy, where greatness begins with virtue.
        </p>
      </div>

      {/* Right Side - Image Section */}
      <div className="w-full lg:w-1/2 px-4 sm:px-6">
        <div className="w-full rounded-lg overflow-hidden shadow-md">
          <img
            src={students3}
            alt="Highlighted Section"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default OurFundamentals;
