import { useRouter } from 'next/router'
import projectsData from '../projects'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>{item.title}</p>
}

export default Post