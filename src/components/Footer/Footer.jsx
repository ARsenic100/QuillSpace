import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="shadow bg-black text-white border-t-2 py-2 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Copyright */}
          <div className="w-full md:w-1/2 lg:w-5/12 mb-6 md:mb-0">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-4">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-gray-400">
                &copy; Copyright 2025. All Rights Reserved by ARSENIC100.
              </p>
            </div>
          </div>
          {/* Links */}
          <div className="w-full md:w-1/2 lg:w-7/12 flex justify-between">
            {/* Company Links */}
            <div className="w-1/3">
              <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className="text-base text-gray-300 hover:text-gray-100" to="/">
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base text-gray-300 hover:text-gray-100" to="/">
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base text-gray-300 hover:text-gray-100" to="/">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-300 hover:text-gray-100" to="/">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
            {/* Support Links */}
            <div className="w-1/3">
              <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className="text-base text-gray-300 hover:text-gray-100" to="/">
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base text-gray-300 hover:text-gray-100" to="/">
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base text-gray-300 hover:text-gray-100" to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-300 hover:text-gray-100" to="/">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
            {/* Legals Links */}
            <div className="w-1/3">
              <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className="text-base text-gray-300 hover:text-gray-100" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base text-gray-300 hover:text-gray-100" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-300 hover:text-gray-100" to="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
