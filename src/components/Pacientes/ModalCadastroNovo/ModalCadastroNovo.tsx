import moment from "moment"
import { PacienteBanco } from "../../../types/PacienteTypes"
import { Button } from "../../styleComponents/button"
import { InputWithTitle } from "../../styleComponents/Pacientes/ModalCadastroNovo/InputWithTitle"
import { SelectWithTitle } from "../../styleComponents/Pacientes/ModalCadastroNovo/selectWithTitle"
import { Title } from "../../styleComponents/title"
import "./styleModalCadastroNovo.scss"

interface props {
    modalCadastrarNovo: boolean
    setModalCadastrarNovo: React.Dispatch<React.SetStateAction<boolean>>
    cadastroPaciente: PacienteBanco
    setCadastroPaciente: React.Dispatch<React.SetStateAction<PacienteBanco>>
    postCadastroPacientes: (cadastroPaciente: PacienteBanco) => void
    putCadastroPacientes: (cadastroPaciente: PacienteBanco) => void
    editMode: boolean
}

export function ModalCadastroNovo(props: props) {

    const sexos = [{ value: "", label: "Selecionar" }, { value: "M", label: "Masculino" }, { value: "F", label: "Feminino" }]
    const estadoCivil = [{ value: "", label: "Selecionar" }, { value: "S", label: "Solteiro(a)" }, { value: "C", label: "Casado(a)" }, { value: "D", label: "Divorciado(a)" }, { value: "V", label: "Viuvo(a)" }]
    const preferenciaContato = [{ value: "", label: "Selecionar" }, { value: "E", label: "Email" }, { value: "S", label: "SMS" }, { value: "T", label: "Telefone" }, { value: "W", label: "WhatsApp" }]

    function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (e.target === e.currentTarget) {
            props.setModalCadastrarNovo(false)
        }

    }

    function submitForm() {
        if(props.editMode){
            props.putCadastroPacientes(props.cadastroPaciente)
        }else{
            props.postCadastroPacientes(props.cadastroPaciente)
        }       
        props.setModalCadastrarNovo(false)
    }

    function cancelar() {
        props.setModalCadastrarNovo(false)
        props.setCadastroPaciente({
            
        })
    }

    function handleChange(e: Event){
        const {name, value} = e.target as HTMLInputElement
        props.setCadastroPaciente({...props.cadastroPaciente, [name]: value})
    }
    return (

        <div className="modalCadastroNovo-background" style={{ display: props.modalCadastrarNovo ? "flex" : "none" }} onClick={(e) => closeModal(e)}>
            <div className="modalCadastroNovo">
                <div className="modalCadastroNovo-content">
                    <div className="modalCadastroNovo-dadosPessoais">
                        <div className="modalCadastroNovo-dadosPessoais-title">
                            <Title style={{ fontSize: "20px", fontWeight: "600" }}>Dados Pessoais</Title>
                        </div>
                        <div>
                            <InputWithTitle name="nm_paciente" value={props.cadastroPaciente.nm_paciente} fnEdit={(e) => handleChange(e)} title="Nome*" placeholder="Nome do Paciente" inputHeight="30px" wrapperWidth="40%" />
                            <InputWithTitle name="cpf" value={props.cadastroPaciente.cpf} fnEdit={(e) => handleChange(e)} title="CPF*" placeholder="___.___.___-__" inputHeight="30px" wrapperWidth="30%" />
                            <InputWithTitle name="dt_nascimento" value={moment(props.cadastroPaciente.dt_nascimento).format("YYYY-MM-DD")} fnEdit={(e) => handleChange(e)} type="date" title="Data Nascimento" placeholder="__/__/____" inputHeight="30px" wrapperWidth="30%" />
                        </div>
                        <div>
                            <InputWithTitle name="rg" value={props.cadastroPaciente.rg} fnEdit={(e) => handleChange(e)} title="RG" inputHeight="30px" wrapperWidth="30%" />
                            <SelectWithTitle name="estado_civil"  value={props.cadastroPaciente.estado_civil} fnEdit={(e) => handleChange(e)} listaItens={estadoCivil} title="Estado Civil*" inputHeight="30px" wrapperWidth="40%" />
                            <SelectWithTitle name="ds_sexo" value={props.cadastroPaciente.ds_sexo} fnEdit={(e) => handleChange(e)} listaItens={sexos} title="Sexo/Gênero*" inputHeight="30px" wrapperWidth="40%" />
                        </div>
                        <div>
                            <InputWithTitle name="nm_paciente" value={props.cadastroPaciente.breve_diagnostico} fnEdit={(e) => handleChange(e)} title="Breve Diagnóstico" inputHeight="30px" wrapperWidth="40%" />
                            <InputWithTitle name="breve_diagnostico" value={props.cadastroPaciente.profissao} fnEdit={(e) => handleChange(e)} title="Profissão" inputHeight="30px" wrapperWidth="30%" />
                            <InputWithTitle name="empresa" value={props.cadastroPaciente.empresa} fnEdit={(e) => handleChange(e)} title="Nome da Empresa" inputHeight="30px" wrapperWidth="30%" />
                        </div>
                        <div>
                            <InputWithTitle name="numero_telefone" value={props.cadastroPaciente.numero_telefone} fnEdit={(e) => handleChange(e)} title="Celular*" inputHeight="30px" wrapperWidth="25%" />
                            <InputWithTitle name="telefone_fixo" value={props.cadastroPaciente.telefone_fixo} fnEdit={(e) => handleChange(e)} title="Telefone Fixo" inputHeight="30px" wrapperWidth="25%" />
                            <InputWithTitle name="email" value={props.cadastroPaciente.email} fnEdit={(e) => handleChange(e)} title="Email" inputHeight="30px" wrapperWidth="25%" />
                            <SelectWithTitle name="preferencia_contato" value={props.cadastroPaciente.preferencia_contato} fnEdit={(e) => handleChange(e)} listaItens={preferenciaContato} title="Preferência de Contato" inputHeight="30px" wrapperWidth="25%" />
                        </div>
                        <div>
                            <SelectWithTitle name="cd_convenio" value={props.cadastroPaciente.cd_convenio} fnEdit={(e) => handleChange(e)} title="Convênio" inputHeight="30px" wrapperWidth="25%" />
                            <InputWithTitle name="numero_convenio" value={props.cadastroPaciente.numero_convenio} fnEdit={(e) => handleChange(e)} title="Número do Convênio" inputHeight="30px" wrapperWidth="25%" />
                            <InputWithTitle name="validade_carteirinha" value={props.cadastroPaciente.validade_carteirinha} fnEdit={(e) => handleChange(e)} type="date" title="Validade da Carteirinha" placeholder="__/__/____" inputHeight="30px" wrapperWidth="25%" />
                            <InputWithTitle name="numero_cns" value={props.cadastroPaciente.numero_cns} fnEdit={(e) => handleChange(e)} title="Número no CNS" inputHeight="30px" wrapperWidth="25%" />
                        </div>
                    </div>
                    <div className="modalCadastroNovo-dadosEndereco">
                        <div className="modalCadastroNovo-dadosEndereco-title">
                            <Title style={{ fontSize: "20px", fontWeight: "600" }}>Dados de Endereço</Title>
                        </div>
                        <div>
                            <SelectWithTitle name="nm_pais" fnEdit={(e) => handleChange(e)} title="País" inputHeight="30px" wrapperWidth="25%" />
                            <InputWithTitle name="cep" fnEdit={(e) => handleChange(e)} title="CEP" inputHeight="30px" wrapperWidth="25%" />
                            <InputWithTitle name="nm_estado" fnEdit={(e) => handleChange(e)} title="Estado" inputHeight="30px" wrapperWidth="25%" />
                            <InputWithTitle name="nm_cidade" fnEdit={(e) => handleChange(e)} title="Cidade" inputHeight="30px" wrapperWidth="25%" />
                        </div>
                        <div>
                            <InputWithTitle name="logradouro" fnEdit={(e) => handleChange(e)} title="Logradouro" inputHeight="30px" wrapperWidth="25%" />
                            <InputWithTitle name="numero_casa" fnEdit={(e) => handleChange(e)} title="Número" inputHeight="30px" wrapperWidth="25%" />
                            <InputWithTitle name="nm_bairro" fnEdit={(e) => handleChange(e)} title="Bairro" inputHeight="30px" wrapperWidth="25%" />
                            <InputWithTitle name="complemento" fnEdit={(e) => handleChange(e)} title="Complemento" inputHeight="30px" wrapperWidth="25%" />
                        </div>
                        <div className="modalCadastroNovo-dadosEndereco-buttons">
                            <Button onClick={() => cancelar()} style={{ width: "8rem", background: "#EF1B1B", color: "white" }}>Cancelar</Button>
                            <Button onClick={() => submitForm()} style={{ width: "8rem", background: "#5198EC", color: "white" }}>Salvar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}