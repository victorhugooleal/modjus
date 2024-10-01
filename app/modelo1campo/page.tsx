'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from "react";

const FormText = ({ label, value, onChange }: { label: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <>
      <label>{label}</label>
      <input type="text" className="form-control" value={value} onChange={onChange} />
    </>
  );
}


export default function Home() {
  const searchParams = useSearchParams()
  const currentUrl = window.location.origin + window.location.pathname
  const initialData = searchParams.get('data') ? JSON.parse(searchParams.get('data') as string) : { texto: "" }
  const [data, setData] = useState(initialData)

  const handleSave = () => {
    if (window.parent) {
      console.log('Salvando dados:', data)
      const modjusDocument = document.getElementById('modjus-document')?.outerHTML
      console.log('Conteúdo do div #modjus-document:', modjusDocument)
      window.parent.postMessage({ type: 'SAVE_DATA', payload: modjusDocument }, '*')
    }
  }

  return (<div>
    <div className="container">
      <div className="content">
        <div id="modjus-interview">
          <h1>Entrevista</h1>
          <FormText label="Qual é o texto?" value={data.texto} onChange={(e) => { setData({ texto: e.target.value }) }} />
        </div>

        <h1 className="mt-3">Preview do Documento</h1>
        <div className="alert alert-warning">
          <div id="modjus-document" modjus-data={JSON.stringify(data)} modjus-url={currentUrl}>
            O texto é: '{data.texto}'.
          </div>
        </div>
      </div>
      <button className="btn btn-primary mt-3 mb-3" onClick={handleSave}>Salvar</button>
    </div>
  </div>
  );
}
