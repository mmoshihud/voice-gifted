import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../components/section-title/SectionTitle";
const stripePromise = loadStripe(import.meta.env.VITE_PK_KEY);

const Payment = () => {
  return (
    <>
      <SectionTitle heading="Payment"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </>
  );
};

export default Payment;
