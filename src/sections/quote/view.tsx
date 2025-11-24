// ----------------------------------------------------------------------

export default function QuoteView() {
  return (
    <section
      id="quote"
      className="quote-background w-full px-4 h-120 flex flex-col justify-end"
    >
      <div className="self-end flex flex-col gap-12">
        <h3 className="max-w-250 text-2xl text-end font-light uppercase [&>strong]:font-medium [&>em]:not-italic [&>em]:opacity-50">
          The beginning of wisdom is the statement &quot;
          <strong>I do not know</strong>&quot;.&nbsp;
          <em>
            The person who cannot make that statement is one who will never
            learn anything.
          </em>
        </h3>

        <p className="mt-4 text-xs text-end font-light uppercase">
          -Keith R.A. DeCandido, Cycle of Hatred
        </p>
      </div>
    </section>
  );
}
