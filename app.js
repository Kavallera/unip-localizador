// app.js - Localizador de Salas UNIP - VERSÃO CORRIGIDA

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
    if (typeof dadosSalas === 'undefined') {
        console.error('ERRO: dadosSalas não foi carregado!');
        mostrarErroCritico();
        return;
    }
    
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
    
    // Animação de entrada
    setTimeout(() => {
        document.querySelectorAll('#cursos-container .option-btn').forEach((btn, index) => {
            btn.style.animationDelay = `${index * 0.05}s`;
            btn.style.animation = 'slideIn 0.3s ease forwards';
        });
    }, 100);
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
        // Ordenar numericamente os semestres
        const numA = parseInt(a.match(/\d+/)?.[0] || 0);
        const numB = parseInt(b.match(/\d+/)?.[0] || 0);
        return numA - numB;
    });
    
    semestres.forEach(semestre => {
        const botao = document.createElement('button');
        botao.className = 'option-btn';
        
        // Ícone baseado no número do semestre
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
    
    // Animação de entrada
    setTimeout(() => {
        document.querySelectorAll('#semestres-container .option-btn').forEach((btn, index) => {
            btn.style.animationDelay = `${index * 0.05}s`;
            btn.style.animation = 'slideIn 0.3s ease forwards';
        });
    }, 100);
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
        // Verificar se todos os dados existem
        if (!dadosSalas || 
            !dadosSalas[estado.turno] || 
            !dadosSalas[estado.turno][estado.curso] || 
            !dadosSalas[estado.turno][estado.curso][estado.semestre]) {
            throw new Error('Sala não encontrada');
        }
        
        const info = dadosSalas[estado.turno][estado.curso][estado.semestre];
        
        // Configurações por prédio (ATUALIZADO com todos os prédios)
        const configPredios = {
            'PRINCIPAL': { 
                cor: '#2196F3', 
                icone: 'fas fa-landmark',
                classe: 'predio-principal',
                nome: 'PRÉDIO PRINCIPAL'
            },
            'ÁTRIO': { 
                cor: '#4CAF50', 
                icone: 'fas fa-tree',
                classe: 'predio-atrio',
                nome: 'PRÉDIO ÁTRIO'
            },
            'CH.1': { 
                cor: '#9C27B0', 
                icone: 'fas fa-building',
                classe: 'predio-ch1',
                nome: 'CH.1'
            },
            'CH.2': { 
                cor: '#FF9800', 
                icone: 'fas fa-university',
                classe: 'predio-ch2',
                nome: 'CH.2'
            }
        };
        
        const predioConfig = configPredios[info.predio] || configPredios['PRINCIPAL'];
        
        // Limpar formatação do andar
        let andarFormatado = info.andar || '';
        andarFormatado = andarFormatado
            .replace(/ANDAR/gi, '')
            .replace(/°|º/g, 'º')
            .trim() + 'º ANDAR';
        
        // Criar HTML do resultado
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
            
            <div style="
                background: #f8f9fa;
                padding: 15px;
                border-radius: 10px;
                margin-top: 20px;
                font-size: 0.9rem;
                color: #666;
            ">
                <i class="fas fa-info-circle"></i>
                <strong>Dica:</strong> Dirija-se à sala 10 minutos antes do horário.
            </div>
        `;
        
        // Registrar sucesso no contador
        registrarUso('sala_encontrada', info.sala, info.predio);
        
    } catch (error) {
        console.error('Erro ao mostrar resultado:', error);
        
        elementos.salaInfo.innerHTML = `
            <div style="text-align: center; padding: 40px 20px;">
                <i class="fas fa-exclamation-triangle" style="
                    font-size: 3rem;
                    color: #dc2626;
                    margin-bottom: 20px;
                "></i>
                <h3 style="color: #dc2626; margin-bottom: 15px;">Sala não encontrada</h3>
                <p style="color: #666; margin-bottom: 10px;">
                    Não foi possível localizar sua sala com as informações fornecidas.
                </p>
                <p style="color: #888; font-size: 0.9rem;">
                    Verifique se selecionou corretamente: Turno → Curso → Semestre
                </p>
                <button onclick="voltar(1)" style="
                    background: #003366;
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 25px;
                    margin-top: 20px;
                    cursor: pointer;
                ">
                    <i class="fas fa-redo"></i> Tentar Novamente
                </button>
            </div>
        `;
    }
}

// ==================== FUNÇÕES DE NAVEGAÇÃO ====================

// Mostrar etapa específica
function mostrarEtapa(numero) {
    // Esconder todas as etapas
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Mostrar etapa atual
    document.getElementById(`step${numero}`).classList.add('active');
    
    // Atualizar indicador de passos
    document.querySelectorAll('.step-item').forEach((item, index) => {
        if (index < numero) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Atualizar barra de progresso
function atualizarProgresso(percentual) {
    if (elementos.progressBar) {
        elementos.progressBar.style.width = `${percentual}%`;
    }
}

// Voltar para etapa anterior
function voltar(etapa) {
    mostrarEtapa(etapa);
    atualizarProgresso(etapa * 25);
    
    // Registrar ação de voltar
    registrarUso('voltar_etapa');
}

// Reiniciar aplicativo
function reiniciar() {
    // Resetar estado
    estado = { turno: null, curso: null, semestre: null };
    
    // Resetar seleções visuais
    document.querySelectorAll('.option-card.active, .option-btn.active').forEach(el => {
        el.classList.remove('active');
    });
    
    // Limpar containers
    elementos.cursosContainer.innerHTML = '';
    elementos.semestresContainer.innerHTML = '';
    
    // Voltar para primeira etapa
    mostrarEtapa(1);
    atualizarProgresso(25);
    
    // Registrar reinício
    registrarUso('reiniciar_app');
}

// ==================== FUNÇÕES DE COMPARTILHAMENTO ====================

async function compartilhar() {
    try {
        // Verificar se há resultado para compartilhar
        if (!estado.turno || !estado.curso || !estado.semestre) {
            mostrarNotificacao('Selecione uma sala primeiro', 'warning');
            return;
        }
        
        const info = dadosSalas[estado.turno][estado.curso][estado.semestre];
        
        const texto = `📚 UNIP - Minha Sala\n` +
                     `Sala: ${info.sala}\n` +
                     `Andar: ${info.andar}\n` +
                     `Prédio: ${info.predio}\n` +
                     `Curso: ${estado.curso} - ${estado.semestre}\n` +
                     `Turno: ${estado.turno === 'manha' ? 'Manhã' : 'Noite'}\n\n` +
                     `Encontre sua sala também: ${window.location.href}`;
        
        // Tentar usar Web Share API
        if (navigator.share) {
            await navigator.share({
                title: 'Minha Sala - UNIP',
                text: texto,
                url: window.location.href
            });
            
            mostrarNotificacao('Compartilhado com sucesso!', 'success');
        } 
        // Fallback: copiar para área de transferência
        else if (navigator.clipboard) {
            await navigator.clipboard.writeText(texto);
            mostrarNotificacao('📋 Sala copiada para a área de transferência!', 'success');
        } 
        // Fallback antigo
        else {
            const textArea = document.createElement('textarea');
            textArea.value = texto;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            mostrarNotificacao('Sala copiada!', 'success');
        }
        
        // Registrar compartilhamento
        registrarUso('compartilhar_sala');
        
    } catch (error) {
        console.error('Erro ao compartilhar:', error);
        mostrarNotificacao('Não foi possível compartilhar', 'error');
    }
}

// ==================== CONTADOR DE USUÁRIOS ====================

function inicializarContador() {
    // Incrementar contador de acessos únicos
    const hoje = new Date().toDateString();
    const ultimoAcesso = localStorage.getItem('unip_ultimo_acesso');
    
    if (ultimoAcesso !== hoje) {
        // Novo acesso hoje
        let totalAcessos = parseInt(localStorage.getItem('unip_total_acessos') || '0');
        totalAcessos++;
        
        localStorage.setItem('unip_total_acessos', totalAcessos);
        localStorage.setItem('unip_ultimo_acesso', hoje);
        localStorage.setItem('unip_primeiro_acesso', new Date().toISOString());
        
        // Atualizar display
        atualizarContadorDisplay(totalAcessos);
    } else {
        // Já acessou hoje, apenas mostrar contador
        const totalAcessos = parseInt(localStorage.getItem('unip_total_acessos') || '0');
        atualizarContadorDisplay(totalAcessos);
    }
    
    // Criar badge após alguns segundos
    setTimeout(criarBadgeContador, 3000);
}

function atualizarContadorDisplay(total) {
    const elementosContador = document.querySelectorAll('.contador-usuarios');
    elementosContador.forEach(el => {
        el.textContent = formatarNumero(total);
    });
}

function formatarNumero(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

function criarBadgeContador() {
    if (document.getElementById('badge-contador') || !navigator.onLine) return;
    
    const total = parseInt(localStorage.getItem('unip_total_acessos') || '0');
    
    const badge = document.createElement('div');
    badge.id = 'badge-contador';
    badge.innerHTML = `
        <div onclick="this.parentElement.style.opacity='0'; 
                      setTimeout(()=>this.parentElement.remove(), 500)" 
             style="cursor: pointer;">
            <i class="fas fa-user-graduate"></i>
            <span>${formatarNumero(total)} alunos</span>
            <i class="fas fa-times" style="margin-left: 8px; font-size: 0.8rem;"></i>
        </div>
    `;
    
    document.body.appendChild(badge);
    
    // Auto-remover após 15 segundos
    setTimeout(() => {
        if (badge.parentNode) {
            badge.style.opacity = '0';
            badge.style.transition = 'opacity 0.5s';
            setTimeout(() => badge.remove(), 500);
        }
    }, 15000);
}

function registrarUso(acao, ...detalhes) {
    try {
        // Salvar no localStorage para estatísticas
        const logs = JSON.parse(localStorage.getItem('unip_logs_uso') || '[]');
        logs.push({
            acao: acao,
            detalhes: detalhes,
            data: new Date().toISOString(),
            usuario: localStorage.getItem('unip_usuario_id') || 'anonimo'
        });
        
        // Manter apenas últimos 100 logs
        if (logs.length > 100) logs.shift();
        
        localStorage.setItem('unip_logs_uso', JSON.stringify(logs));
    } catch (e) {
        // Ignorar erros de localStorage
    }
}

// ==================== FUNÇÕES AUXILIARES ====================

function mostrarNotificacao(mensagem, tipo = 'info') {
    // Remover notificação anterior se existir
    const notificacaoAnterior = document.getElementById('notificacao-app');
    if (notificacaoAnterior) notificacaoAnterior.remove();
    
    const cores = {
        success: '#4CAF50',
        error: '#dc2626',
        info: '#2196F3',
        warning: '#FF9800'
    };
    
    const notificacao = document.createElement('div');
    notificacao.id = 'notificacao-app';
    notificacao.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${cores[tipo] || cores.info};
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideIn 0.3s ease;
        ">
            <i class="fas fa-${tipo === 'success' ? 'check-circle' : 
                             tipo === 'error' ? 'exclamation-circle' : 
                             'info-circle'}"></i>
            <span>${mensagem}</span>
        </div>
    `;
    
    document.body.appendChild(notificacao);
    
    // Auto-remover após 3 segundos
    setTimeout(() => {
        if (notificacao.parentNode) {
            notificacao.style.opacity = '0';
            notificacao.style.transition = 'opacity 0.5s';
            setTimeout(() => notificacao.remove(), 500);
        }
    }, 3000);
}

// Detectar modo offline/online
function atualizarStatusConexao() {
    if (!navigator.onLine) {
        const offlineMsg = document.createElement('div');
        offlineMsg.id = 'offline-indicator';
        offlineMsg.innerHTML = `
            <div style="
                position: fixed;
                top: 10px;
                right: 10px;
                background: #FF9800;
                color: white;
                padding: 8px 15px;
                border-radius: 20px;
                font-size: 12px;
                z-index: 9999;
                display: flex;
                align-items: center;
                gap: 8px;
                animation: pulse 2s infinite;
            ">
                <i class="fas fa-wifi-slash"></i>
                Modo Offline
            </div>
        `;
        document.body.appendChild(offlineMsg);
    } else {
        const offlineIndicator = document.getElementById('offline-indicator');
        if (offlineIndicator) offlineIndicator.remove();
    }
}

// Inicializar detector de conexão
window.addEventListener('online', atualizarStatusConexao);
window.addEventListener('offline', atualizarStatusConexao);
document.addEventListener('DOMContentLoaded', atualizarStatusConexao);

// Suporte para teclado (acessibilidade)
document.addEventListener('keydown', function(e) {
    // Tecla ESC volta uma etapa
    if (e.key === 'Escape') {
        const etapasAtivas = Array.from(document.querySelectorAll('.step.active'));
        if (etapasAtivas.length > 0) {
            const etapaAtual = parseInt(etapasAtivas[0].id.replace('step', ''));
            if (etapaAtual > 1) voltar(etapaAtual - 1);
        }
    }
    
    // Tecla F5 recarrega a página
    if (e.key === 'F5') {
        e.preventDefault();
        reiniciar();
    }
});

// Service Worker (PWA) - Registro simplificado
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(() => console.log('Service Worker registrado'))
            .catch(err => console.log('SW registro falhou:', err));
    });
}

// Salvar dados para uso offline
if (typeof dadosSalas !== 'undefined') {
    try {
        localStorage.setItem('unip_dados_salas', JSON.stringify(dadosSalas));
        localStorage.setItem('unip_dados_cache_date', new Date().toISOString());
    } catch (e) {
        console.log('Não foi possível salvar dados no cache local');
    }
}
