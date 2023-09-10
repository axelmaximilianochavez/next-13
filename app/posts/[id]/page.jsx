export default function Post ({ params }) {
  const { id } = params

  return (
    <p>this is the post {id}</p>
  )
}
