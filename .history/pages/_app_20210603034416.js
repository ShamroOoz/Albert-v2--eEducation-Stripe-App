import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ProvideAuth } from "@/context/AuthContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51IuiHnLMgvU1cp6VcGOxdYgTSfcOEiSG1RqeoyZf3Wzw8u9fV6lL41HprkeBFVrRbkohbjQP4p9H5B1WSnqwz1qP00HjEpxU7u"
);

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
