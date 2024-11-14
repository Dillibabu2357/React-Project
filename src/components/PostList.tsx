import { usePostsListQuery } from "@/api/posts.api"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const PostList = () => {
  const { error, isLoading, data } = usePostsListQuery()
  if (error) {
    return <div>{error.message}</div>
  }
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {data &&
        data.posts.length > 0 &&
        data.posts.map((post, index) => (
          <Accordion type="single" collapsible className="w-full" key={index}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{post.title}</AccordionTrigger>
              <AccordionContent>{post.body}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
    </div>
  )
}

export default PostList
