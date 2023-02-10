import React, { useEffect } from 'react'

function Redirect() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      404 ERROR
    </div>
  )
}

export default Redirect
