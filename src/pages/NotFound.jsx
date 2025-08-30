import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import CardContent from "../components/CardContent";
import Button from "../components/Button";  


const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  relative bg-white px-4">
      <CardContent className="flex flex-col items-center text-center space-y-6 max-w-2xl w-full">
        {/* 404 Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-red-500">
          404
        </h1>

        {/* Title */}
        <p className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
          Oops! Page not found.
        </p>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-500 dark:text-gray-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        {/* Button */}
        <Link to="/" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto px-6 py-3 bg-yellow-400 text-white transition">
            Go Back Home
          </Button>
        </Link>
      </CardContent>
    </div>
  );
};

export default NotFound;



// import React from "react";
// import { Link } from "react-router-dom";
// import { Card, CardContent, Button } from "../pages/Hireperson/BookingFormModal"; // shared components

// const NotFound = () => {
//   return (
//     <div className="grid min-h-screen place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
//       <Card className="w-full max-w-2xl bg-gray-800 text-center text-white shadow-lg">
//         <CardContent>
//           {/* Error Code */}
//           <p className="text-base font-semibold text-indigo-400">404</p>

//           {/* Title */}
//           <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
//             Page not found
//           </h1>

//           {/* Description */}
//           <p className="mt-6 text-lg font-medium text-gray-400 sm:text-xl">
//             Sorry, we couldn’t find the page you’re looking for.
//           </p>

//           {/* Actions */}
//           <div className="mt-10 flex items-center justify-center gap-x-6">
//             <Link to="/">
//               <Button className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
//                 Go back home
//               </Button>
//             </Link>
//             <Link
//               to="/contact"
//               className="text-sm font-semibold text-white hover:underline"
//             >
//               Contact support <span aria-hidden="true">→</span>
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default NotFound;
