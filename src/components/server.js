const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

// Define the User model for user authentication database
const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    email: String,
    password: String,
}));

// Define the Cart model for cart database, adding the quantity field
const CartItem = mongoose.model('CartItem', new mongoose.Schema({
    name: String,
    image: String,
    price: String,
    discountPrice: String,
    discount: String,
    rating: String,
    quantity: { type: Number, default: 1 }, // Add quantity field
}));

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Connect to MongoDB for both User Authentication and Cart Databases
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Root Route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Signup Route
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already registered' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ success: false, message: 'Incorrect password' });
        }
        res.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Cart Routes

// Add item to cart with quantity
app.post('/cart/add', async (req, res) => {
    const { name, image, price, discountPrice, discount, rating, quantity } = req.body;
    try {
        // Check if the item already exists in the cart
        let cartItem = await CartItem.findOne({ name, image });
        if (cartItem) {
            // If it exists, update the quantity
            cartItem.quantity += quantity;
            await cartItem.save();
            return res.status(200).json({ success: true, message: 'Item quantity updated in cart' });
        }

        // If item does not exist, create a new cart item
        const newCartItem = new CartItem({
            name,
            image,
            price,
            discountPrice,
            discount,
            rating,
            quantity, // Include the provided quantity
        });

        await newCartItem.save();
        res.status(201).json({ success: true, message: 'Item added to cart' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to add item to cart' });
    }
});

// Get all items in cart
app.get('/cart', async (req, res) => {
    try {
        const cartItems = await CartItem.find();
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch cart items' });
    }
});

// DELETE an item from the cart
app.delete('/cart/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedItem = await CartItem.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ success: false, message: 'Item not found' });
        }
        res.status(200).json({ success: true, message: 'Item deleted from cart' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting item from cart' });
    }
});

// PUT to update the quantity of an item in the cart
app.put('/cart/:id', async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    try {
        if (quantity === 0) {
            // If quantity is 0, delete the item from the cart
            const deletedItem = await CartItem.findByIdAndDelete(id);
            if (!deletedItem) {
                return res.status(404).json({ success: false, message: 'Item not found' });
            }
            return res.status(200).json({ success: true, message: 'Item deleted from cart' });
        } else {
            // Update the quantity of the item
            const updatedItem = await CartItem.findByIdAndUpdate(id, { quantity }, { new: true });
            if (!updatedItem) {
                return res.status(404).json({ success: false, message: 'Item not found' });
            }
            res.status(200).json({ success: true, message: 'Item quantity updated', updatedItem });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating item quantity' });
    }
});

// Catch-All Route
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start the server
const PORT = process.env.PORT || 3001; // Use 3001 if no PORT environment variable is set
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
