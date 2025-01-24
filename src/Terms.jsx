import React from "react";
import { FaRegFileAlt } from "react-icons/fa"; // Example icon for the logo (you can replace it with your logo image)

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 text-gray-800 p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
      {/* Header with Logo */}
      <div className="flex justify-center items-center mb-6">
        {/* Replace with your logo image or keep the icon */}
        <FaRegFileAlt className="text-[#1ddbb2] w-12 h-12 mr-2" />
        <h1 className="text-3xl font-bold text-center text-[#1ddbb2]">
          Terms and Conditions
        </h1>
      </div>

      {/* Content */}
      <div className="space-y-4 text-sm leading-6">
        <p>
          Welcome to <strong className="text-[#1ddbb2]">SAKSHAM</strong>. By accessing or using this platform, you agree to comply with and
          be bound by the following terms and conditions. Please read them carefully before proceeding.
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Intellectual Property</h2>
        <p>
          All content on this platform, including but not limited to designs, code, and documentation, is the
          intellectual property of <strong className="text-[#1ddbb2]">Ujjwal</strong>. Unauthorized copying, reproduction, or distribution of
          any part of this project is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Personal Use Only</h2>
        <p>
          This project is provided for educational and personal use only. You may not use it for commercial purposes or
          claim it as your own in resumes, portfolios, or other public presentations without prior written permission
          from <strong className="text-[#1ddbb2]">Ujjwal</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Prohibited Actions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Cloning or redistributing this project without proper attribution.</li>
          <li>Using the code or assets for illegal or unethical purposes.</li>
          <li>Misrepresenting ownership or involvement in the development of this project.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">4. Limitation of Liability</h2>
        <p>
          The creator of <strong className="text-[#1ddbb2]">SAKSHAM</strong> is not responsible for any issues arising from unauthorized or
          inappropriate use of this project. Use at your own risk.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Amendments</h2>
        <p>
          These terms and conditions are subject to change without notice. It is your responsibility to review them
          periodically for updates.
        </p>

        <h2 className="text-xl font-semibold mt-4">6. Contact Information</h2>
        <p>
          For inquiries or permissions, please contact{" "}
          <a
            href="mailto:ujjwal@example.com"
            className="text-[#ffcc00] font-bold underline"
          >
            uzzwal7505@gmail.com
          </a>.
        </p>

        <p className="text-gray-500 mt-6 text-xs">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
