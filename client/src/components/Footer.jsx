import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white ">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        {/* Common Class for Equal-Sized Boxes */}
        <div className="flex flex-wrap justify-center gap-4 w-full md:flex-nowrap">
          {/* Connect With Us */}
          <div className="flex-1 flex flex-col items-center text-center border border-gray-700 p-6 rounded-lg min-w-[250px]">
            <h2 className="text-blue-500 mb-2">CONNECT WITH US</h2>
            <p className="flex items-center">
              <i className="fas fa-phone-alt mr-2"></i> +91 9567843340
            </p>
            <p className="flex items-center">
              <i className="fas fa-envelope mr-2"></i> info@deepnetsoft.com
            </p>
          </div>

          {/* Deep Net Soft - Logo and Socials */}
          <div className="flex-1 flex flex-col items-center text-center border border-gray-700 p-6 rounded-lg min-w-[250px]">
            <img
              src="https://storage.googleapis.com/a1aa/image/TDK5PSTiMDhFVeAZGdYuNkSCm1k-fqREqSI17PJ5RYI.jpg"
              alt="Deep Net Soft logo"
              className="mb-2 w-12 h-12"
            />
            <h2 className="text-blue-500 mb-2">DEEP NET SOFT</h2>
            <div className="flex space-x-4">
              <a className="text-white" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="text-white" href="#"><i className="fab fa-twitter"></i></a>
              <a className="text-white" href="#"><i className="fab fa-instagram"></i></a>
              <a className="text-white" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Find Us */}
          <div className="flex-1 flex flex-col items-center text-center border border-gray-700 p-6 rounded-lg min-w-[250px]">
            <h2 className="text-blue-500 mb-2">FIND US</h2>
            <p className="flex items-center">
              <i className="fas fa-map-marker-alt mr-2"></i>
              First floor, Geo Infopark, Infopark EXPY, Kakkanad
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-8 text-center text-gray-500 text-sm">
        <p>© 2024. Deepnetsoft Solutions. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a className="text-gray-500" href="#">Terms & Conditions</a>
          <a className="text-gray-500" href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
