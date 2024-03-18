// Write your JS code here

import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="bloglist-container">
      {blogsList.map(eachBlog => (
        <BlogItem eachBlogDetails={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
