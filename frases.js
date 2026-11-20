const misFrases = [
    {
        es: "La costumbre\ntiene una manera muy particular\nde disfrazar de normal\naquello que nunca te has\ndetenido a cuestionar.",
        en: "Habit\nhas a very particular way\nof disguising as normal\nwhat you have never\nstopped to question."
    },
    {
        es: "Puedes pasar toda la vida\nbuscando respuestas,\nsin darte cuenta\nde que algunas de tus preguntas\nnecesitan desaparecer.",
        en: "You can spend your whole life\nlooking for answers,\nwithout realizing\nthat some of your questions\nneed to disappear."
    },
    {
        es: "Una certeza\npuede convertirse\nen una prisión\ncuando dejas de permitirle\nrecibir preguntas.",
        en: "A certainty\ncan become\na prison\nwhen you stop allowing it\nto receive questions."
    },
    {
        es: "No puedes descubrir\nuna perspectiva diferente\nmientras insistas\nen mirar todo\ndesde el mismo lugar.",
        en: "You cannot discover\na different perspective\nwhile you insist\non looking at everything\nfrom the same place."
    },
    {
        es: "Hay ideas que parecen tuyas\núnicamente porque\nnunca has conocido\nuna razón para ponerlas\nen duda.",
        en: "There are ideas that seem yours\nonly because\nyou have never known\na reason to put them\nin doubt."
    },
    {
        es: "La mayor limitación\nde una mente\nno es lo que desconoce,\nsino aquello que considera\nimposible de cuestionar.",
        en: "The greatest limitation\nof a mind\nis not what it does not know,\nbut what it considers\nimpossible to question."
    },
    {
        es: "A veces lo que llamas\npersonalidad\nes solamente un conjunto\nde respuestas que aprendiste\npara ser aceptado.",
        en: "Sometimes what you call\npersonality\nis only a set\nof answers you learned\nto be accepted."
    },
    {
        es: "El pensamiento propio\ncomienza donde termina\nla necesidad de estar\nde acuerdo\ncon los demás",
        en: "Your own thinking\nbegins where ends\nthe need to be\nin agreement\nwith others"
    },
    {
        es: "La libertad también consiste\nen permitirte cambiar\nde opinión\nsin sentir que traicionas\na la persona que fuiste.",
        en: "Freedom also consists\nin allowing yourself to change\nyour mind\nwithout feeling you betray\nthe person you were."
    },
    {
        es: "No todo lo que te enseñaron\npara protegerte\nfue pensado\npara ayudarte\na crecer.",
        en: "Not everything they taught you\nto protect you\nwas meant\nto help you\ngrow."
    },
    {
        es: "Quizá no estás buscando\nuna nueva respuesta,\nsino el valor\nde aceptar una\nque siempre has evitado.",
        en: "Maybe you are not looking\nfor a new answer,\nbut the courage\nto accept one\nyou have always avoided."
    },
    {
        es: "La percepción\npuede transformar\nuna posibilidad en una amenaza\ny una oportunidad\nen algo invisible.",
        en: "Perception\ncan transform\na possibility into a threat\nand an opportunity\ninto something invisible."
    },
    {
        es: "No eres únicamente\nlo que has vivido;\ntambién eres\nlo que has decidido creer\nsobre aquello que viviste.",
        en: "You are not only\nwhat you have lived;\nyou are also\nwhat you have decided to believe\nabout what you lived."
    },
    {
        es: "Hay límites\nque no están en tus circunstancias,\nsino en las conclusiones\nque sacaste",
        en: "There are limits\nthat are not in your circumstances,\nbut in the conclusions\nyou drew"
    },
    {
        es: "Una mente abierta\nno es aquella que acepta\ntodas las ideas,\nsino la que no teme\nexaminar ninguna.",
        en: "An open mind\nis not one that accepts\nall ideas,\nbut one that does not fear\nexamining any."
    },
    {
        es: "A veces defiendes tanto\ntu manera de entender\nel mundo\nque terminas perdiéndote\ntodo lo que existe\nfuera de ella.",
        en: "Sometimes you defend so much\nyour way of understanding\nthe world\nthat you end up missing\neverything that exists\noutside of it."
    },
    {
        es: "No siempre necesitas\nencontrar tu lugar\nen el mundo,\nquizá necesitas descubrir\npor qué crees que debes\nocupar uno determinado.",
        en: "You don't always need\nto find your place\nin the world,\nmaybe you need to discover\nwhy you think you must\noccupy a certain one."
    },
    {
        es: "Lo conocido\npuede ofrecerte seguridad,\npero nunca garantiza\nque estés viviendo\nde acuerdo con lo que\nrealmente piensas.",
        en: "What is familiar\ncan offer you security,\nbut never guarantees\nthat you are living\naccording to what\nyou really think."
    },
    {
        es: "El día que dejas de necesitar\ntener razón,\ncomienzas a tener espacio\npara descubrir\nalgo nuevo.",
        en: "The day you stop needing\nto be right,\nyou begin to have space\nto discover\nsomething new."
    },
    {
        es: "No todas tus convicciones\nson el resultado de pensar,\nalgunas son simplemente\nel resultado\nde nunca haberlo hecho.",
        en: "Not all your convictions\nare the result of thinking,\nsome are simply\nthe result\nof never having done it."
    },
    {
        es: "La manera en que interpretas\nuna experiencia\npuede terminar pesando\nmás que la experiencia\nmisma.",
        en: "The way you interpret\nan experience\ncan end up weighing\nmore than the experience\nitself."
    },
    {
        es: "No hay pensamiento\nverdaderamente libre\ncuando la aprobación ajena\nsigue siendo el juez\nde tus ideas.",
        en: "There is no thought\ntruly free\nwhen outside approval\nremains the judge\nof your ideas."
    },
    {
        es: "Quizá aquello que llamas\ndestino\nsea una sucesión de decisiones\nque nunca te atreviste\na revisar.",
        en: "Maybe what you call\ndestiny\nis a series of decisions\nyou never dared\nto review."
    },
    {
        es: "Hay preguntas\nque incomodan\nporque amenazan la tranquilidad\nde las respuestas\nque has construido.",
        en: "There are questions\nthat feel uncomfortable\nbecause they threaten the peace\nof the answers\nyou have built."
    },
    {
        es: "No puedes conocer\ntus verdaderas posibilidades\nsi primero decides\nhasta dónde te está\npermitido llegar.",
        en: "You cannot know\nyour true possibilities\nif you first decide\nhow far you are\nallowed to go."
    },
    {
        es: "La mente encuentra argumentos\npara sostener\ncasi cualquier creencia,\npor eso también necesita\naprender a cuestionarse.",
        en: "The mind finds arguments\nto support\nalmost any belief,\nthat is why it also needs\nto learn to question itself."
    },
    {
        es: "No todo lo que tiene sentido\ndentro de tu historia\ntiene que seguir teniendo sentido\nen tu futuro.",
        en: "Not everything that makes sense\nwithin your story\nhas to keep making sense\nin your future."
    },
    {
        es: "El problema de acostumbrarte\na una explicación\nes que puedes terminar\nconfundiéndola con la única\nverdad posible.",
        en: "The problem with getting used\nto an explanation\nis that you can end up\nconfusing it with the only\npossible truth."
    },
    {
        es: "No necesitas rechazar\ntodo lo que conoces\npara descubrir\nque existen otras maneras\nde comprender la vida.",
        en: "You don't need to reject\neverything you know\nto discover\nthat there are other ways\nto understand life."
    },
    {
        es: "Una pregunta honesta\npuede abrir caminos\nque cien respuestas\naprendidas jamás\nte habrían mostrado.",
        en: "An honest question\ncan open paths\nthat a hundred learned answers\nwould never\nhave shown you."
    },
    {
        es: "Hay ocasiones\nen que cambiar de perspectiva\ntransforma más tu realidad\nque cambiar\nlas circunstancias.",
        en: "There are times\nwhen changing perspective\ntransforms your reality more\nthan changing\ncircumstances."
    },
    {
        es: "No confundas\nla tranquilidad\nde no cuestionar nada\ncon la libertad\nde haberlo comprendido todo.",
        en: "Do not confuse\nthe calm\nof questioning nothing\nwith the freedom\nof having understood it all."
    }
];
