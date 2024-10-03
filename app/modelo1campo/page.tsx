'use client'

import Model from "@/libs/model"
import { FormHelper } from "@/libs/form-support"
import Endereco from "./Endereco"

export default function Modelo1Campo() {
  return Model(interview, document)
}



function interview(Frm: FormHelper) {
  // const options = [{ id: "1", name: 'SP' }, { id: "2", name: 'RJ' }]
  const options = "RJ;SP;MG".split(';').map((uf, idx) => ({ id: `${idx + 1}`, name: uf }))

  return <>
    <Frm.Input label="Qual é o texto?" name="texto" width={6} />
    <Frm.Select label="UF" name="uf" options={options} width={6} />

    <Endereco Frm={Frm} name="endereco" />

    <Frm.TextArea label="Qual é o texto1?" name="texto1" />

    {JSON.stringify(Frm.data)}
  </>
}

function document(data: any) {
  return <>
    <p>O texto é: '{data.texto}'.</p>
    <p>O texto 1 é: '{data.texto1}'.</p>
    <p>A UF é: '{data.uf}'.</p>
    {data.uf === '1'
      ? <div>
        <p>Estado de RJ</p>
        <p>Não é SP</p>
      </div>
      : null}
  </>
}

