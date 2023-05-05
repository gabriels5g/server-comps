"use client";
import { useState } from "react";

export function Forms() {
  const [user, setUser] = useState("");
  async function increment() {
    console.log(user);
  }
  return (
    <form action={increment}>
      <input
        type="text"
        onChange={(event) => setUser(event.target.value)}
        value={user}
      />
      <button type="submit">Like</button>
    </form>
  );
}
