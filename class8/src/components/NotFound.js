import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 1000); // ms
  });

  return (
    <div>
      <h1>The page you are looking for is missing</h1>
      {
        // ne nosi na stranata sto se prikazuva vo to
      }
      {/* <Navigate to="/books" /> */}
    </div>
  );
};
