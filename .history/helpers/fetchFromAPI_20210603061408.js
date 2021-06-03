import { auth } from "./firebase";

export async function fetchFromAPI(endpointURL, opts) {
  const { method, body } = { method: "POST", body: null, ...opts };

  const user = auth.currentUser;
  const token = user && (await user.getIdToken());

  const res = await fetch(`${endpointURL}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}
