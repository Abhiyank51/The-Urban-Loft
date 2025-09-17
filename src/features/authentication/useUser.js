import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";


// to get user data for authorization in ProtectedRoute.jsx

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}