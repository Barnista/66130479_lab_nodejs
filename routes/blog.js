const express = require("express");
const router = express.Router();
const blogs = [
  {
    id: 1,
    title: "Rhodium (Rh)",
    description: "$302,220 / kg",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Rhodium_powder_pressed_melted.jpg/2560px-Rhodium_powder_pressed_melted.jpg",
  },
  {
    id: 2,
    title: "Platinum (Pt)",
    description: "$31,010 / kg",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Platinum_crystals.jpg",
  },
  {
    id: 3,
    title: "Gold (Au)",
    description: "$59,040 / kg",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Gold-crystals.jpg/2560px-Gold-crystals.jpg",
  },
  {
    id: 4,
    title: "Palladium (Pd)",
    description: "$46,440 / kg",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/Palladium_%2846_Pd%29.jpg",
  },
  {
    id: 5,
    title: "Iridium (Ir)",
    description: "$147,890 / kg",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Iridium-2.jpg",
  },
  {
    id: 6,
    title: "Ruthenium (Ru)",
    description: "$14,950 / kg",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ruthenium_a_half_bar.jpg/2560px-Ruthenium_a_half_bar.jpg",
  },
  {
    id: 7,
    title: "Silver (Ag)",
    description: "$670 / kg",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Silver_crystal.jpg/2560px-Silver_crystal.jpg",
  },
];

/**
 * @swagger
 * /blog:
 *   get:
 *     tags: [Blog]
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/blog", (req, res) => {
  res.json(blogs);
});

/**
 * @swagger
 * /blog/{id}:
 *   get:
 *     tags: [Blog]
 *     summary: Get a blog by ID.
 *     description: Retrieve a blog by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the blog to retrieve.
 *     responses:
 *       200:
 *         description: A single blog object.
 *       404:
 *         description: blog not found.
 */
router.get("/blog/:id", (req, res) => {
  const { id } = req.params;
  const result = blogs.find((rs) => rs.id === parseInt(id));
  console.log(id);
  res.json(result);
});

module.exports = router;
