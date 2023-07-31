import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";

export const useFetchTask = () => {
    const {isLoading, data, isError, error} = useQuery({
        queryKey: ['tasks'],
        queryFn: async() => {
            const {data} = await customFetch.get('/');
            return data;
        }
    });

    return {isLoading, isError, data}
}

export const useCreateTask = () => {

}

export const useEditTask = () => {
    const queryClient = useQueryClient();

    const {mutate: editTask} = useMutation({
        mutationFn: ({taskId, isDone}) => {
            return customFetch.patch(`/${taskId}`, {
                isDone
            });
        },

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    });

    return {editTask}
}

export const useDeleteTask = () => {
    const queryClient = useQueryClient();
    const {mutate: deleteTask} = useMutation({
        mutationFn: (taskid) => {
            return customFetch.delete(`/${taskid}`);
        },

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:['tasks']
            });
        }
    });

    return {deleteTask}
}