import React, { useState } from "react";
//스타일 컴포넌트
import { HeaderHome } from "../../../components/Header";
import { HiddenMenu, HiddenButton } from "../../../components/HiddenMenu";
import Post from "../../../components/Post";
import { MainLayOut } from "./index.style";

const HomeFeed = () => {
  const [dialog, setDialog] = useState(false);
  const [alert, setAlert] = useState(false);

  const isDialog = () => setDialog(!dialog);
  const isAlert = () => setAlert(!alert);

  return (
    <>
      <MainLayOut>
        <HeaderHome />
        <Post
          authorId="테스트입니다"
          authorName="this is test"
          content="Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content"
          date="2022년 1월 18일"
          likeCount="999"
          commentCount="999"
          isDialog={isDialog}
        />
        <Post
          authorId="테스트입니다"
          authorName="this is test"
          content="Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content"
          date="2022년 1월 18일"
          likeCount="999"
          commentCount="999"
          isDialog={isDialog}
        />
        <Post
          authorId="테스트입니다"
          authorName="this is test"
          content="Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content"
          date="2022년 1월 18일"
          likeCount="999"
          commentCount="999"
          isDialog={isDialog}
        />
        <button type="button" onClick={isDialog}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
          eveniet, incidunt modi deleniti quia repellat delectus ipsam eius
          asperiores quod reprehenderit similique blanditiis quos, vel libero
          nesciunt consequatur expedita ipsum. Aperiam totam assumenda facere
          dolor alias deserunt a necessitatibus ex quidem ratione provident,
          corrupti repellendus fugit. Aperiam facilis in magnam ducimus.
          Dignissimos repudiandae laudantium rem odio. Nostrum distinctio iste
          aut Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          iure deserunt? Itaque incidunt dolores suscipit, illo debitis
          praesentium harum alias ex nesciunt ut nemo, sequi hic veniam beatae
          dignissimos cumque! Dignissimos at, excepturi iste ea esse ducimus
          sunt qui quia voluptate aut ratione quam eum quibusdam! Laborum
          voluptates numquam qui architecto eum explicabo voluptatem ratione.
          Similique repellendus saepe neque velit. Velit placeat, similique
          corporis sint consequuntur reiciendis officia quia quidem. Explicabo
          ab vero tempora aliquam natus pariatur, veritatis accusamus. Error
          maiores veniam iste mollitia similique deleniti cumque soluta beatae
          quasi.
          {/* 2022년 1월 21일 오후 7시 작업중
          현재 아무것도 진행하지 않았음 
          Modal창 구현을 우선 해야할 것 같음
          */}
        </button>
      </MainLayOut>
      <HiddenMenu visible={dialog}>
        <li>
          <HiddenButton type="button" isAlert={isAlert} visible={dialog}>
            로그아웃 창입니다.
          </HiddenButton>
        </li>
        <li>
          <HiddenButton type="button" isDialog={isDialog}>
            모달창 닫기
          </HiddenButton>
        </li>
      </HiddenMenu>
    </>
  );
};

export default HomeFeed;
