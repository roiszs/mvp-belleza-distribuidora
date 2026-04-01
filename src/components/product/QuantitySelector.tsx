export function QuantitySelector() {
    return (
      <div className="flex items-center rounded-full border border-[var(--color-line)] bg-white px-3 py-2">
        <button className="h-9 w-9 rounded-full text-lg">-</button>
        <span className="min-w-10 text-center text-sm font-medium">1</span>
        <button className="h-9 w-9 rounded-full text-lg">+</button>
      </div>
    )
  }