import './index.css'

const profileImg = 'https://assets.ccbp.in/frontend/react-js/profile-img.png'

const UserInfo = () => (
  <div className="userInfo_container">
    <img src={profileImg} alt="profile" className="profile_img" />
    <h1 className="heading">Wade Warren</h1>
    <p className="position">Software developer at UK</p>
  </div>
)

export default UserInfo
