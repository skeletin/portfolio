import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function useNavigateHome(data) {
  const navigate = useNavigate();
  useEffect(() => {
    if (data === null) navigate("/admin/login");
  }, [data, navigate]);
}
