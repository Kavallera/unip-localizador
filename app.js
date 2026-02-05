let estado = { turno: null, curso: null, semestre: null };

function selectTurno(turno) {
    estado.turno = turno;
    popularCursos();
    mostrarEtapa(2);
    atualizarProgresso(50);
}

function popularCursos() {
    const container = document.getElementById('cursos-container');
    container.innerHTML = '';
    
    const cursos = Object.keys(dadosSalas[estado.turno] || {});
    
    cursos.forEach(curso => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.innerHTML = `<i class="fas fa-graduation-cap"></i> ${curso}`;
        btn.onclick = () => selectCurso(curso);
        container.appendChild(btn);
    });
}

function selectCurso(curso) {
    estado.curso = curso;
    popularSemestres();
    mostrarEtapa(3);
    atualizarProgresso(75);
}

function popularSemestres() {
    const container = document.getElementById('semestres-container');
    container.innerHTML = '';
    
    const semestres = Object.keys(dadosSalas[estado.turno][estado.curso] || {});
    
    semestres.forEach(semestre => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.innerHTML = `<i class="fas fa-calendar-alt"></i> ${semestre}`;
        btn.onclick = () => selectSemestre(semestre);
        container.appendChild(btn);
    });
}

function selectSemestre(semestre) {
    estado.semestre = semestre;
    mostrarResultado();
    mostrarEtapa(4);
    atualizarProgresso(100);
}

function mostrarResultado() {
    const info = dadosSalas[estado.turno][estado.curso][estado.semestre];
    const container = document.getElementById('sala-info');
    
    const predioCor = info.predio === 'ÁTRIO' ? '#2E7D32' : '#1565C0';
    const predioIcone = info.predio === 'ÁTRIO' ? 'fas fa-tree' : 'fas fa-building';
    
    container.innerHTML = `
        <h3 style="color: ${predioCor};">${info.sala}</h3>
        <p><i class="fas fa-walking"></i> <strong>Andar:</strong> ${info.andar}</p>
        <p><i class="${predioIcone}"></i> <strong>Prédio:</strong> ${info.predio}</p>
        <p><i class="fas fa-clock"></i> <strong>Turno:</strong> ${estado.turno === 'manha' ? 'Manhã' : 'Noite'}</p>
        <p><i class="fas fa-book"></i> <strong>Curso:</strong> ${estado.curso}</p>
        <p><i class="fas fa-calendar"></i> <strong>Semestre:</strong> ${estado.semestre}</p>
    `;
}

function mostrarEtapa(numero) {
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step${numero}`).classList.add('active');
}

function atualizarProgresso(percentual) {
    document.getElementById('progressBar').style.width = `${percentual}%`;
}

function voltar(etapa) {
    mostrarEtapa(etapa);
    atualizarProgresso(etapa * 25);
}

function reiniciar() {
    estado = { turno: null, curso: null, semestre: null };
    mostrarEtapa(1);
    atualizarProgresso(25);
}

function compartilhar() {
    const info = dadosSalas[estado.turno][estado.curso][estado.semestre];
    const texto = `Minha sala: ${info.sala} | ${info.andar} | Prédio ${info.predio}`;
    
    if (navigator.share) {
        navigator.share({ title: 'Minha Sala', text: texto });
    } else {
        navigator.clipboard.writeText(texto);
        alert('Sala copiada para a área de transferência!');
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    atualizarProgresso(25);
});