import { useEffect, useState } from "react";
import axios from "axios";


export default function BodyFirstSection() {
  const [categories, setCategories] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState([]); // Stores selected menu items
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category name
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(`https://dns-assesmenttest-server.onrender.com`);
        setCategories(response.data);

        // Automatically select the first category if available
        if (response.data.length > 0) {
          handleCategoryByMenu(response.data[0]._id, response.data[0].name);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategoryData();
  }, []);

  const handleCategoryByMenu = async (id, name) => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get(`https://dns-assesmenttest-server.onrender.com/${id}`);
      console.log(response.data); // Debugging log

      if (response.data.length > 0) {
        const allItems = response.data.flatMap(menu => menu.items);
        setSelectedMenu(allItems);
        setSelectedCategory(name);
      } else {
        setSelectedMenu([]);
        setSelectedCategory(name);
      }
    } catch (error) {
      console.error(`Error fetching menu for category ${id}:`, error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-5 bg-black min-h-screen w-full">
      {/* Category Buttons */}
      <div className="flex justify-center items-center gap-5 flex-wrap w-full">
        {categories.length > 0 ? (
          categories.map((category) => (
            <button
              key={category._id}
              className={`px-4 py-2 rounded-lg border border-[#FFD700] transition duration-300 ${
                selectedCategory === category.name ? "bg-[#FFD700] text-black" : "bg-black text-white hover:bg-[#FFD700] hover:text-black"
              }`}
              onClick={() => handleCategoryByMenu(category._id, category.name)}
            >
              {category.name}
            </button>
          ))
        ) : (
          <p className="text-white">Loading categories...</p>
        )}
      </div>

      {/* Selected Menu Items Display */}
      <div className="w-full max-w-3xl bg-black text-white p-5 rounded-lg border border-[#FFD700] shadow-lg">
        <h2 className="text-[#FFD700] text-2xl font-bold text-center mb-4">
          {selectedCategory ? `${selectedCategory} Menu` : "Select a Category"}
        </h2>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#FFD700] border-solid"></div>
          </div>
        ) : selectedMenu.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedMenu.map((item) => (
              <div key={item._id} className="p-4 bg-[#1a1a1a] rounded-md border border-[#FFD700]">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
                <p className="text-[#FFD700] font-bold mt-2">₹{item.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300">No menus yet</p>
        )}
      </div>
    </div>
  );
}
