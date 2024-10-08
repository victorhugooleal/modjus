import { useSearchParams } from 'next/navigation'
import { useState } from "react"
import { handleSave } from '@/libs/extension'
import { EMPTY_FORM_STATE, FormHelper } from '@/libs/form-support'

const Frm = new FormHelper()

export default function Model(interview: (Frm: FormHelper) => JSX.Element, document: (data: any) => JSX.Element) {
    const searchParams = useSearchParams()
    const currentUrl = window.location.origin + window.location.pathname
    const initialData = searchParams.get('data') ? JSON.parse(searchParams.get('data') as string) : {  }
    const [data, setData] = useState(initialData)
    Frm.update(data, setData, EMPTY_FORM_STATE)

    return (<div>
        <div className="container-fluid">
            <div className="content mt-3">
                <div className="row">
                    <div id="modjus-interview" className="col col-12 col-md-6">
                        <h1 className="mt-3">Entrevista</h1>
                        <div className="alert alert-info">
                            <div className="row">
                                {interview(Frm)}
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6">
                        <h1 className="mt-3">Preview do Documento</h1>
                        <div className="alert alert-warning">
                            <div id="modjus-document" modjus-data={JSON.stringify(data)} modjus-url={currentUrl}>
                                {document(data)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary mt-3 mb-3" onClick={handleSave}>Salvar</button>
        </div>
    </div>
    );
}
