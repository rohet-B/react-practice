// Dynamic Routing OR URL PARAMETER

import { useParams } from 'react-router-dom'
// useParams is a React Router hook used to read dynamic values from the URL path.

const User = () => {
    const params = useParams(); //wihtout destructuring
  return (
    <div>
      I am user {params.username}
    </div>
  )
}

export default User
