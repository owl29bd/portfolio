/**
 *  The `redirect` function allows us to redirect the user to another URL. 
 *  We can call `redirect` or `permanentRedirect` in 
 *    - Server Components, 
 *    - Route Handlers, and 
 *    - Server Actions.
 */

'use server'
 
import { redirect, permanentRedirect } from 'next/navigation'
import { revalidatePath, revalidateTag } from 'next/cache'
 
export async function createUser(prevState: any, formData: FormData) {
  const res = await fetch('https://...')
  const json = await res.json()
 
  if (!res.ok) {
    return { message: 'Please enter a valid email' }
  }
 
  redirect('/dashboard')
}

/**
 * `redirect` is often used after a mutation or event
 * For example, creating a post:
 * @param id 
 */
export async function createPost(id: string) {
  try {
    // Call database
  } catch (error) {
    // Handle errors
  }
 
  revalidatePath('/posts') // Update cached posts
  redirect(`/post/${id}`) // Navigate to the new post page
}

/**
 * `permanentRedirect` is often used after a mutation or event that changes an entity's canonical URL, 
 * such as updating a user's profile URL after they change their username:
 * @param username 
 * @param formData 
 */
export async function updateUsername(username: string, formData: FormData) {
  try {
    // Call database
  } catch (error) {
    // Handle errors
  }
 
  revalidateTag('username') // Update all references to the username
  permanentRedirect(`/profile/${username}`) // Navigate to the new user profile
}