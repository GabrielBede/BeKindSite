// Biblioteca de icones "Feather icons"
feather.replace();

//Função para o header -> menu
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../img/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../img/x.svg";
    }
}

// Animação para os valores do impacto fazerem uma contagem até o valor determinado
const animateCounters = () => {
    const counters = document.querySelectorAll('.value');
    const speed = 500;

    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('contador-impacto');
            const data = +counter.innerText.substring(1);
            const time = value / speed;

            if (data < value) {
                counter.innerText = `+${Math.ceil(data + time)}`;
                setTimeout(animate, 1);
            } else {
                counter.innerText = `+${value}`;
            }
        }

        animate();
    });
};

// Verificar se a seção "section-apresentacao" está visível ao rolar a página
const sectionApresentacao = document.querySelector('.imp3');
let animationStarted = false;

const checkVisibility = () => {
    const rect = sectionApresentacao.getBoundingClientRect();
    if (rect.top <= window.innerHeight && !animationStarted) {
        animateCounters();
        animationStarted = true;
    }
};

window.addEventListener('scroll', checkVisibility);


// Verificar se o CPF é válido ou não
function formatarCPF(campo) {
    campo.value = campo.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (campo.value.length <= 11) {
        campo.value = campo.value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o ponto após os primeiros 3 dígitos
        campo.value = campo.value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o ponto após os próximos 3 dígitos
        campo.value = campo.value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca o hífen antes dos últimos 2 dígitos
    } else {
        campo.value = campo.value.substring(0, 14); // Limita o campo a 14 caracteres (máscara completa)
    }
}

function validarCPF(campo) {
    var cpf = campo.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11) {
        alert("CPF inválido. O CPF deve conter 11 dígitos.");
        campo.value = "";
        return;
    }

    var soma = 0;
    var resto;

    for (var i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        alert("CPF inválido.");
        campo.value = "";
        return;
    }

    soma = 0;

    for (var i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        alert("CPF inválido.");
        campo.value = "";
        return;
    }
}

// Dados simulados em formato JSON
const noticias = [
    {
        id: 1,
        titulo: 'SP planeja escolas rurais em modelo de internato para moradores de rua',
        conteudo: 'O projeto Escolas Rurais, ideia do governo de São Paulo que pretende capacitar moradores em situação de rua em uma espécie de internato,...',
        link: 'https://jovempan.com.br/noticias/brasil/sp-planeja-escolas-rurais-em-modelo-de-internato-para-moradores-de-rua.html',
        imagem: '.../img/Blog-Noticia1.png'
    },
    {
        id: 2,
        titulo: 'Cidade de SP contabiliza mais de 52 mil moradores de rua, alta de 8,2% em 2023, afirma pesquisa',
        conteudo: 'Brasil soma mais de 206 mil pessoas nessa situação, segundo estudo da UFMG feito a partir de dados do Cadastro Único...',
        link: 'https://g1.globo.com/sp/sao-paulo/noticia/2023/04/05/cidade-de-sp-contabiliza-mais-de-52-mil-moradores-de-rua-alta-de-82percent-em-2023-afirma-pesquisa.ghtml',
        imagem: '.../img/Blog-Noticia2.png'
    },
    {
        id: 3,
        titulo: 'Os planos do governo Lula para os mais de 200 mil brasileiros em situação de rua',
        conteudo: 'O Brasil tinha 236,4 mil pessoas em situação de rua inscritas no Cadastro Único (CadÚnico, registro do governo da população de baixa renda do país) em 2022.',
        link: 'https://www.bbc.com/portuguese/articles/crg1z4emydlo',
        imagem: '.../img/Blog-Noticia3.png'
    },

    {
        id: 4,
        titulo: 'Onda de calor: prefeituras intensificam ações para atender moradores de rua',
        conteudo: 'Em Itaquá, a administração municipal informou que entregará kit com protetor solar e itens de hidratação.',
        link: 'https://portalnews.com.br/cidades/2023/11/onda-de-calor-prefeituras-intensificam-acoes-para-atender-moradores-de-rua',
        imagem: '../img/Blog-Noticia4.png'
    },

    {
        id: 5,
        titulo: 'Prefeitura de SP muda abordagem a população em situação de rua; confira o que prevê novo modelo',
        conteudo: 'Anúncio acontece em meio à polêmica sobre aumento de sem-teto e de barracas nas praças e calçadas da cidade; movimentos sociais criticam...',
        link: 'https://exame.com/brasil/prefeitura-de-sp-muda-abordagem-a-populacao-em-situacao-de-rua-confira-o-que-preve-novo-modelo/',
        imagem: '../img/Blog-Noticia5.png'
    },

    {
        id: 6,
        titulo: 'População de rua em São Paulo cresce em junho, aponta levantamento',
        conteudo: 'Com a maior população de rua do Brasil, a cidade de São Paulo registrou aumento no número de pessoas que vivem nessa condição, em junho.',
        link: 'https://agenciabrasil.ebc.com.br/direitos-humanos/noticia/2023-09/populacao-de-rua-em-sao-paulo-cresce-em-junho-aponta-levantamento',
        imagem: '../img/Blog-Noticia6.png'
    },
];

const noticiasContainer = document.getElementById('noticias-container');
const verMaisBtn = document.getElementById('btn-vermais');
let noticiasExibidas = 0;

// Função para exibir notícias
function exibirNoticias() {
    const noticiasParaExibir = noticias.slice(noticiasExibidas, noticiasExibidas + 2);

    noticiasParaExibir.forEach((noticia) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
        <img src="../img/Blog-Noticia${noticia.id}.png" alt="image/png">
        <p><b>${noticia.titulo}</b><br>${noticia.conteudo}</p>
        <a href="${noticia.link}" class="btn-artigo">Ler artigo</a>
      `;
        noticiasContainer.appendChild(postElement);
    });

    noticiasExibidas += 2;

    // Oculta o botão se não houver mais notícias para exibir
    verMaisBtn.style.display = noticiasExibidas < noticias.length ? 'block' : 'none';
}

// Adiciona um ouvinte de evento para o botão "Ver mais"
verMaisBtn.addEventListener('click', exibirNoticias);

// Exibe as primeiras notícias ao carregar a página
exibirNoticias();



function scrollToQuemSomos() {
    // Obtém a posição da seção "Quem somos"
    const quemSomosSection = document.getElementById('quem-somos');
    const quemSomosSectionTop = quemSomosSection.offsetTop;

    // Rola suavemente até a posição da seção "Quem somos"
    window.scrollTo({
        top: quemSomosSectionTop,
        behavior: 'smooth'
    });
}

function participarEvento() {
    showAlert();
}

function showAlert() {
    // Criação do overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Criação do alerta
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('custom-alert');
    alertDiv.innerHTML = `
      <p>Agradecemos pelo seu interesse em fazer a diferença! Para participar do nosso evento e contribuir para transformações significativas, <b>baixe agora o aplicativo BeKind</b>.

      <br>Escaneie o QR code abaixo e faça parte dessa jornada solidária. Seu apoio é crucial para a construção de um mundo mais empático e solidário.</p>
      <img src="../../img/QRCode.png"><br><br>
      <button onclick="closeAlert()">Fechar</button>
    `;
    document.body.appendChild(alertDiv);
}

function closeAlert() {
    const overlay = document.querySelector('.overlay');
    const alertDiv = document.querySelector('.custom-alert');

    if (overlay) {
        overlay.remove();
    }

    if (alertDiv) {
        alertDiv.remove();
    }
}