// Write your code here
import './index.css'

const TabItem = props => {
  const {list} = props
  const {tabId, displayText} = list
  return (
    <li className="tab">
      <button className="btn" type="button">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
