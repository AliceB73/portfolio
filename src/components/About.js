import '../styles/About.css'
import border from '../assets/images/dialogue-box.png'


function About() {
    return (
        <section id='about' className="scroll-offset">
            <h2 className='fjalla-one'>À propos</h2>
            <div className='about-container'>
                <img src={border} alt="Boîte de dialogue" className='dialogue-box'></img>
                <p>
                    Après avoir écrit mes premières lignes de code sur le site <a href="https://fr.khanacademy.org/computing/computer-programming">Khan Academy</a>, j'ai très vite été prise de passion par le développement web.<br></br>
                    J'ai ensuite débuté la formation <a href="https://openclassrooms.com/fr/paths/901-developpeur-wordpress">Développeur WordPress</a> avec <a href="https://openclassrooms.com/fr/">OpenClassrooms</a> qui a duré 9 mois et s'est terminée par l'obtention du diplôme de niveau 5 (bac +2) <a href="https://www.francecompetences.fr/recherche/rncp/36076/">Développeur intégrateur web</a>.<br></br>
                    J'ai aussi réalisé la formation certifiante en <a href="https://www.coursera.org/google-certificates/ux-design-certificate?utm_medium=sem&utm_source=gg&utm_campaign=b2c_emea_x_multi_ftcof_career-academy_cx_dr_bau_gg_pmax_gc_s1_en_m_hyb_23-12_x&campaignid=20858198824&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&creativeid=&assetgroupid=6490027433&targetid=&extensionid=&placement=&gad_source=1&gclid=Cj0KCQjw2N2_BhCAARIsAK4pEkVksTbvUeshRfE1q0cAcQJBRNZdZj4Gywb9X7-JU8N05bmOXp1mEgQaAlH7EALw_wcB">UX Design</a> de Google Career Certificate.<br></br>
                    Toutes ces compétences acquises m'ont permis de réaliser avec succès une mission de bénévolat de 3 mois pour la refonte du site de l'association <a href="https://www.greenminded.fr/">GreenMinded</a>.<br></br>
                    Je souhaite maintenant réaliser la formation <a href="https://openclassrooms.com/fr/paths/877-developpeur-dapplication-javascript-react">Développeur d'applications JavaScript React</a>, pour une durée de 24 mois afin d'approfondir davantage mes compétences et de travailler sur des projets web épanouissants et ambitieux.
                </p>
            </div>
        </section>
    )
}


export default About