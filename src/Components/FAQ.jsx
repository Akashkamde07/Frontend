// import React, { useState } from "react";
// import img1 from "./images/workshop1.png";
// import img2 from "./images/workshop2.png";
// import img3 from "./images/workshop3.png";
// import img4 from "./images/footer.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="max-w-6xl  mx-auto p-5">
//       <h2 className="text-2xl text-left font-bold mb-4">FAQ</h2>
//       <div className="divide-y  divide-gray-200 ">
//         {[
//           {
//             question: "What are the prerequisites for this workshop?",
//             answer:
//               "A basic understanding of design principles and familiarity with design tools like Adobe XD, Sketch, or Figma is helpful. Prior knowledge of web design and user psychology can enhance your learning, but a passion for creating user-centered designs is most important.",
//           },
//           {
//             question: "Is this workshop suitable for beginners?",
//             answer:
//               "Yes, the UI/UX workshop is designed for beginners, providing foundational knowledge and practical skills needed to start a career in design. No prior experience is required, though a basic interest in design and user experience will be beneficial.",
//           },
//           {
//             question: "Will I get a certificate after completing the workshop?",
//             answer:
//               "Yes, you will receive a certification upon successful completion of the workshop. This certificate will recognize your participation and the skills you've gained, which can be valuable for career advancement and showcasing your expertise in the field.",
//           },
//           {
//             question: "Can I cancel my enrollment and get a refund?",
//             answer:
//               'Yes, you can cancel your enrollment. For checking the refund policy, please <a href="https://example.com/refund-policy" className="text-blue-500 underline hover:text-blue-700">click here</a>.',
//           },
//         ].map((faq, index) => (
//           <div key={index} className="py-4">
//             <button
//               className="w-full flex justify-between items-center text-lg font-medium text-gray-700 focus:outline-none"
//               onClick={() => toggleFAQ(index)}
//             >
//               <span>{faq.question}</span>
//               <svg
//                 className={`w-6 h-6 transform transition-transform ${
//                   openIndex === index ? "rotate-180" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 ></path>
//               </svg>
//             </button>
//             {openIndex === index && (
//               <div
//                 className="mt-2 text-blue-600 font-normal"
//                 dangerouslySetInnerHTML={{ __html: faq.answer }}
//               ></div>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="max-w-6xl mx-auto p-5">
//       <h2 className="text-2xl text-left font-bold mb-8 mt-8">Upcoming Workshops</h2>
//       <div className="flex flex-col md:flex-row md:space-x-4">
//         {/* Workshop Card 1 */}
//         <div className="flex-1 mb-6 md:mb-0">
//           <img src={img1} alt="Employee Relations workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
//           <div className="font-bold text-lg mt-2 text-center">
//             Employee Relations workshop <br />

//           </div>
//         </div>

//         {/* Workshop Card 2 */}
//         <div className="flex-1 mb-6 md:mb-0">
//           <img src={img2} alt="Talent Management workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
//           <div className="font-bold text-lg mt-2 text-center">
//             Talent Management workshop <br />

//           </div>
//         </div>

//         {/* Workshop Card 3 */}
//         <div className="flex-1 mb-6 md:mb-0">
//           <img src={img3} alt="Diversity and Inclusion workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
//           <div className="font-bold text-lg mt-2 text-center">
//             Diversity and Inclusion workshop <br />
           
//           </div>
//         </div>
//       </div>
//     </div>
//       <footer className="bg-white text-black py-8 px-4">
//         <hr className="border-t border-gray-300 mb-8" />

//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 bg-black">
//           {/* Company Section */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2 text-white">COMPANY</h3>
//             <ul>
//               <li className="mb-1"><a href="#" className="hover:underline text-white ">About Us</a></li>
//               <li className="mb-1"><a href="#" className="hover:underline text-white">Privacy policy</a></li>
//               <li className="mb-1"><a href="#" className="hover:underline text-white">Blog</a></li>
//               <li className="mb-1"><a href="#" className="hover:underline text-white">Careers</a></li>
//             </ul>
//           </div>

//           {/* Support Section */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2 text-white">Support</h3>
//             <ul>
//               <li className="mb-1"><a href="#" className="hover:underline text-white">Contact Us</a></li>
//               <li className="mb-1"><a href="#" className="hover:underline text-white">Community</a></li>
//             </ul>
//           </div>

//           {/* Socials Section */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2 text-white">Socials</h3>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-500 hover:text-white">
//                 <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-500 hover:text-white">
//                 <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-500 hover:text-white">
//                 <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
//               </a>
//             </div>
//           </div>

//           {/* Sign Up Section */}
//           <div>
//             <h2 className="text-lg font-semibold mb-2 text-white">Sign Up</h2>
//             <form className="mt-3">
//               <input
//                 type="text"
//                 placeholder="Enter your email"
//                 className="border px-3 py-2 w-full rounded"
//               />
//             </form>
//             <div>
//               <img src={img4} alt="footer" />
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FAQ;
