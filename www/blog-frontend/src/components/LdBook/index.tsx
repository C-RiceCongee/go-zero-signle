"use client";
import "./styles.scss";

interface LdBookProps {
  name: string;
  author: string;
  cover: string;
  description: string;
  tag: string;
}
const LdBook: React.FC<LdBookProps> = (props) => {
  const {
    name = "在细雨中呐喊",
    author = "余华",
    cover = "https://tse2-mm.cn.bing.net/th/id/OIP-C.7zRWZFA18DGqPUoslxD3NgHaLN?rs=1&pid=ImgDetMain",
    description = "人的一生，有风光的时候，也有落魄的时候，最终一切也会归于平淡！但求心安！",
    tag = "已读完",
  } = props;
  return (
    <div className="LdBook">
      <ul className="align">
        <li>
          <figure className="book">
            <ul className="hardcover_front">
              <li>
                <div
                  className="coverDesign"
                  style={{ background: `url('${cover}')` }}
                >
                  {/* <h1>{name}</h1>
                                <p>{author}</p> */}
                </div>
              </li>
              <li></li>
            </ul>
            <ul className="page">
              <li></li>
              <li>
                <p className="text-sm text-black underline">{description}</p>
                {/* <a className="btn" href="#">我也去看</a> */}
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

            <ul className="hardcover_back">
              <li></li>
              <li></li>
            </ul>
            <ul className="book_spine">
              <li></li>
              <li></li>
            </ul>
            {/* <figcaption>
                        <h5>{name}</h5>
                        <span>{author}</span>
                        <p>{description}</p>
                    </figcaption> */}
          </figure>
        </li>
      </ul>
    </div>
  );
};

export default LdBook;
