import { useCounter, useFetch } from "../hooks";
import { LoadingQuoter, Quote } from "./";



export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuoter /> : <Quote author={ author } quote = {quote} />}

      <button onClick={() => increment()} className="btn btn-primary">
        Next quote
      </button>
      <button onClick={() => decrement()} className="btn btn-primary mt-2">
        Back quote
      </button>
    </>
  );
};
