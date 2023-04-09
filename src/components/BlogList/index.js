import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogDetails} = props
  return (
    <ul className="blogList_container">
      {blogDetails.map(eachItem => (
        <BlogItem blogItemDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default BlogList
