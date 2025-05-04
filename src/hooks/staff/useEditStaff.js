import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updateStaffByUserid } from "../../apis/users";

export const useEditStaff = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateStaffByUserid, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["staff"] });
    },
    onSuccess: (data, variables) => {
      console.log("SUccess data ", data);

      const message = data?.message || "Staff updated successfully";
      // queryClient.setQueryData(["hospital", variables.id], data);
      // queryClient.invalidateQueries({ queryKey: ["hospitals"] });
      queryClient.invalidateQueries({ queryKey: ["staff", variables.id] });
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
      console.log("Some error ", error);

      if (context?.previousStaff) {
        queryClient.setQueryData(["hospital"], context.previousStaff);
      }
      const errorMessage =
        error?.response?.data?.message || "Failed to edit hospital";
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
