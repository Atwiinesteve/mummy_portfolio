import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// importing react-router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contacts from './pages/contacts/Contacts';

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


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
