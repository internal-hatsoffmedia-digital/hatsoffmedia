"use client";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "Cake N Take", logo: "/client/CakeNTake.png" },
  { name: "Cinema Kichdy", logo: "/client/CinemaKichdy.png" },
  { name: "Client 1", logo: "/client/Client1.png" },
  { name: "Collabkit", logo: "/client/Collabkit.png" },
  { name: "Color Pencil", logo: "/client/ColorPencil.png" },
  { name: "Creative Ads", logo: "/client/CreativeAds.png" },
  { name: "EBS", logo: "/client/EBS.png" },
  { name: "Greens", logo: "/client/Greens.png" },
  { name: "KKL", logo: "/client/KKL.png" },
  { name: "Meesou", logo: "/client/Meesou.png" },
  { name: "Minus Plus", logo: "/client/MinusPlus.png" },
  { name: "Newlix", logo: "/client/Newlix.png" },
  { name: "Pocket FM", logo: "/client/PocketFM.png" },
  { name: "Sun TV", logo: "/client/SanTv.png" },
  { name: "SDC", logo: "/client/SDC.png" },
  { name: "Sip Code", logo: "/client/SipCode.png" },
  { name: "The Look", logo: "/client/TheLook.png" },
  {
    name: "Unstoppable Angles",
    logo: "/client/UnstoppableAngles.png",
  },
  { name: "Viveks", logo: "/client/Viveks.png" },
  { name: "Client Y", logo: "/client/y.jpeg" },
];

const carouselRows = [
  clients.slice(0, 7),
  clients.slice(7, 14),
  clients.slice(14, 20),
];

interface CarouselRowProps {
  items: Client[];
  direction?: "left" | "right";
  duration?: number;
}

function CarouselRow({
  items,
  direction = "left",
  duration = 30,
}: CarouselRowProps) {
  /*
   * Duplicate each row so the second copy replaces the first
   * without creating an empty space during the animation.
   */
  const duplicatedItems = [...items, ...items];

  return (
    <div className="carousel-mask group/row relative w-full overflow-hidden">
      <div
        className={`flex w-max ${
          direction === "right"
            ? "animate-marquee-right"
            : "animate-marquee-left"
        } group-hover/row:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {duplicatedItems.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="w-[150px] shrink-0 px-2 sm:w-[180px] sm:px-2.5 lg:w-[210px]"
            aria-hidden={index >= items.length}
          >
            <div className="group/logo flex h-[96px] items-center justify-center rounded-[22px] border border-black/[0.04] bg-white/45 px-5 transition-all duration-300 hover:-translate-y-1 hover:border-black/[0.08] hover:bg-white hover:shadow-[0_14px_35px_rgba(0,0,0,0.07)] sm:h-[110px] sm:rounded-[24px]">
              <img
                src={client.logo}
                alt={index < items.length ? client.name : ""}
                loading="lazy"
                draggable={false}
                className="max-h-[48px] w-auto max-w-full object-contain opacity-65 grayscale transition-all duration-300 group-hover/logo:scale-105 group-hover/logo:opacity-100 group-hover/logo:grayscale-0 sm:max-h-[55px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientsCarousel() {
  return (
    <section className="relative overflow-hidden bg-[#f5f3ef] py-16 sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[650px] -translate-x-1/2 rounded-full bg-[#ffcc00]/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Heading */}
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#b58300]">
            Our Clients
          </p>

          <h2 className="mt-6 text-4xl font-black leading-[0.98] tracking-[-0.06em] text-[#111111] sm:text-5xl md:text-6xl lg:text-[4.4rem]">
            We work with
            <span className="inline-block text-[#ffcc00]"> iconic brands</span>
          </h2>
        </div>

        {/* Moving rows */}
        <div className="mt-14 space-y-4 sm:mt-16 sm:space-y-5">
          <CarouselRow
            items={carouselRows[0]}
            direction="left"
            duration={30}
          />

          <CarouselRow
            items={carouselRows[1]}
            direction="right"
            duration={34}
          />

          <CarouselRow
            items={carouselRows[2]}
            direction="left"
            duration={27}
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes client-marquee-left {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes client-marquee-right {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation-name: client-marquee-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .animate-marquee-right {
          animation-name: client-marquee-right;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .carousel-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 7%,
            black 93%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 7%,
            black 93%,
            transparent
          );
        }

        @media (max-width: 640px) {
          .carousel-mask {
            -webkit-mask-image: linear-gradient(
              to right,
              transparent,
              black 3%,
              black 97%,
              transparent
            );
            mask-image: linear-gradient(
              to right,
              transparent,
              black 3%,
              black 97%,
              transparent
            );
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}