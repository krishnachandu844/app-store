// Write your code here
import './index.css'

const AppItem = props => {
  const {apps} = props
  const {appName, imageUrl} = apps
  return (
    <li>
      <img src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
