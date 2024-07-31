import React from 'react';
import "/public/marksheetcopy.jpg"
import "/public/finalcert.jpg"

const EarnCertificateSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-slate-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-violet-700 font-semibold tracking-wide uppercase">Earn Valuable Certificate</h2>
        <p className="mt-2 leading-8 text-3xl font-extrabold text-gray-900 sm:text-4xl italic">
          "Congratulations on Completing Your Course!"
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Enhance your career with industry-recognized skills. Join thousands of successful learners who have unlocked new opportunities.
        </p>
        <p className="mt-2 text-lg text-gray-700">
          Enroll today and gain access to cutting-edge content, expert instructors, and practical insights that drive real-world impact.
        </p>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16">
        {/* Certificate Image */}
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
          <img src="/finalcert.jpg" alt="Certificate" className="w-full" />
          <div className="p-4 bg-white">
            <p className="text-lg font-bold text-gray-900">Your Certificate</p>
            <p className="text-sm text-gray-700">Issued on: July 5, 2024</p>
          </div>
        </div>

        {/* Marksheet Image */}
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
          <img src="/marksheetcopy.jpg" alt="Marksheet" className="w-full" />
          <div className="p-4 bg-white">
            <p className="text-lg font-bold text-gray-900">Your Marksheet</p>
            <p className="text-sm text-gray-700">Grades: A+</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default EarnCertificateSection;
