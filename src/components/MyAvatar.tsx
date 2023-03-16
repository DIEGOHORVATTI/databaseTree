// hooks
import useAuth from '../hooks/useAuth'
// utils
import createAvatar from '@Utils/createAvatar'
//
import Avatar, { Props as AvatarProps } from './Avatar'

export default function MyAvatar({ ...other }: AvatarProps) {
  const { user } = useAuth()

  return (
    <Avatar
      src={
        'https://avatars.githubusercontent.com/u/72998710?s=400&u=be7f4d54fe317d923de7a40af16eeb1425611637&v=4'
      }
      alt={'diegohorvatti'}
      color={user?.photoURL ? 'default' : createAvatar('Diego Horvatti').color}
      {...other}
    >
      {createAvatar('Diego Horvatti')}
    </Avatar>
  )
}
