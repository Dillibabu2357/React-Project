import { usePostQuery } from "@/api/posts.api"
import { useParams } from "react-router-dom"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

const SinglePost = () => {
  const { id } = useParams()
  const postId = Number(id)
  const { error, isLoading, data } = usePostQuery(postId)

  if (error) {
    return <div>{error.message}</div>
  }
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {data ? (
        <Card className="max-w-xl mx-auto mt-6 p-4 shadow-lg border">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              {data.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{data.body}</p>
            <div className="mt-4 flex gap-2 text-sm text-gray-500">
              {data.tags &&
                data.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 rounded-full px-2 py-1"
                  >
                    #{tag}
                  </span>
                ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center mt-4 pt-4 border-t">
            <div className="text-gray-600">
              <span>Likes: {data.reactions.likes}</span> |
              <span> Dislikes: {data.reactions.dislikes}</span>
            </div>
            <div className="text-gray-600">Views: {data.views}</div>
          </CardFooter>
        </Card>
      ) : (
        <div>Post Not available</div>
      )}
    </div>
  )
}

export default SinglePost
