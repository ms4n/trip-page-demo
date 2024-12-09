import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TripDetails } from "./components/trip-details/TripDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#000000]">
        <Routes>
          <Route path="/" element={<Navigate to="/vikram-singh/manali-adventure-trek" replace />} />
          <Route path="/:hostName/:tripSlug" element={<TripDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
