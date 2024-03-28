/**
 * @typedef {Object} User
 * @property {string} username - the user's username
 * @property {string} password - the user's password
 */

/**
 * Function to return the username and password from the backend
 * @returns {User}
 */
export async function fetchUser() {
  try {
    const res = await fetch('http://localhost:4000', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.json()
  } catch (e) {
    console.error(e)
  }
}

