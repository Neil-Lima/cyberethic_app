import React, { useEffect } from 'react';
import HeroCyberethic from './components/HeroCyberethic';
import SobreCyberethic from './components/SobreCyberethic';
import ParceirosCyberethic from './components/ParceirosCyberethic';
import SolucoesCyberethic from './components/SolucoesCyberethic';
import CartaoDestaqueCyberethic from './components/CartaoDestaqueCyberethic';
import ProjetosCyberethic from './components/ProjetosCyberethic';
import StatsCyberethic from './components/StatsCyberethic';
import SobreEmpresaCyberethic from './components/SobreEmpresaCyberethic';
import TimeCyberethic from './components/TimeCyberethic';
import ContatoCyberethic from './components/ContatoCyberethic';
import FooterCyberethic from './components/FooterCyberethic';
import ChatCyberethic from '../../components/ChatCyberethic';
import SlideCyberethic from './components/SlideCyberethic';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <HeroCyberethic/>
      <SobreCyberethic/>
      <SlideCyberethic/><br />    
      <SolucoesCyberethic />
      <CartaoDestaqueCyberethic/>
      <ProjetosCyberethic />
      <StatsCyberethic />
      <SobreEmpresaCyberethic />
      <ParceirosCyberethic  />
      <TimeCyberethic  />
      <ContatoCyberethic  />
      <FooterCyberethic  />
      <ChatCyberethic/>
    </>
  );
}

export default Home;
