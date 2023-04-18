import DetailHeader from '../../components/titleHeader/TitleHeader'
import Delete from '../../asset/IconRedDelete.png';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from 'axios';

import {
    ImageContainer,
    ContentContainer,
    WrapClip,
    ClipButtonW,
    ClipButtonG,
    EditButton,
    WrapTime,
    CardSection,
    WrapCard,

} from '../../pages/guideDetail/GuideDetailStyle';

//플랜 카드
const cards = [
    { title: "장", time: "1시간 0분" },
    { title: "장소", time: "2시간 0분" },
    { title: "장소이름", time: "3시간 0분" },
    { title: "장소이름", time: "4시간 0분" },
    { title: "장소이름", time: "5시간 0분" },
]

export default function GuideDetail() {

    const location = useLocation();
    const id = location.state.id;
    const token = location.state.token;

    const [guideData, setGuideData] = useState([]);

    useEffect(() => {

        axios.get(`http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/auth/plan/${id}`, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                setGuideData(response.data);
                console.log(guideData);
                // console.log(recommendGuideList);
            });
    }, [id])

    const [isClip, setClip] = useState(false);

    return (
        <>
            <DetailHeader title="추천 가이드" />

            <ImageContainer>
                <img className='guide-image' />
            </ImageContainer>

            <ContentContainer>
                <div className="titleWrap">{guideData.title}</div>
                <WrapClip
                    onClick={() => setClip(!isClip)}>
                    {isClip ? <ClipButtonG /> : <ClipButtonW />}
                </WrapClip>
                <div className="writerWrap">{guideData.district}  {guideData.city}</div>
                <EditButton>플랜 수정</EditButton>

                <WrapTime>
                    <p className='start_time'>일정 시작 |
                        <span className='time-btn'>오전 10:00</span></p>
                </WrapTime>

                <CardSection>
                    {guideData.planTravels&&guideData.planTravels.map(card => (
                        <WrapCard>
                            <img className='plan-img' />
                            <div>
                                <p className='spot-name'>{card.title}</p>
                                <p className='time'>소요 시간 | <span className='time-btn'>{card.time}</span></p>
                            </div>
                            <img src={Delete}className='delete-btn' />
                        </WrapCard>
                    ))}
                </CardSection>
            </ContentContainer>
        </>
    );
}