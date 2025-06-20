export default function Hero() {
  return (
    <section className="flex justify-between items-center gap-4 md:flex-row flex-col-reverse mt-24 md:mt-0 px-6 md:px-10 h-screen">
      <div className="flex flex-col justify-center items-start gap-4 md:max-w-md">
        <h1 className="text-4xl">
          Lorem, ipsum dolor sit amet consectetur.
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          eveniet sed voluptate, laboriosam ex aliquam fuga, ipsum quidem
          praesentium adipisci autem tempore totam temporibus ut. Beatae eaque
          ea doloribus ipsam.
        </p>
        <button className="btn-filled">
          CTA Button
        </button>
      </div>
      <figure className="md:min-w-sm">
        <img src="https://placehold.co/600x500" />
      </figure>
    </section>
  );
}
