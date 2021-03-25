// setar como type ou interface, tanto faz

type RepositoryItemProps = {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
};

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name ?? "Title"}</strong>
      <p>{props.repository?.description ?? "Description"}</p>

      <a href={props.repository?.html_url ?? "#"}>acessar repositorio</a>
    </li>
  );
}
