import { Submenu } from "@/components/home/submenu";
import { getDataHome } from '@/utils/actions/get-data';
import { HomeProps } from "@/utils/home.type";
import { Hero } from '@/components/hero';
import { Phone } from 'lucide-react';
 
export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  console.log(object.title);

  return (
    <main>
      <Submenu />
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />

    </main>
  );
}
