// app.js - Localizador de Salas UNIP - VERSÃO FINAL

// Estado do aplicativo
let estado = { 
    turno: null, 
    curso: null, 
    semestre: null 
};

// Elementos DOM principais
const elementos = {
    progressBar: document.getElementById('progressBar'),
    cursosContainer: document.getElementById('cursos-container'),
    semestresContainer: document.getElementById('semestres-container'),
    salaInfo: document.getElementById('sala-info')
};

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    console.log('UNIP Localizador iniciado');
    
    // Verificar se dadosSalas existe
    if (typeof dadosSalas === 'undefined' || !dadosSalas) {
        console.error('ERRO: dadosSalas não foi carregado!');
        mostrarErroCritico();
        return;
    }
    
    console.log('✅ dadosSalas carregado com sucesso!');
    console.log('📊 Cursos manhã:', Object.keys(dadosSalas.manha || {}).length);
    console.log('📊 Cursos noite:', Object.keys(dadosSalas.noite || {}).length);
    
    // Inicializar contador
    inicializarContador();
    
    // Atualizar progresso inicial
    atualizarProgresso(25);
});

// Função para mostrar erro crítico
function mostrarErroCritico() {
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = `
            <div style="text-align: center; padding: 50px 20px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: #dc2626;"></i>
                <h2 style="color: #dc2626; margin: 20px 0;">Erro ao carregar dados</h2>
                <p style="color: #666;">Por favor, recarregue a página ou tente novamente mais tarde.</p>
                <button onclick="location.reload()" style="
                    background: #003366;
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 25px;
                    margin-top: 20px;
                    cursor: pointer;
                ">
                    <i class="fas fa-redo"></i> Recarregar
                </button>
            </div>
        `;
    }
}

// ==================== FUNÇÕES PRINCIPAIS ====================

// Selecionar turno
function selectTurno(turno) {
    if (typeof dadosSalas === 'undefined' || !dadosSalas[turno]) {
        mostrarNotificacao('Erro: Dados não disponíveis', 'error');
        return;
    }
    
    estado.turno = turno;
    
    // Animar seleção
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Popular cursos e avançar
    popularCursos();
    mostrarEtapa(2);
    atualizarProgresso(50);
    
    // Registrar no contador
    registrarUso('turno_selecionado');
}

// Popular lista de cursos baseado no turno
function popularCursos() {
    elementos.cursosContainer.innerHTML = '';
    
    if (!dadosSalas || !dadosSalas[estado.turno]) {
        elementos.cursosContainer.innerHTML = `
            <div style="text-align: center; padding: 20px; color: #666;">
                <i class="fas fa-exclamation-circle"></i>
                <p>Nenhum curso disponível para este turno</p>
            </div>
        `;
        return;
    }
    
    const cursos = Object.keys(dadosSalas[estado.turno]).sort();
    
    cursos.forEach(curso => {
        const botao = document.createElement('button');
        botao.className = 'option-btn';
        botao.innerHTML = `
            <i class="fas fa-graduation-cap"></i>
            <span>${curso}</span>
        `;
        botao.onclick = () => selectCurso(curso);
        elementos.cursosContainer.appendChild(botao);
    });
}

// Selecionar curso
function selectCurso(curso) {
    estado.curso = curso;
    
    // Animar seleção
    document.querySelectorAll('#cursos-container .option-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Popular semestres e avançar
    popularSemestres();
    mostrarEtapa(3);
    atualizarProgresso(75);
    
    // Registrar no contador
    registrarUso('curso_selecionado', curso);
}

// Popular lista de semestres
function popularSemestres() {
    elementos.semestresContainer.innerHTML = '';
    
    if (!dadosSalas || !dadosSalas[estado.turno] || !dadosSalas[estado.turno][estado.curso]) {
        elementos.semestresContainer.innerHTML = `
            <div style="text-align: center; padding: 20px; color: #666;">
                <i class="fas fa-exclamation-circle"></i>
                <p>Nenhum semestre disponível para este curso</p>
            </div>
        `;
        return;
    }
    
    const semestres = Object.keys(dadosSalas[estado.turno][estado.curso]).sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || 0);
        const numB = parseInt(b.match(/\d+/)?.[0] || 0);
        return numA - numB;
    });
    
    semestres.forEach(semestre => {
        const botao = document.createElement('button');
        botao.className = 'option-btn';
        
        let icone = 'fas fa-calendar-alt';
        const numSemestre = parseInt(semestre.match(/\d+/)?.[0] || 0);
        
        if (numSemestre <= 2) icone = 'fas fa-seedling';
        else if (numSemestre <= 5) icone = 'fas fa-book';
        else if (numSemestre <= 8) icone = 'fas fa-graduation-cap';
        else icone = 'fas fa-flag-checkered';
        
        botao.innerHTML = `
            <i class="${icone}"></i>
            <span>${semestre}</span>
        `;
        botao.onclick = () => selectSemestre(semestre);
        elementos.semestresContainer.appendChild(botao);
    });
}

