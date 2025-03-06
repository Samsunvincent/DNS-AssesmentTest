import { useState } from "react";
import axios from "axios";
const dotenv = require('dotenv');
dotenv.config();

const AddCategoryForm = () => {
  const [category, setCategory] = useState(""); // Initialize as an empty string
  const [description, setDescription] = useState(""); // Initialize as an empty string
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload

    const body = { name : category, description };

    try {
      let response = await axios.post(`${process.env.REACT_APP_API_URL}/addCategory`, body, {
        headers: { "Content-Type": "application/json" },
      });
      setMessage("Category added successfully!");
      console.log("response", response);
      
      // Clear input fields after submission
      setCategory("");
      setDescription("");
    } catch (error) {
      console.log("error", error);
      setMessage("Failed to add category.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="p-6 border border-gray-700 rounded-lg shadow-lg max-w-md w-full bg-gray-900">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Category</h2>
        {message && <p className="text-center text-green-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-300">
              Category Name:
            </label>
            <input
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-300">
              Description:
            </label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Add Category
          </button>
        </form>
      </div>
      <footer className="mt-6 text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </footer>
    </div>
  );
};

export default AddCategoryForm;
