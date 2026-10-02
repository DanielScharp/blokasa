import { company, fullAddress } from '../../data/company'
import styles from './Privacidade.module.css'

// Rascunho com base no que o site faz hoje (formulário → WhatsApp, sem cadastro nem rastreamento).
// Precisa ser revisado pela Blokasa antes da publicação.
export default function Privacidade() {
  return (
    <article className={`container ${styles.page}`}>
      <h1>Política de Privacidade</h1>
      <p className={styles.updated}>Última atualização: outubro de 2026</p>

      <h2>Quem somos</h2>
      <p>
        {company.legalName}, {fullAddress}. Contato: <a href={`mailto:${company.emails[0]}`}>{company.emails[0]}</a>.
      </p>

      <h2>Quais dados coletamos</h2>
      <p>
        Somente os que você informa no formulário de orçamento: nome, telefone, e-mail, cidade e estado da obra,
        tipo de projeto, metragem, produto de interesse e a mensagem opcional.
      </p>

      <h2>Para que usamos</h2>
      <p>
        Para preparar e enviar o seu orçamento e conversar com você sobre ele. Não usamos os dados para outras
        finalidades, não os vendemos e não os compartilhamos com terceiros para fins comerciais.
      </p>

      <h2>Como os dados chegam até nós</h2>
      <p>
        O site não grava o formulário. Ao enviar, abrimos o WhatsApp com a mensagem pronta, e o envio acontece pela
        sua conta do WhatsApp. A partir daí, a conversa segue as regras de privacidade do próprio WhatsApp.
      </p>

      <h2>Cookies</h2>
      <p>Este site não usa cookies de rastreamento nem de publicidade.</p>

      <h2>Seus direitos</h2>
      <p>
        Pela Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode pedir acesso, correção ou exclusão dos seus
        dados a qualquer momento pelo e-mail <a href={`mailto:${company.emails[0]}`}>{company.emails[0]}</a> ou pelo
        telefone <a href={company.phone.href}>{company.phone.display}</a>.
      </p>
    </article>
  )
}
