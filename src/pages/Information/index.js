import React from 'react';
import Headline from '../../components/Typography/Headline';

import { Container } from '../../components/ContainerStyles';

import { Content } from './styles';

const Information = () => {
  return (
    <Container>
      <Content>
        <Headline title="Coronavírus e COVID-19" />
        <p>
          Os coronavírus são uma grande família de vírus comuns em muitas espécies diferentes de animais, incluindo
          camelos, gado, gatos e morcegos. Raramente, os coronavírus que infectam animais podem infectar pessoas, como
          exemplo do MERS-CoV e SARS-CoV. Recentemente, em dezembro de 2019, houve a transmissão de um novo coronavírus
          (SARS-CoV-2), o qual foi identificado em Wuhan na China e causou a COVID-19, sendo em seguida disseminada e
          transmitida pessoa a pessoa.
        </p>
        <p>
          A COVID-19 é uma doença causada pelo coronavírus, denominado SARS-CoV-2, que apresenta um espectro clínico
          variando de infecções assintomáticas a quadros graves. De acordo com a Organização Mundial de Saúde, a maioria
          (cerca de 80%) dos pacientes com COVID-19 podem ser assintomáticos ou oligossintomáticos (poucos sintomas), e
          aproximadamente 20% dos casos detectados requer atendimento hospitalar por apresentarem dificuldade
          respiratória, dos quais aproximadamente 5% podem necessitar de suporte ventilatório.
        </p>
      </Content>
      <Content>
        <Headline title="Sintomas" />
        <p>
          Os sintomas da COVID-19 podem variar de um resfriado, a uma Síndrome Gripal-SG (presença de um quadro
          respiratório agudo, caracterizado por, pelo menos dois dos seguintes sintomas: sensação febril ou febre
          associada a dor de garganta, dor de cabeça, tosse, coriza) até uma pneumonia severa. Sendo os sintomas mais
          comuns:
        </p>
        <ul>
          <li>Tosse</li>
          <li>Febre</li>
          <li>Coriza</li>
          <li>Dor de garganta</li>
          <li>Dificuldade para respirar</li>
          <li>Perda de olfato (anosmia)</li>
          <li>Alteração do paladar (ageusia)</li>
          <li>Distúrbios gastrintestinais (náuseas/vômitos/diarreia)</li>
          <li>Cansaço (astenia)</li>
          <li>Diminuição do apetite (hiporexia)</li>
          <li>Dispnéia ( falta de ar)</li>
        </ul>
      </Content>
      <Content>
        <Headline title="Como é transmitido" />
        <p>A transmissão acontece de uma pessoa doente para outra ou por contato próximo por meio de:</p>
        <ul>
          <li>Toque do aperto de mão contaminadas;</li>
          <li>Gotículas de saliva;</li>

          <li>Espirro</li>
          <li>Tosse</li>
          <li>Catarro</li>
          <li>
            Objetos ou superfícies contaminadas, como celulares, mesas, talheres, maçanetas, brinquedos, teclados de
            computador etc.
          </li>
        </ul>
      </Content>
      <Content>
        <Headline title="Como se proteger" />
        <p>As recomendações de prevenção à COVID-19 são as seguintes:</p>
        <ul>
          <li>
            Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com álcool em gel
            70%. Essa frequência deve ser ampliada quando estiver em algum ambiente público (ambientes de trabalho,
            prédios e instalações comerciais, etc), quando utilizar estrutura de transporte público ou tocar superfícies
            e objetos de uso compartilhado.
          </li>
          <li>
            Ao tossir ou espirrar, cubra nariz e boca com lenço ou com a parte interna do cotovelo. Não tocar olhos,
            nariz, boca ou a máscara de proteção fácil com as mãos não higienizadas. Se tocar olhos, nariz, boca ou a
            máscara, higienize sempre as mãos como já indicado.
          </li>
          <li>
            Mantenha distância mínima de 1 (um) metro entre pessoas em lugares públicos e de convívio social. Evite
            abraços, beijos e apertos de mãos. Adote um comportamento amigável sem contato físico, mas sempre com um
            sorriso no rosto.
          </li>
          <li>
            Higienize com frequência o celular, brinquedos das crianças e outro objetos que são utilizados com
            frequência.
          </li>
          <li>Não compartilhe objetos de uso pessoal como talheres, toalhas, pratos e copos.</li>
          <li>Mantenha os ambientes limpos e bem ventilados.</li>
          <li>
            Se estiver doente, evite contato próximo com outras pessoas, principalmente idosos e doentes crônicos,
            busque orientação pelos canais on-line disponibilizados pelo SUS ou atendimento nos serviços de saúde e siga
            as recomendações do profissional de saúde.
          </li>
          <li>Durma bem e tenha uma alimentação saudável.</li>
          <li>
            Recomenda-se a utilização de máscaras em todos os ambientes. As máscaras de tecido (caseiras/artesanais),
            não são Equipamentos de Proteção Individual (EPI), mas podem funcionar como uma barreira física, em especial
            contra a saída de gotículas potencialmente contaminadas.
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default Information;
