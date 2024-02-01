interface IButton {
  Icon?: React.ElementType;
  text?: string;
  onClick: () => void;
}

export default function Button({ onClick, Icon, text }: IButton) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick();
  };

  if (Icon && text === undefined) {
    return (
      <button type="button" onClick={handleClick}>
        <Icon className="h-7" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 h-10 text-center mb-2 flex items-center leading-10"
    >
      {Icon ? <Icon className="h-7" /> : null}
      {text}
    </button>
  );
}
