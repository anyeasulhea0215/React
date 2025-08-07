import React, { memo, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { putItem } from '../slices/ProfessorSlice';

import ErrorView from '../components/ErrorView';
import Spinner from '../components/Spinner';

import { TableInput, Buttons } from '../components/Styled';

const ProfessorEditContainer = styled.div``;

const ProfessorEdit = memo(() => {
    // Path parameter 값 가져오기
    const { id } = useParams();

    // 페이지 이동 함수
    const navigate = useNavigate();

    // 리덕스 상태값 가져오기
    const { loading, status, message, item } = useSelector((state) => state.ProfessorSlice);

    // 리덕스 action 함수 생성
    const dispatch = useDispatch();

    // 선택된 데이터의 상태값을 복사해서 편집 가능하도록 처리
    const professorItem = useMemo(() => {
        if (!id || !item || Object.keys(item).length === 0) return null;
        return item.find((v) => v.id === parseInt(id));
    }, [item, id]);

    const onHandleSubmit = useCallback((e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append('id', id);  // id값 추가해서 수정 요청으로 처리

        (async () => {
            try {
                await dispatch(putItem(formData));
            } catch (err) {
                console.error("Error adding professor:", err);
                alert("수정 중 오류가 발생했습니다.");
                return;
            }

            navigate(`/view/${id}`);
        })();
    }, [ ]);

    return (
        <ProfessorEditContainer>
            <Spinner loading={loading} />
            <ErrorView status={status} message={message} />

            <form onSubmit={onHandleSubmit}>
                {/* 서버에 업로드 된 이미지로 받을 수 있도록 사진 URL은 기존값을 그대로 유지시킴 */}
                <input type="hidden" name="photo_url" value={professorItem?.photo_url || ""} />

                <TableInput>
                    <tbody>
                        <tr>
                            <th>교수이름</th>
                            <td>
                                <input type="text" name="name" placeholder="교수 이름을 입력하세요" defaultValue={professorItem?.name} />
                            </td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                            <td>
                                <input type="text" name="user_id" placeholder="아이디를 입력하세요" defaultValue={professorItem?.user_id} />
                            </td>
                        </tr>
                        <tr>
                            <th>직급</th>
                            <td>
                                <select name="position" defaultValue={professorItem?.position}>
                                    <option value="교수">교수</option>
                                    <option value="부교수">부교수</option>
                                    <option value="조교수">조교수</option>
                                    <option value="전임강사">전임강사</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>입사일자</th>
                            <td>
                                <input type="date" name="hiredate" placeholder="입사일을 선택하세요" defaultValue={dayjs(professorItem?.hiredate).format('YYYY-MM-DD')} />
                            </td>
                        </tr>
                        <tr>
                            <th>급여(연봉)</th>
                            <td>
                                <input type="number" name="sal" placeholder="급여를 입력하세요" defaultValue={professorItem?.sal} />
                            </td>
                        </tr>
                        <tr>
                            <th>보직수당(연봉)</th>
                            <td>
                                <input type="number" name="comm" placeholder="보직수당을 입력하세요" defaultValue={professorItem?.comm} />
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>
                                <input type="email" name="email" placeholder="이메일을 입력하세요" defaultValue={professorItem?.email} />
                            </td>
                        </tr>
                        <tr>
                            <th>연락처</th>
                            <td>
                                <input type="tel" name="phone" placeholder="연락처를 입력하세요" defaultValue={professorItem?.phone} />
                            </td>
                        </tr>
                        <tr>
                            <th>재직여부</th>
                            <td>
                                <select name="status" defaultValue={professorItem?.status}>
                                    <option value="재직중">재직중</option>
                                    <option value="휴직중">휴직중</option>
                                    <option value="퇴직">퇴직</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>소속학과</th>
                            <td>
                                {/* 강의 가능 학과를 위해서 department를 위한 Slice를 추가하고 백엔드로부터 데이터도 도입한 후 구현해야 함 */}
                                <select name="department_id" defaultValue={professorItem?.department_id}>
                                    <option value="201">컴퓨터공학과</option>
                                    <option value="102">정보통신학과</option>
                                    <option value="103">경영학과</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </TableInput>
                <Buttons>
                    <button type="submit">수정하기</button>
                    <Link to="/">취소</Link>
                </Buttons>
            </form>
        </ProfessorEditContainer>
    );
});

export default ProfessorEdit;
