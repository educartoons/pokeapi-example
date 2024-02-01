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
      <button
        type="button"
        onClick={handleClick}
        className="pointer-events-auto"
      >
        <Icon className="h-7" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-500 font-medium rounded-full text-sm px-5 h-10 text-center mb-2 flex items-center leading-10"
    >
      {Icon ? <Icon className="h-7" /> : null}
      {text}
    </button>
  );
}
