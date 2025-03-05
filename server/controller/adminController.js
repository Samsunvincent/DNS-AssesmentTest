const Category = require("../db/model/category");
const Item = require("../db/model/items");
const Menu = require("../db/model/menu");

exports.addCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name)
      return res.status(400).json({ error: "Category name is required" });

    const newCategory = new Category({
      name: name.trim(),
      description: description ? description.trim() : "", // Ensure description is not undefined
    });

    await newCategory.save();

    res.status(201).json({ message: "Category added", category: newCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addItem = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !price)
      return res.status(400).json({ error: "Name and price are required" });

    const newItem = new Item({
      name: name.trim(),
      description: description?.trim() || "",
      price,
    });
    await newItem.save();

    res.status(201).json({ message: "Item added", item: newItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCategoriesAndItems = async (req, res) => {
  try {
    const categories = await Category.find({});
    const items = await Item.find({});
    res.status(200).json({ categories, items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addMenu = async (req, res) => {
  try {
    const { categoryName, itemNames } = req.body;

    if (!categoryName || !itemNames || !itemNames.length) {
      return res
        .status(400)
        .json({ error: "Category and item names are required." });
    }

    // Find the category by name
    const category = await Category.findOne({ name: categoryName.trim() });
    if (!category) {
      return res
        .status(404)
        .json({ error: `Category '${categoryName}' not found.` });
    }

    // Fetch all items that match the provided names
    const foundItems = await Item.find({
      name: { $in: itemNames.map((name) => name.trim()) },
    });

    // Check if the number of found items matches the number of requested items
    const foundItemNames = foundItems.map((item) => item.name);
    const missingItems = itemNames.filter(
      (name) => !foundItemNames.includes(name.trim())
    );

    if (missingItems.length > 0) {
      return res
        .status(404)
        .json({ error: `Items not found: ${missingItems.join(", ")}` });
    }

    // Create the new menu with valid category and items
    const newMenu = new Menu({
      category: category._id,
      items: foundItems.map((item) => item._id),
    });

    await newMenu.save();

    res.status(201).json({ message: "Menu created", menu: newMenu });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMenu = async function (req, res) {
  try {
    let menuData = await Menu.find({})
      .populate({ path: "category", select: "name" }) // Only fetch category name
      .populate({ path: "items", select: "name description price" }); // Fetch item details

    if (!menuData.length) {
      return res.status(404).json({ error: "No menu items found." });
    }

    res.status(200).json(menuData);
  } catch (error) {
    console.error("Something went wrong:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getMenusByCategory = async function (req, res) {
  try {
    const { id: categoryId } = req.params; // Correctly extracting categoryId

    // Validate categoryId
    if (!categoryId) {
      return res.status(400).json({ error: "Category ID is required." });
    }

    // Check if the category exists
    const categoryExists = await Category.findById(categoryId);
    if (!categoryExists) {
      return res.status(404).json({ error: "Category not found." });
    }

    // Fetch menus that belong to this category
    const menus = await Menu.find({ category: categoryId })
      .populate({ path: "category", select: "name" }) // Get category name
      .populate({ path: "items", select: "name description price" }); // Get item details

    // If no menus exist for the category
    if (!menus.length) {
      return res
        .status(404)
        .json({ error: "No menus found for this category." });
    }

    res.status(200).json(menus);
  } catch (error) {
    console.error("Error fetching menu by category:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
