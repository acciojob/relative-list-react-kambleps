import React from 'react'

const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
    <ol key="relativeList" id='relativeList'>
      <li key="relativeListItem1" id='relativeListItem1'>Aunt Jane</li>
      <li key="relativeListItem2" id='relativeListItem2'>Uncle Mike</li>
      <li key="relativeListItem3" id='relativeListItem3'>Cousin Sarah</li>
      <li key="relativeListItem4" id='relativeListItem4'>Grandma Rose</li>
      <li key="relativeListItem5" id='relativeListItem5'>Brother Alex</li>
    </ol>
    </div>
  )
}

export default App
