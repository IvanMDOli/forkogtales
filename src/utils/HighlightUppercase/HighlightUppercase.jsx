
export const HighlightUppercase = ({
  tag = "span",
  text,
  uppercaseClass = "text-red-900 text-5xl text-shadow-lg/30 pFont",
  normalClass = "text-shadow-lg/30 [-webkit-text-stroke:1px_#00000060] pFont"
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
