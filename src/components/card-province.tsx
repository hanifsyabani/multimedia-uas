"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function CardProvince() {
  return (
    <div className="flex justify-center items-center gap-4">
      <Link href="/jelajah/Bali">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 "
            >
              Bali
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 "
            >
              Pulau wisata dengan pantai indah dan budaya khas.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/bali5.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
              >
                Lihat Detail
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </Link>
      <Link href="/jelajah/SumateraSelatan">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 "
            >
              Sumatera Selatan
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 "
            >
              Terkenal dengan Jembatan Ampera dan kuliner pempek.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="sumsel1.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
              >
                Lihat Detail
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </Link>
    </div>
  );
}
