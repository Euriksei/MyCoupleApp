
import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const LoveMessage = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-pink-500" />
            <Heart className="w-10 h-10 text-pink-500 fill-current" />
            <Sparkles className="w-8 h-8 text-pink-500" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          Uma mensagem do meu coração
        </h2>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl max-w-3xl mx-auto">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
            <p>
              Meu amor cada momento com você é como um sonho lindo do qual eu não quero acordar,
              você encheu minha vida de cores e risadas de novo. você me enche de felicidade.
            </p>
            
            <p>
              Desde a nossa primeira risada juntos você tem sido minha fonte constante de alegria e,
              inspiração, estar com você torna o comum extraordinário simplesmente por estar com você.
            </p>

            <p>
              Talvez ficar comigo não seja tão fácil, e eu sinto muito por não ter tanto tempo, por sempre
              estar cansado, as vezes por ser reclamão... Mas saiba que tudo que eu faço é pensando em você,
              e se eu pudesse eu largava tudinho para ser só nós dois, mas meu amor a coisa mais corajosa que
              eu posso fazer por você é aguentar até o final disso tudo, para podermos construir nosso futuro
              juntinhos.
            </p>
            
            <p>
              Este pequeno aplicativo é uma pequena lembrança do meu amor infinito por você. Cada foto aqui
              conta a nossa história (ainda teremos muito mais rsrs), cada segundo contado é um segundo pelo qual sou grato por ter você na 
              minha vida, e cada música me lembra da linda sinfonia que criamos juntos.
            </p>

            <p>
              Eu tenho tanta coisa pra te falar, mas palavras não são suficientes. Mas quero te dedicar um dos poemas mais lindos que já ouvi.<br />
              (escute a primeira musica)<br/>
              Soneto da fidelidade<br/><br/>De tudo, ao meu amor serei atento<br/>Antes, e com tal zelo, e sempre e tanto<br/>Que mesmo em face do maior encanto<br/>
              Dele se encante mais meu pensamento.<br/><br/>
              Quero vivê-lo em cada vão momento<br/>E em sou louvor hei de espalhar meu canto<br/>E rir meu riso e derramar meu pranto<br/>
              Ao seu pesar ou seu contentamento.<br/><br/> E assim, quando mais tarde me procure<br/>Quem sabe a morte, angústia de quem vive<br/>Quem sabe a solidão, fim de quem ama<br/><br/>
              Eu possa me dizer do amor (que tive):<br/>Que não seja imortal, posto que é chama<br/>Mas que seja infinito enquanto dure.
            </p>
            
            <div className="flex justify-center mt-8">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold text-lg">
                Eu te amo pra sempre❤️
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-muted-foreground">
          <p className="italic">
            "Que não seja imortal, posto que é chama, Mas que seja infinito enquanto dure (nosso amor)."
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoveMessage;
