interface ISearchBox {
  value: string;
  onSearch: (value: string) => void;
}

export default function SearchBox({ value, onSearch }: ISearchBox) {
  return (
    <div className="mb-4">
      <input
        className="w-full h-12 px-4 rounded-md"
        type="text"
        placeholder="Que pokemon buscas..."
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
