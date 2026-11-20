const misFrases = [
    {
        es: "La costumbre tiene una manera muy particular de disfrazar de normal aquello que nunca te has detenido a cuestionar.",
        en: "Habit has a very particular way of disguising as normal what you have never stopped to question."
    },
    {
        es: "Puedes pasar toda la vida buscando respuestas, sin darte cuenta de que algunas de tus preguntas necesitan desaparecer.",
        en: "You can spend your whole life looking for answers, without realizing that some of your questions need to disappear."
    },
    {
        es: "Una certeza puede convertirse en una prisión cuando dejas de permitirle recibir preguntas.",
        en: "A certainty can become a prison when you stop allowing it to receive questions."
    },
    {
        es: "No puedes descubrir una perspectiva diferente mientras insistas en mirar todo desde el mismo lugar.",
        en: "You cannot discover a different perspective while you insist on looking at everything from the same place."
    },
    {
        es: "Hay ideas que parecen tuyas únicamente porque nunca has conocido una razón para ponerlas en duda.",
        en: "There are ideas that seem yours only because you have never known a reason to put them in doubt."
    },
    {
        es: "La mayor limitación de una mente no es lo que desconoce, sino aquello que considera imposible de cuestionar.",
        en: "The greatest limitation of a mind is not what it does not know, but what it considers impossible to question."
    },
    {
        es: "A veces lo que llamas personalidad es solamente un conjunto de respuestas que aprendiste para ser aceptado.",
        en: "Sometimes what you call personality is only a set of answers you learned to be accepted."
    },
    {
        es: "El pensamiento propio comienza donde termina la necesidad de estar de acuerdo con los demás.",
        en: "Your own thinking begins where ends the need to be in agreement with others."
    },
    {
        es: "La libertad también consiste en permitirte cambiar de opinión sin sentir que traicionas a la persona que fuiste.",
        en: "Freedom also consists in allowing yourself to change your mind without feeling you betray the person you were."
    },
    {
        es: "No todo lo que te enseñaron para protegerte fue pensado para ayudarte a crecer.",
        en: "Not everything they taught you to protect you was meant to help you grow."
    },
    {
        es: "Quizá no estás buscando una nueva respuesta, sino el valor de aceptar una que siempre has evitado.",
        en: "Maybe you are not looking for a new answer, but the courage to accept one you have always avoided."
    },
    {
        es: "La percepción puede transformar una posibilidad en una amenaza y una oportunidad en algo invisible.",
        en: "Perception can transform a possibility into a threat and an opportunity into something invisible."
    },
    {
        es: "No eres únicamente lo que has vivido; también eres lo que has decidido creer sobre aquello que viviste.",
        en: "You are not only what you have lived; you are also what you have decided to believe about what you lived."
    },
    {
        es: "Hay límites que no están en tus circunstancias, sino en las conclusiones que sacaste.",
        en: "There are limits that are not in your circumstances, but in the conclusions you drew."
    },
    {
        es: "Una mente abierta no es aquella que acepta todas las ideas, sino la que no teme examinar ninguna.",
        en: "An open mind is not one that accepts all ideas, but one that does not fear examining any."
    },
    {
        es: "A veces defiendes tanto tu manera de entender el mundo que terminas perdiéndote todo lo que existe fuera de ella.",
        en: "Sometimes you defend so much your way of understanding the world that you end up missing everything that exists outside of it."
    },
    {
        es: "No siempre necesitas encontrar tu lugar en el mundo; quizá necesitas descubrir por qué crees que debes ocupar uno determinado.",
        en: "You don't always need to find your place in the world; maybe you need to discover why you think you must occupy a certain one."
    },
    {
        es: "Lo conocido puede ofrecerte seguridad, pero nunca garantiza que estés viviendo de acuerdo con lo que realmente piensas.",
        en: "What is familiar can offer you security, but never guarantees that you are living according to what you really think."
    },
    {
        es: "El día que dejas de necesitar tener razón, comienzas a tener espacio para descubrir algo nuevo.",
        en: "The day you stop needing to be right, you begin to have space to discover something new."
    },
    {
        es: "No todas tus convicciones son el resultado de pensar; algunas son simplemente el resultado de nunca haberlo hecho.",
        en: "Not all your convictions are the result of thinking; some are simply the result of never having done it."
    },
    {
        es: "La manera en que interpretas una experiencia puede terminar pesando más que la experiencia misma.",
        en: "The way you interpret an experience can end up weighing more than the experience itself."
    },
    {
        es: "No hay pensamiento verdaderamente libre cuando la aprobación ajena sigue siendo el juez de tus ideas.",
        en: "There is no thought truly free when outside approval remains the judge of your ideas."
    },
    {
        es: "Quizá aquello que llamas destino sea una sucesión de decisiones que nunca te atreviste a revisar.",
        en: "Maybe what you call destiny is a series of decisions you never dared to review."
    },
    {
        es: "Hay preguntas que incomodan porque amenazan la tranquilidad de las respuestas que has construido.",
        en: "There are questions that feel uncomfortable because they threaten the peace of the answers you have built."
    },
    {
        es: "No puedes conocer tus verdaderas posibilidades si primero decides hasta dónde te está permitido llegar.",
        en: "You cannot know your true possibilities if you first decide how far you are allowed to go."
    },
    {
        es: "La mente encuentra argumentos para sostener casi cualquier creencia; por eso también necesita aprender a cuestionarse.",
        en: "The mind finds arguments to support almost any belief; that is why it also needs to learn to question itself."
    },
    {
        es: "No todo lo que tiene sentido dentro de tu historia tiene que seguir teniendo sentido en tu futuro.",
        en: "Not everything that makes sense within your story has to keep making sense in your future."
    },
    {
        es: "El problema de acostumbrarte a una explicación es que puedes terminar confundiéndola con la única verdad posible.",
        en: "The problem with getting used to an explanation is that you can end up confusing it with the only possible truth."
    },
    {
        es: "No necesitas rechazar todo lo que conoces para descubrir que existen otras maneras de comprender la vida.",
        en: "You don't need to reject everything you know to discover that there are other ways to understand life."
    },
    {
        es: "Una pregunta honesta puede abrir caminos que cien respuestas aprendidas jamás te habrían mostrado.",
        en: "An honest question can open paths that a hundred learned answers would never have shown you."
    },
    {
        es: "Hay ocasiones en que cambiar de perspectiva transforma más tu realidad que cambiar las circunstancias.",
        en: "There are times when changing perspective transforms your reality more than changing circumstances."
    },
    {
        es: "No confundas la tranquilidad de no cuestionar nada con la libertad de haberlo comprendido todo.",
        en: "Do not confuse the calm of questioning nothing with the freedom of having understood it all."
    },{
        tema: "despedida",
        es: "No te deseo nada malo, simplemente deseo que nuestros caminos nunca vuelvan a cruzarse.",
        en: "I wish you nothing bad, I simply wish our paths never cross again."
    },
    {
        tema: "despedida",
        es: "Te dejo ir sin rencor, pero también sin intención de volver.",
        en: "I let you go without resentment, but also without intention of returning."
    },
    {
        tema: "despedida",
        es: "No cierro la puerta con odio, la cierro con la tranquilidad de quien ya entendió.",
        en: "I don't close the door with hatred, I close it with the peace of someone who already understood."
    },
    {
        tema: "despedida",
        es: "Te deseo felicidad, aunque ya no forme parte de la mía.",
        en: "I wish you happiness, even if you are no longer part of mine."
    },
    {
        tema: "despedida",
        es: "No todos merecen una segunda oportunidad; algunos ya tuvieron suficientes.",
        en: "Not everyone deserves a second chance; some have already had enough."
    },
    {
        tema: "despedida",
        es: "Me voy en silencio, porque hay despedidas que no necesitan explicaciones.",
        en: "I leave in silence, because some goodbyes don't need explanations."
    },
    {
        tema: "despedida",
        es: "No guardo resentimiento, guardo distancia, que es muy diferente.",
        en: "I don't hold resentment, I keep distance, which is very different."
    },
    {
        tema: "despedida",
        es: "Alguna vez fuiste importante, hoy simplemente eres parte de lo que superé.",
        en: "You were once important, today you are simply part of what I moved past."
    },
    {
        tema: "despedida",
        es: "No necesito que te arrepientas, me basta con no volver a equivocarme.",
        en: "I don't need you to regret it, it's enough for me not to make the same mistake again."
    },
    {
        tema: "despedida",
        es: "Hay personas a las que se les desea lo mejor, pero siempre desde lejos.",
        en: "There are people you wish the best for, but always from afar."
    },
    {
        tema: "despedida",
        es: "No confundas mi educación con ganas de volver a tenerte en mi vida.",
        en: "Don't confuse my politeness with wanting you back in my life."
    },
    {
        tema: "despedida",
        es: "Me quedo con las lecciones y te dejo los recuerdos.",
        en: "I keep the lessons and leave you the memories."
    },
    {
        tema: "despedida",
        es: "No perdí mi lugar, simplemente entendí que estaba en el sitio equivocado.",
        en: "I didn't lose my place, I simply realized I was in the wrong spot."
    },
    {
        tema: "despedida",
        es: "Mi tranquilidad vale demasiado como para volver a ponerla en tus manos.",
        en: "My peace of mind is worth too much to put it back in your hands."
    },
    {
        tema: "despedida",
        es: "No hace falta terminar mal cuando simplemente puedes terminar lejos.",
        en: "There's no need to end badly when you can simply end far away."
    },
    {
        tema: "despedida",
        es: "Te perdono, pero eso no significa que vuelvas a tener acceso a mi vida.",
        en: "I forgive you, but that doesn't mean you get access to my life again."
    },
    {
        tema: "despedida",
        es: "No me fui porque dejé de sentir, me fui porque aprendí a sentir respeto por mí.",
        en: "I didn't leave because I stopped feeling, I left because I learned to feel respect for myself."
    },
    {
        tema: "despedida",
        es: "Algunas despedidas duelen, pero quedarse donde no te valoran duele mucho más.",
        en: "Some goodbyes hurt, but staying where you aren't valued hurts much more."
    },
    {
        tema: "despedida",
        es: "No necesito tener la última palabra, mi ausencia será suficiente respuesta.",
        en: "I don't need the last word, my absence will be answer enough."
    },
    {
        tema: "despedida",
        es: "Te deseo buenos caminos, pero ya no caminaré a tu lado.",
        en: "I wish you good roads, but I will no longer walk beside you."
    },
    {
        tema: "despedida",
        es: "No hay rencor en mi despedida, solamente una decisión que ya no pienso negociar.",
        en: "There is no resentment in my goodbye, only a decision I no longer intend to negotiate."
    },
    {
        tema: "despedida",
        es: "Aprendí que retirarse a tiempo también es una muestra de inteligencia.",
        en: "I learned that stepping away in time is also a sign of wisdom."
    },
    {
        tema: "despedida",
        es: "No vuelvo a lugares donde tuve que suplicar lo que debía nacer del corazón.",
        en: "I don't go back to places where I had to beg for what should come from the heart."
    },
    {
        tema: "despedida",
        es: "Puedes conservar tus razones; yo me quedo con mi paz.",
        en: "You can keep your reasons; I'll keep my peace."
    },
    {
        tema: "despedida",
        es: "No te guardo en mi corazón ni en mis pendientes, simplemente te dejo en el pasado.",
        en: "I don't keep you in my heart or on my to-do list, I simply leave you in the past."
    },
    {
        tema: "despedida",
        es: "Hay puertas que se cierran sin ruido, pero jamás vuelven a abrirse.",
        en: "Some doors close without a sound, yet never open again."
    },
    {
        tema: "despedida",
        es: "No necesito que reconozcas lo que perdiste, yo ya reconocí lo que merezco.",
        en: "I don't need you to recognize what you lost, I already recognized what I deserve."
    },
    {
        tema: "despedida",
        es: "Mi despedida no es un castigo para ti, es un acto de respeto hacia mí.",
        en: "My goodbye is not a punishment for you, it is an act of respect toward myself."
    },
    {
        tema: "despedida",
        es: "No todo lo que se aleja es una pérdida; a veces es la vida devolviéndote la paz.",
        en: "Not everything that drifts away is a loss; sometimes it's life giving you back your peace."
    },
    {
        tema: "despedida",
        es: "Que te vaya bonito, pero que no se te ocurra confundir mis buenos deseos con una invitación a regresar.",
        en: "May things go well for you, but don't mistake my good wishes for an invitation to come back."
    },
    {
        tema: "despedida",
        es: "Ya no tengo preguntas, tampoco expectativas; finalmente aprendí a soltar.",
        en: "I have no more questions, nor expectations; I finally learned to let go."
    },
    {
        tema: "despedida",
        es: "No voy a competir por un lugar que debería haberse ofrecido sin tener que pedirlo.",
        en: "I won't compete for a place that should have been offered without having to ask."
    },
    {
        tema: "despedida",
        es: "Me retiro con la frente en alto, porque mi dignidad nunca estuvo en negociación.",
        en: "I walk away with my head held high, because my dignity was never up for negotiation."
    },
    {
        tema: "despedida",
        es: "No necesito borrar nuestra historia, simplemente ya no quiero escribir nuevos capítulos contigo.",
        en: "I don't need to erase our story, I simply don't want to write new chapters with you."
    },
    {
        tema: "despedida",
        es: "Hay personas que se extrañan, pero no por eso se deben recuperar.",
        en: "Some people are missed, yet that doesn't mean they should be brought back."
    },
    {
        tema: "despedida",
        es: "Mi silencio no es orgullo, es la paz que encontré cuando dejé de insistir.",
        en: "My silence isn't pride, it's the peace I found when I stopped insisting."
    },
    {
        tema: "despedida",
        es: "No te deseo menos de lo que mereces, simplemente ya no quiero estar presente para verlo.",
        en: "I don't wish you less than you deserve, I simply don't want to be there to see it."
    },
    {
        tema: "despedida",
        es: "Agradezco lo vivido, acepto lo aprendido y libero lo que ya no pertenece a mi camino.",
        en: "I'm grateful for what we lived, I accept what I learned, and I release what no longer belongs on my path."
    },
    {
        tema: "despedida",
        es: "No vuelvo a donde tuve que hacerme pequeño para que alguien más se sintiera importante.",
        en: "I don't go back where I had to make myself small so someone else could feel important."
    },
    {
        tema: "despedida",
        es: "La vida me enseñó que perder a alguien no es tan grave como perderme a mí mismo por conservarlo.",
        en: "Life taught me that losing someone isn't as serious as losing myself to keep them."
    },
    {
        tema: "despedida",
        es: "No hay despedida más elegante que aquella en la que te vas sin perder tu esencia.",
        en: "There is no more graceful goodbye than walking away without losing your essence."
    },
    {
        tema: "despedida",
        es: "Ya no espero disculpas ni explicaciones; mi paz no puede depender de tu conciencia.",
        en: "I no longer wait for apologies or explanations; my peace can't depend on your conscience."
    },
    {
        tema: "despedida",
        es: "Te dejo en libertad y me devuelvo la mía.",
        en: "I set you free and give myself back my own freedom."
    },
    {
        tema: "despedida",
        es: "No necesito demostrarte que estoy mejor sin ti; mi tranquilidad no necesita espectadores.",
        en: "I don't need to prove I'm better without you; my peace doesn't need an audience."
    },
    {
        tema: "despedida",
        es: "Algunas personas dejan recuerdos, otras enseñanzas; tú me dejaste ambas cosas y ninguna razón para volver.",
        en: "Some people leave memories, others leave lessons; you left me both and no reason to return."
    },
    {
        tema: "despedida",
        es: "No me llevo nada tuyo, excepto la experiencia de saber lo que jamás volveré a aceptar.",
        en: "I take nothing of yours with me, except knowing what I will never accept again."
    },
    {
        tema: "despedida",
        es: "Mi vida continúa, y esta vez no dejaré espacio para aquello que me quitaba la paz.",
        en: "My life goes on, and this time I won't leave room for what took away my peace."
    },
    {
        tema: "despedida",
        es: "No te cierro el camino, simplemente dejo de caminar contigo.",
        en: "I don't block your way, I simply stop walking with you."
    },
    {
        tema: "despedida",
        es: "Quien no supo valorar mi presencia tendrá que acostumbrarse a respetar mi ausencia.",
        en: "Whoever didn't value my presence will have to get used to respecting my absence."
    },
    {
        tema: "despedida",
        es: "Me voy sin hacer ruido, sin mirar atrás y sin desear regresar. Hay decisiones que se toman una sola vez.",
        en: "I leave without a sound, without looking back, and without wishing to return. Some decisions are made only once."
    }
];
