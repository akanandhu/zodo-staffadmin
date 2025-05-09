import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { editDepartment } from "../../apis/departments";

export const useEditDepartment = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: editDepartment, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["department"]});
    },
    onSuccess: (data, variables) => {
      const message = data?.message || "Department updated successfully";
      // queryClient.invalidateQueries({ queryKey: ["department", variables.id] });
      console.log("success ",variables.id);
      
      // queryClient.invalidateQueries({ queryKey: ["departments", variables.hospital_id]});
      queryClient.invalidateQueries({ queryKey: ["department", variables.id]});
      queryClient.invalidateQueries({ queryKey: ["department", variables.hospital_id]});
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
      // Rollback if there is an error
      if (context?.previousDepartments) {
        queryClient.setQueryData(["department"], context.previousDepartments);
      }
      const errorMessage =
        error?.response?.data?.message || "Failed to edit department";
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
