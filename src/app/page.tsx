import { RepoList } from "@/components/RepoList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-6 p-6">
      <header className="bg-zinc-400 rounded h-40"></header>

      <div className="flex gap-6 flex-1">
        <aside className="bg-zinc-400 rounded w-60"></aside>
        <main className="bg-zinc-400 rounded flex-1">
          {/* @ts-expect-error Async Component"*/}
          <RepoList />
        </main>
      </div>
    </div>
  );
}
