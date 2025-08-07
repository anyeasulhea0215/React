/**
 * 리액트의 전체 페이지를 구성하는 컴포넌트
 */
/** 리액트 기본 패키지 참조 (모든 파일에서 무조건 참조한다.) */
import React, { memo } from 'react';
/* 링크와 페이지 구성에 필요한 컴포넌트 참조 */
import { Routes, Route } from "react-router-dom";
import MenuLink  from './components/MenuLink';
/** SEO 설정 */

/** 전역 SCSS 적용을 위한 reset.css와 StyledComponent */
import { Reset } from 'styled-reset';
import GlobalStyles from './components/GlobalStyles';

/** 하위 페이지를 담당하는 컴포넌트(직접제작)를 참조 */
import FsLightboxEx from './pages/fs_lightbox_ex';
import AosEx from './pages/aos_ex';
import SliderEx from './pages/slider_ex';
import CountUpEx from './pages/count_up_ex';
import SweetAlertEx from './pages/sweet_alert_ex';
import ChartEx from './pages/chart_ex';

const App = memo(() => {
  return (
    <>

      {/* <Reset /> */}
      <GlobalStyles />
      <h1>10-plugin</h1>
      <hr />

      {/* ---- 링크 구성 부분 ---- */}
      <nav>
        <MenuLink to="/fs_lightbox_ex">FsLightboxEx</MenuLink>
        <MenuLink to="/aos_ex">AosEx</MenuLink>
        <MenuLink to="/slider_ex">SliderEx</MenuLink>
        <MenuLink to="/count_up_ex">CountUpEx</MenuLink>
        <MenuLink to="/sweet_alert_ex">SweetAlert2Ex</MenuLink>
        <MenuLink to="/chart_ex">ChartEx</MenuLink>
      </nav>

      {/* ---- 페이지 역할을 할 컴포넌트를 명시하기 --- */}
      <Routes>
        <Route path="/fs_lightbox_ex" element={<FsLightboxEx />} />
        <Route path="/aos_ex" element={<AosEx />} />
        <Route path="/slider_ex" element={<SliderEx />} />
        <Route path="/count_up_ex" element={<CountUpEx />} />
        <Route path="/sweet_alert_ex" element={<SweetAlertEx />} />
        <Route path="/chart_ex" element={<ChartEx />} />
      </Routes>
    </>
  );
});

export default App;
