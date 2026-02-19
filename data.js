const dadosSalas = {
    manha: {
        "ADMINISTRAÇÃO": {
            "2ºA / 3ºA": { sala: "C-301", andar: "3º", predio: "PRINCIPAL" },
            "4º A / 5ºA": { sala: "C-304", andar: "3º", predio: "PRINCIPAL" },
            "8ºA(online)": { sala: "C-308", andar: "3º", predio: "PRINCIPAL" }
        },
        "ANÁLISE E DES. DE SISTEMAS": {
            "1ºA": { sala: "A-602", andar: "6º", predio: "ÁTRIO" },
            "2ºA / 3ºA": { sala: "A-603", andar: "6º", predio: "ÁTRIO" }
        },
        "BIOMEDICINA": {
            "1ºA": { sala: "A-6504", andar: "5º", predio: "ÁTRIO" },
            "2ºA / 3ºA": { sala: "A-505", andar: "5º", predio: "ÁTRIO" },
            "6ºA / 7ºA": { sala: "A-503", andar: "5º", predio: "ÁTRIO" }
        },
        "CIÊNCIAS DA COMPUTAÇÃO": {
            "1ºA": { sala: "A-303", andar: "3º", predio: "ÁTRIO" },
            "2ºA / 3ºA": { sala: "A-302", andar: "3º", predio: "ÁTRIO" }
        },
        "DIREITO": {
            "1ºA": { sala: "C-306", andar: "3º", predio: "PRINCIPAL" },
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
            "1ºA": { sala: "C-202", andar: "2º", predio: "PRINCIPAL" },
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
        "CIÊNCIAS CONTÁBEIS": {
            "1ºP": { sala: "603", andar: "6ºANDAR", predio: "CH.1" },
            "2ºP/3ºP": { sala: "202", andar: "2º ANDAR", predio: "CH.1" },
            "4ºP/5ºP": { sala: "510", andar: "5º ANDAR", predio: "CH.1" },
            "6ºP/7ºP": { sala: "208", andar: "2º ANDAR", predio: "CH.1" },
            "8ºP": { sala: "407", andar: "4º ANDAR", predio: "CH.1" }
        },
        "CIÊNCIAS DA COMPUTAÇÃO": {
            "1ºP": { sala: "203", andar: "2ºANDAR", predio: "CH.1" },
            "2ºP/3ºP-Q": { sala: "403", andar: "4º ANDAR", predio: "CH.1" },
            "4ºP/5ºP": { sala: "702", andar: "7º ANDAR", predio: "CH.1" },
            "6ºP/7ºP-Q": { sala: "405", andar: "4º ANDAR", predio: "CH.1" }
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
        "ED. FÍSICA": {
            "2ºP/3ºP": { sala: "P.5.4", andar: "5ºANDAR", predio: "CH.2" },
            "4ºP/5ºP": { sala: "P.5.3", andar: "5ºANDAR", predio: "CH.2" },
            "7ºP": { sala: "P.3.4", andar: "3ºANDAR", predio: "CH.2" }
        },
        "ENFERMAGEM": {
            "2ºP/3°P": { sala: "A-403", andar: "4º ANDAR", predio: "ÁTRIO" },
            "4°P/5°P": { sala: "A-303", andar: "3° ANDAR", predio: "ÁTRIO" },
            "6°P/7ºP": { sala: "A-302", andar: "3º ANDAR", predio: "ÁTRIO" },
            "8-P": { sala: "A-304", andar: "3º ANDAR", predio: "ÁTRIO" }
        },
        "ENGENHARIA BÁSICA": {
            "1ºP": { sala: "107", andar: "1º ANDAR", predio: "CH.1" },
            "2ºP/3ºP-Q": { sala: "705", andar: "7º ANDAR", predio: "CH.1" }
        },
        "ENGENHARIA CIVIL": {
            "4ºP/5ºP": { sala: "503", andar: "5º ANDAR", predio: "CH.1" },
            "6ºP/7ºP": { sala: "309", andar: "3º ANDAR", predio: "CH.1" },
            "8ºP/9ºP": { sala: "502", andar: "5º ANDAR", predio: "CH.1" }
        },
        "ENGENHARIA MECÂNICA": {
            "4ºP/5ºP": { sala: "210", andar: "2º ANDAR", predio: "CH.1" },
            "6ºP/7ºP": { sala: "706", andar: "7º ANDAR", predio: "CH.1" },
            "8ºP/9ºP": { sala: "701", andar: "7º ANDAR", predio: "CH.1" }
        },
        "ENGENHARIA DE PRODUÇÃO": {
            "6ºP/7ºP": { sala: "209", andar: "2º ANDAR", predio: "CH.1" }
        },
        "ESTÉTICA E COSMÉTICA": {
            "2ºP/3ºP": { sala: "P.3.2", andar: "3ºANDAR", predio: "CH.2" },
            "4ºP/5ºP": { sala: "P.4.4", andar: "4ºANDAR", predio: "CH.2" },
            "6ºP": { sala: "P.3.3", andar: "3ºANDAR", predio: "CH.2" }
        },
        "FARMÁCIA": {
            "2ºP/3°P": { sala: "A-602", andar: "6º ANDAR", predio: "ÁTRIO" },
            "4°P/5°P": { sala: "A-402", andar: "4°ANDAR", predio: "ÁTRIO" },
            "8ºP": { sala: "A-405", andar: "4º ANDAR", predio: "ÁTRIO" }
        },
        "FISIOTERAPIA": {
            "2°P/3ºP": { sala: "A-503", andar: "5° ANDAR", predio: "ÁTRIO" },
            "4°P/5°P": { sala: "A-504", andar: "5° ANDAR", predio: "ÁTRIO" },
            "6°P/7ºP": { sala: "A-505", andar: "5° ANDAR", predio: "ÁTRIO" },
            "8ºP": { sala: "A-502", andar: "5º ANDAR", predio: "ÁTRIO" }
        },
        "GESTÃO FINANCEIRA": {
            "2ºP/3ºP": { sala: "P.3.1", andar: "3ºANDAR", predio: "CH.2" },
            "4ºP": { sala: "P.4.2", andar: "4ºANDAR", predio: "CH.2" }
        },
        "GESTÃO MARKETING": {
            "2ºP/3ºP": { sala: "P.5.1", andar: "5ºANDAR", predio: "CH.2" },
            "4ºP": { sala: "P.4.2", andar: "4ºANDAR", predio: "CH.2" }
        },
        "GESTÃO DE RH": {
            "2ºP/3ºP": { sala: "P.4.1", andar: "4ºANDAR", predio: "CH.2" },
            "4ºP": { sala: "P.4.2", andar: "4ºANDAR", predio: "CH.2" }
        },
        "JORNALISMO": {
            "2°P/3ºP": { sala: "A-605", andar: "6° ANDAR", predio: "ÁTRIO" },
            "4°P/5°P": { sala: "A-604", andar: "6° ANDAR", predio: "ÁTRIO" },
            "2°P/3ºP": { sala: "C-308", andar: "3° ANDAR", predio: "PRINCIPAL" }
        },
        "NUTRIÇÃO": {
            "2ºP/3ºP": { sala: "303", andar: "3º ANDAR", predio: "CH.1" },
            "4ºP/5ºP": { sala: "206", andar: "2º ANDAR", predio: "CH.1" },
            "6ºP/7ºP": { sala: "410", andar: "4º ANDAR", predio: "CH.1" }
        },
        "PEDAGOGIA": {
            "2ºP/3ºP": { sala: "201", andar: "2º ANDAR", predio: "CH.1" },
            "6ºP/7ºP": { sala: "501", andar: "5º ANDAR", predio: "CH.1" }
        },
        "PROPAGANDA E MARKETING": {
            "4°P/5°P": { sala: "C-405", andar: "4° ANDAR", predio: "PRINCIPAL" },
            "6°P/7ºP": { sala: "C-404", andar: "4º ANDAR", predio: "PRINCIPAL" }
        },
        "PSICOLOGIA": {
            "1ºP": { sala: "108", andar: "1º ANDAR", predio: "CH.1" },
            "2ºP/3ºP-Q": { sala: "105", andar: "1º ANDAR", predio: "CH.1" },
            "4ºP/5ºP-Q": { sala: "305", andar: "3º ANDAR", predio: "CH.1" },
            "6ºP/7ºP-Q": { sala: "505", andar: "5º ANDAR", predio: "CH.1" },
            "6ºQ/7ºR": { sala: "703", andar: "7º ANDAR", predio: "CH.1" },
            "8ºQ/9ºP-Q": { sala: "605", andar: "6º ANDAR", predio: "CH.1" },
            "8ºP/9ºR": { sala: "205", andar: "2º ANDAR", predio: "CH.1" },
            "10ºP-Q": { sala: "402", andar: "4º ANDAR", predio: "CH.1" }
        },
        "RELAÇÕES INTERNACIONAIS": {
            "2°P/3ºP": { sala: "C-205", andar: "2°ANDAR", predio: "PRINCIPAL" },
            "4°P/5°P": { sala: "C-204", andar: "2°ANDAR", predio: "PRINCIPAL" }
        },
        "SISTEMAS DE INFORMAÇÃO": {
            "4ºP/5ºP": { sala: "310", andar: "3º ANDAR", predio: "CH.1" },
            "6ºP/7ºP": { sala: "408", andar: "4º ANDAR", predio: "CH.1" }
        },
        "TECNOLOGIA DA INFORMAÇÃO": {
            "2°P/3ºP": { sala: "C-503", andar: "5º ANDAR", predio: "PRINCIPAL" },
            "4°P": { sala: "C-504", andar: "5° ANDAR", predio: "PRINCIPAL" }
        }
    }

};

