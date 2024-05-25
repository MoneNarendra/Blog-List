import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, publishedDate, description} = eachBlog
  return (
    <li className="blog-item-container">
      <div className="title-date-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
