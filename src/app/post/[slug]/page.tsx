import { Suspense} from 'react';
import { getItemBySlug } from '@/utils/actions/get-data';
import { PostProps } from '@/utils/post.type';
import { Metadata } from 'next';

import { Content } from './components/content';
import { LoadingPost } from './components/loading'

export async function generateMetadata({ params: { slug } }: {
  params: { slug: string }
}): Promise<Metadata> {

  try {
    const { objects }: PostProps = await getItemBySlug(slug)
    .catch(() => {
      return {
        title: "DevMotors - Sua oficina especializada!",
        description: "Oficina de carros em São Bernardo do Campo.",
      }
    })

    return {
      title: `DevMotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      keywords: ["devmotors", "troca de óleo", "devmotors troca de óleo"],
      openGraph: {
        title: `DevMotors - ${objects[0].title}`,
        images: [objects[0].metadata.banner.url]
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        }
      }
    };

  } catch (err) {
    return {
      title: "DevMotors - Sua oficina especializada!",
      description: "Oficina de carros em São Bernardo do campo.",
    };
  }
}

export default async function Page({ params: { slug } }: {
  params: { slug: string }
}) {

  return (
    <>
    <Suspense fallback={<LoadingPost/>}>
      <Content slug={slug}  />
    </Suspense>

    {/* AQUI PODEMOS COLOCAR QUALUQER OUTRA COISAS QUE PODEMOS RENDERIZAR QUE NÃO DEPENDA DA API COMO O CONTENT.
    E ENQUANTO ISSO O USUÁRIO PODE ESTAR VENDO ALGUM OUTRO COMPONENTE QUE ESTEJA FORA DO SUSPENSE!*/}
    </>
  )
}