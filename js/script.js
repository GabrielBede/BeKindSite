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

