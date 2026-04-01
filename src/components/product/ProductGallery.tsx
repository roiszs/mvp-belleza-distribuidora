import Image from 'next/image'

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_120px]">
      <div className="relative aspect-[4/4.5] overflow-hidden rounded-[30px] bg-[#f3ede6]">
        <Image src={images[0]} alt={name} fill className="object-cover" />
      </div>

      <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
        {images.slice(0, 3).map((image, index) => (
          <div
            key={image + index}
            className="relative aspect-square overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[#f6f1eb]"
          >
            <Image src={image} alt={`${name} ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}