import LdBanner from "../components/LdBanner";
import LdCategory from "../components/LdCategory";
import LdNoteList from "../components/LdNoteList";
import LdSign from "../components/LdSign";

export default function Home() {
  return (
    <div>
      {/* 签名 */}
      <LdSign></LdSign>
      {/* 封面图 */}
      <LdBanner></LdBanner>
      {/* 分类图 */}
      <LdCategory></LdCategory>
      {/* 文章列表 */}
      <LdNoteList></LdNoteList>
      {/* .. */}
    </div>
  );
}
