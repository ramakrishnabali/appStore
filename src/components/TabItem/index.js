// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const searchCategory = () => {
    onClickTabItem(tabId, isActive)
  }

  const activeClassName = isActive ? 'isActive' : 'listContainer'
  // console.log(activeClassName)

  return (
    <>
      <li className={activeClassName}>
        <button type="button" onClick={searchCategory} className="tab">
          {displayText}
        </button>
      </li>
    </>
  )
}

export default TabItem
