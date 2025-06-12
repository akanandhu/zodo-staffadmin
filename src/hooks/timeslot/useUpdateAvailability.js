// Custom hook for editing hospital
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { editAvailability } from "../../apis/timeslots";

export const useUpdateAvailability = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: editAvailability, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for hospitals to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["departments"] });
    },
    onSuccess: (data, variables) => {
      const message = data?.message || "Department updated successfully";
      queryClient.invalidateQueries({ queryKey: ["availabilites"] });
      queryClient.invalidateQueries({
        queryKey: ["availabilities", variables.id],
      });
      toast.success(message);
    },
    onError: (error, id, context) => {
      // Rollback if there is an error
      if (context?.previousHospitals) {
        // queryClient.setQueryData(["departments"], context.previousHospitals);
      }
      const errorMessage =
        error?.response?.data?.message || "Failed to edit hospital";
      toast.error(errorMessage);
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
  };
};
