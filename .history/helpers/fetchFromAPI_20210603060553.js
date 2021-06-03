import { auth } from "./firebase";

export async function fetchFromAPI(endpointURL, opts) {
  const { method, body } = { body: null, ...opts };

  const user = auth.currentUser;
  const token = user && (await user.getIdToken());

  console.log(method, body);
  console.log(token);
  const res = await fetch(`${endpointURL}`, {
    method,
  });
  return res.json();
}