// Selecionar semestre
function selectSemestre(semestre) {
    estado.semestre = semestre;
    
    // Animar seleção
    document.querySelectorAll('#semestres-container .option-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Mostrar resultado
    mostrarResultado();
    mostrarEtapa(4);
    atualizarProgresso(100);
    
    // Registrar no contador
    registrarUso('semestre_selecionado', estado.curso, semestre);
}

// ==================== MOSTRAR RESULTADO ====================

function mostrarResultado() {
    try {
        if (!dadosSalas || 
            !dadosSalas[estado.turno] || 
            !dadosSalas[estado.turno][estado.curso] || 
            !dadosSalas[estado.turno][estado.curso][estado.semestre]) {
            throw new Error('Sala não encontrada');
        }
        
        const info = dadosSalas[estado.turno][estado.curso][estado.semestre];
        
        // Configurações por prédio
        const configPredios = {
            'PRINCIPAL': { cor: '#2196F3', icone: 'fas fa-landmark', nome: 'PRÉDIO PRINCIPAL' },
            'ÁTRIO': { cor: '#4CAF50', icone: 'fas fa-tree', nome: 'PRÉDIO ÁTRIO' },
            'CH.1': { cor: '#9C27B0', icone: 'fas fa-building', nome: 'CH.1' },
            'CH.2': { cor: '#FF9800', icone: 'fas fa-university', nome: 'CH.2' }
        };
        
        const predioConfig = configPredios[info.predio] || configPredios['PRINCIPAL'];
        
        // Formatar andar
        let andarFormatado = (info.andar || '')
            .replace(/ANDAR/gi, '')
            .replace(/°|º/g, 'º')
            .trim() + 'º ANDAR';
        
        elementos.salaInfo.innerHTML = `
            <div class="sala-card" data-predio="${info.predio}">
                <h3 style="color: ${predioConfig.cor};">${info.sala}</h3>
                
                <div style="margin: 20px 0;">
                    <p><i class="fas fa-walking" style="color: ${predioConfig.cor};"></i> 
                       <strong>Andar:</strong> ${andarFormatado}</p>
                    
                    <p><i class="${predioConfig.icone}" style="color: ${predioConfig.cor};"></i> 
                       <strong>Prédio:</strong> ${predioConfig.nome}</p>
                    
                    <p><i class="fas fa-clock" style="color: ${predioConfig.cor};"></i> 
                       <strong>Turno:</strong> ${estado.turno === 'manha' ? 'Manhã' : 'Noite'}</p>
                    
                    <p><i class="fas fa-book" style="color: ${predioConfig.cor};"></i> 
                       <strong>Curso:</strong> ${estado.curso}</p>
                    
                    <p><i class="fas fa-calendar" style="color: ${predioConfig.cor};"></i> 
                       <strong>Semestre:</strong> ${estado.semestre}</p>
                </div>
                
                <div class="predio-badge" style="background: ${predioConfig.cor};">
                    ${predioConfig.nome}
                </div>
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin-top: 20px; font-size: 0.9rem; color: #666;">
                <i class="fas fa-info-circle"></i>
                <strong>Dica:</strong> Dirija-se à sala 10 minutos antes do horário.
            </div>
        `;
        
        registrarUso('sala_encontrada', info.sala, info.predio);
        
    } catch (error) {
        console.error('Erro:', error);
        elementos.salaInfo.innerHTML = `
            <div style="text-align: center; padding: 40px 20px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #dc2626; margin-bottom: 20px;"></i>
                <h3 style="color: #dc2626; margin-bottom: 15px;">Sala não encontrada</h3>
                <p style="color: #666; margin-bottom: 10px;">
                    Não foi possível localizar sua sala com as informações fornecidas.
                </p>
                <button onclick="voltar(1)" style="background: #003366; color: white; border: none; padding: 12px 25px; border-radius: 25px; margin-top: 20px; cursor: pointer;">
                    <i class="fas fa-redo"></i> Tentar Novamente
                </button>
            </div>
        `;
    }
}

// ==================== FUNÇÕES DE NAVEGAÇÃO ====================

function mostrarEtapa(numero) {
    document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step${numero}`).classList.add('active');
    
    document.querySelectorAll('.step-item').forEach((item, index) => {
        if (index < numero) item.classList.add('active');
        else item.classList.remove('active');
    });
}

function atualizarProgresso(percentual) {
    if (elementos.progressBar) elementos.progressBar.style.width = `${percentual}%`;
}

function voltar(etapa) {
    mostrarEtapa(etapa);
    atualizarProgresso(etapa * 25);
    registrarUso('voltar_etapa');
}

function reiniciar() {
    estado = { turno: null, curso: null, semestre: null };
    document.querySelectorAll('.option-card.active, .option-btn.active').forEach(el => el.classList.remove('active'));
    elementos.cursosContainer.innerHTML = '';
    elementos.semestresContainer.innerHTML = '';
    mostrarEtapa(1);
    atualizarProgresso(25);
    registrarUso('reiniciar_app');
}

// ==================== FUNÇÕES DE COMPARTILHAMENTO ====================

async function compartilhar() {
    try {
        if (!estado.turno || !estado.curso || !estado.semestre) {
            mostrarNotificacao('Selecione uma sala primeiro', 'warning');
            return;
        }
        
        const info = dadosSalas[estado.turno][estado.curso][estado.semestre];
        const texto = `📚 UNIP - Minha Sala\nSala: ${info.sala}\nAndar: ${info.andar}\nPrédio: ${info.predio}\nCurso: ${estado.curso} - ${estado.semestre}\nTurno: ${estado.turno === 'manha' ? 'Manhã' : 'Noite'}\n\nEncontre sua sala também: ${window.location.href}`;
        
        if (navigator.share) {
            await navigator.share({ title: 'Minha Sala - UNIP', text: texto, url: window.location.href });
            mostrarNotificacao('Compartilhado com sucesso!', 'success');
        } else {
            await navigator.clipboard.writeText(texto);
            mostrarNotificacao('📋 Sala copiada para a área de transferência!', 'success');
        }
        
        registrarUso('compartilhar_sala');
    } catch (error) {
        mostrarNotificacao('Não foi possível compartilhar', 'error');
    }
}

// ==================== CONTADOR DE USUÁRIOS ====================

function inicializarContador() {
    const hoje = new Date().toDateString();
    const ultimoAcesso = localStorage.getItem('unip_ultimo_acesso');
    
    if (ultimoAcesso !== hoje) {
        let totalAcessos = parseInt(localStorage.getItem('unip_total_acessos') || '0') + 1;
        localStorage.setItem('unip_total_acessos', totalAcessos);
        localStorage.setItem('unip_ultimo_acesso', hoje);
        atualizarContadorDisplay(totalAcessos);
    } else {
        const totalAcessos = parseInt(localStorage.getItem('unip_total_acessos') || '0');
        atualizarContadorDisplay(totalAcessos);
    }
}

function atualizarContadorDisplay(total) {
    document.querySelectorAll('.contador-usuarios').forEach(el => {
        el.textContent = total >= 1000 ? (total/1000).toFixed(1) + 'K' : total;
    });
}

function formatarNumero(num) {
    if (num >= 1000000) return (num/1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num/1000).toFixed(1) + 'K';
    return num.toString();
}

function registrarUso(acao, ...detalhes) {
    try {
        const logs = JSON.parse(localStorage.getItem('unip_logs_uso') || '[]');
        logs.push({ acao, detalhes, data: new Date().toISOString() });
        if (logs.length > 100) logs.shift();
        localStorage.setItem('unip_logs_uso', JSON.stringify(logs));
    } catch (e) {}
}

function mostrarNotificacao(mensagem, tipo = 'info') {
    const notificacaoAnterior = document.getElementById('notificacao-app');
    if (notificacaoAnterior) notificacaoAnterior.remove();
    
    const cores = { success: '#4CAF50', error: '#dc2626', info: '#2196F3', warning: '#FF9800' };
    
    const notificacao = document.createElement('div');
    notificacao.id = 'notificacao-app';
    notificacao.innerHTML = `
        <div style="position: fixed; top: 20px; right: 20px; background: ${cores[tipo]}; color: white; padding: 15px 25px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); z-index: 10000; display: flex; align-items: center; gap: 10px; animation: slideIn 0.3s ease;">
            <i class="fas fa-${tipo === 'success' ? 'check-circle' : tipo === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${mensagem}</span>
        </div>
    `;
    
    document.body.appendChild(notificacao);
    setTimeout(() => {
        if (notificacao.parentNode) {
            notificacao.style.opacity = '0';
            notificacao.style.transition = 'opacity 0.5s';
            setTimeout(() => notificacao.remove(), 500);
        }
    }, 3000);
}
