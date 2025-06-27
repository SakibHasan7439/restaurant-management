"use client";

import { useState } from "react";
import { Star, Plus } from "lucide-react";
import { Modal } from "antd";
import axios from "axios";


const FoodMenuSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [food, setFood] = useState({name: '', category: "Breakfast", image: null});

    const handleSubmitForm = async (e) => {
    e.preventDefault();
  
      try{
        const imgForm = new FormData();
        imgForm.append("image", food.image);

        const imgResult = await axios.post(
          `https://api.imgbb.com/1/upload?key=742173e974786a75c1874cd959538aed`, imgForm
        );

        const imageURL = imgResult.data.data.url;
        // send data to backend
        axios.post('/api/food', {
          name: food.name,
          category: food.category,
          image: imageURL
        });

        // reset form values
        setFood({name: '', category: "Breakfast", image: null});

      }catch(error){
       console.log(error);
      }
    }
  


  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Breakfast", "Lunch", "Dinner"];

  const foodItems = [
    {
      id: 1,
      name: "Salad Fry",
      category: "Breakfast",
      price: 230,
      rating: 5,
      image: "/api/placeholder/300/200",
    },
    {
      id: 2,
      name: "Chicken Breast",
      category: "Lunch",
      price: 230,
      rating: 5,
      image: "/api/placeholder/300/200",
    },
    {
      id: 3,
      name: "Chicken Legs",
      category: "Dinner",
      price: 230,
      rating: 5,
      image: "/api/placeholder/300/200",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? foodItems
      : foodItems.filter((item) => item.category === activeCategory);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const getCategoryColor = (category) => {
    const colors = {
      Breakfast: "bg-red-500",
      Lunch: "bg-red-500",
      Dinner: "bg-red-500",
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header with category filters and action buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-gray-900 text-white shadow-lg"
                  : "border rounded-2xl"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={showModal}
            className="flex cursor-pointer items-center gap-2 px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-200 text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            Add Food
          </button>
          <Modal
            closable={{ "aria-label": "Custom Close Button" }}
            open={isModalOpen}
            width={250}
            onOk={handleOk}
            onCancel={handleCancel}
            classNames={"bg-gray-200 inset-0 opacity-40 backdrop-blur-sm"}
          >
            <div>
              <h4 className="text-center text-xl mb-4">Add Food</h4>
              <form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Food Name"
                  value={food.name}
                  onChange={(e) => setFood({ ...food, name: e.target.value })}
                  required
                />

                <select
                  value={food.category}
                  onChange={(e) =>
                    setFood({ ...food, category: e.target.value })
                  }
                  required
                >
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                </select>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFood({ ...food, image: e.target.files[0] })
                  }
                  required
                />
                <button className="border rounded px-3 py-2" type="submit">Save</button>
              </form>
            </div>
          </Modal>
          <button className="flex items-center cursor-pointer gap-2 px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-200 text-sm font-medium">
            <Plus className="w-4 h-4" />
            Add Category
          </button>
        </div>
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
          >
            {/* Image Container */}
            <div className="relative h-48 bg-gradient-to-br from-pink-100 to-green-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 to-green-200/50"></div>
              <div className="relative h-full flex items-center justify-center">
                {/* Placeholder for food image */}
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="text-4xl">🍽️</div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {item.name}
                </h3>
                <div>
                  <span
                    className={`px-3 py-1 text-xs font-medium text-white rounded-full ${getCategoryColor(
                      item.category
                    )}`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-between pt-2">
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(item.rating)}
                  <span className="text-sm text-gray-600 ml-1">
                    ({item.rating}.0)
                  </span>
                </div>
                <div className="text-lg font-bold text-gray-900">
                  ${item.price}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🍽️</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No items found
          </h3>
          <p className="text-gray-600">
            No food items available in the {activeCategory.toLowerCase()}{" "}
            category.
          </p>
        </div>
      )}
    </div>
  );
};

export default FoodMenuSection;
