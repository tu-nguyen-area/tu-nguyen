import Link from 'next/link';

const products = [
  { name: "TN OS", url: "https://tnos.tnadvancement.com/", content: "A website about a Linux distribution based on the Linux kernel.", },
  { name: "TN Technology", url: "https://tn-technology.com/", content: "A technology business website.", },
  { name: "TN Connect", url: "https://connect.tnadvancement.com/", content: "A chat website.", },
  { name: "TN Cars", url: "https://bydcars.tn-technology.com/", content: "A cars business website.", },
  { name: "TN Management", url: "https://management.tnadvancement.com/", content: "A management website.", },
  { name: "TN Computer", url: "https://computer.tnadvancement.com/", content: "A computer business website.", },
  { name: "TN Vision", url: "https://vision.tnadvancement.com/", content: "A website introducing computer vision services.", },
  { name: "TN News", url: "https://news.tnadvancement.com/", content: "A news website.", },
  { name: "TN Notes", url: "https://notes.tnadvancement.com/", content: "A notes website.", },
  { name: "TN Cake", url: "https://cake.tn-technology.com/", content: "A website about cake.", },
  { name: "TN Authenticator", url: "https://auth.tnadvancement.com/", content: "A authenticator web app.", },
  { name: "TN Tourism", url: "https://tourism.tnadvancement.com/", content: "A tourism website.", },
  { name: "TN Wedding", url: "https://wedding.tnadvancement.com/", content: "A wedding website.", },
  { name: "TN Rust", url: "https://rust.tnadvancement.com/", content: "A rust information website.", },
  { name: "TN Search", url: "https://search.tnadvancement.com/", content: "A search information website.", },
];

export default function SectionOne() {
  return (
  <>

  <section className="flex justify-center">
    <div className="m-8">
    <Link target="blank" href="https://github.com/tu-nguyen-area">
      <h1 className="text-center py-2 text-2xl md:text-5xl bg-gradient-to-r
        from-blue-500 via-purple-500 to-rose-500 bg-clip-text font-bold
        text-transparent w-fit"
      >
        Github.com/Tu-Nguyen-Area
      </h1>
    </Link>
    <p className="md:text-xl">I am a fan of Linux, Rust, Cyborg and Open Source.</p>
    <p className="md:text-xl">I love learning new technology, focusing on building tools that help people make their lives easier.</p>
    </div>
  </section>

  {products.map((product) => {
    return (
      <section key={product.name} className="m-8 p-3 bg-purple-100 border-1
        dark:bg-neutral-900 rounded-lg hover:bg-gradient-to-r transition-all
        hover:from-blue-500 hover:via-purple-500 hover:to-rose-500 duration-300
        hover:text-white hover:shadow-xl hover:shadow-purple-500 border-purple-500"
      >
        <Link target="_blank" href={product.url}>
          <div>
            <h1 className="text-xl md:text-2xl text-center md:text-left font-bold">{product.name}</h1>
            <p>{product.content}</p>
          </div>
        </Link>
      </section>
    );
  })}

  </>
  );
}
