import ScrollAnimation from '@/scrolls/ScrollReveal';
import ScrollAnimationX from '@/scrolls/ScrollReveal2';
import { Rocket, Orbit, Satellite } from 'lucide-react';
import Link from 'next/link';

export default function Cards() {
  return (
    <div className="relative flex flex-col gap-16 items-center">
      <div  className="flex xl:flex-col xl:gap-8 md:flex-row md:gap-0 justify-between w-[82vw] px-10">
        <ScrollAnimation delay={0.1} duration={0.3} y={150}>
          <h1 className="font-alt h1 uppercase font-bold w-[40rem]">
            Principais tópicos para você decolar conosco
          </h1>
        </ScrollAnimation>
        <ScrollAnimationX delay={0.2} duration={0.3} x={150}>
          <div className="flex flex-col gap-6 md:hidden">
            <div className="h-[0.1rem] rounded-md bg-zinc-600 w-20" />
            <p className="text-lg">
              Estas são algumas de nossas sessões de leitura que você pode
              visitar!
            </p>
          </div>
        </ScrollAnimationX>
      </div>

      <div className="relative w-full xl:w-[80vw]">
        <div className="xl:overflow-x-scroll overflow-hidden 2xl:gap-[2%] w-full h-[30rem] flex gap-[5%] xl:gap-0 justify-center xl:justify-start">
          <ScrollAnimation delay={0.1} duration={0.3} y={100}>
            <Link
              href="/info/introduction"
              id="card1"
              className="border-card1 2xl:scale-90 border border-zinc-600 rounded-md px-10 flex flex-col w-[25rem] h-[25rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5"
            >
              <Rocket size={60} className="mt-[15%]" />
              <div className="mt-4">
                <h1 className="text-3xl font-bold font-alt text-zinc-300">
                  Introdução à Astronomia
                </h1>

                <div className="flex gap-1">
                  <p className="mt-7">
                    Explore o vasto universo e desvende os segredos do cosmos
                    com uma introdução envolvente à astronomia. Neste breve
                    guia, vamos mergulhar nos fundamentos e nas maravilhas que a
                    astronomia tem a oferecer.
                  </p>
                </div>
              </div>
            </Link>
          </ScrollAnimation>
          <ScrollAnimation delay={0.3} duration={0.3} y={100}>
            <Link
              href="/info/universe-scale"
              id="card2"
              className="border-card2 2xl:scale-90 border border-zinc-600 rounded-md px-10 flex flex-col w-[25rem] h-[25rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5"
            >
              <Orbit size={60} className="mt-[15%]" />
              <div className="mt-4">
                <h1 className="text-3xl font-bold font-alt text-zinc-300">
                  O Universo em Escala
                </h1>

                <div className="flex gap-1">
                  <p className="mt-7">
                    Prepare-se para uma jornada extraordinária através das
                    vastas escalas do universo. Neste guia envolvente,
                    exploraremos as teorias de formação do universo e
                    descobriremos as maravilhas da cosmologia observacional.
                  </p>
                </div>
              </div>
            </Link>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4} duration={0.3} y={100}>
            <Link
              href="/info/solar-system"
              id="card3"
              className="border-card3 border 2xl:scale-90 border-zinc-600 rounded-md px-10 flex flex-col w-[25rem] h-[25rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5"
            >
              <Satellite size={70} className="mt-[15%]" />
              <div className="mt-4">
                <h1 className="text-3xl font-bold font-alt text-zinc-300">
                  O Sistema Solar
                </h1>

                <div className="flex gap-1">
                  <p className="mt-7">
                    Entre em uma viagem pelo sistema solar. Neste guia ,
                    apresentaremos uma introdução fascinante ao nosso sistema
                    solar, os planetas que o compõem, a exploração de Marte e as
                    futuras missões que nos aguardam na exploração do espaço.
                  </p>
                </div>
              </div>
            </Link>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
