'use client'

import Model from "@/libs/model"
import { FormHelper } from "@/libs/form-support"
import { useState } from "react"

function interview(Frm: FormHelper) {

  interface Caracteristica {
    label: string
    name: string
  }

  const oCaracteristicas: Caracteristica[] = [
    { label: 'Turma Recursal', name: 'turmaRecursal' },
    { label: 'Juizado Especial Federal', name: 'jef' },
    { label: 'Criminal', name: 'criminal' },
    { label: 'Execução Fiscal', name: 'execucaoFiscal' }
  ]



  const oDe1a20 = Array.from({ length: 21 }, (_, i) => ({ id: `${i}`, name: `${i}` }))

  return <>
    <Frm.Input label="Número do Processo" name="numproc" width={4} />
    <Frm.Input label="Data de Abertura" name="dataAbertura" width={4} />
    <Frm.Input label="Data de Encerramento" name="dataEncerramento" width={4} />

    <h2>1. Informações da Unidade</h2>
    <Frm.Input label="Unidade" name="t1Unidade" width={4} />
    <Frm.Input label="Data da Instalação" name="t1DataDaInstalacao" width={4} />
    <Frm.TextArea label="Competências (referir eventual alteração de competência ocorrida nos últimos 12 meses e respectivo ato normativo)" name="t1Competencias" width={12} />
    <Frm.CheckBoxes label="Assinale as Características da Unidade" labelsAndNames={oCaracteristicas} width={12} />
    <Frm.TextArea label="Houve redistribuição de processos?" name="t1RedistribuicaoDeProcessos" width={12} />

    <h2>2. Magistrados</h2>
    {/* Trocar abaixo para algum componente pessoa */}
    <Frm.Input label="Titular" name="t2Titular" width={4} />
    <Frm.Input label="Tempo de atuação na unidade" name="t2TitularTempoDeAtuacaoNaUnidade" width={12} />
    <Frm.TextArea label="Afastamentos superiores a 15 dias nos últimos 12 meses, especificando o período e o fundamento" name="t2TitularAfastamentos" width={12} />
    <Frm.TextArea label="Períodos de substituição, em férias, de outro magistrado" name="t2TitularSubstituicoes" width={12} />
    <Frm.TextArea label="Qual a modalidade de trabalho adotada pelo Magistrado no Juízo? (art. 2º, TRF2-PVC-2023/00002)" name="t2TitularModalidadeTrabalho" width={12} />
    <Frm.TextArea label="Como é realizado o atendimento aos advogados/procuradores? (art. 3º, TRF2-PVC-2023/00002)" name="t2TitularAtendimento" width={12} />

    {/* colocar if*/}
    <Frm.Input label="Substituto" name="t2Substituto" width={4} />
    <Frm.Input label="Tempo de atuação na unidade" name="t2SubstitutoTempoDeAtuacaoNaUnidade" width={12} />
    <Frm.TextArea label="Afastamentos superiores a 15 dias nos últimos 12 meses, especificando o período e o fundamento" name="t2SubstitutoAfastamentos" width={12} />
    <Frm.TextArea label="Períodos de substituição, em férias, de outro magistrado" name="t2SubstitutoSubstituicoes" width={12} />
    <Frm.TextArea label="Qual a modalidade de trabalho adotada pelo Magistrado no Juízo? (art. 2º, TRF2-PVC-2023/00002)" name="t2SubstitutoModalidadeTrabalho" width={12} />
    <Frm.TextArea label="Como é realizado o atendimento aos advogados/procuradores? (art. 3º, TRF2-PVC-2023/00002)" name="t2SubstitutoAtendimento" width={12} />

    <h2>3. Auxílios</h2>
    <Frm.TextArea label="Auxílios prestados e recebidos nos últimos 12 meses" name="t3Auxilios" width={12} />

    <h2>4. Servidores</h2>
    <p>Discriminar a quantidade de cargos prevista na lotação e a quantidade efetivamente existente no tocante aos analistas judiciários, técnicos judiciários (área administrativa e segurança e transportes), requisitados ou outros:</p>
    <h4>Última Correição</h4>
    <p>### calcular automaticamente o total de servidores</p>
    <Frm.Select label="Analistas Judiciários" name="t4UltimaCorreicaoAnalistasJudiciarios" options={oDe1a20} width={2} />
    <Frm.Select label="Técnicos Judiciários" name="t4UltimaCorreicaoTecnicosJudiciarios" options={oDe1a20} width={2} />
    <Frm.Select label="Técnicos Jud. de Segurança" name="t4UltimaCorreicaoAnalistasJudiciariosDeSeguranca" options={oDe1a20} width={2} />
    <Frm.Select label="Requisitados ou outros" name="t4UltimaCorreicaoRequisitadosOuOutros" options={oDe1a20} width={2} />
    <Frm.Select label="Total de servidores" name="t4UltimaCorreicaoTotalDeServidores" options={oDe1a20} width={2} />
    <Frm.Select label="Quadro Previsto" name="t4UltimaCorreicaoQuadroPrevisto" options={oDe1a20} width={2} />
    <h4>Atualmente</h4>
    <Frm.Select label="Analistas Judiciários" name="t4AtualmenteAnalistasJudiciarios" options={oDe1a20} width={2} />
    <Frm.Select label="Técnicos Judiciários" name="t4AtualmenteTecnicosJudiciarios" options={oDe1a20} width={2} />
    <Frm.Select label="Técnicos Jud. de Segurança" name="t4AtualmenteAnalistasJudiciariosDeSeguranca" options={oDe1a20} width={2} />
    <Frm.Select label="Requisitados ou outros" name="t4AtualmenteRequisitadosOuOutros" options={oDe1a20} width={2} />
    <Frm.Select label="Total de servidores" name="t4AtualmenteTotalDeServidores" options={oDe1a20} width={2} />
    <Frm.Select label="Quadro Previsto" name="t4AtualmenteQuadroPrevisto" options={oDe1a20} width={2} />

    <Frm.Select
      label="Quantidade de servidores em teletrabalho"
      name="t4QuantidadeDeServidoresEmTeletrabalho"
      options={oDe1a20}
      width={12}
    />
    {Array.from({ length: Frm.data.t4QuantidadeDeServidoresEmTeletrabalho }).map((_, i) => (
      <div className="row" key={i}>
        <Frm.InputServidoresEmTeletrabalho
          label={i === 0 ? "Servidor" : ""}
          name={`t4ServidoresEmTeletrabalho[${i}].nome`}
          width={3}
        />
        <Frm.InputServidoresEmTeletrabalho
          label={i === 0 ? "Período" : ""}
          name={`t4ServidoresEmTeletrabalho[${i}].periodo`}
          width={3}
        />
        <Frm.InputServidoresEmTeletrabalho
          label={i === 0 ? "Data de Envio" : ""}
          name={`t4ServidoresEmTeletrabalho[${i}].dataEnvio`}
          width={3}
        />
        <Frm.InputServidoresEmTeletrabalho
          label={i === 0 ? "Código" : ""}
          name={`t4ServidoresEmTeletrabalho[${i}].codigo`}
          width={3}
        />
      </div>
    ))}
    { }
    { }
  </>
}

