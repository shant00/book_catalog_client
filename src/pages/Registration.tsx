import { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/login_background.jpg";
export default function Registration() {
  const [altMobileNumber, setAltMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };
  const handleRegister = () => {
    // Add your registration logic here
    console.log("Username:", altMobileNumber);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("First Name:", firstName);
    console.log("Middle Name:", middleName);
    console.log("Last Name:", lastName);
    console.log("Mobile Number:", mobileNumber);
    console.log("Address:", address);
    console.log("Selected Image:", selectedImage);

    // You can add your submission logic here, such as making an API request
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-white p-8  rounded shadow-md max-w-xl mx-4 sm:mx-auto ">
        <div className="grid justify-items-center relative">
          <h4 className="text-xl font-semibold mb-4 ">Registration </h4>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 grid justify-items-center relative">
            <label className="block text-sm font-medium ">
              <label
                htmlFor="image-upload"
                className="relative rounded-full w-32 h-32 bg-gray-200 flex justify-center items-center hover:bg-gray-300 shadow-md cursor-pointer"
              >
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleImageUpload}
                />
                {selectedImage ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    className="rounded-full w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-20 w-20 text-gray-400 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                )}
              </label>
            </label>
          </div>
          <div className="col-span-2 grid grid-cols-3 gap-4 ">
            <div>
              <label className="block text-sm font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Middle Name <span className="text-red-500"></span>
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Phone Number </label>
              <input
                type="tel"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Alternative Phone Number
              </label>
              <input
                type="tel"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                value={altMobileNumber}
                onChange={(e) => setAltMobileNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="col-span-2">
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </div>
        <div className="mt-2 text-center">
          Already Have an Account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline hover:text-blue-600"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
