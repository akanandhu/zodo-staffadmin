import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { editHospitalService } from "../../apis/hospitalServices";

export const useUpdateService = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: editHospitalService, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["services"] });
    },
    onSuccess: (data, variables) => {
      const message = data?.message || "Service updated successfully";
      queryClient.invalidateQueries({ queryKey: ["services", variables.id] });
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
      if (context?.previousService) {
        queryClient.setQueryData(["service"], context.previousService);
      }
      const errorMessage =
        error?.response?.data?.message || "Failed to update service";
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
