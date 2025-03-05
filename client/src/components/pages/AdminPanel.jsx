import { useNavigate } from "react-router-dom";
import { FaPlus, FaUtensils, FaLayerGroup } from "react-icons/fa";

export default function AdminPanel() {
  const navigate = useNavigate();

  const sections = [
    { title: "Add Category", icon: <FaLayerGroup size={40} />, path: "/add-category" },
    { title: "Add Item", icon: <FaUtensils size={40} />, path: "/add-item" },
    { title: "Add Menu", icon: <FaPlus size={40} />, path: "/add-menu" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-8 text-yellow-500">Admin Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-yellow-500 rounded-xl p-6 text-center cursor-pointer hover:shadow-lg hover:bg-gray-700 transition flex flex-col items-center gap-4"
            onClick={() => navigate(section.path)}
          >
            {section.icon}
            <h2 className="text-lg font-semibold">{section.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}