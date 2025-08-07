//yarn create classnames 패키지 설치해야함
import React, { memo, useState, useCallback, useMemo } from 'react';

import styled from 'styled-components';
// CSS 클래스를 조건부로 적용할 수 있는 패키지
import classnames from 'classnames';

import { tabContent } from '../../dataset';

const TabExContainer = styled.div`
  .tab-button-group {
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    display: flex;

    .tab-button {
      display: block;
      padding: 14px 16px;
      min-width: 100px;
      font-size: 17px;
      color: #222;
      text-decoration: none;
      text-align: center;

      &:hover {
        background-color: #ddd;
      }

      &.active {
        background-color: #ccc;
      }
    }
  }

  .tab-page {
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
  }
`;

const TabEx = memo(() => {
  /** 현재 표시되고 있는 탭의 인덱스 번호 */
  const [tabIndex, setTabIndex] = useState(0);

  /** 버튼에 대한 이벤트 처리 함수 */
  const onTabButtonClick = useCallback((e) => {
    e.preventDefault();

    // 순수 JS코드의 경우
    // document.querySelectorAll(".tab-button").forEach((v, i) => {
    //   if (e.currentTarget == v) {
    //     v.classList.add("active");
    //   } else {
    //     v.classList.remove("active");
    //   }
    // });

    // 클릭된 링크의 data-index 속성값을 상태변수에 반영
    const index = e.currentTarget.dataset.index;
    console.log("before --> " + tabIndex);
    setTabIndex(index); //클릭한 버튼의 data-index 값을 가져와 tabIndex 상태로 저장.
    console.log("after --> " + tabIndex);
  }, []);

  // 상태변수 tabIndex가 변경됨을 감지하여 그에 대한 후속 처리를 구현
  const { subject, content } = useMemo(() => {
    // tabContent의 tabIndex번째 항목을 리턴한다.
    // --> { id: ..., subject: ..., content: ... }
    return tabContent[tabIndex];
  }, [tabIndex]);

  return (
    <TabExContainer>
      <h2>TabEx {tabIndex}</h2>

      {/* Tab버튼 그룹 */}
      <div className='tab-button-group'>
        {tabContent.map((v, i) => {
          // 조건부 class이름 만들기
          const myCls = classnames({
            'tab-button': true,
            'active': tabIndex == i
          });

          return (
            <a key={i} href={`#${v.id}`} data-index={i} className={myCls}
               onClick={onTabButtonClick}>{v.subject}</a>
          );
        })}
      </div>

      {/* Tab 페이지 영역 */}
      <div className="tab-page">
        <h3>{subject}</h3>
        <p>{content}</p>
      </div>
    </TabExContainer>
  );
});

export default TabEx;
