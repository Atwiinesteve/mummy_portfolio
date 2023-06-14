import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// importing react-router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contacts from './pages/contacts/Contacts';
import Success from './payments/Success';
import Cancel from './payments/Cancel';

// router setting up
const router = createBrowserRouter([

	{
    // home page
		path: "/",
		element: <App />
	},

	{
    // contacts page
		path: "/contacts",
		element: <Contacts />
	},

	// success page
	{
		path: "/success",
		element: <Success />
	},

	// cancel page
	{
		path: "/cancel",
		element: <Cancel />
	}


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
