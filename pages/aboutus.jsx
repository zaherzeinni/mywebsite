import { NextSeo } from "next-seo";
import React from "react";

function AboutUs() {
  return (
    <>
      <NextSeo title="itpromax | ITPRO | IT PROMAX | IT PRO MAX" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 py-8 md:grid-cols-2 md:py-16">
          <section className="grid gap-4">
            <h1 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl md:text-6xl">
              About Us
            </h1>
            <article className="grid gap-2">
              <p>
                Firmamızın ana gayesi,sektöründe yenilik ve gelişmeye açık
                olarak dünyada ve ülkemizde gelişmeleri izleyerek, hitap ettiği
                Türk ve dünya pazarına en uygun modern üretim teknikleri ile
                imalatı geliştirmiş olan ürünlerin, etkin bir satış ağıyla
                ülkemizde ve dünyada hakettiği yeri alması ve bu üstünlüğü
                muhafaza etmesidir.
              </p>
              <h2 className="text-2xl font-bold text-rose-600">
                Ayka Chair olarak kalite politikamız;
              </h2>
              <p>
                Modern mobilya pazarında lider olma hedefiyle kalite bilincini
                tüm çalışanlarımıza ve tedarikçilerimize benimsetmek, firmanın
                bütün süreçlerinde sürekli iyileştirme ve geliştirme
                düşüncesiyle çağdaş yöntem ilkelerini uygulamak suretiyle toplam
                kalite anlayışını yerleştirmek.
              </p>
              <p>
                Uluslararası kalite standartlarını hayata geçirmek kalite
                perspektifimizi kurumsal hale getirmek, müşterilerimize
                verdiğimiz kalite taahhüdünü yerine getirmektir.
              </p>
            </article>
          </section>
          <section className="shadow_image_left relative order-first h-64 md:order-none md:h-full">
            <img
              className="absolute rounded-xl"
              src={
                "/aboutusIMG.jpg"
              }
              alt="pic"
              layout="fill"
              objectFit="cover"
              priority={true}
              
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default AboutUs;

