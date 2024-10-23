import { FormHelper } from "@/libs/form-support"

// Carregar dados de pessoa do Siga-Doc
async function loadPessoa(texto: string) {
    const retorno = await fetch(`/api/siga-rest/pessoas?texto=${encodeURI(texto)}`)
    const json = await retorno.json()
    return json
}

async function handleClick(Frm: FormHelper, name: string) {
    const sigla = Frm.data[name].sigla
    const json = await loadPessoa(sigla)
    if (json.list && json.list.length > 0) {
        const newData = { ...Frm.data }
        newData[name].sigla = json.list[0].sigla
        newData[name].descricao = json.list[0].nome
        if (Frm.setData)
            Frm.setData(newData)
    }
}

export default function Pessoa({ Frm, name }: { Frm: FormHelper, name: string }) {
    return <>
        <div className="col col-12">
            <div className="row">
                <Frm.Input label="Sigla" name={`${name}.sigla`} width={3} />
                <Frm.Button onClick={() => handleClick(Frm, name)} >...</Frm.Button>
                <Frm.Input label="Nome" name={`${name}.descricao`} width={""} />
            </div>
        </div>
    </>
}
