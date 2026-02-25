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
        botao.class
