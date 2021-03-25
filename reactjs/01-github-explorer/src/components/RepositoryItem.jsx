export function RepositoryItem(props) {
  return(
    <  li>
    <strong>{ props.repository?.name ?? "Defaulta"}</strong>
    <p>{ props.repository?.description ?? "Description"}</p>

    <a href={ props.repository?.link ?? "#"}>acessar repositorio</a>
  </li>
  )
}