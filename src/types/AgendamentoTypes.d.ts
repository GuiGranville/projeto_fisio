export interface AgendamentoBanco{
    cd_it_agenda_central?: number
    hr_inicio?: string
    dt_inicio?: string
    hr_fim?: string
    dt_fim?: string
    cd_paciente?: number
    cd_atendimento?: number
    cd_profissional?: number
    cd_procedimento?: number
    cd_sala?: number
    status?: string
    situacao?: string
    observacao? : string
    lembrete_sms?: string
    lembrete_whatsapp?: string
}

export interface AgendamentoRetornoSelect{
    cd_it_agenda_central: number
	cd_paciente: number
	nm_paciente: string
	cd_profissional: number
	nm_profissional: string
	hr_inicio: string
	dt_inicio: string
	hr_fim: string
	dt_fim: string
}

export interface ProcedimentoBanco{
    cd_procedimento?: number
    nm_procedimento?: string
}

export interface SalaBanco{
    cd_sala?: number
    nm_sala?: string
}