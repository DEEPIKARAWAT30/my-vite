import React from 'react';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold text-center mb-6">Student Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full h-10 px-3 mb-4 border border-gray-300 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full h-10 px-3 mb-4 border border-gray-300 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full h-10 px-3 mb-4 border border-gray-300 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full h-10 px-3 mb-4 border border-gray-300 rounded"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          required
          className="w-full h-10 px-3 mb-4 border border-gray-300 rounded"
        />

        <input
          type="number"
          name="height"
          placeholder="Height (in cm)"
          required
          className="w-full h-10 px-3 mb-4 border border-gray-300 rounded"
        />

        <input
          type="text"
          name="course"
          placeholder="Course Name"
          required
          className="w-full h-10 px-3 mb-6 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full h-10 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
