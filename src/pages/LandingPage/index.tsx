import React from 'react';
import { TitleContainer, Container, Banner, Dog } from './styles';
import ServiceBlock from '../../components/ServiceBlock/index';
import dog from '../../assets/mainCachorro.png';
import banner from '../../assets/full3.webp';

const Home = () => {

    return (
        <>
            <TitleContainer>
                <Dog src={dog}></Dog>
                <h1 className="mainTitle">Mundo do Cão</h1>
                <Banner>
                    <a href="http://www.google.com">
                        <img src={banner} alt="Banner" />
                    </a>
                </Banner>
            </TitleContainer>
            <hr />
            <ServiceBlock></ServiceBlock>
        </>
    )
}

export default Home