import React from "react";

const About = () => {
  return (
    <section className="relative bg-[#f5f7fa] py-24 px-6 overflow-hidden">

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
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            UniServe Facility Management Private Limited is a professional
            facility management company delivering reliable, cost-effective,
            and high-quality manpower solutions across educational institutions,
            healthcare facilities, and corporate environments.
          </p>
        </div>

        {/* JOURNEY */}
        <div className="mb-16 border-l-4 border-yellow-400 pl-6">
          <h2 className="text-2xl font-semibold text-[#0a2540] mb-4">
            Our Journey
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            UniServe began as a proprietorship firm and has successfully
            delivered facility services for over 5 years, building strong trust
            among clients and partners.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With increasing demand and a growing client base, we transitioned
            into a Private Limited company to scale operations, improve service
            delivery, and bring structured workforce management solutions.
          </p>
        </div>

        {/* CORE EXPERTISE */}
        <div className="mb-16 border-l-4 border-yellow-400 pl-6">
          <h2 className="text-2xl font-semibold text-[#0a2540] mb-4">
            Our Expertise
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            We specialize in delivering facility and manpower services tailored
            for educational institutions, ensuring minimal disruption to
            academic activities and maintaining a safe, clean, and structured
            environment.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our services are designed to meet the operational needs of schools,
            colleges, healthcare facilities, and corporate offices with a strong
            focus on safety, hygiene, and efficiency.
          </p>
        </div>

        {/* SERVICES SUMMARY */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-[#0a2540] mb-6 text-center">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-600">

            <div>
              <h4 className="font-semibold text-[#0a2540] mb-2">
                Housekeeping Services
              </h4>
              <p>
                Comprehensive cleaning and hygiene solutions ensuring safe and
                well-maintained environments across institutions and workplaces.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#0a2540] mb-2">
                Manpower Supply
              </h4>
              <p>
                Skilled and verified workforce including housekeeping staff,
                office assistants, and security personnel with proper training
                and background verification.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#0a2540] mb-2">
                Facility Maintenance
              </h4>
              <p>
                Electrical, plumbing, and general maintenance services ensuring
                smooth functioning of infrastructure and systems.
              </p>
            </div>

          </div>
        </div>

        {/* WORKFORCE */}
        <div className="mb-16 border-l-4 border-yellow-400 pl-6">
          <h2 className="text-2xl font-semibold text-[#0a2540] mb-4">
            Workforce & Presence
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our core workforce is based in Bangalore and Hosur, enabling quick
            deployment and strong operational control.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We provide services across multiple locations in Karnataka,
            delivering scalable and reliable facility management solutions.
          </p>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-[#0a2540] text-white p-10 rounded-lg mb-20">

          <h3 className="text-2xl font-semibold mb-8 text-center">
            Why Choose UniServe
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-sm">

            <p>• Trained & verified workforce with background checks</p>
            <p>• Labour law compliance (PF, ESI, statutory benefits)</p>
            <p>• Professional supervision & reporting systems</p>
            <p>• Quick replacement & backup workforce support</p>
            <p>• Transparent billing and documentation</p>
            <p>• Focus on safety, hygiene, and security</p>

          </div>
        </div>

        {/* MISSION */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#0a2540] mb-4">
            Our Mission
          </h3>

          <p className="text-gray-600 leading-relaxed">
            To provide dependable, professional, and affordable facility
            management services while maintaining the highest standards of
            integrity, compliance, and service quality — enabling our clients to
            focus on their core operations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;