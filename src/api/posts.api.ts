import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

type TPost = {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
  userId: number
}

const getPost = async (id: number) => {
  const response = await api.get(`/posts/${id}`)
  return response.data
}

export const usePostQuery = (id: number) => {
  return useQuery<TPost>({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  })
}

const getPostsList = async () => {
  const response = await api.get(`/posts/`)
  return response.data
}

export const usePostsListQuery = () => {
  return useQuery<{ posts: TPost[] }>({
    queryKey: ["posts"],
    queryFn: getPostsList,
  })
}
