const About = () => {
  return (
    <section className="relative bg-[#f5f7fa] py-30 px-6 overflow-hidden">

      {/* Background Logo */}
      <img
        src="/logo.png"
        className="absolute top-1/2 left-1/2 w-[700px] opacity-5 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">
            About UniServe
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Building reliable facility management solutions with experience,
            trust, and operational excellence.
          </p>
        </div>

        {/* JOURNEY */}
        <div className="mb-16 border-l-4 border-yellow-400 pl-6">
          <h2 className="text-2xl font-semibold text-[#0a2540] mb-4">
            Our Journey
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            UniServe Facility Management Private Limited began as a
            proprietorship firm and has successfully delivered facility services
            for over 5 years.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With a growing client base and strong operational experience, we
            transitioned into a Private Limited company to scale our services
            and serve clients with greater efficiency and structure.
          </p>
        </div>

        {/* IMAGE BREAK */}
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
          className="rounded-xl shadow-lg mb-16"
        />

        {/* WORKFORCE */}
        <div className="mb-16 border-l-4 border-yellow-400 pl-6">
          <h2 className="text-2xl font-semibold text-[#0a2540] mb-4">
            Workforce & Presence
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our core workforce is based in Bangalore and Hosur, enabling strong
            operational control and quick deployment capabilities.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We provide services across multiple locations in Karnataka,
            delivering reliable and scalable facility management solutions.
          </p>
        </div>

        {/* 2 COLUMN DETAILS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          <div>
            <h3 className="text-xl font-semibold text-[#0a2540] mb-3">
              Company Background
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Starting as a proprietorship, UniServe has built a strong
              foundation in facility management. Our transition into a Private
              Limited company reflects our growth, stability, and long-term
              commitment to clients.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0a2540] mb-3">
              Leadership
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our leadership brings practical industry experience, ensuring
              operational excellence, workforce discipline, and consistent
              service quality across all projects.
            </p>
          </div>

        </div>

        {/* EXPERIENCE + MISSION */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          <div>
            <h3 className="text-xl font-semibold text-[#0a2540] mb-3">
              Experience
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With 5+ years of experience, we have developed strong expertise in
              managing workforce operations, compliance standards, and service
              delivery across industries.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0a2540] mb-3">
              Mission & Vision
            </h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              <strong>Mission:</strong> Deliver reliable and scalable facility
              management solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Vision:</strong> Become a trusted long-term partner across
              Karnataka and beyond.
            </p>
          </div>

        </div>

        {/* USP STRIP */}
        <div className="bg-[#0a2540] text-white p-10 rounded-lg">

          <h3 className="text-2xl font-semibold mb-6 text-center">
            Why Choose UniServe
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-center">

            <div>
              <h4 className="text-yellow-400 font-semibold mb-2">
                Fast Deployment
              </h4>
              <p>Quick workforce mobilization for immediate needs.</p>
            </div>

            <div>
              <h4 className="text-yellow-400 font-semibold mb-2">
                Trained Staff
              </h4>
              <p>Skilled and disciplined workforce across all operations.</p>
            </div>

            <div>
              <h4 className="text-yellow-400 font-semibold mb-2">
                Compliance
              </h4>
              <p>Strict adherence to safety and operational standards.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;