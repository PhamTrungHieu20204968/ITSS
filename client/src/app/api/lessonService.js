import { apiService } from '../store/apiService';
export const LessonService = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getLessons: builder.query({
            query: () => `lessons`,
            providesTags: ['word'],
        }),

        getLesson: builder.query({
            query: (id) => `lessons/${id}`,
            providesTags: ['word'],
        }),

        deleteLesson: builder.mutation({
            query: ({ id, headers }) => ({
                url: `lessons/${id}`,
                method: 'DELETE',
                headers: headers,
            }),
            invalidatesTags: ['word'],
        }),
        deleteWordFromLesson: builder.mutation({
            query: ({ id, headers, wordId }) => ({
                url: `lessons/${id}/${wordId}`,
                method: 'DELETE',
                headers: headers,
            }),
            invalidatesTags: ['word'],
        }),
        updateLesson: builder.mutation({
            query: ({ data, id, headers }) => ({
                url: `lessons/${id}`,
                method: 'PUT',
                body: data,
                headers: headers,
            }),
            invalidatesTags: ['word'],
        }),
        addWordToLesson: builder.mutation({
            query: ({ lessonId, wordId, headers }) => ({
                url: `lessons/${lessonId}/${wordId}`,
                method: 'POST',
                headers: headers,
            }),
            invalidatesTags: ['word'],
        }),
        createLesson: builder.mutation({
            query: ({ data, headers }) => ({
                url: `lessons`,
                method: 'POST',
                headers: headers,
                body: data,
            }),
            invalidatesTags: ['word'],
        }),
    }),
});

export const {
    useGetLessonsQuery,
    useGetLessonQuery,
    useDeleteLessonMutation,
    useUpdateLessonMutation,
    useAddWordToLessonMutation,
    useCreateLessonMutation,
    useDeleteWordFromLessonMutation,
} = LessonService;
