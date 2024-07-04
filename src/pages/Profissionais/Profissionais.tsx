import "./styleProfissionais.scss"
import { HeaderPages } from "../../components/Global/HeaderPages/HeaderPages";
import { ProfissionaisContext, ProfissionaisProvider } from "../../context/Profissionais/ProfissionaisContext";
import { ListaProfissionais } from "../../components/Profissionais/ListaProfissionais/ListaProfissionais";
import { useContext, useState } from "react";
import { Button } from "../../components/styleComponents/button";
import { ModalCadastroNovo } from "../../components/Profissionais/ModalCadastroNovo/ModalCadastroNovo";
import { ProfissionalBanco } from "../../types/ProfissionalTypes";


function Profissionais() {

    const {profissionais, modalCadastrarNovo, setModalCadastrarNovo,
         cadastroProfissional, setCadastroProfissional, postCadastroProfissionais, putCadastroProfissionais} = useContext(ProfissionaisContext)
    const [editMode, setEditMode] = useState(false)
    
    function openEditProfissionalModal(profissional: ProfissionalBanco) {
        setEditMode(true)
        setModalCadastrarNovo(true)
        setCadastroProfissional(profissional)
    }
    return (
        <div className="profissionais">
            <ModalCadastroNovo putCadastroProfissionais={putCadastroProfissionais} postCadastroProfissionais={postCadastroProfissionais} cadastroProfissional={cadastroProfissional} setCadastroProfissional={setCadastroProfissional} setModalCadastrarNovo={setModalCadastrarNovo} modalCadastrarNovo={modalCadastrarNovo} editMode={editMode} />

        <div className="profissionais-header"><HeaderPages title="Profissionais" /></div>
        <div className="profissionais-body">
            <div className="profissionais-container">
                <div className="profissionais-container-filtros">
                    <Button onClick={() => setModalCadastrarNovo(true)} style={{width: "13rem"}}>Cadastrar Novo</Button>   
                </div>
                <div className="profissionais-container-body">
                    <ListaProfissionais openEditProfissionalModal={openEditProfissionalModal} setEditMode={setEditMode} Profissionais={profissionais}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export function ProfissionaisWrapper() {
    return (
        <ProfissionaisProvider>
            <Profissionais />
        </ProfissionaisProvider>
    )
}