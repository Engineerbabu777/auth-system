import { userModel } from '@/models/user.model'
import getSession from './getCurrentUser'

export default async function getLoggedUser () {
  const session = await getSession()

  try {
    if (!session?.user.email) {
      return null
    }

    const currentUser = await userModel.findById(session?.user.id)

    if (!currentUser) {
      return null
    }

    console.log('LOGGED USER-> : ',currentUser);

    return currentUser
  } catch (error) {
    return null
  }
}
