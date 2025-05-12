// Basic Node.js/Express server example
// To run this:
// 1. Make sure you have Node.js and npm installed.
// 2. Save this code as `server.js` in a new folder.
// 3. Open a terminal in that folder.
// 4. Run `npm init -y` to create a package.json file.
// 5. Run `npm install express` to install the Express framework.
// 6. Run `node server.js` to start the server.
// The server will then be running at http://localhost:3000

// Import the Express framework
const express = require('express');
// Import the cors middleware to allow requests from your front-end (running on a different origin)
const cors = require('cors');

// Create an Express application instance
const app = express();

// Define the port the server will listen on
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

// --- Middleware ---
// Enable CORS for all origins (for development purposes)
// In a production environment, you should configure CORS more restrictively.
app.use(cors());

// Middleware to parse JSON request bodies (though not strictly needed for this GET-only example)
app.use(express.json());

// --- In-Memory Product Data (Replace with Database in a real app) ---
const products = [
    {
        id: 'arabica-roast', // Unique ID for the product
        name: 'Arabica Roast',
        description: 'Smooth and aromatic, our classic Arabica blend offers a balanced flavor profile.',
        imageUrl: 'https://placehold.co/600x400/d2b48c/4a2c1a?text=Arabica+Roast', // Placeholder URL
        sizes: [
            { size: 'small', weight: '250g', price: 10.00 },
            { size: 'medium', weight: '500g', price: 18.00 },
            { size: 'large', weight: '1kg', price: 32.00 }
        ]
    },
    {
        id: 'robusta-bold',
        name: 'Robusta Bold',
        description: 'A strong and full-bodied coffee with higher caffeine content for an extra kick.',
        imageUrl: 'https://placehold.co/600x400/8b4513/ffffff?text=Robusta+Bold',
        sizes: [
            { size: 'small', weight: '250g', price: 9.00 },
            { size: 'medium', weight: '500g', price: 16.00 },
            { size: 'large', weight: '1kg', price: 29.00 }
        ]
    },
    {
        id: 'signature-blend',
        name: 'Signature Blend',
        description: 'Our expertly crafted house blend, featuring notes of chocolate and nuts.',
        imageUrl: 'https://placehold.co/600x400/654321/f5f5dc?text=Signature+Blend',
        sizes: [
            { size: 'small', weight: '250g', price: 12.00 },
            { size: 'medium', weight: '500g', price: 22.00 },
            { size: 'large', weight: '1kg', price: 40.00 }
        ]
    }
];

// --- API Routes ---

// Define a GET endpoint at /api/products
app.get('/api/products', (req, res) => {
    // Send the products array as a JSON response
    console.log('GET /api/products request received'); // Log when the endpoint is hit
    res.json(products);
});

// Basic root route (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the Coffee Shop API!');
});

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
