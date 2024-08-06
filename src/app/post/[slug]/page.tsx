import styles from './styles.module.scss';
import { getItemBySlug } from '@/utils/actions/get-data';
import { PostProps } from '@/utils/post.type';

export default async function Page({ params: { slug } }: { params: { slug: string } }) {

  const { objects }: PostProps = await getItemBySlug(slug);
  console.log(JSON.stringify(objects, null, 2));

  return (
    <div>
      <h1>Página de {slug}</h1>
    </div>
  )
}