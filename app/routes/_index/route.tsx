import type { MetaFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { Icon } from "~/svg";
import loader from "./loader";
import action from "./action";
export { loader, action };

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { response, error } = useLoaderData<typeof loader>();
  const fetcher = useFetcher<typeof action>();

  return (
    <main>
      <Icon width={200} color="crimson" />
      <div>
        {response ? (
          <span style={{ color: "green" }}>
            <strong>{response}</strong>
          </span>
        ) : (
          <span style={{ color: "red" }}>{error}</span>
        )}
      </div>
      <fetcher.Form method="post">
        <button type="submit">Click Me</button>
      </fetcher.Form>
      <div>
        {fetcher.data?.response ? (
          <span style={{ color: "green" }}>{fetcher.data?.response}</span>
        ) : (
          <span style={{ color: "red" }}>{fetcher.data?.error}</span>
        )}
      </div>
    </main>
  );
}
