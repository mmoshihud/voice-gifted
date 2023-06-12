import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../components/section-title/SectionTitle";
import useCart from "../../../hooks/useCart";
const stripePromise = loadStripe(import.meta.env.VITE_PK_KEY);

const Payment = () => {
  const [carts] = useCart();
  const total = carts.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <>
      <SectionTitle heading="Payment"></SectionTitle>
      <h1>{total}</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </>
  );
};

export default Payment;
