import React from "react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section className="mb-20 bg-white" id="swiperInfo">
      <section className="container mt-20">
        <h1 className="text-3xl font-bold text-center xl:text-5xl">
          <span className="tracking-wide ">Нашите </span>
          <span className="text-primary-100">Услуги</span>
        </h1>
        <div className="grid gap-24 mt-20 lg:grid-cols-2">
          <Container
            title={"Изработка на уебсайт"}
            p={"Изработка на нов сайт или редизайн на вече съществуващ."}
            iconData={{
              url: "/homeIcons/profile.png",
              alt: "Изработка на уебсайт",
            }}
            link="/service/website"
          />
          <Container
            title={"Изработка на онлайн магазин"}
            p={"Възможност да продавате на повече хора онлайн. "}
            iconData={{
              url: "/homeIcons/online-store.png",
              alt: "Възможност да продавате на повече хора онлайн.",
            }}
            link="/service/ecommerce"
          />
          <Container
            title={"Поддръжка на уебсайт"}
            p={"Пълна месечна поддръжка на вашия уебсайт или онлайн магазин "}
            iconData={{
              url: "/homeIcons/technical-support(1).png",
              alt: "Пълна месечна поддръжка на вашия уебсайт или онлайн магазин",
            }}
            link="/service/maintance"

          />
          <Container
            title={"Оптимизация на уебсайт"}
            p={"Оптимизиране на сигурността и скоростта на вашия уебсайт "}
            iconData={{
              url: "/homeIcons/optimization.png",
              alt: "Изработка на уебсайт",
            }}
            link="/service/optimization"

          />
          {/* <Container title={'Дигитален маркетинг'} p={"Възможност да продавате на повече хора онлайн. "} iconData={{url: "/homeIcons/social-media.png", alt:"Изработка на уебсайт"}} /> */}
          {/* <Container title={'Професионална фотография'} p={"Възможност да продавате на повече хора онлайн. "} iconData={{url: "/homeIcons/camera.png", alt:"Изработка на уебсайт"}} /> */}
        </div>
      </section>
    </section>
  );
};

export default Services;

function Container({ title, p, iconData, link }) {
  return (
    <Link href={link}>
      <div className="p-6 text-center transition-shadow shadow-lg cursor-pointer rounded-xl hover:shadow-2xl">
        <div class="flex-center">
          <div className="relative w-40 h-40 ">
            <Image src={iconData.url} alt={iconData.alt} fill />
          </div>
        </div>
        <h2 className="mt-2 text-3xl font-bold">{title}</h2>
        <div className=" flex-center">
          <p className="mt-2 text-lg xl:max-w-lg">{p}</p>
        </div>
      </div>
    </Link>
  );
}
