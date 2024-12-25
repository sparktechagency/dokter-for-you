import { baseApi } from "@/redux/base/baseApi"

const articlesSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getAllArticles: build.query({
      query: (page) => {
        const params = new URLSearchParams();
        if (page) params.append("page", page)
        return {
          url: `/article?${params.toString()}`,
        }
      },
    }),

    getSingleArticle: build.query({
      query: (id) => ({
        url: `/article/${id}`,
      }),
    }),

  })
})

export const { useGetAllArticlesQuery, useGetSingleArticleQuery } = articlesSlice