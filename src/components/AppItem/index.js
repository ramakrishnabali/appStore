// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <>
      <li className="Container">
        <img className="appImage" src={imageUrl} alt={appName} />
        <p className="appName">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
