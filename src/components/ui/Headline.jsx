/**
 * Renders an array of copy lines as one heading with <br> between them,
 * optionally italicising a phrase (used by the hero).
 */
export default function Headline({ lines = [], emphasis, className = '' }) {
  return (
    <>
      {lines.map((line, i) => {
        const parts = emphasis && line.includes(emphasis)
          ? line.split(emphasis)
          : null;

        return (
          <span key={i} className={className}>
            {parts ? (
              <>
                {parts[0]}
                <em>{emphasis}</em>
                {parts[1]}
              </>
            ) : (
              line
            )}
            {i < lines.length - 1 && <br />}
          </span>
        );
      })}
    </>
  );
}
