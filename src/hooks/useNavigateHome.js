import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function useNavigateHome(data) {
  const navigate = useNavigate();
  useEffect(() => {
    const isAdmin = data?.data;
    if (isAdmin === null) navigate("/");
  }, [data, navigate]);
}
