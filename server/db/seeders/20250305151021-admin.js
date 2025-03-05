const bcrypt = require('bcrypt');
const Admin = require('../model/Admin');  // Adjust the path based on your folder structure

'use strict';

module.exports = {
  up: async (models, mongoose) => {
    try {
      // Check if the admin already exists
      const existingAdmin = await Admin.findOne({ email: "admin@gmail.com" });

      if (existingAdmin) {
        console.log("Admin already exists!");
        return;
      }

      // Hash the password if you are not using a pre-hashed password
      const hashedPassword = await bcrypt.hash("admin#123", 10);

      // Insert Admin data into Register collection
      const result = await Admin.insertMany([
        {
          _id: "67c869a1d917dc5a728229f1",
          name: "Admin",
          email: "admin@gmail.com",
          password: hashedPassword,  // Insert hashed password
          role: "Admin",  // Set role to Admin in Register schema
          isActive: true,
        }
      ]);

      console.log(`${result.length} Admin user inserted`);  // Use result.length to log the inserted count
    } catch (error) {
      console.error("Error inserting Admin user:", error);
    }
  },

  down: async (models, mongoose) => {
    try {
      const result = await Admin.deleteMany({
        _id: { $in: ["67c869a1d917dc5a728229f1"] }
      });

      console.log(`${result.deletedCount} Admin user deleted`);
    } catch (error) {
      console.error("Error deleting Admin user:", error);
    }
  }
};