
import { Button } from "../../styleComponents/button"
import { InputWithTitle } from "../../styleComponents/Pacientes/ModalCadastroNovo/InputWithTitle"
import { SelectWithTitle } from "../../styleComponents/Pacientes/ModalCadastroNovo/selectWithTitle"
import { Title } from "../../styleComponents/title"
import "./styleModalCadastroNovo.scss"
import { ProfissionalBanco } from "../../../types/ProfissionalTypes"

interface props {
    modalCadastrarNovo: boolean
    setModalCadastrarNovo: React.Dispatch<React.SetStateAction<boolean>>
    editMode: boolean
    setCadastroProfissional: React.Dispatch<React.SetStateAction<ProfissionalBanco>>
    cadastroProfissional: ProfissionalBanco
    postCadastroProfissionais: (cadastroProfissional: ProfissionalBanco) => void
    putCadastroProfissionais: (cadastroProfissional: ProfissionalBanco) => void
}

export function ModalCadastroNovo(props: props) {

    const privilegio = [{ value: "", label: "Selecionar" }, { value: "U", label: "Usuário" }, { value: "A", label: "Administrador" }]

    function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (e.target === e.currentTarget) {
            props.setModalCadastrarNovo(false)
        }

    }

    function submitForm() {
        if(props.editMode){
           props.putCadastroProfissionais(props.cadastroProfissional)
        }else{
            props.postCadastroProfissionais(props.cadastroProfissional)
        }
    }

    function cancelar() {
        props.setModalCadastrarNovo(false)
        props.setCadastroProfissional({})
    }

    function handleChange(e: Event){
        const {name, value} = e.target as HTMLInputElement
        props.setCadastroProfissional({...props.cadastroProfissional, [name]: value})
    }
    return (

        <div className="modalCadastroNovo-background" style={{ display: props.modalCadastrarNovo ? "flex" : "none" }} onClick={(e) => closeModal(e)}>
            <div className="modalCadastroNovo-profissional">
                <div className="modalCadastroNovo-content">
                    <div className="modalCadastroNovo-dadosPessoais">
                        <div className="modalCadastroNovo-dadosPessoais-title">
                            <Title style={{ fontSize: "20px", fontWeight: "600" }}>Dados Pessoais</Title>
                        </div>
                        <div>
                            <InputWithTitle name="nm_profissional"  fnEdit={(e) => handleChange(e)} title="Nome*" placeholder="Nome do Profissional" inputHeight="3.5rem" wrapperWidth="50%" />
                            <InputWithTitle name="email"  fnEdit={(e) => handleChange(e)} title="Email*" inputHeight="3.5rem" wrapperWidth="50%" />
                        </div>
                        <div>
                            <InputWithTitle name="registro" fnEdit={(e) => handleChange(e)} title="Registro"inputHeight="3.5rem" wrapperWidth="50%" />
                            <InputWithTitle name="senha" type="password"  fnEdit={(e) => handleChange(e)} title="Senha*" inputHeight="3.5rem" wrapperWidth="50%"/>
                            <InputWithTitle name="confirma_senha" type="password" fnEdit={(e) => handleChange(e)} title="Confirme a Senha" inputHeight="3.5rem" wrapperWidth="50%" />
                        </div>
                        <div>
                            <InputWithTitle name="numero_telefone" fnEdit={(e) => handleChange(e)} title="Telefone*" inputHeight="3.5rem" wrapperWidth="50%" />
                            <SelectWithTitle name="cd_tipo_profissional"  fnEdit={(e) => handleChange(e)} title="Tipo de Profissional*" inputHeight="3.5rem" wrapperWidth="50%" />
                            <SelectWithTitle listaItens={privilegio} name="privilegio"  fnEdit={(e) => handleChange(e)} title="Privilegio*" inputHeight="3.5rem" wrapperWidth="50%" />
                        </div>
                    </div>
                    <div className="modalCadastroNovo-footer">
                        
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