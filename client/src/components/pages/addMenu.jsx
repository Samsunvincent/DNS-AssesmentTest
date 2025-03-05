import { useState, useEffect } from "react";
import axios from "axios";

const AddMenuForm = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getCategory");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getItems");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const body = {
      categoryName: selectedCategory,
      itemNames: Array.isArray(selectedItem) ? selectedItem : [selectedItem] // Ensure it's an array
    };
  
    try {
      const response = await axios.post("http://localhost:4000/addMenu", body, {
        headers: { "Content-Type": "application/json" },
      });
      setMessage("Menu added successfully!");
      console.log("Response:", response);
  
      setSelectedCategory("");
      setSelectedItem([]); // Reset to empty array
    } catch (error) {
      console.error("Error adding menu:", error);
      setMessage("Failed to add menu.");
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="p-6 border border-gray-700 rounded-lg shadow-lg max-w-md w-full bg-gray-900">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Menu</h2>
        {message && (
          <p className="text-center text-green-500 mb-4">{message}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-300">
              Select Category:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- Select Category --</option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-300">
              Select Item:
            </label>
            <select
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- Select Item --</option>
              {items.map((item) => (
                <option key={item._id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Add Menu
          </button>
        </form>
      </div>
      <footer className="mt-6 text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </footer>
    </div>
  );
};

export default AddMenuForm;
