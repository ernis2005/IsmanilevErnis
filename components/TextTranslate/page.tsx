
import { useTranslations } from "next-intl";
interface TextP {
  text?:string
}
export const TextP = ({text}:TextP ) => {
  const t = useTranslations("Index");
  return <p>{t(`${text}`)}</p>;
};
export const TextH2 = ({text}:TextP ) => {
  const t = useTranslations("Index");
  return <h2>{t(`${text}`)}</h2>;
};