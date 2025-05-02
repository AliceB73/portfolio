import { vanillaDescription, wPDescription, reactDescription, uxDesignDescription } from '../datas/descriptionsList';

import booki from '../assets/images/booki-768x956.png'
import kookaki from '../assets/images/koukaki-768x1959.png'
import motaphoto from '../assets/images/motaphoto-507x1536.png'
import planty from '../assets/images/planty-768x1456.png'
import printit from '../assets/images/print-it-768x1649.png'
import theArtbox from '../assets/images/the-artbox-768x1588.png'
import portfoliov1 from '../assets/images/portfoliov1.png'
import greenminded from '../assets/images/greenminded.png'

import loading from '../assets/images/loading.png'
import lamaisonjungle from '../assets/images/la-maison-jungle.png'
import portfolio from '../assets/images/portfolio.png'

import lespommesdesophie from '../assets/images/lespommesdesophie.png'
import nutrivoice from '../assets/images/nutrivoice.png'
import cineTeaz from '../assets/images/cineteaz.png'


const link = {
    nutrivoice: 'https://www.figma.com/proto/F4ygAqvq4KBZP3wNw9jSTr/NutriVoice?node-id=40-378&p=f&t=5akkXbniRx3VexSF-1&scaling=scale-down&content-scaling=fixed&page-id=40%3A83&starting-point-node-id=40%3A378',
    lespommesdesophie: 'https://www.figma.com/proto/xs3ZGgRxMT7mup0KjmvZuz/Les-pommes-de-Sophie?node-id=2001-26&t=pc3cJkUYfQ7z27aw-1&scaling=min-zoom&content-scaling=fixed&page-id=2001%3A25&starting-point-node-id=2001%3A26&show-proto-sidebar=1',
    cineteaz: 'https://www.figma.com/proto/3hWonDtBtLSIXBUUnViIte/Cin%C3%A9Teaz?node-id=4049-867&p=f&t=LJyI8XwDtQ6YTs6v-1&scaling=scale-down&content-scaling=fixed&page-id=4049%3A657&starting-point-node-id=4049%3A867&show-proto-sidebar=1',
    booki: 'https://aliceb73.github.io/p3-booki/',
    planty: 'https://github.com/AliceB73/p6-planty',
    kookaki: 'https://github.com/AliceB73/p9-koukaki',
    motaphoto: 'https://github.com/AliceB73/OC-P11-Motaphoto',
    printit: 'https://aliceb73.github.io/oc-p8/',
    theartbox: 'https://github.com/AliceB73/oc-projet5',
    greenminded: 'https://www.greenminded.fr/',
    portfolio: 'https://github.com/AliceB73/portfolio',
    lamaisonjungle: 'https://github.com/AliceB73/la-maison-jungle',
}


export const allProjects = [
    { image: booki, title: 'Booki', context: vanillaDescription[0]?.context, link: link.booki, text: vanillaDescription[0]?.description, tags: ['vanilla', 'dev-link'] },
    { image: printit, title: 'Print-it', context: vanillaDescription[1]?.context, link: link.printit, text: vanillaDescription[1]?.description, tags: ['vanilla', 'dev-link'] },
    { image: theArtbox, title: 'The Artbox', context: vanillaDescription[2]?.context, link: link.theartbox, text: vanillaDescription[2]?.description, tags: ['vanilla', 'dev-link'] },
    { image: motaphoto, title: 'Motaphoto', context: wPDescription[0]?.context, link: link.motaphoto, text: wPDescription[0]?.description, tags: ['wordpress', 'dev-link'] },
    { image: kookaki, title: 'Kookaki', context: wPDescription[1]?.context, link: link.kookaki, text: wPDescription[1]?.description, tags: ['wordpress', 'dev-link'] },
    { image: planty, title: 'Planty', context: wPDescription[2]?.context, link: link.planty, text: wPDescription[2]?.description, tags: ['wordpress', 'dev-link'] },
    { image: portfoliov1, title: 'Mon ancien portfolio', context: wPDescription[3]?.context, text: wPDescription[3]?.description, tags: ['wordpress', 'no-link'] },
    { image: greenminded, title: 'GreenMinded', context: wPDescription[4]?.context, link: link.greenminded, text: wPDescription[4]?.description, tags: ['wordpress', 'dev-link'] },
    { image: portfolio, title: 'Mon portfolio', context: reactDescription[0]?.context, link: link.portfolio, text: reactDescription[0]?.description, tags: ['react', 'dev-link'] },
    { image: lamaisonjungle, title: 'La maison jungle', context: reactDescription[1]?.context, link: link.lamaisonjungle, text: reactDescription[1]?.description, tags: ['react', 'dev-link'] },
    { image: nutrivoice, context: uxDesignDescription[0]?.context, link: link.nutrivoice, title: 'NutriVoice', text: uxDesignDescription[0]?.description, tags: ['uxdesign', 'uxdesign-link'] },
    { image: lespommesdesophie, context: uxDesignDescription[1]?.context, link: link.lespommesdesophie, title: 'Les pommes de Sophie', text: uxDesignDescription[1]?.description, tags: ['uxdesign', 'uxdesign-link'] },
    { image: cineTeaz, context: uxDesignDescription[2]?.context, link: link.cineteaz, title: 'CinéTeaz', text: uxDesignDescription[2]?.description, tags: ['uxdesign', 'uxdesign-link'] },
    { image: loading, title: 'À venir...', context: reactDescription[2]?.context, text: reactDescription[2]?.description, tags: ['react', 'no-link'] },
]