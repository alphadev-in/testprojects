import React, { Fragment } from 'react';
import Header from '../components/general/Header';
import Menu from '../components/general/Menu';
import SectionHomeBloc1 from '../components/home/SectionHomeBloc1';
import SectionHomeBloc2 from '../components/home/SectionHomeBloc2';
import SectionHomeBloc3 from '../components/home/SectionHomeBloc3';
import SectionHomeBloc4 from '../components/home/SectionHomeBloc4';
import SectionHomeBloc5 from '../components/home/SectionHomeBloc5';
import SectionBlocService from '../components/home/SectionBlocService';
import SectionInfo from '../components/home/SectionInfo';
import SectionServices from '../components/home/SectionServices';
import Footer from '../components/general/Footer';

const Home = () => {
  return (
    <Fragment>
      <Header/>
      <Menu/>
      <section className="is-home has-text-white">
        <div className="container is-height-100p">
          <div className="columns is-height-100p is-marginless">
            <SectionInfo />
            <SectionServices />
          </div>
        </div>
      </section>
      <SectionBlocService />
      <SectionHomeBloc1 />
      <SectionHomeBloc2 />
      <SectionHomeBloc3 />
      <SectionHomeBloc4 />
      <SectionHomeBloc5 />
      <Footer/>
    </Fragment>
  )
}

export default Home;