function document(data: any) {
  const Frm = new FormHelper()
  Frm.update(data)

  const {
    numproc,
    dataAbertura,
    dataEncerramento,
    turmaRecursal,
    jef,
    criminal,
    execucaoFiscal,
    t1Unidade,
    t1DataDaInstalacao,
    t1Competencias,
    t1RedistribuicaoDeProcessos,
    t2Titular,
    t2TitularTempoDeAtuacaoNaUnidade,
    t2TitularAfastamentos,
    t2TitularSubstituicoes,
    t2TitularModalidadeTrabalho,
    t2TitularAtendimento,
    t2Substituto,
    t2SubstitutoTempoDeAtuacaoNaUnidade,
    t2SubstitutoAfastamentos,
    t2SubstitutoSubstituicoes,
    t2SubstitutoModalidadeTrabalho,
    t2SubstitutoAtendimento,
    t3Auxilios,
    t4UltimaCorreicaoAnalistasJudiciarios,
    t4UltimaCorreicaoTecnicosJudiciarios,
    t4UltimaCorreicaoAnalistasJudiciariosDeSeguranca,
    t4UltimaCorreicaoRequisitadosOuOutros,
    t4UltimaCorreicaoTotalDeServidores,
    t4UltimaCorreicaoQuadroPrevisto,
    t4AtualmenteAnalistasJudiciarios,
    t4AtualmenteTecnicosJudiciarios,
    t4AtualmenteAnalistasJudiciariosDeSeguranca,
    t4AtualmenteRequisitadosOuOutros,
    t4AtualmenteTotalDeServidores,
    t4AtualmenteQuadroPrevisto,
    t4QuantidadeDeServidoresEmTeletrabalho,
  } = Frm.data;

  return <div className="row">
    <h1 className="text-center">Relatório de Pré-correição Judicial</h1>
    <div className="mt-3 col col-12 col-md-4">
      <label className="report-label form-label">
        <div>Número do Processo</div>
      </label>
      <p className="report-field bold">{numproc || "Não informado"}</p>
    </div>
    <div className="mt-3 col col-12 col-md-4">
      <label className="report-label form-label">
        <div>Data de Abertura</div>
      </label>
      <p className="report-field bold">{dataAbertura || "Não informado"}</p>
    </div>
    <div className="mt-3 col col-12 col-md-4">
      <label className="report-label form-label">
        <div>Data de Encerramento</div>
      </label>
      <p className="report-field bold">{dataEncerramento || "Não informado"}</p>
    </div>

    <h2>1. Informações da Unidade</h2>

    <div className="mt-3 col col-12 col-md-4">
      <label className="report-label form-label">
        <div>Unidade</div>
      </label>
      <p className="report-field bold">{t1Unidade || "Não informado"}</p>
    </div>

    <div className="mt-3 col col-12 col-md-4">
      <label className="report-label form-label">
        <div>Data da Instalação</div>
      </label>
      <p className="report-field bold">{t1DataDaInstalacao || "Não informado"}</p>
    </div>

    <div className="mt-3 col col-12 col-md-12">
      <label className="form-label">
        Competências (referir eventual alteração de competência ocorrida nos últimos 12 meses e respectivo ato normativo)
      </label>
      <p><strong>{t1Competencias || "Não informado"}</strong></p>
    </div>

    <div className="mt-3 col col-12 col-md-12">
      <label className="form-label">
        Assinale as Características da Unidade
      </label>
      <table className="table table-bordered">
        <tbody>
          <tr >
            <td>Turma Recursal</td>
            <td><strong>{turmaRecursal ? 'Sim' : 'Não'}</strong></td>
          </tr>
          <tr >
            <td>Juizado Especial Federal</td>
            <td><strong>{jef ? 'Sim' : 'Não'}</strong></td>
          </tr>
          <tr >
            <td>Criminal</td>
            <td><strong>{criminal ? 'Sim' : 'Não'}</strong></td>
          </tr>
          <tr >
            <td>Execução Fiscal</td>
            <td><strong>{execucaoFiscal ? 'Sim' : 'Não'}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-3 col col-12 col-md-12">
      <label className="form-label">Houve redistribuição de processos?</label>
      <p><strong>{t1RedistribuicaoDeProcessos || "Não informado"}</strong></p>
    </div>


    <h2>3. Magistrados</h2>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>Titular</div>
      </label>
      <p className="report-field"><strong>{t2Titular || "Não informado"}</strong></p>
    </div>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>Tempo de atuação na unidade</div>
      </label>
      <p className="report-field"><strong>{t2TitularTempoDeAtuacaoNaUnidade || "Não informado"}</strong></p>
    </div>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>Afastamentos superiores a 15 dias nos últimos 12 meses, especificando o período e o fundamento</div>
      </label>
      <p className="report-field"><strong>{t2TitularAfastamentos || "Não informado"}</strong></p>
    </div>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>Períodos de substituição, em férias, de outro magistrado</div>
      </label>
      <p className="report-field"><strong>{t2TitularSubstituicoes || "Não informado"}</strong></p>
    </div>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>Qual a modalidade de trabalho adotada pelo Magistrado no Juízo? (art. 2º, TRF2-PVC-2023/00002)
        </div>
      </label>
      <p className="report-field"><strong>{t2TitularModalidadeTrabalho || "Não informado"}</strong></p>
    </div>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>Como é realizado o atendimento aos advogados/procuradores? (art. 3º, TRF2-PVC-2023/00002)</div>
      </label>
      <p className="report-field"><strong>{t2TitularAtendimento || "Não informado"}</strong></p>
    </div>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>Substituto</div>
      </label>
      <p className="report-field"><strong>{t2Substituto || "Não informado"}</strong></p>
    </div>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>Tempo de atuação na unidade</div>
      </label>
      <p className="report-field"><strong>{t2SubstitutoTempoDeAtuacaoNaUnidade || "Não informado"}</strong></p>
    </div>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>Afastamentos superiores a 15 dias nos últimos 12 meses, especificando o período e o fundamento</div>
      </label>
      <p className="report-field"><strong>{t2SubstitutoAfastamentos || "Não informado"}</strong></p>
    </div>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>Períodos de substituição, em férias, de outro magistrado</div>
      </label>
      <p className="report-field"><strong>{t2SubstitutoSubstituicoes || "Não informado"}</strong></p>
    </div>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>Qual a modalidade de trabalho adotada pelo Magistrado no Juízo? (art. 2º, TRF2-PVC-2023/00002)</div>
      </label>
      <p className="report-field"><strong>{t2SubstitutoModalidadeTrabalho || "Não informado"}</strong></p>
    </div>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>Como é realizado o atendimento aos advogados/procuradores? (art. 3º, TRF2-PVC-2023/00002)</div>
      </label>
      <p className="report-field"><strong>{t2SubstitutoAtendimento || "Não informado"}</strong></p>
    </div>

    <h2>4. Auxílios</h2>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>Auxílios prestados e recebidos nos últimos 12 meses</div>
      </label>
      <p className="report-field"><strong>{t3Auxilios || "Não informado"}</strong></p>
    </div>

    <h2>5. Servidores</h2>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>
          Discriminar a quantidade de cargos prevista na lotação e a quantidade efetivamente existente no tocante aos analistas judiciários, técnicos judiciários (área administrativa e segurança e transportes), requisitados ou outros:
        </div>
      </label>
    </div>
    <h4>Última Correição</h4>
    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>
          ### calcular automaticamente o total de servidores
        </div>
      </label>
    </div>
    <div className="mt-3 col col-12 col-md-2">
      <label className="report-label form-label">
        <div>
          Analistas Judiciários
        </div>
        <p className="report-field"><strong>{t4UltimaCorreicaoAnalistasJudiciarios || "Não informado"}</strong></p>
      </label>
    </div>
    <div className="mt-3 col col-12 col-md-2">
      <label className="report-label form-label">
        <div>
          Técnicos Judiciários
        </div>
        <p className="report-field"><strong>{t4UltimaCorreicaoTecnicosJudiciarios || "Não informado"}</strong></p>
      </label>
    </div>
    <div className="mt-3 col col-12 col-md-2">
      <label className="report-label form-label">
        <div>
          Técnicos Jud. de Segurança
        </div>
        <p className="report-field"><strong>{t4UltimaCorreicaoAnalistasJudiciariosDeSeguranca || "Não informado"}</strong></p>
      </label>
    </div>
    <div className="mt-3 col col-12 col-md-2">
      <label className="report-label form-label">
        <div>
          Requisitados ou outros
        </div>
        <p className="report-field"><strong>{t4UltimaCorreicaoRequisitadosOuOutros || "Não informado"}</strong></p>
      </label>
    </div>
    <div className="mt-3 col col-12 col-md-2">
      <label className="report-label form-label">
        <div>
          Total de servidores
        </div>
        <p className="report-field"><strong>{t4UltimaCorreicaoTotalDeServidores || "Não informado"}</strong></p>
      </label>
    </div>
    <div className="mt-3 col col-12 col-md-2">
      <label className="report-label form-label">
        <div>
          Quadro Previsto
        </div>
        <p className="report-field"><strong>{t4UltimaCorreicaoQuadroPrevisto || "Não informado"}</strong></p>
      </label>
    </div>

    <h2>Atualmente</h2>

    <div className="mt-3 col col-12 col-md-2">
      <label className="report-label form-label">
        <div>
          Analistas Judiciários
        </div>
        <p className="report-field"><strong>{t4AtualmenteAnalistasJudiciarios || "Não informado"}</strong></p>
      </label>
    </div>
    <div className="mt-3 col col-12 col-md-2">
      <label className="report-label form-label">
        <div>
          Técnicos Judiciários
        </div>
        <p className="report-field"><strong>{t4AtualmenteTecnicosJudiciarios || "Não informado"}</strong></p>
      </label>
    </div>
    <div className="mt-3 col col-12 col-md-2">
      <label className="report-label form-label">
        <div>
          Técnicos Jud. de Segurança
        </div>
        <p className="report-field"><strong>{t4AtualmenteAnalistasJudiciariosDeSeguranca || "Não informado"}</strong></p>
      </label>
    </div>
    <div className="mt-3 col col-12 col-md-2">
      <label className="report-label form-label">
        <div>
          Requisitados ou outros
        </div>
        <p className="report-field"><strong>{t4AtualmenteRequisitadosOuOutros || "Não informado"}</strong></p>
      </label>
    </div>
    <div className="mt-3 col col-12 col-md-2">
      <label className="report-label form-label">
        <div>
          Total de servidores
        </div>
        <p className="report-field"><strong>{t4AtualmenteTotalDeServidores || "Não informado"}</strong></p>
      </label>
    </div>
    <div className="mt-3 col col-12 col-md-2">
      <label className="report-label form-label">
        <div>
          Quadro Previsto
        </div>
        <p className="report-field"><strong>{t4AtualmenteQuadroPrevisto || "Não informado"}</strong></p>
      </label>
    </div>


    <div className="mt-3 col col-12 col-md-12">
      <label className="report-label form-label">
        <div>
          Quantidade de servidores em teletrabalho em observância do limite máximo previsto no art. 5º da Resolução nº TRF2-RSP-2019/00046, alterada pela Resolução n.º TRF2-RSP-2023/00002 (30% do quadro permanente), bem como se é encaminhado o relatório semestral de avaliação, previsto no art. 13, III, da referida Resolução
        </div>
        <p className="report-field"><strong>{t4QuantidadeDeServidoresEmTeletrabalho || "Não informado"}</strong></p>
      </label>
    </div>
    {
    Frm.data.t4ServidoresEmTeletrabalho?.map((servidor: { nome: any; periodo: any; dataEnvio: any; codigo: any }, i: number) => (
      <div key={i} className="d-flex flex-wrap">
        <div className="mt-3 col col-12 col-md-3">
          <label className="report-label form-label">
            <div>
              Servidor {i + 1}
            </div>
            <p className="report-field"><strong>{servidor.nome || "Não informado"}</strong></p>
          </label>
        </div>
        <div className="mt-3 col col-12 col-md-3">
          <label className="report-label form-label">
            <div>
              Período
            </div>
            <p className="report-field"><strong>{servidor.periodo || "Não informado"}</strong></p>
          </label>
        </div>
        <div className="mt-3 col col-12 col-md-3">
          <label className="report-label form-label">
            <div>
              Data de Envio do Relatório
            </div>
            <p className="report-field"><strong>{servidor.dataEnvio || "Não informado"}</strong></p>
          </label>
        </div>
        <div className="mt-3 col col-12 col-md-3">
          <label className="report-label form-label">
            <div>
              Código do Relatório
            </div>
            <p className="report-field"><strong>{servidor.codigo || "Não informado"}</strong></p>
          </label>
        </div>
      </div>
    ))}

    <div className="assinatura text-center">__________________________________<br />Assinatura do Perito(a)</div>

  </div>
}

export default function BpcLoasPdcMais17() {
  return Model(interview, document, { saveButton: false, pdfButton: true, pdfFileName: 'bpc-loas-pcd-mais-17' })
}