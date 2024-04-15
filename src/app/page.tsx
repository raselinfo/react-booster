import Image from "next/image";


// export const dynamic= "force-dynamic"
export const runtime="edge"


const images = [
  "https://utfs.io/f/134fba57-0995-4ff0-99fd-2c7ec3ce51cc-8ckntv.png",
  "https://utfs.io/f/f1f0f9e3-111d-4c70-9ad8-f5b9bd6dbe2c-h64va5.jpg",
];

const mockData = images.map((image, i) => {
  return { id: i + 1, url: image };
});

export default function HomePage() {
  return (
    <main className="flex flex-wrap gap-2">
      {[...mockData, ...mockData, ...mockData, ...mockData, ...mockData].map(
        (image, index) => {
          return (
            <div key={index} className=" h-48 w-48 border-2 border-gray-400">
              <Image src={image.url} width={199} height={199} alt={"test"} />
            </div>
          );
        },
      )}
    </main>
  );
}
