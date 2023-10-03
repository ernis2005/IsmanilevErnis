import { TextH2, TextP } from '@/components/TextTranslate/page';
import styles from './page.module.scss';
import Image from 'next/image';
 import { CardPageBlog } from '@/components/Cards/CardsBlog/CardPageBlog';
import { CardWorked } from '@/components/Cards/CardWorked/CardWorked';
 export const data: string[] = ['1', "1","2" ,"3"]
export default function Home() {
  return (
    <div className={styles.main}>
      <div className={`Contend ${styles.block}`}>
        <div>
          <TextH2 text="salvete" />
          <h2>frontend developer</h2>
          <TextP text="salveteDescription" />
          <button>
            <a className={styles.button} href="/Ernis.pdf" download>
              <TextP text="DownloadResume" />
            </a>
          </button>
        </div>
        <div>
          <div className={styles.image}>
            <Image
              src={'/logo.jpg'}
              alt="ernis"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
       <div className={styles.blockBlog}>
        <div className={`Contend ${styles.blockBlogInfo}`}>
          <samp>
            <TextP text='RecentPosts' />

          </samp>
          <div className={styles.styles}>
            <CardPageBlog data={data} />
          </div>
        </div>
      </div> 
      <div className={`Contend ${styles.BlockIWorked}`}>
        <TextP text='IWorked' />
        <CardWorked data={data}/>
      </div>
    </div>
  );
}
