let dados = [
    {
        "bioma": "Mata Atlântica",
        "descricao": "A Mata Atlântica, um dos biomas mais ricos em biodiversidade do mundo, originalmente cobria grande parte do litoral brasileiro. Caracterizada por sua exuberância e diversidade de espécies, a Mata Atlântica abriga uma rica fauna e flora, com muitas espécies endêmicas. Devido à intensa exploração ao longo dos séculos, restam apenas fragmentos desse ecossistema, tornando sua preservação um desafio urgente para garantir a manutenção da biodiversidade e dos serviços ecossistêmicos que ela proporciona.",
        "link": "https://siscom.ibama.gov.br/monitora_biomas/PMDBBS%20-%20MATA%20ATLANTICA.html",
        "percentual": "12%",
        "animais": [
            "Onça-pintada",
            "Mico-leão-dourado",
            "Tamanduá-bandeira",
            "Arara-azul",
            "Jaguatirica",
            "Tucano-de-bico-preto",
            "Paca"
        ],
        "plantas": [
            "Jequitibá",
            "Ipê",
            "Embaúba",
            "Cabeludinha",
            "Sumaúma",
            "Figueira",
            "Jatobá"
        ]
    },
    {
        "bioma": "Floresta Amazônica",
        "descricao": "A Floresta Amazônica, a maior floresta tropical do mundo, cobre uma vasta região da América do Sul. É crucial para o equilíbrio climático e abriga uma biodiversidade incomparável. Suas ameaças incluem desmatamento, mineração ilegal e mudanças climáticas.",
        "link": "https://siscom.ibama.gov.br/monitora_biomas/PMDBBS%20-%20AMAZONIA.html",
        "percentual": "49%",
        "animais": [
            "Jaguar",
            "Búfalo selvagem",
            "Preguiça",
            "Papagaio-da-amazônia",
            "Anaconda",
            "Macaco-aranha",
            "Delfim-do-rio-amazonas"
        ],
        "plantas": [
            "Castanheira",
            "Baca",
            "Pau-rosa",
            "Sumaúma",
            "Cupuassu",
            "Açaí",
            "Buriti"
        ]
    },
    {
        "bioma": "Cerrado",
        "descricao": "O Cerrado, a savana brasileira, é o segundo maior bioma do Brasil. É conhecido por suas árvores de pequeno porte e pelo solo rico em nutrientes. No entanto, o bioma enfrenta forte pressão da agricultura e pecuária.",
        "link": "https://siscom.ibama.gov.br/monitora_biomas/PMDBBS%20-%20CERRADO.html",
        "percentual": "24%",
        "animais": [
            "Lobo-guará",
            "Tamanduá-bandeira",
            "Onça-parda",
            "Veado-campeiro",
            "Gavião-real",
            "Arara-canindé",
            "Sabiá-do-cerrado"
        ],
        "plantas": [
            "Pequi",
            "Cagaiteira",
            "Buriti",
            "Pau-de-fruta",
            "Barbatimão",
            "Sombra-de-tigre",
            "Cactos"
        ]
    },
    {
        "bioma": "Caatinga",
        "descricao": "A Caatinga é o único bioma exclusivamente brasileiro, localizado no Nordeste. Caracteriza-se por seu clima semiárido e vegetação adaptada à seca. Embora resiliente, a Caatinga sofre com a desertificação e degradação ambiental.",
        "link": "https://siscom.ibama.gov.br/monitora_biomas/PMDBBS%20-%20CAATINGA.html",
        "percentual": "10%",
        "animais": [
            "Jabuti",
            "Cactófilo",
            "Serpente-coral",
            "Ratazana",
            "Cacatua",
            "Cão-do-mato",
            "Gralha-azul"
        ],
        "plantas": [
            "Mandacaru",
            "Xique-xique",
            "Catingueira",
            "Umbuzeiro",
            "Maracujá-do-mato",
            "Juazeiro",
            "Cactos"
        ]
    },
    {
        "bioma": "Pantanal",
        "descricao": "O Pantanal é a maior planície alagada do mundo e possui uma biodiversidade única. É um ecossistema vulnerável que depende do ciclo de cheias e secas. A expansão agropecuária e incêndios representam grandes ameaças.",
        "link": "https://siscom.ibama.gov.br/monitora_biomas/PMDBBS%20-%20PANTANAL.html",
        "percentual": "1.8%",
        "animais": [
            "Onça-pintada",
            "Arara-azul",
            "Capivara",
            "Caiman",
            "Tuiuiú",
            "Anta",
            "Jacaré"
        ],
        "plantas": [
            "Vitória-régia",
            "Buriti",
            "Açai-do-Pantanal",
            "Cabeludinha",
            "Pau-de-balsa",
            "Cabeludinha",
            "Grama-de-buriti"
        ]
    },
    {
        "bioma": "Pampa",
        "descricao": "O Pampa é caracterizado por vastas áreas de pastagens naturais e é um bioma exclusivo da região sul do Brasil. O manejo inadequado e a agricultura intensiva são as principais ameaças ao bioma.",
        "link": "https://siscom.ibama.gov.br/monitora_biomas/PMDBBS%20-%20PAMPA.html",
        "percentual": "2%",
        "animais": [
            "Veado-campeiro",
            "Nandú",
            "Lobo-guará",
            "Gavião",
            "Capivara",
            "Cachorro-do-mato",
            "Morcego"
        ],
        "plantas": [
            "Capim-colonião",
            "Grama-seda",
            "Ladino",
            "Dente-de-leão",
            "Sorgo",
            "Cana-de-açúcar",
            "Trevo"
        ]
    },
    {
        "bioma": "Marinho Costeiro",
        "descricao": "O bioma Marinho Costeiro é uma transição entre os ecossistemas continentais e marinhos, que se estendem por uma área de 4,5 milhões de km². Tratam-se de ecossistemas litorâneos, situados além dos desmandos antrópicos, que apresentam uma intensa variação geológica e rica biodiversidade, com a ocorrência de manguezais, recifes de corais, dunas, costões rochosos, praias, falésias, ilhas, lagoas, restingas, brejos e estuários. São quase 1300 espécies de peixes, 19 delas ameaçadas de extinção e 32 em situação de declínio.",
        "link": "https://www.nationalgeographicbrasil.com/meio-ambiente/2021/06/setimo-bioma-brasileiro-esconde-tesouro-de-peixes-mamiferos-aves-e-algas",
        "percentual": "26%",
        "animais": [
            "Peixe-boi-marinho",
            "Tartaruga-de-couro",
            "Búzio",
            "Delfim",
            "Sereia",
            "Atum",
            "Tubaráo"
        ],
        "plantas": [
            "Algas",
            "Mangue",
            "Coral",
            "Grama-marinha",
            "Coqueiro",
            "Pau-brasil",
            "Restinga"
        ]
    }
];
