import { Forms } from "./forms";

export async function RepoList() {
  const repos = await fetch("https://api.github.com/users/gabriels5g/repos", {
    cache: "force-cache",
    next: {
      revalidate: 2,
    },
  }).then((response) => response.json());

  return (
    <div>
      <Forms />
      {JSON.stringify(repos, null, 2)}
    </div>
  );
}
