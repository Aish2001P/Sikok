import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollReveal from "./components/animation";


export default function Home() {
  return (
    <>

      <Header />

      <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#070707] text-[#fff] lg:pt-[150px] pt-[150px] lg:pb-[60px] pb-[40px] ">
        <div className="row">
          <div className="col-lg-12">
            <ScrollReveal animation="fadeUp" delay={0.4}>
              <p className="lg:text-[12vw] text-[8vw] lg:leading-[13vw] leading-[9vw]  font-[me] m-0">CURIOUSITY</p>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <div className="flex items-center">
                <div className="col-lg-4 lg:block hidden">
                  <div className="col-lg-10">
                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[2vw] leading-[4vw]">Sikok is a Film & Show Organizer,Creative Producer,Choreographer and Creative Concept Maker</p>
                  </div>
                </div>
                <div className="col-lg-8">
                  <p className="lg:text-[12vw] text-[8vw] lg:leading-[13vw] leading-[9vw] text-[#fff] font-[me] lg:text-end m-0">IGNITES</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="lg:text-[12vw] text-[8vw] lg:leading-[13vw] leading-[9vw] text-[#fff] font-[me]"><span className="text-[#DE0000]">*</span>EVENTS</p>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p className="lg:text-[1vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:hidden block">Sikok is a Film & Show Organizer,Creative Producer,Choreographer and Creative Concept Maker</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#070707] text-[#fff] lg:pt-[60px] pt-[50px] lg:pb-[60px] pb-[40px] ">
        <div className="row">
          <div className="col-lg-12">
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <Image src="/image/1.png" className="lg:pb-[40px] pb-[10px]" alt="Sikok" width={1830} height={1830} />
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <Image src="/image/2.png" className="" alt="Sikok" width={1830} height={1830} />
            </ScrollReveal>

            <div className="col-lg-6">
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <p className="lg:text-[5vw] text-[7vw] lg:leading-[6vw] leading-[8vw] text-[#fff] uppercase tracking-[8px] lg:pt-[0px pt-[30px] lg:pb-[20px] pb-[20px] ">Technology Meets Human Artistry</p>
              </ScrollReveal>
            </div>
            <div className="flex justify-center">
              <div className="col-lg-5">
                <ScrollReveal animation="fadeUp" delay={0.2}>
                  <Image src="/image/sardarji2.png" className=" " alt="Sikok" width={1830} height={1830} />
                </ScrollReveal>
              </div>
            </div>

            <div className="col-lg-6 lg:pt-[70px] pt-[30px] ">
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] ">Sikok is a storyteller with over three decades of experience. He is passionate about creating transformative productions, using multimedia, technology and innovation Known to pay attention to the little things and always striving to find new ways of doing cool stuff. </p>
              </ScrollReveal>
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pb-[30px] pb-[10px]">An accomplished production professional, Alex has worked with Bruno Mars, David Garrett, Heidi Klum, Peter Maffay, Leona Lewis, Jessie J, Michael Jackson and fortune 500 companies.</p>
              </ScrollReveal>
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <button className="border !border-[#fff] rounded-5 py-2 px-4 ">
                  <p className="m-0 lg:text-[0.9vw] text-[2.8vw]  lg:leading-[1.2vw] leading-[4vw] ">About Sikok</p>
                </button>
              </ScrollReveal>
            </div>

          </div>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <div className="flex justify-center lg:pt-[60px] pt-[30px]">
              <p className="lg:text-[15vw] text-[12vw] lg:leading-[16vw] leading-[13vw] font-[me]">PASSIONATE</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className=" overflow-hidden bg-[#070707]   ">
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <Image src="/image/4.png" className="w-full" alt="Sikok" width={1830} height={1830} />
        </ScrollReveal>
      </section>

      <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#070707] text-[#fff] lg:pt-[60px] pt-[50px] lg:pb-[60px] pb-[40px] ">
        <div className="row">
          <div className="col-lg-12">
            <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] font-light">01/07 Revealing Porsche`s leap into the future</p>
            <p className="lg:text-[1.5vw] text-[3vw] lg:leading-[2.2vw] leading-[4vw] ">Show Director</p>

          </div>
        </div>
      </section>

      <section className=" overflow-hidden bg-[#070707] text-[#fff]  lg:pb-[60px] pb-[40px] ">
        <div className="row">
          <div className="col-lg-12">
            <div className="lg:flex ">
              <div className="col-lg-5">
                <ScrollReveal animation="fadeUp" delay={0.2}>
                  <Image src="/image/5.png" className="w-full" alt="Sikok" width={1830} height={1830} />
                </ScrollReveal>
              </div>
              <div className="col-lg-7">
                <ScrollReveal animation="fadeUp" delay={0.2}>
                  <Image src="/image/6.png" className="w-full" alt="Sikok" width={1830} height={1830} />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#070707] text-[#fff] lg:pt-[60px] pt-[50px] lg:pb-[60px] pb-[40px] ">
        <div className="row">
          <div className="col-lg-12">
            <div className="lg:flex ">
              <div className="col-lg-5">
                <div className="col-lg-10">
                  <ScrollReveal animation="fadeUp" delay={0.2}>
                    <p className="lg:text-[1.3vw] text-[3vw] lg:leading-[2.2vw] leading-[4vw]  ">02/07 David Garrett Unlimited</p>
                    <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] font-light">DG PERSONAL MOVEMENT COACH CREATIVE DEVELOPEMENT - CHOREOGRAPHER</p>
                  </ScrollReveal>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="col-lg-8">
                  <ScrollReveal animation="fadeUp" delay={0.2}>
                    <p className="lg:text-[1.3vw] text-[3vw] lg:leading-[2.2vw] leading-[4vw]  ">03/07 MERCEDES BENZ #CREATING THE NEW</p>
                    <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] font-light">ASSOCIATE SHOW DIRECTOR - STAGE-DIRECTOR - CHOREOGRAPHER</p>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" overflow-hidden bg-[#070707]">
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <Image src="/image/7.png" className="w-full" alt="Sikok" width={1830} height={1830} />
        </ScrollReveal>
      </section>

      <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#070707] text-[#fff] lg:pt-[60px] pt-[50px] lg:pb-[60px] pb-[40px] ">
        <div className="row">
          <div className="col-lg-12">
             <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="lg:text-[1.5vw] text-[3vw] lg:leading-[2.2vw] leading-[4vw] ">04/07 BEAT IT! LIVE MUSICAL TOUR</p>
            <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] font-light ">ASSOCIATE DIRECTOR-STAGE DIRECTOR-CHOREOGRAPHER-CREATIVE-CONCEPT</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className=" overflow-hidden bg-[#070707] text-[#fff]  lg:pb-[60px] pb-[40px] ">
        <div className="row">
          <div className="col-lg-12">
            <div className="flex ">
              <div className="col-lg-7">
                <ScrollReveal animation="fadeUp" delay={0.2}>
                  <Image src="/image/8.png" className="w-full" alt="Sikok" width={1830} height={1830} />
                </ScrollReveal>
              </div>
              <div className="col-lg-5">
                <ScrollReveal animation="fadeUp" delay={0.2}>
                  <Image src="/image/9.png" className="w-full" alt="Sikok" width={1830} height={1830} />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#070707] text-[#fff] lg:pt-[60px] pt-[50px] lg:pb-[60px] pb-[40px] ">
        <div className="row">
          <div className="col-lg-12">
            <div className="flex ">
              <div className="col-lg-7">
                <div className="col-lg-8">
                  <ScrollReveal animation="fadeUp" delay={0.2}>
                    <p className="lg:text-[1.3vw] text-[3vw] lg:leading-[2.2vw] leading-[4vw]  ">05/07 MAN WORLD PREMIERE </p>
                    <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] font-light">SHOW DIRECTOR - CHOREOGRAPHER</p>
                  </ScrollReveal>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="col-lg-10">
                  <ScrollReveal animation="fadeUp" delay={0.2}>
                    <p className="lg:text-[1.3vw] text-[3vw] lg:leading-[2.2vw] leading-[4vw]  ">06/07 PETER MAFFAY`S TABALUGA</p>
                    <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] font-light">STAGE-DIRECTOR - CHOREOGRAPHER</p>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" overflow-hidden bg-[#070707]   ">
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <Image src="/image/10.png" className="w-full" alt="Sikok" width={1830} height={1830} />
        </ScrollReveal>
      </section>

      <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#070707] text-[#fff] lg:pt-[60px] pt-[50px]  ">
        <div className="row">
          <div className="col-lg-12">
             <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="lg:text-[1.5vw] text-[3vw] lg:leading-[2.2vw] leading-[4vw] ">07/07 SEAPORT OPENING CEREMONY</p>
            <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] font-light ">ASSOCIATE SHOW DIRECTOR -STAGE DIRECTOR - CHOREOGRAPHER</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />

    </>
  );
}
