import React, { useState } from 'react'
import { fetchUser } from "../api"

/**
 * The view (a.k.a 'page') which allows the user to log in
 */
export const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  /**
   * Handles fetching usre data and populating the UI with this data
   */
  async function handleClick() {
    try {
      const user = await fetchUser()
      setUsername(user.username)
      setPassword(user.password)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
      {username && <p>The username is {username}</p>}
      {password && <p>The password is {password}</p>}
    </div>
  )
}
