import { useQuery } from "@tanstack/react-query";
import { status } from "../endpoints/admin/AdminEndpoints";

export default function useAdmin() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["admin"],
    queryFn: status,
    select: (res) => res.data,
  });

  return {
    data,
    isLoading,
    isError,
  };
}
