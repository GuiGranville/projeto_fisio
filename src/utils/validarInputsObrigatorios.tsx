

export function validaInputsObrigatorios(objSend: any, arrayObrigatorios: Array<string>) {
    let faltaCampos = false;
    for(const item of arrayObrigatorios) {
        if(!objSend[item] || objSend[item] === "" || objSend[item] === 0) {
            const element = document.getElementsByName(item)[0] as HTMLInputElement
            element.style.border = "1px solid red"
            faltaCampos = true
        }else{
            const element = document.getElementsByName(item)[0] as HTMLInputElement
            element.style.border = "none"
        }
    }    

    return faltaCampos
}