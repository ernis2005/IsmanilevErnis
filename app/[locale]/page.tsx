import { TextH2, TextP } from '@/components/TextTranslate/page';
import styles from './page.module.scss';
import Image from 'next/image';
 import { CardPageBlog } from '@/components/Cards/CardsBlog/CardPageBlog';
import { CardWorked } from '@/components/Cards/CardWorked/CardWorked';
 const data: string[] = ['1', '3', '3', '3']
export default function Home() {
  return (
    <div className={styles.main}>
      <div className={`Contend ${styles.block}`}>
        <div>
          <TextH2 text="salvete" />
          <h2>frontend developer</h2>
          <TextP text="salveteDescription" />
          <button>
            <a className={styles.button} href="https://doc-0k-18-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/2h9ce47qb6tlga4v95oc9rrnnuolqfpa/kbrdlrg7glotrbbfq244l8vt5tn3ve23/1696252575000/3/107559171939154387752/APznzaaHs7F5OhPQTDMFzDZwPwL2F7u4gIu6e8OR_FtJ1FLRifcGQZ8JBhyHArX9v5ADSe6MelaPXEluUwbrD2OjD52bmbbfHL1hHp03nZegdILFRkEX9N2HA7lFkt0-uYk3SMs6haDi7KUB0vrMevGN4x7uTuBLbRVURZHax7xeA--gosiFVOjD904WGP6epI-qTjHO-CrWPpDnAqSwWLsp-RutubmqcDUreKQ_S5QwcurDr5SuUseZgh20_gcHT5OdpWgc6_GbT6UglJ3b-BGSQh7fuVi9UIB3yu9GLnaTvKxDktSkiG-thZ86UbbJXcR0XmrQutEDkCLmIfRdwvZBafoMwhmx5c3LNCw7yb4rp_UjnJgL-1R4qfsYntXx6hK-3GFX6ISfDH3Qfekgu1vNaQUeJaZXRyyrRTHKrsU7fO_u1yUAktI=?authuser=0&nonce=8uvjb7paqi6k0&user=107559171939154387752&hash=2djp89c6ftmfkltvvks0drfld258s1oa" download>
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
