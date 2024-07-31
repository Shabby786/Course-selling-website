import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <div className="text-lg font-bold">NobleEducation</div>
            <p className="text-sm">An Institute for Computer Education.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <div className="text-lg font-bold">Quick Links</div>
            <ul className="text-sm">
              <li>
                <a href="https://dashboards.nobleeducation.in/center/centerlog.php">
                  Center Login
                </a>
              </li>
              <li>
                <a href="https://dashboards.nobleeducation.in/cologin.php">
                  Co-Ordinator Login
                </a>
              </li>
              <li>
                <a href="https://dashboards.nobleeducation.in/studentlogin.php">
                  Trainee Login
                </a>
              </li>
              <li>
                <a href="https://dashboards.nobleeducation.in/val.php">
                  Certificate Verification
                </a>
              </li>
              <li>
                <a href="https://nobleeducation.in/apply-for-a-frenchise/">
                  Frenchise Registration
                </a>
              </li>
              <li>
                <a href="https://dashboards.nobleeducation.in/coapply.php">
                  Co-ordinator Registration
                </a>
              </li>
              <li>
                <a href="https://dashboards.nobleeducation.in/sregister.php">
                  Trainee Registration
                </a>
              </li>
              <li>
                <Link to="/page/privacy-policy/">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">
            <div className="text-lg font-bold">Contact</div>
            <address className="text-sm">
              +91-8403864429 <br />
              Maya Path, By Lane 1A, Sixmile, Guwahati
              <br />
              nitassam995@gmail.com
              <br />
              http://nobleeducation.in/
              <br />
            </address>
          </div>
        </div>

        {/* Bottom Row: Legal and Social Links */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex justify-between items-center">
          <div>
            <Link
              to="/page/purchase-refund-and-cancellation-policy/"
              className="text-sm text-gray-400 hover:text-white"
            >
              Purchase, Refund, and Cancellation Policy
            </Link>
            <span className="mx-4 text-gray-400">•</span>
            <Link
              to="/post/1018"
              className="text-sm text-gray-400 hover:text-white"
            >
              Terms of Usage
            </Link>
          </div>
          <div>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.86 8.14 6.84 9.45.5.09.68-.22.68-.48 0-.24-.01-1.04-.01-1.88-2.5.46-3.01-1.21-3.01-1.21-.41-1.04-1-1.32-1-1.32-0.82-.56.06-.55.06-.55.91.06 1.39.94 1.39.94.81 1.39 2.13.99 2.65.75.08-.56.31-.94.56-1.16-1.98-.22-4.07-.99-4.07-4.39 0-.97.34-1.77.89-2.4-.09-.22-.39-1.14.09-2.37 0 0 .75-.24 2.45.92.71-.2 1.46-.3 2.21-.3s1.5.1 2.21.3c1.7-1.16 2.45-.92 2.45-.92.48 1.23.18 2.15.09 2.37.55.63.89 1.43.89 2.4 0 3.41-2.09 4.17-4.08 4.39.32.27.61.82.61 1.65 0 1.19-.01 2.15-.01 2.44 0 .27.18.58.69.48A10.006 10.006 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} NobleEducation.in. All rights
          reserved.
        </div>

        {/* Quote Section */}
        <div className="mt-4 text-center text-sm text-gray-400">
          "Success is not final, failure is not fatal: It is the courage to
          continue that counts." - Winston Churchill
        </div>
      </div>
    </footer>
  );
};

export default Footer;
