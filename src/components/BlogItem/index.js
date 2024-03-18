// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlogDetails} = props
  const {title, description, publishedDate} = eachBlogDetails

  return (
    <li className="each-list-item">
      <div className="blogItem-container">
        <div className="title-descrip-container">
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
        </div>
        <p className="publishedDate">{publishedDate}</p>
      </div>
      <hr className="horizon-line" />
    </li>
  )
}

export default BlogItem
