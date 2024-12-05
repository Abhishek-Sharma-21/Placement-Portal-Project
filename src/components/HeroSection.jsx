const HeroSection = () => {
    return (
      <div className="min-h-screen bg-[#F4F4E8] flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 py-10">
        {/* Left Column: Text Content */}
        <div className="flex-1 lg:pr-10 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E3A] mb-4">
            Placement Automation System
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#2E2E3A] mb-6">
            Our platform streamlines the placement process for students and
            recruiters. Discover job opportunities, apply easily, and connect
            with potential employers.
          </p>
          <div className="mt-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E2E3A] mb-5">
              Features
            </h2>
            <ul className="list-none space-y-3">
              <li className="flex items-start space-x-2 text-[#2E2E3A]">
                <span className="text-[#D4AF37] text-lg">✔</span>
                <span className="text-sm sm:text-base lg:text-lg">
                  Easy job search and application process
                </span>
              </li>
              <li className="flex items-start space-x-2 text-[#2E2E3A]">
                <span className="text-[#D4AF37] text-lg">✔</span>
                <span className="text-sm sm:text-base lg:text-lg">
                  Profile management for students and recruiters
                </span>
              </li>
              <li className="flex items-start space-x-2 text-[#2E2E3A]">
                <span className="text-[#D4AF37] text-lg">✔</span>
                <span className="text-sm sm:text-base lg:text-lg">
                  Real-time notifications for job postings
                </span>
              </li>
              <li className="flex items-start space-x-2 text-[#2E2E3A]">
                <span className="text-[#D4AF37] text-lg">✔</span>
                <span className="text-sm sm:text-base lg:text-lg">
                  Interview scheduling and tracking
                </span>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Right Column: Image */}
        <div className="flex-1 flex justify-center mb-8 lg:mb-0">
          <img
            src="https://storage.googleapis.com/a1aa/image/wWHpJmhefJqDPkcbnqEuffZuzxCzPb39qzYAQtyH3k0lsKSPB.jpg"
            alt="Illustration of two people working at a desk with a laptop and documents"
            className="w-64 sm:w-80 lg:w-full max-w-md"
          />
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  