import { Route, Routes } from "react-router-dom"
import PostList from "./components/PostList"
import SinglePost from "./components/SinglePost"
import { Button } from "./components/ui/button"

const App = () => {
  return (
    <div>
      <nav className="flex justify-between bg-blue-800 p-2 items-center">
        <h1 className="text-white font-bold text-2xl">Heading</h1>
        <div className="flex gap-4 items-center">
          <ul className="flex gap-2 text-white">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <Button className="bg-emerald-500 hover:bg-emerald-500/90">
            Login
          </Button>
        </div>
      </nav>
      <Routes>
        <Route element={<PostList />} path="/" />
        <Route element={<SinglePost />} path="/:id" />
      </Routes>
    </div>
  )
}

export default App
