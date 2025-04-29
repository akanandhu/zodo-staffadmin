// Custom hook for creating hospital
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addDepartment } from "../../apis/departments";

export const useAddDepartment = (hospitalId) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addDepartment, // API function to create
    onMutate: async () => {
      await queryClient.cancelQueries(
        { queryKey: ["departments", hospitalId] },
        hospitalId
      );
    },
    onSuccess: (data) => {
      const message = data.message || "Department added successfully";
      queryClient.invalidateQueries(["departments", hospitalId]);      
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    onError: (error, id, context) => {
      const errorMessage =
        error?.response?.data?.message || "Failed to add department";
      // Rollback if there is an error
      if (context?.previousDepartments) {
        queryClient.setQueryData(
          ["departments", hospitalId],
          context.previousDepartments
        );
      }
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
  };
};
