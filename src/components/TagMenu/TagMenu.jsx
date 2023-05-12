import './TagMenu.css'

const TagMenu = ({ activeTag, tagName, onClick }) => {
  const handleSetActiveTag = () => {
    onClick(tagName)
  }

  const handleCheckActiveTag = () => {
    return activeTag === tagName ? 'active' : ''
  }

  return (
    <div className="MenuTags" onClick={handleSetActiveTag}>
      <h3 className={`MenuTag ${handleCheckActiveTag()}`}>
        {tagName}

        {activeTag === tagName && <span class="dot"></span>}
      </h3>
      {/* <h3 className ="MenuTag">All</h3> */}
      {/* <h3 className ="MenuTag">Vegetarian</h3> */}
      {/* <h3 className ="MenuTag">Soup</h3>   */}
      {/* <h3 className ="MenuTag">Vegan</h3> */}
      {/* <h3 className ="MenuTag">Meat</h3> */}
      {/* <h3 className ="MenuTag">Salad</h3> */}
      {/* <h3 className ="MenuTag">Pasta</h3> */}
    </div>
  )
}
export default TagMenu
