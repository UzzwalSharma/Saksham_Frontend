import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const PrivacyPolicyWarning = () => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-6 rounded-lg shadow-md max-w-xl mx-auto">
      {/* Logo Section */}
      <div className="flex justify-center items-center mb-4">
        <FaExclamationTriangle className="text-red-500 w-8 h-8 mr-2" />
        <h2 className="text-2xl font-bold text-red-600">Privacy Policy Warning</h2>
      </div>

      {/* Warning Text */}
      <div>
        <strong className="font-bold">Important Notice:</strong>
        <p className="mt-2">
          This project, <strong className="text-red-800">SAKSHAM</strong>, is the intellectual property of{" "}
          <span className="text-[#1ddbb2] font-semibold">Ujjwal</span>. Unauthorized use, including cloning, copying, or
          presenting it as your own (e.g., in resumes or portfolios), is strictly prohibited without explicit
          permission.
        </p>
        <p className="mt-4 text-sm">
          Violations may lead to legal action or public reporting for plagiarism. Please respect the creator's work and
          integrity.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyWarning;
