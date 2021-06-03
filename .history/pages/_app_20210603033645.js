import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ProvideAuth } from "@/context/AuthContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FirebaseAppProvider } from "reactfire";

export const stripePromise = loadStripe(
  "pk_test_51IuiHnLMgvU1cp6VcGOxdYgTSfcOEiSG1RqeoyZf3Wzw8u9fV6lL41HprkeBFVrRbkohbjQP4p9H5B1WSnqwz1qP00HjEpxU7u"
);

export const firebaseConfig = {
  apiKey: "AIzaSyCsasRjwCgURfxKcmXP65A2TgMh2TzGAp4",
  authDomain: "albert-v2-2c722.firebaseapp.com",
  projectId: "albert-v2-2c722",
  storageBucket: "albert-v2-2c722.appspot.com",
  messagingSenderId: "501192080466",
  appId: "1:501192080466:web:1c7797cbaa8486369b338b",
};

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Elements stripe={stripePromise}>
        <Component {...pageProps} />
      </Elements>
    </ProvideAuth>
  );
}

export default MyApp;
