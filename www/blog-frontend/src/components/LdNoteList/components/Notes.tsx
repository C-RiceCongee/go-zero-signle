interface Notes {
  data: {
    id: string;
    title: string;
    description: string;
    cover_image: string;
    create_time: string;
    keywords: string;
  };
}
import LazyDiv from "@/components/LazyDiv";
import LazyImage from "@/components/LdLazyImage";
import Link from "next/link";
import { FC } from "react";
const Notes: FC<Notes> = (props) => {
  const { title, id, description, cover_image, create_time, keywords } =
    props.data;
  return (
    <LazyDiv className="rounded-2xl ldNoteItem mb-10 " key={id}>
      <Link
        target="__blank"
        href={`/post/${id}`}
        className="title font-bold text-2xl hover:text-blue-500 text-skin-content1st"
      >
        {title}
      </Link>
      <div className="description text-md text-skin-content1st mt-2">
        {description}
      </div>
      <LazyImage
        className="w-40 h-28 object-cover rounded-1xl mt-1 mb-1 shadow-ld-shadow-1"
        src={cover_image}
      ></LazyImage>
      <div className="info flex">
        <div className="create_time mr-2 text-sm text-skin-content2sec">
          2024-04-28
        </div>
        <div className="keywords mr-2   text-sm text-skin-content2sec">
          {keywords}
        </div>
      </div>
    </LazyDiv>
  );
};

export default Notes;
