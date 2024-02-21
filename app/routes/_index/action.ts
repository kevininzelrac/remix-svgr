import { TypedResponse, json } from "@remix-run/node";

const action = async (): Promise<
  TypedResponse<{
    response?: string;
    error?: string;
  }>
> => {
  const data = "";
  //if (!data) throw new Error("Error showing in ErrorBoundary"); // ErrorBoundary
  if (!data) return json({ error: "Error showing in UI" }); // useLoaderData

  return json({ response: data });
};
export default action;
