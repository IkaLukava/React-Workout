import React from 'react'

function MemoComp(name) {
    console.log('zdaroba dzma')
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoComp)