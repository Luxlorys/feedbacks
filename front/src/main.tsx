import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FeedbacksList from "./pages/FeedbacksList.tsx";
import { FeedbackApi } from './services/api/feedbackApi.ts';

const api = new FeedbackApi();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/show-list-of-all-feedbacks",
    element: <FeedbacksList api={api} />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
