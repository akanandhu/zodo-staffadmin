// Custom hook for creating hospital
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addAvailability } from "../../apis/timeslots";

export const useAddAvailability = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addAvailability, // API function to create
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["availabilities"] });
      // await queryClient.cancelQueries(["availabilities"]);
      // const previousData = queryClient.getQueryData(["availabilities"]) || [];
      // queryClient.setQueryData(["availabilities"], (old) => [...old, newSlot]);
      // console.log(previousData);
      
      // return { previousData };
    },
    onSuccess: (data) => {
      const message = data.message || "Added availability successfully";
      queryClient.invalidateQueries(["availabilities"]);
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
      queryClient.setQueryData(["availabilities"], context.previousData);
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
    onSettled: () => {
      queryClient.invalidateQueries(["availabilities"]);
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
  };
};
