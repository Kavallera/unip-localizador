const dadosSalas = {
    manha: {
        "ADMINISTRAÇÃO": {
            "2ºA / 3ºA": { sala: "C-301", andar: "3º", predio: "PRINCIPAL" },
            "4º A / 5ºA": { sala: "C-304", andar: "3º", predio: "PRINCIPAL" },
            "8ºA(online)": { sala: "C-308", andar: "3º", predio: "PRINCIPAL" }
        },
        "ANÁLISE E DES. DE SISTEMAS": {
            "2ºA / 3ºA": { sala: "A-603", andar: "6º", predio: "ÁTRIO" }
        },
        "BIOMEDICINA": {
            "2ºA / 3ºA": { sala: "A-505", andar: "5º", predio: "ÁTRIO" },
            "6ºA / 7ºA": { sala: "A-503", andar: "5º", predio: "ÁTRIO" }
        },
        "CIÊNCIAS DA COMPUTAÇÃO": {
            "2ºA / 3ºA": { sala: "A-302", andar: "3º", predio: "ÁTRIO" }
        },
        "DIREITO": {
            "2ºA / 3ºA B": { sala: "C-302", andar: "3º", predio: "PRINCIPAL" },
            "4º A / 5ºA": { sala: "C-303", andar: "3º", predio: "PRINCIPAL" },
            "6ºA / 7ºA": { sala: "C-402", andar: "4º", predio: "PRINCIPAL" },
            "8ºA / 9ºA": { sala: "C-307", andar: "3º", predio: "PRINCIPAL" }
        },
        "ED. FÍSICA": {
            "2ºA / 3ºA": { sala: "A-304", andar: "3º", predio: "ÁTRIO" }
        },
        "FARMÁCIA": {
            "2ºA / 3ºA": { sala: "A-404", andar: "4º", predio: "ÁTRIO" },
            "6ºA / 7ºA": { sala: "A-402", andar: "4º", predio: "ÁTRIO" },
            "8ºA": { sala: "A-403", andar: "4º", predio: "ÁTRIO" }
        },
        "JORNALISMO": {
            "6ºA / 7ºA": { sala: "A-604", andar: "6º", predio: "ÁTRIO" }
        },
        "PSICOLOGIA": {
            "2ºA / 3ºA": { sala: "C-206", andar: "2º", predio: "PRINCIPAL" },
            "4º A / 5ºA-B": { sala: "C-406", andar: "4º", predio: "PRINCIPAL" },
            "6ºA / 7ºA": { sala: "C-203", andar: "2º", predio: "PRINCIPAL" },
            "8ºA / 9ºA": { sala: "C-207", andar: "2º", predio: "PRINCIPAL" },
            "10ºA(online)": { sala: "C-208", andar: "2º", predio: "PRINCIPAL" }
        }
    },
    noite: {
        "ADMINISTRAÇÃO": {
            "2°P/3ºP-Q": { sala: "C-407", andar: "4°ANDAR", predio: "PRINCIPAL" },
            "4°P/5°P": { sala: "C-207", andar: "2°ANDAR", predio: "PRINCIPAL" },
            "6°P-Q / 7ªP-Q-R": { sala: "C-203", andar: "2º ANDAR", predio: "PRINCIPAL" }
        },
        "ANALISE E DESENV. DE SISTEMAS": {
            "2°P/3ºP-Q-R": { sala: "C-303", andar: "3ºANDAR", predio: "PRINCIPAL" },
            "4°P-Q": { sala: "C-504", andar: "5°ANDAR", predio: "PRINCIPAL" },
            "2°P/3ºP": { sala: "A-501", andar: "5ºANDAR", predio: "ÁTRIO" },
            "4°P/5°P": { sala: "A-201", andar: "2°ANDAR", predio: "ÁTRIO" },
            "6°P/7°P": { sala: "A-401", andar: "4º ANDAR", predio: "ÁTRIO" },
            "8°P": { sala: "A-601", andar: "6º ANDAR", predio: "ÁTRIO" },
            "9°P": { sala: "A-101", andar: "1º ANDAR", predio: "ÁTRIO" }
        },
        "BIOMEDICINA": {
            "2ºP/3°P": { sala: "A-202", andar: "2ºANDAR", predio: "ÁTRIO" },
            "4°P/5°P": { sala: "A-203", andar: "2°ANDAR", predio: "ÁTRIO" }
        },
        "CIÊNCIAS ECONÔMICAS": {
            "2°P/3ºP-Q": { sala: "C-507", andar: "5º ANDAR", predio: "PRINCIPAL" },
            "4°P/5°P": { sala: "C-506", andar: "5°ANDAR", predio: "PRINCIPAL" }
        },
        "DIREITO": {
            "2°P/3ºP-Q": { sala: "C-603", andar: "6°ANDAR", predio: "PRINCIPAL" },
            "2°Q/3°R-S": { sala: "C-604", andar: "6°ANDAR", predio: "PRINCIPAL" },
            "4°P/5°P": { sala: "C-602", andar: "6°ANDAR", predio: "PRINCIPAL" },
            "4°Q/5°R-S": { sala: "C-609", andar: "6°ANDAR", predio: "PRINCIPAL" },
            "6°Q/7°P-Q": { sala: "C-104", andar: "1º ANDAR", predio: "PRINCIPAL" },
            "6°P/7°R": { sala: "C-302", andar: "3°ANDAR", predio: "PRINCIPAL" },
            "8°P-Q": { sala: "C-304", andar: "2°ANDAR", predio: "PRINCIPAL" },
            "9°P-Q": { sala: "C-509", andar: "5º ANDAR", predio: "PRINCIPAL" },
            "9°R-S": { sala: "C-508", andar: "5º ANDAR", predio: "PRINCIPAL" }
        },
        "DESIGN GRÁFICO": {
            "2°P/3ºP": { sala: "C-208", andar: "2°ANDAR", predio: "PRINCIPAL" },
            "4°P": { sala: "C-301", andar: "3°ANDAR", predio: "PRINCIPAL" }
        },
        "ENFERMAGEM": {
            "2ºP/3°P": { sala: "A-403", andar: "4º ANDAR", predio: "ÁTRIO" },
            "4°P/5°P": { sala: "A-303", andar: "3° ANDAR", predio: "ÁTRIO" },
            "6°P/7ºP": { sala: "A-302", andar: "3º ANDAR", predio: "ÁTRIO" },
            "8-P": { sala: "A-304", andar: "3º ANDAR", predio: "ÁTRIO" }
        },
        "FARMÁCIA": {
            "2ºP/3°P": { sala: "A-602", andar: "6º ANDAR", predio: "ÁTRIO" },
            "4°P/5°P": { sala: "A-402", andar: "4°ANDAR", predio: "ÁTRIO" },
            "8ºP": { sala: "A-405", andar: "4º ANDAR", predio: "ÁTRIO" }
        },
        "FISIOTERAPIA": {
            "2°P/3ºP": { sala: "A-503", andar: "5° ANDAR", predio: "ÁTRIO" },
            "4°P/5°P": { sala: "A-504", andar: "5° ANDAR", predio: "ÁTRIO" },
            "6°P/ 7ºP": { sala: "A-505", andar: "5° ANDAR", predio: "ÁTRIO" },
            "8ºP": { sala: "A-502", andar: "5º ANDAR", predio: "ÁTRIO" }
        },
        "JORNALISMO": {
            "2°P/3ºP": { sala: "A-605", andar: "6° ANDAR", predio: "ÁTRIO" },
            "4°P/5°P": { sala: "A-604", andar: "6° ANDAR", predio: "ÁTRIO" },
            "2°P/3ºP": { sala: "C-308", andar: "3° ANDAR", predio: "PRINCIPAL" }
        },
        "PROPAGANDA E MARKETING": {
            "4°P/5°P": { sala: "C-405", andar: "4° ANDAR", predio: "PRINCIPAL" },
            "6°P / 7ºP": { sala: "C-404", andar: "4º ANDAR", predio: "PRINCIPAL" }
        },
        "RELAÇÕES INTERNACIONAIS": {
            "2°P/3ºP": { sala: "C-205", andar: "2°ANDAR", predio: "PRINCIPAL" },
            "4°P/5°P": { sala: "C-204", andar: "2°ANDAR", predio: "PRINCIPAL" }
        },
        "TECNOLOGIA DA INFORMAÇÃO": {
            "2°P/3ºP": { sala: "C-503", andar: "5º ANDAR", predio: "PRINCIPAL" },
            "4°P": { sala: "C-504", andar: "5° ANDAR", predio: "PRINCIPAL" }
        }
    }
};