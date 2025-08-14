
export const HighlightUppercase = ({
  tag = "span",
  text,
  uppercaseClass = "text-red-900 text-5xl",
  normalClass = "text-neutral-50 text-shadow-lg/30"
}) => {
  const TagName = tag;

  return (
    <TagName>
      {text.split("").map((char, i) => {
        if (/[A-ZÁÉÍÓÚÑ]/.test(char)) {
          return (
            <span key={i} className={uppercaseClass}>
              {char}
            </span>
          );
        }
        return (
          <span key={i} className={normalClass}>
            {char}
          </span>
        );
      })}
    </TagName>
  );
};
