


import { MantineProvider } from '@mantine/core'
import  Retrieve  from '../components/Retreive'

const carringtonBrand =  {
  primaryHexColor: '#1e3464',
  isCobranded: true,
  isReversed: false,
  brandName: 'Carrington',
  svgLogoUrl: 'https://4597757.fs1.hubspotusercontent-na1.net/hubfs/4597757/carrington_logo_final_2col_rgb-2.png',
  footerLogoUrl: 'https://4597757.fs1.hubspotusercontent-na1.net/hubfs/4597757/carrington_logo_final_2col_rgb-2.png',
  customPhoneNumber: '844 287 7108',
  quoteDisplayDBADisclaimer: 'Insurance products are offered through Covered Insurance Solutions, LLC (“Covered”) on behalf of Vylla Insurance Agency, LLC (“Vylla”). Vylla is an affiliate of Vylla Holdings, LLC (“Vylla Holdings”). Vylla Holdings and Carrington Mortgage Services, LLC (“Carrington”) are affiliates of Carrington Holding Company, LLC. Covered is not affiliated in any way with Vylla, Vylla Holdings, Carrington, their parent, any affiliates, or subsidiaries. Neither Vylla, Vylla Holdings, Carrington, their parent, any affiliates, or subsidiaries underwrite any policy of insurance. Vylla may receive compensation in connection with this program. Insurance products may not be available in all states. CA License #0M81402, Doing Business as "Cubbard Insurance Solutions" in California ',
  cobrandingEnabled: true, // add this
  brandColor: 'your value', // add this
  name: 'your value', // add this
  faviconUrl: 'your value', // add this
  brandPath: 'your value', // add this
}
export default function Home() {
  return (
   
    <MantineProvider>
    <Retrieve
    brand={carringtonBrand}
    />
   </MantineProvider>
  )
}
