import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addDoctors } from "../../apis/doctor";
import { useAuth } from "../useAuth";

export const useAddDoctors = () => {
  const queryClient = useQueryClient();
  const { hospitalId } = useAuth();
  const mutation = useMutation({
    mutationFn: addDoctors, // API function to create
    onMutate: async () => {
      // Cancel any ongoing queries for doctors to prevent race conditions
      await queryClient.cancelQueries({ queryKey: ["doctors"] });
    },
    onSuccess: (data) => {
      const message = data?.message || "Doctor added successfully";
      queryClient.invalidateQueries(["doctors",hospitalId]);
      //   navigate("/manage-doctors");
      console.log("Successs blovk");
      
      toast.success(message);
    },
    onError: (error, id, context) => {
      // Rollback if there is an error
      if (context?.previousDoctors) {
        queryClient.setQueryData(["doctors"], context.previousDoctors);
      }
      console.log("Errror block");
      
      const errorMessage =
        error?.response?.data?.validationErrors ||
        error?.response?.data?.message ||
        "Failed to create doctor";
      toast.error(errorMessage);
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
  };
};
