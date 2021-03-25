export function RepositoryItem(props) {
  return(
    <  li>
    <strong>{ props.repository?.name ?? "Title"}</strong>
    <p>{ props.repository?.description ?? "Description"}</p>

    <a href={ props.repository?.html_url ?? "#"}>acessar repositorio</a>
  </li>
  )
}