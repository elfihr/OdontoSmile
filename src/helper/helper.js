import hero01 from '../assets/heroIco01.png'
import hero02 from '../assets/heroIco02.png'
import hero03 from '../assets/heroIco03.png'
import hero04 from '../assets/heroIco04.png'

import about01 from '../assets/about01.png'
import about02 from '../assets/about02.png'

import service01 from '../assets/service01.JPG'
import service02 from '../assets/service02.JPG'
import service03 from '../assets/service03.JPG'
import service04 from '../assets/service04.JPG'
import service05 from '../assets/service05.JPG'
import service06 from '../assets/service06.JPG'

import client01 from "../assets/testimonials/client01.PNG"
import client02 from "../assets/testimonials/client02.jpg"
import client03 from "../assets/testimonials/client03.jpg"
import client04 from "../assets/testimonials/client04.jpg"

export const menuLinks = [
    {
        label: 'Sobre Nós',
        href: '#sobrenos',
        class: 'link',
    },
    {
        label: 'Serviços',
        href: '#servicos',
        class: 'link',
    },
    {
        label: 'Equipe',
        href: '#team',
        class: 'link',
    },
    {
        label: 'Depoimentos',
        href: '#depoimentos',
        class: 'link',
    },  
    {
        label: 'Contato',
        href: '#contato',
        class: 'link',
    },    
          
        
]

export const heroIntro = [
    {
        image:hero01,
        title:'Equipe de Qualidade',
        description:'Equipe bem experiente e comprometida com o paciente'
    },
    {
        image:hero02,
        title:'Equipamentos Modernos',
        description:'Equipamentos de última geração com selo de de qualidade'
    },
    {
        image:hero03,
        title:'Ampla Gama de Serviços',
        description:'Diversos serviços para todos'
    },
    {
        image:hero04,
        title:'Prezamos o Cuidado e Conforto do Cliente',
        description:'Sempre pensamos no conforto do cliente'
    }

]

export const aboutThings = [
    {
        image:about01,
        name:'Desde 2005',
        description:'Desde nossa fundação nossa missão é proporcionar cuidados dentários de excelência, promovendo a saúde e o bem-estar dos nossos pacientes. '
    },
    {
        image:about02,
        name:'Profissionais Alinhados a missão da Empresa',
        description:'DNossa missão é proporcionar cuidados dentários de excelência, promovendo a saúde e o bem-estar dos nossos pacientes.  '
    }
]

export const services = [
    {
        image:service01,
        title:'Clareamento de Dentes',
        description:'Segurança garantida com monitoramento cuidadoso.'
    },{
        image:service02,
        title:'Manutenção de Dentes',
        description:'Fazemos manutenção e prevenção periodica dos dentes'
    },{
        image:service03,
        title:'Implante de Dentes',
        description:'Implantes dentários: a base para um sorriso perfeito.'
    },{
        image:service04,
        title:'Ortodontia',
        description:'Fazemos prevenção para sempre manter seus dentes alinhados'
    },{
        image:service05,
        title:'Coroa Dentaria',
        description:'Serviço de Reforço ou recuperação de dente perdido'
    },{
        image:service06,
        title:'Preenchimento Dentario',
        description:'Restruturação e reparação de dentes danificados por cáries'
    },

]

export const testimonials = [
    {
         image:client01,
         name: "Liliane Mendes",
         description:"O consultório é moderno e muito bem equipado. Fiquei impressionado com a tecnologia utilizada durante o tratamento e com a atenção aos detalhes.",

    },
    {
         image:client02,
         name: "Marcos Alvaro",
         description:"Minha consulta foi pontual e o tratamento foi realizado com muita eficiência. Saí de lá com um sorriso mais saudável e confiante!",
    },    {
        image:client03,
        name: "Darios da Silva",
        description:"Minha consulta foi pontual e o tratamento foi realizado com muita eficiência. Saí de lá com um sorriso mais saudável e confiante!",

   },
   {
        image:client04,
        name: "Maria Vieira",
        description:"O dentista foi muito paciente e respondeu a todas as minhas dúvidas. Senti-me em boas mãos o tempo todo. Voltarei sempre!",
   }
]