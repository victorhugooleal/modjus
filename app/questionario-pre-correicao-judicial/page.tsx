'use client'

import Model from "@/libs/model"
import { FormHelper } from "@/libs/form-support"

function interview(Frm: FormHelper) {
  const oCaracteristicas = [
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

    <Frm.Select label="Quantidade de servidores em teletrabalho em observância do limite máximo previsto no art. 5º da Resolução nº TRF2-RSP-2019/00046, alterada pela Resolução n.º TRF2-RSP-2023/00002 (30% do quadro permanente), bem como se é encaminhado o relatório semestral de avaliação, previsto no art. 13, III, da referida Resolução" name="t4QuantidadeDeServidoresEmTeletrabalho" options={oDe1a20} width={12} />
    {Array.from({ length: Frm.data.t4QuantidadeDeServidoresEmTeletrabalho }).map((_, i) => (
      <div className="row" key={i}>
        <Frm.Input label={i == 0 ? 'Servidor em teletrabalho' : ''} name={`t4NomeDoServidorEmTeletrabalho${i}`} width={3} />
        <Frm.Input label={i == 0 ? 'Período' : ''} name={`t4PeriodoDoServidorEmTeletrabalho${i}`} width={3} />
        <Frm.Input label={i == 0 ? 'Data de envio' : ''} name={`t4DataDeEnvioDoUltimoRelatorioDoServidorEmTeletrabalho${i}`} width={3} />
        <Frm.Input label={i == 0 ? 'Número' : ''} name={`t4CodigoDoUltimoRelatorioDoServidorEmTeletrabalho${i}`} width={3} />
      </div>
    ))}

    {/* <Frm.Input label="Nome" name="nome" width={9} />
    <Frm.Input label="Idade" name="idade" width={3} />
    <Frm.Input label="Peso" name="peso" width={3} />
    <Frm.Input label="Altura" name="altura" width={3} />
    <Frm.Select label="Escolaridade" name="escolaridade" options={oEscolaridade} width={6} />
    <Frm.TextArea label="Patologia(s) ou sequela(s) que acomete(m) a parte autora: Mencionar a(s) CID(s) indicando os documentos médicos que a comprovam" name="patologia" width={12} />
    <Frm.TextArea label="Resumo da História Clínica / Anamnese" name="anamnese" width={12} />
    <Frm.TextArea label="Informações de exames e laudos apresentados" name="sss" width={12} />
    <Frm.TextArea label="Informações de exames e laudos apresentados" name="examesELaudos" width={12} />

    <Frm.CheckBoxes label="Assinale as alterações nas Funções do Corpo constatadas" labelsAndNames={oFuncoesDoCorpo} width={12} />

    <Frm.TextArea label="Exame Clínico (com descrição das alterações de funções do corpo assinaladas acima e de estruturas do corpo, se houver)" name="exameClinico" width={12} />
    <Frm.TextArea label="Há sinais exteriores da patologia ou sequelas duradouros (mais de 2 anos)? " name="sinaisExteriores" width={12} />

    <div className="col col-12 mt-3">
      <p>Levando-se em conta as patologias, dificuldades encontradas, idade e grau de instrução da parte autora, deverá o(a) Perito(a) preencher o quadro abaixo, assinalando, para cada atividade, o nível de obstrução ou impedimento enfrentado, tomando-se como referência: </p>
      <ul>
        <li>A - Executa a atividade nos mesmos moldes que outras pessoas com mesma idade e grau de instrução.</li>
        <li>B - Executa a atividade com pouca dificuldade adicional (até 25% a mais de esforço) em relação às pessoas com mesma idade e grau de instrução.</li>
        <li>C - Executa a atividade com significativa dificuldade adicional (superior a 25% de esforço) em relação às pessoas com mesma idade e grau de instrução.</li>
        <li>D - Não executa a atividade em razão de suas limitações pessoais / deficiência.</li>
      </ul>
    </div>

    <Frm.RadioButtonsTable label="Atividade Física" labelsAndNames={oAtividadeFisica} options={oNivel} width={12} />
    <Frm.RadioButtonsTable label="Auto Cuidado e Âmbito Doméstico" labelsAndNames={oAutoCuidado} options={oNivel} width={12} />
    <Frm.RadioButtonsTable label="Relações Interpessoais e Sociais. Aprendizagem. Cognição. Inserção Profissional." labelsAndNames={oRelacoes} options={oNivel} width={12} />

    <div className="col col-12 mt-3">
      <h4>Quesitos Complementares</h4>
    </div>
    <Frm.TextArea label="Caso sejam constatadas limitações (graus B, C ou D) para atividades relacionadas no quadro acima, qual a data de início ou época aproximada em que a obstrução / impedimento / dificuldade passou a interferir na vida do(a) periciando(a)?" name="inicio" width={12} />
    <Frm.TextArea label="Caso sejam constatadas limitações (graus B, C ou D) para atividades relacionadas no quadro acima, é possível afirmar que a obstrução / impedimento / dificuldade irá perdurar por mais de 2 anos? Se menos de 2 anos, qual prognóstico de tempo para reversão?" name="prognosticoReversao" width={12} />
    <Frm.TextArea label="Há outras atividades individuais ou de participação social cotidianas (não elencadas no quadro acima) impactadas por limitações de natureza física, mental, intelectual ou sensorial da parte autora? Caso positivo, especifique e indique os graus (B, C ou D), bem como data de início ou época aproximada em que a obstrução / impedimento / dificuldade passou a interferir na vida do(a) periciando(a). É possível afirmar que irá perdurar por mais de 2 anos? Se menos de 2 anos, qual prognóstico de tempo para reversão?" name="outras" width={12} />
    <Frm.TextArea label="Sobre facilitadores - As alterações em funções e/ou estruturas do corpo podem ser solucionadas / compensadas, em tese, em menos de 2 anos? Como? A parte autora tem efetivo acesso a tecnologias / insumos de saúde facilitadores, que eliminam ou compensem as limitações de natureza física, mental, intelectual ou sensorial impostas pela patologia?" name="facilitadores" width={12} />
    <Frm.TextArea label="Caso seja possível à parte executar atividades (trabalhos formais ou informais) que lhe garantam sustento, há necessidade de afastamento periódico do trabalho para rotinas de tratamento ou internações? Em caso positivo, quantas vezes por dia (ou semana, ou mês) e respectiva duração." name="afastamentoPeriodico" width={12} />
    <Frm.TextArea label="Há necessidade de medicações de uso contínuo? Em caso positivo, tais medicações influenciam de forma significativa a interação com as demais pessoas e/ou ambiente? Há necessidade de uso de fraldas?" name="medicacoesDeUsoContinuo" width={12} />
    <Frm.TextArea label="O(A) periciando(a) depende de supervisão ou acompanhamento permanente de terceiros em sua vida diária?" name="supervisao" width={12} />
    <Frm.TextArea label="Informações Adicionais que o(a) perito(a) entenda que possam ajudar no julgamento da lide." name="informacoesAdicionais" width={12} /> */}

    {/* <div className="col col-12">
      <h4 className="mt-5">JSON</h4>
      {JSON.stringify(Frm.data)}
    </div> */}
  </>
}

function document(data: any) {
  const Frm = new FormHelper()
  Frm.update(data)
  return <div className="row">
    <h1 className="text-center">Relatório de Pré-correição Judicial</h1>
    {interview(Frm)}
    <div className="assinatura text-center">__________________________________<br />Assinatura do Perito(a)</div>
  </div>
}

export default function BpcLoasPdcMais17() {
  return Model(interview, document, { saveButton: false, pdfButton: true, pdfFileName: 'bpc-loas-pcd-mais-17' })
}







// [@entrevista]
//   [@oculto var="numproc" valor=(doc.pai.form.numproc)! /]
//   [@oculto var="dataAbertura" valor=(doc.pai.form.abertura)! /]
//   [@oculto var="dataEncerramento" valor=(doc.pai.form.encerramento)! /]
//   [@grupo titulo="1. INFORMAÇÕES DA UNIDADE"]
//     [@grupo]
//       [@lotacao var="t1Unidade" titulo="Unidade" /]
//     [/@grupo]
//     [@grupo]
//       [@data var="t1DataDaInstalacao" titulo="Data da Instalação" /]
//     [/@grupo]
//     [@grupo]
//       [@memo titulo="Competências (referir eventual alteração de competência ocorrida nos últimos 12 meses e respectivo ato normativo)" var="t1Competencias" colunas="80" linhas="2" /]
//       [@checkbox titulo="Turma Recursal" var="turmaRecursal" reler=true idAjax="turmaRecursalAjax"/]
//       [@checkbox titulo="Juizado Especial Federal" var="jef" reler=true idAjax="jefAjax"/]
//       [@checkbox titulo="Criminal" var="criminal" reler=true idAjax="criminalAjax" /]
//       [@checkbox titulo="Execução Fiscal" var="execucaoFiscal" reler=true idAjax="execucaoFiscalAjax" /]
//     [/@grupo]
//     [@grupo]
//       [@memo titulo="Houve redistribuição de processos?" var="t1RedistribuicaoDeProcessos" colunas="80" linhas="2" /]
//     [/@grupo]
//   [/@grupo]
//   [@grupo titulo="2. MAGISTRADOS"]
//     [@grupo titulo="Titular"]
//       [@grupo]
//         [@pessoa var="t2Titular" titulo="Titular" /]
//       [/@grupo]
//       [@grupo]
//         [@texto titulo="Tempo de atuação na unidade" var="t2TitularTempoDeAtuacaoNaUnidade" largura="50" /]
//       [/@grupo]
//       [@grupo]
//         [@memo titulo="Afastamentos superiores a 15 dias nos últimos 12 meses, especificando o período e o fundamento" var="t2TitularAfastamentos" colunas="80" linhas="2" /]
//       [/@grupo]
//       [@grupo]
//         [@memo titulo="Períodos de substituição, em férias, de outro magistrado" var="t2TitularSubstituicoes" colunas="80" linhas="2" /]
//       [/@grupo]
//       [@grupo]
//         [@memo titulo="Qual a modalidade de trabalho adotada pelo Magistrado no Juízo? (art. 2º, TRF2-PVC-2023/00002)" var="t2TitularModalidadeTrabalho" colunas="80" linhas="2" /]
//       [/@grupo]
//       [@grupo]
//         [@memo titulo="Como é realizado o atendimento aos advogados/procuradores? (art. 3º, TRF2-PVC-2023/00002)" var="t2TitularAtendimento" colunas="80" linhas="2" /]
//       [/@grupo]
//     [/@grupo]
//     [@grupo depende="turmaRecursalAjax;substituto"]
//       [#if (turmaRecursal!'Não') != 'Sim']
//         [@grupo titulo="Substituto"]
//           [@grupo]
//             [@pessoa var="t2Substituto" titulo="Substituto" /]
//           [/@grupo]
//           [@grupo]
//             [@texto titulo="Tempo de atuação na unidade" var="t2SubstitutoTempoDeAtuacaoNaUnidade" largura="50" /]
//           [/@grupo]
//           [@grupo]
//             [@memo titulo="Afastamentos superiores a 15 dias nos últimos 12 meses, especificando o período e o fundamento" var="t2SubstitutoAfastamentos" colunas="80" linhas="2" /]
//           [/@grupo]
//           [@grupo]
//             [@memo titulo="Períodos de substituição, em férias, de outro magistrado" var="t2SubstitutoSubstituicoes" colunas="80" linhas="2" /]
//           [/@grupo]
//           [@grupo]
//             [@memo titulo="Qual a modalidade de trabalho adotada pelo Magistrado no Juízo? (art. 2º, TRF2-PVC-2023/00002)" var="t2SubstitutoModalidadeTrabalho" colunas="80" linhas="2" /]
//           [/@grupo]
//           [@grupo]
//             [@memo titulo="Como é realizado o atendimento aos advogados/procuradores? (art. 3º, TRF2-PVC-2023/00002)" var="t2SubstitutoAtendimento" colunas="80" linhas="2" /]
//           [/@grupo]
//         [/@grupo]
//       [/#if]
//     [/@grupo]
//   [/@grupo]
//   [@grupo titulo="3. AUXÍLIOS"]
//     [@memo titulo="Auxílios prestados e recebidos nos últimos 12 meses" var="t3Auxilios" colunas="80" linhas="2" /]
//   [/@grupo]
//   [@grupo titulo="4. SERVIDORES" depende="quantidadeDeServidoresNaUltimaCorreicaoAjax"]
//     [@mensagem texto="Discriminar a quantidade de cargos prevista na lotação e a quantidade efetivamente existente no tocante aos analistas judiciários, técnicos judiciários (área administrativa e segurança e transportes), requisitados ou outros:" /]
//     <table class="table mt-4">
//       <tbody>
//         <tr>
//           <td>
//             Data
//           </td>
//           <td style="text-align:right">
//             Analistas Judiciários
//           </td>
//           <td style="text-align:right">
//             Técnicos Judiciários
//           </td>
//           <td style="text-align:right">
//             Técnicos Jud. de Segurança
//           </td>
//           <td style="text-align:right">
//             Requisitados ou outros
//           </td>
//           <td style="text-align:right">
//             Total de servidores
//           </td>
//           <td style="text-align:right">
//             Quadro Previsto
//           </td>
//         </tr>
//         <tr>
//           <td style="text-align:left">
//             Última correição
//           </td>
//           <td style="text-align:right">
//             [@selecao titulo="" var="t4UltimaCorreicaoAnalistasJudiciarios" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" reler=true idAjax="quantidadeDeServidoresNaUltimaCorreicaoAjax" /]
//           </td>
//           <td style="text-align:right">
//             [@selecao titulo="" var="t4UltimaCorreicaoTecnicosJudiciarios" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" reler=true idAjax="quantidadeDeServidoresNaUltimaCorreicaoAjax" /]
//           </td>
//           <td style="text-align:right">
//             [@selecao titulo="" var="t4UltimaCorreicaoAnalistasJudiciariosDeSeguranca" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" reler=true idAjax="quantidadeDeServidoresNaUltimaCorreicaoAjax" /]
//           </td>
//           <td style="text-align:right">
//             [@selecao titulo="" var="t4UltimaCorreicaoRequisitadosOuOutros" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" reler=true idAjax="quantidadeDeServidoresNaUltimaCorreicaoAjax" /]
//           </td>
//           <td style="text-align:right">
//             [#assign t4UltimaCorreicaoTotalDeServidores = (t4UltimaCorreicaoAnalistasJudiciarios?number + t4UltimaCorreicaoTecnicosJudiciarios?number + t4UltimaCorreicaoAnalistasJudiciariosDeSeguranca?number + t4UltimaCorreicaoRequisitadosOuOutros?number)?string /]
//             [@oculto var="t4UltimaCorreicaoTotalDeServidores" valor=t4UltimaCorreicaoTotalDeServidores default="0" /]
//             ${t4UltimaCorreicaoTotalDeServidores}
//           </td>
//           <td style="text-align:right">
//             [@selecao titulo="" var="t4UltimaCorreicaoQuadroPrevisto" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" reler=true idAjax="quantidadeDeServidoresNaUltimaCorreicaoAjax" /]
//           </td>
//         </tr>
//         <tr>
//           <td style="text-align:left">
//             Atualmente
//           </td>
//           <td style="text-align:right">
//             [@selecao titulo="" var="t4AtualmenteAnalistasJudiciarios" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" reler=true idAjax="quantidadeDeServidoresNaUltimaCorreicaoAjax" /]
//           </td>
//           <td style="text-align:right">
//             [@selecao titulo="" var="t4AtualmenteTecnicosJudiciarios" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" reler=true idAjax="quantidadeDeServidoresNaUltimaCorreicaoAjax" /]
//           </td>
//           <td style="text-align:right">
//             [@selecao titulo="" var="t4AtualmenteAnalistasJudiciariosDeSeguranca" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" reler=true idAjax="quantidadeDeServidoresNaUltimaCorreicaoAjax" /]
//           </td>
//           <td style="text-align:right">
//             [@selecao titulo="" var="t4AtualmenteRequisitadosOuOutros" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" reler=true idAjax="quantidadeDeServidoresNaUltimaCorreicaoAjax" /]
//           </td>
//           <td style="text-align:right">
//             [#assign t4AtualmenteTotalDeServidores = (t4AtualmenteAnalistasJudiciarios?number + t4AtualmenteTecnicosJudiciarios?number + t4AtualmenteAnalistasJudiciariosDeSeguranca?number + t4AtualmenteRequisitadosOuOutros?number)?string /]
//             [@oculto var="t4AtualmenteTotalDeServidores" valor=t4AtualmenteTotalDeServidores default="0" /]
//             ${t4AtualmenteTotalDeServidores}
//           </td>
//           <td style="text-align:right">
//             [@selecao titulo="" var="t4AtualmenteQuadroPrevisto" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" reler=true idAjax="quantidadeDeServidoresNaUltimaCorreicaoAjax" /]
//           </td>
//         </tr>
//       </tbody>
//     </table>
//     [@grupo depende="servidoresEmTeletrabalhoAjax"]
//       [@selecao titulo="Quantidade de servidores em teletrabalho em observância do limite máximo previsto no art. 5º da Resolução nº TRF2-RSP-2019/00046, alterada pela Resolução n.º TRF2-RSP-2023/00002 (30% do quadro permanente), bem como se é encaminhado o relatório semestral de avaliação, previsto no art. 13, III, da referida Resolução" var="t4QuantidadeDeServidoresEmTeletrabalho" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" reler=true idAjax="servidoresEmTeletrabalhoAjax" /]
//       [#if t4QuantidadeDeServidoresEmTeletrabalho?has_content && t4QuantidadeDeServidoresEmTeletrabalho?number > 0]
//         <table class="table mt-4 table-large-inputs">
//           <tbody>
//             <tr>
//               <td rowspan="2">
//                 Servidor em teletrabalho
//               </td>
//               <td rowspan="2">
//                 Período
//               </td>
//               <td colspan="2">
//                 Último relatório semestral
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Data de envio
//               </td>
//               <td colspan="2">
//                 Número
//               </td>
//             </tr>
//             [#list 1..(t4QuantidadeDeServidoresEmTeletrabalho)?number as i]
//               <tr>
//                 <td>
//                   [@texto titulo="" var="t4NomeDoServidorEmTeletrabalho"+i largura="2" /]
//                 </td>
//                 <td>
//                   [@texto titulo="" var="t4PeriodoDoServidorEmTeletrabalho"+i largura="2" /]
//                 </td>
//                 <td>
//                   [@data titulo="" var="t4DataDeEnvioDoUltimoRelatorioDoServidorEmTeletrabalho"+i /]
//                 </td>
//                 <td>
//                   [@texto titulo="" var="t4CodigoDoUltimoRelatorioDoServidorEmTeletrabalho"+i largura="2" /]
//                 </td>
//               </tr>
//             [/#list]
//           </tbody>
//         </table>
//       [/#if]
//       [@memo titulo="Nome dos servidores lotados na unidade e respectivos cargos efetivos (analistas, técnicos, etc.), bem como se exercem cargo em comissão / função comissionada, exercício de chefia, direção ou assessoramento" var="t4NomeDosServidoresLotadosCargosEChefias" colunas="80" linhas="2" /]
//       [@memo titulo="Nome e número de servidores sem vínculo com o serviço público" var="t4NomeENumeroDeServidoresSemVinculo" colunas="80" linhas="2" /]
//       [@memo titulo="Nome e número de servidores em auxílio (cedidos por outros setores) ou requisitados (com vínculo com o serviço público):" var="t4NomeENumeroDeServidoresEmAuxilioOuRequisitados" colunas="80" linhas="2" /]
//       [@grupo depende="turmaRecursalAjax;servidores"]
//         [#if (turmaRecursal!'Não') != 'Sim']
//           [@memo titulo="Quantos e quais servidores exercem função de assessoria ao Juiz Federal Substituto? Quantos e quais servidores exercem função de assessoria ao Juiz Federal titular?" var="t4QuantidadeDeServidoresAssessorandoJuizSubstitutoETitular" colunas="80" linhas="2" /]
//         [/#if]
//       [/@grupo]
//     [/@grupo]
//   [/@grupo]
//   [@grupo titulo="5. ESTAGIÁRIOS"]
//     [@grupo]
// 	  [@selecao titulo="Número de estagiários de nível superior previstos para unidade" var="t5NumeroPrevistoDeEstagiariosDeNivelSuperior" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" /]
//     [/@grupo]
//     [@grupo]
// 	  [@selecao titulo="Número de estagiários de nível médio previstos para unidade" var="t5NumeroPrevistoDeEstagiariosDeNivelMédio" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" /]
//     [/@grupo]
//     [@grupo]
// 	  [@selecao titulo="Número de estagiários de nível superior lotados na unidade" var="t5NumeroEfetivoDeEstagiariosDeNivelSuperior" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" /]
//     [/@grupo]
//     [@grupo]
// 	  [@selecao titulo="Número de estagiários de nível médio lotados na unidade" var="t5NumeroEfetivoDeEstagiariosDeNivelMédio" opcoes="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20" /]
//     [/@grupo]
//   [/@grupo]
//   [@grupo titulo="6. INSTALAÇÕES FÍSICAS E INFRAESTRUTURA"]
//     [@memo titulo="Relatar a situação das instalações físicas do setor (mobiliário, ar condicionado, etc.) e dos equipamentos de informática, informando eventuais problemas, dificuldades, bem como destacando se há mobiliário e/ou equipamentos de informática danificados/defeituosos sem previsão de reparo ou substituição já requerida à DIRFO" var="t6InstalacoesFisicasEInfraestrutura" colunas="80" linhas="5" /]
//   [/@grupo]
//   [@grupo titulo="7. LIVROS E PASTAS"]
//     [@memo titulo="Quais os livros e pastas utilizados pela Vara Federal, Juizado Especial ou Turma Recursal?" var="t7LivrosEPastasUtilizados" colunas="80" linhas="2" /]
//     [@memo titulo="Algum livro ou pasta em papel foi substituído por registro informatizado (art. 132 da CNCR)? Quais?" var="t7LivrosEPastasSubstituidos" colunas="80" linhas="2" /]
//     [@memo titulo="Informar quais as Pastas/Livros Eletrônicos de controle obrigatório existentes no Siga, com a descrição dos expedientes que lhes corresponda" var="t7LivrosEPastasExistentesNoSiga" colunas="80" linhas="2" /]
//   [/@grupo]
//   [@grupo titulo="8. ORGANIZAÇÃO DA UNIDADE E SETORIZAÇÃO (todas as unidades)"]
//     [@memo titulo="Detalhar, sucintamente, a forma de organização da unidade, destacando as atribuições do Diretor (a) de Secretaria; Supervisores; e demais servidores" var="t8FormaDeOrganizacao" colunas="80" linhas="2" /]
//     [@memo titulo="Informar, sucintamente, sobre a sistemática de planejamento das atividades da unidade e a existência de metas internas, detalhando conforme o caso" var="t8SistematicaDePlanejamento" colunas="80" linhas="2" /]
//     [@memo titulo="Informar, sucintamente, sobre a sistemática de avaliação periódica dos resultados das atividades da unidade" var="t8SistematicaDeAvaliacao" colunas="80" linhas="2" /]
//     [@memo titulo="Detalhar o tratamento dado aos processos incluídos nas Metas do CNJ, feitos com prioridade legal e demais ações elencadas no art. 12, parágrafo único, da Resolução nº 496/2006 do CJF" var="t8ProcessosIncluidosNasMetasDoCNJ" colunas="80" linhas="2" /]
//     [@memo titulo="Critérios de julgamento para os demais feitos" var="t8CriteriosDeJulgamentoParaOsDemaisFeitos" colunas="80" linhas="2" /]
//     [@memo titulo="Informar, sucintamente, como ocorre o fluxo dos processos entre a secretaria e o gabinete, a abertura da conclusão e a forma de controle do prazo para prolação de sentenças" var="t8FluxoDeInformacoes" colunas="80" linhas="2" /]
//     [@grupo depende="turmaRecursalAjax;pedidos"]
//       [#if (turmaRecursal!'Não') != 'Sim']
//         [@numero titulo="Número de processos com pedidos urgentes (liminares, antecipações de tutela) pendentes de análise" var="t8NumeroDeProcessosComPedidosUrgentes" /]
//       [/#if]
//     [/@grupo]
//     [@memo titulo="Há utilização de automação de localizadores (e-Proc) na unidade?" var="t8UtilizacaoDeAutomacaoDosLocalizadores" colunas="80" linhas="2" /]
//     [@memo titulo="Como é feito o controle dos prazos de suspensão dos processos? Há inserção em local (físico ou virtual) específico, com a anotação do motivo de suspensão e a data do término?" var="t8PrazosDeSuspensao" colunas="80" linhas="2" /]
//     [@memo titulo="A unidade verifica a pertinência do assunto cadastrado no processo quando recebe novos processos, garantindo que todos os processos do acervo possuam assunto folha (último nível) ou de nível 3 ou mais, respeitando a padronização da terminologia de assuntos processuais imposta pelo CNJ?" var="t8RespeitoAPadronizacaoDoCNJ" colunas="80" linhas="2" /]
//     [@memo titulo="A unidade possui algum processo em que não há assunto correspondente disponível na Tabela Unificada? A situação foi informada à SAJ ou CORETAB?" var="t8ProcessoSemAssuntoCorrespondente" colunas="80" linhas="2" /]
//     [@grupo depende="jefAjax"]
//       [#if jef?? && jef == 'Sim']
//         [@grupo titulo="Juizado Especial Federal"]
//           [@memo titulo="O JEF se utiliza do WhatsApp ou de outro aplicativo de mensagens para intimação das partes, nos termos dos artigos 158 e seguintes da CNCR?" var="t8AplicativoDeMensagens" colunas="80" linhas="2" /]
//         [/@grupo]
//       [/#if]
//     [/@grupo]
//     [@grupo depende="criminalAjax"]
//       [#if criminal?? && criminal == 'Sim']
//         [@grupo titulo="Criminal"]
//           [@numero titulo="Há quantos processos com réus presos? Apresente a listagem" var="t8NumeroDeProcessosComReusPresos" /]
//           [@memo titulo="Há anotação na autuação de réus presos?" var="t8AnotacaoNaAutuacaoDeReusPresos" colunas="80" linhas="2" /]
//           [@memo titulo="É dada prioridade de tramitação nos processos com réus presos?" var="t8PrioridadeDeTramitacaoNosProcessosDeReusPrezos" colunas="80" linhas="2" /]
//           [@memo titulo="Há atualização imediata da situação da parte no e-Proc (solto, preso, PRD não convertida, condenado, sursis não revogado, condenado preso, etc.)?" var="t8AtualizacaoImediataSituacaoDaParte" colunas="80" linhas="2" /]
//           [@memo titulo="Detalhar a forma de controle da incidência da prescrição penal, inclusive nas execuções penais, se for o caso (arts. 236 e seguintes da CNCR e Resolução 112 de abril/2010 do CNJ)" var="t8ControleDaIncidenciaDaPrescricaoPenal" colunas="80" linhas="2" /]
//           [@memo titulo="São registrados no e-Proc os anexos físicos não suportados pelo referido sistema?" var="t8AnexosFisicosNoEproc" colunas="80" linhas="2" /]
//           [@memo titulo="O resultado das audiências de custódia é/era cadastrado no Sistema de Audiência de Custódia (SISTAC) enquanto se aguarda/aguardava a possibilidade de cadastro no BNMP 3.0?" var="t8SistemaDeAudienciaDeCustodia" colunas="80" linhas="2" /]
//           [@memo titulo="O BNMP 2.0 está devidamente saneado na unidade, para futura utilização do BNMP 3.0, a partir de maio de 2024?" var="t8SaneamentoBNMP2" colunas="80" linhas="2" /]
//           [@memo titulo="Em caso de resposta negativa, quais estão sendo as medidas implementadas para que isso ocorra até 02 de maio de 2024, prazo estabelecido pelo CNJ no Ofício Circular n. 44/DMF?" var="t8MedidasSaneamentoBNMP2" colunas="80" linhas="2" /]
//           [@memo titulo="Quais foram os processos em que foram expedidos alvarás de soltura nos 12 meses anteriores à correição e quais são os números desses alvarás? Ressalta-se que é obrigatório e de suma importância que o BNMP, atualmente em sua versão 2.0, e futuramente em sua versão 3.0, seja utilizado para emissão e gestão de todas as peças de que trata a Resolução n. 417/2021 do CNJ" var="t8ProcessosComAlvarasDeSoltura" colunas="80" linhas="2" /]
//           [@memo titulo="Qual é o procedimento que a unidade adota relativamente às armas e munições apreendidas e o respectivo envio ao Exército?" var="t8ProcedimentoParaArmasEMunicoes" colunas="80" linhas="2" /]
//           [@memo titulo="Apresentar a listagem de entidades cadastradas para prestação de serviços/prestação pecuniária e informar o método de seleção dessas entidades" var="t8EntidadesParaServicosOuPrestacaoPecuniaria" colunas="80" linhas="2" /]
//           [@memo titulo="Existe algum local virtual para processos aguardando expedição de carta de execução de sentença penal?" var="t8LocalVirtualCESP" colunas="80" linhas="2" /]
//         [/@grupo]
//       [/#if]
//     [/@grupo]
//     [@grupo depende="execucaoFiscalAjax"]
//       [#if execucaoFiscal?? && execucaoFiscal == 'Sim']
//         [@grupo titulo="Execução Fiscal"]
//           [@memo titulo="Quais as execuções fiscais consideradas como sendo de grandes devedores pela unidade (critério utilizado pela Vara)?" var="t8ProcessosComGrandesDevedores" colunas="80" linhas="2" /]
//           [@memo titulo="Informar, sucintamente, o tratamento dado às execuções fiscais de valores expressivos em juízo, bem como se são observados os procedimentos previstos no art. 258 da CNCR." var="t8TratamentoDadoAosValoresExpressivos" colunas="80" linhas="2" /]
//           [@memo titulo="Detalhar a forma de controle da incidência da prescrição intercorrente" var="t8ControleDaPrescricaoIntercorrente" colunas="80" linhas="2" /]
//           [@memo titulo="Qual o critério de seleção de leiloeiros e realização de leilões unificados (art. 256 da CNCR)?" var="t8CriterioDeSelecaoDosLeiloeiros" colunas="80" linhas="2" /]
//           [@numero titulo="Quantos leilões ocorreram nos últimos 12 meses?" var="t8QuantidadeDeLeiloes" /]
//           [@memo titulo="Há leilões designados?" var="t8LeiloesDesignados" colunas="80" linhas="2" /]
//         [/@grupo]
//       [/#if]
//     [/@grupo]
//   [/@grupo]
//   [@grupo titulo="9. MATERIAIS ACAUTELADOS NA UNIDADE"]
// 	[@memo titulo="Indicar a quantidade de materiais (bens e documentos) acautelados e apreendidos na unidade (separadamente)" var="t9QuantidadeDeMateriaisAcautelados" colunas="80" linhas="2" /]
//     [@memo titulo="Indicar a quantidade de processos com bens acautelados/apreendidos na unidade" var="t9QuantidadeDeProcessosComBensAcautelados" colunas="80" linhas="2" /]
//     [@memo titulo="Todos os bens acautelados apresentam exata correspondência com os termos de acautelamento mantidos pela Secretaria?" var="t9BensAcauteladosCorrespondemComTermos" colunas="80" linhas="2" /]
//     [@memo titulo="Dentre os bens acautelados/apreendidos na unidade, informar (i) quais possuem conteúdo econômico passível de perdimento ou expropriação; (ii) se há dinheiro em espécie, títulos de crédito, joias acauteladas ou moeda falsa; (iii) se a moeda falsa está devidamente identificada; e (iv) qual a localização desses bens e a situação atual dos respectivos processos" var="t9DinheiroEmEspecieTitulosOuJoias" colunas="80" linhas="2" /]
//     [@memo titulo="Dentre os bens acautelados/apreendidos na unidade, informar quais estão cadastrados no SNGB, por se tratarem de bens alcançados pelo cumprimento de decisões judiciais (art. 1º da Resolução nº 483/2022 do CNJ)" var="t9BensCadastradosNoSNGB" colunas="80" linhas="2" /]
//     [@memo titulo="A unidade tem tido alguma dificuldade na utilização do SNGB?" var="t9DificuldadeNoUsoDoSNGB" colunas="80" linhas="2" /]
//     [@memo titulo="A unidade possuía registros ativos no SNBA na data da implementação do SNGB (Resolução nº 483/2022 do CNJ)?" var="t9RegistrosAtivosNoSNBA" colunas="80" linhas="2" /]
//     [@memo titulo="Em caso positivo, a migração manual dos registros do SNBA para o SNGB foi finalizada? Se não, quais são as medidas que estão sendo implementadas para que isso ocorra e qual é o cronograma (detalhado) para regularização total dos cadastros?" var="t9MigracaoDoSNBAParaSNGB" colunas="80" linhas="2" /]
//     [@memo titulo="A unidade possui cofre ou sala de acautelados e é examinada a regularidade dos bens ali guardados?" var="t9CofreOuSalaDeAcautelados" colunas="80" linhas="2" /]
// 	[@memo titulo="Detalhar as providências adotadas para o acautelamento/apreensão de bens em geral" var="t9ProvidenciasAdotadasParaAcautelamento" colunas="80" linhas="2" /]
//     [@memo titulo="Detalhar as providências adotadas para alienação antecipada de bens, quando necessário" var="t9ProvidenciasDeAlienacaoAntecipada" colunas="80" linhas="2" /]
//     <ul class="ml-0 mt-3 mb-3">
//       <li>
//         <p>
//           Juntar aos autos do processo de correção ordinária, no E-proc, as fotos dos bens acautelados, salvas em PDF, observando-se o seguinte:
//         </p>
//         <ul>
//           <li>
//             1 (uma) foto por bem acautelado, onde se visualize, apenas externamente, o termo de acautelamento que nele se encontre afixado; 
//           </li>
//           <li>
//             No termo de acautelamento deve constar a descrição do bem acautelado e a identificação precisa do local em que se encontra;
//           </li>
//           <li>
//             Caso o bem se encontre em local diverso da Secretaria por designação do Juízo, indicar o expediente no Siga criado para tal registro, na forma do art. 2º, §3º, da Portaria TRF2-PTC-2022/00071.
//           </li>
//         </ul>
//       </li>
//       <li>
//         <p>
//           Os bens acautelados devem estar registrados como “Anexo Físico” no E-Proc, em "Informações adicionais", de forma a possibilitar o seu controle por meio da extração de Relatório Geral no Sistema Processual.
//         </p>
//         <p>
//           No conteúdo da informação do “Anexo Físico”, deve constar a descrição do bem acautelado, a localização precisa em que se encontra e a indicação da existência de termo de acautelamento e do evento/folha correspondente no processo eletrônico (art. 2º, § 1º, da Portaria TRF2-PTC-2022/00071);
//         </p>
//         <p>
//           Devem ser excluídos/desativados os “Anexos Físicos” nas “Informações Adicionais” dos processos eletrônicos que não possuam bens acautelados (art. 2º, § 2º, da Portaria TRF2-PTC-2022/00071).
//         </p>
//       </li>
//     </ul>
//   [/@grupo]
//   [@grupo titulo="10. PROCESSOS FÍSICOS EM CARGA OU RETIRADOS"]
//     [@selecao titulo="Há processos físicos com carga às partes ou retirados por auxiliares do juízo além do prazo legal?" var="t10ProcessosFisicosComCarga" opcoes="Não;Sim" /]
//     [@memo titulo="Identificar os processos extraviados, as datas da ocorrência e as providências" var="t10ProcessosExtraviados" colunas="80" linhas="2" /]
//     [@memo titulo="Identificar as ações de restauração de autos, no período do levantamento" var="t10AcoesDeRestauracao" colunas="80" linhas="2" /]
//   [/@grupo]
//   [@grupo depende="turmaRecursalAjax;audiencias"]
//       [#if (turmaRecursal!'Não') != 'Sim']
//         [@grupo titulo="11. AUDIÊNCIAS"]
//           [@memo titulo="Número de audiências agendadas e realizadas (indicar separadamente para o juiz titular e para o juiz substituto)" var="t11NumeroDeAudienciasAgendadasERealizadas" colunas="80" linhas="2" /]
//           [@memo titulo="Como é feito o controle das audiências canceladas/remarcadas?" var="t11ControleDeAudienciasCanceladas" colunas="80" linhas="2" /]
//           [@memo titulo="É realizada audiência de conciliação em todos os casos possíveis de autocomposição (art. 334 do CPC)?" var="t11AudienciaDeConciliacao" colunas="80" linhas="2" /]
//           [@memo titulo="É realizado o acompanhamento do cumprimento da Meta 3 do CNJ pela unidade?" var="t11AcompanhamentoDaMeta3DoCNJ" colunas="80" linhas="2" /]
//           [@memo titulo="Qual o intervalo de tempo médio entre o despacho de designação da audiência e a realização do ato?" var="t11TempoMedioEntreDespachoDeDesignacaoEAudiencia" colunas="80" linhas="2" /]
//           [@memo titulo="A unidade utiliza o registro audiovisual de audiências nos termos dos artigos 136 e seguintes da CNCR?" var="t11RegistroVisualDeAudiencias" colunas="80" linhas="2" /]
//           [@memo titulo="Foi detectada alguma falha no registro audiovisual de audiências nos últimos 12 meses comprometendo seu conteúdo? Quais as falhas e quais as soluções adotadas para saná-las?" var="t11FalhasNoRegistroAudiovisualDeAudiencias" colunas="80" linhas="2" /]
//           [@memo titulo="Houve alguma audiência de custódia nos últimos 12 meses? Quantas? Em caso negativo, justifique. Em caso positivo, especifique eventuais problemas ou dificuldades" var="t11AudienciaDeCustodia" colunas="80" linhas="2" /]
//           [@memo titulo="Foi realizada alguma audiência de forma remota nos últimos dois anos? Em quais processos? (art. 4º, TRF2-PVC-2023/00002)" var="t11AudienciaRemota" colunas="80" linhas="2" /]
//         [/@grupo]
//       [#else]
//         [@grupo titulo="11. SESSÃO DE JULGAMENTO/AUDIÊNCIAS"]
//           [@memo titulo="Número de sessões de julgamento agendadas e realizadas" var="t11NumeroDeSessoesDeJulgamentoAgendadasERealizadas" colunas="80" linhas="2" /]
//           [@memo titulo="Como é feito o controle da inclusão, adiamento e retirada de pauta de processos?" var="t11ControleDePauta" colunas="80" linhas="2" /]
//           [@memo titulo="Qual o intervalo de tempo médio entre o pedido de dia/inclusão em pauta e a realização da sessão de julgamento?" var="t11IntervaloDeTempo" colunas="80" linhas="2" /]
//           [@memo titulo="A unidade utiliza o registro audiovisual de sessões de julgamento?" var="t11RegistroVisualDeSessoesDeJulgamento" colunas="80" linhas="2" /]
//           [@memo titulo="Foi detectada alguma falha no registro audiovisual de sessões de julgamento nos últimos 12 meses comprometendo seu conteúdo? Quais as falhas e quais as soluções adotadas para saná-las?" var="t11FalhasNoRegistroAudiovisualDeSessoesDeJulgamento" colunas="80" linhas="2" /]
//           [@memo titulo="Houve alguma audiência de custódia, realizada em plantão, nos últimos 12 meses? Quantas? Em caso positivo, indicar o número dos processos. É utilizado o Sistema de Audiência de Custódia (SISTAC), para gravar as audiências? " var="t11AudienciaDeCustodia" colunas="80" linhas="2" /]
//           [@memo titulo="Foi realizada alguma audiência de forma remota nos últimos dois anos? Em quais processos? (art. 4º, TRF2-PVC-2023/00002)" var="t11AudienciaRemota" colunas="80" linhas="2" /]
//         [/@grupo]
//       [/#if]
//     [/@grupo]
//   [@grupo titulo="12. CUMPRIMENTO DE DETERMINAÇÕES DE INSPEÇÕES E CORREIÇÕES ANTERIORES"]
//     [@memo titulo="A unidade cumpriu todas as metas estabelecidas na inspeção anterior?" var="t12CumprimentoDasMetasDaInspecaoAnterior" colunas="80" linhas="2" /]
//     [@memo titulo="A unidade regularizou todas as pendências apontadas na última Correição ou Inspeção de Avaliação da Corregedoria?" var="t12RegularizacaoDasPendenciasDaUltimaCorreicao" colunas="80" linhas="2" /]
//     [@memo titulo="Em sendo negativa a resposta de algum dos itens acima, justificar o eventual não cumprimento" var="t12JustificativaDoNaoCumprimento" colunas="80" linhas="2" /]
//   [/@grupo]
//   [@grupo titulo="13. BOAS PRÁTICAS E DIFICULDADES"]
//     [@memo titulo="Relacionar as boas práticas, eventuais dificuldades vivenciadas na unidade, bem como demandas e soluções propostas, inclusive quanto aos setores administrativos" var="t13BoasPraticas" colunas="80" linhas="2" /]
//   [/@grupo]
// [/@entrevista]