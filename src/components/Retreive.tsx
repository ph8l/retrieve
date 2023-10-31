'use client'
import React from "react";
import { Group, Button, Image } from "@mantine/core";
import { IBrandObject } from "../interfaces/IBrand";
import { BrandFooter, Footer, FullHeader } from "covered-react-lib";
interface IRetrieve {
  brand?: IBrandObject
}
declare global {
  interface Window {
    CanopyConnect: {
      create: () => {
        
      }
     
      handler: {
        open: ()=> string;
    }
  }

  }
}
export default function Retrieve ({brand}:IRetrieve) {
  let handler = () => console.log('no handler found')
  if (typeof window !== 'undefined') {
    const { CanopyConnect } = window
      handler = CanopyConnect.create({
      publicAlias: "demo",
  });
}
  return (
    <>
    <FullHeader
    originalProductsSelected=""
    title={`Upload Evidence of Your Insurance`}
    logo={brand?.svgLogoUrl}
    hasAuto={false}
    hasAutoQuotes={false}
    hasHomeQuotes={false}
    coBranding={brand?.cobrandingEnabled}
    phone={brand?.customPhoneNumber}
    />
    <Group>
      <Image
        src={brand?.svgLogoUrl}
        alt={'provide insurance'}
        onClick={handler.open}
      />

    </Group>
    <BrandFooter
     reversedLogo={brand?.reversedLogo}
     primaryHexColor={brand?.primaryHexColor}
     footerLogoUrl={brand?.footerLogoUrl}
     quoteDisplayDBADisclaimer={brand?.quoteDisplayDBADisclaimer}
    />
    </>
  )
}

