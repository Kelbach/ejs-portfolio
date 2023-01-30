import React from 'react';
import PubCard from '../PubCard';
// import api from '../../utils/api';

function Publications(){

    // const [publications, setShowPublications] = useState([])

    // const apiKey = process.env.ADS_API_KEY;
    
    // async function fetchPublications() {
    //     try{
    //         const res = await api.getADS()
    //         console.log(res);
    //     }
    //     catch (err){
    //         console.log("ope: "+err);
    //     }
    // }

    
    // fetchPublications();

    const adsPublications = {
        "response": {
            "numFound": 15,
            "start": 0,
            "docs": [
                {
                    "bibcode": "2022MNRAS.512.3972S",
                    "author": [
                        "Safron, E. J.",
                        "Boyajian, T. S.",
                        "Eisner, N."
                    ],
                    "issue": "3",
                    "page": [
                        "3972"
                    ],
                    "pubdate": "2022-05-00",
                    "title": [
                        "The SATCHEL pipeline: a general tool for data classified through citizen science"
                    ],
                    "volume": "512"
                },
                {
                    "bibcode": "2022ascl.soft03011S",
                    "author": [
                        "Safron, E. J.",
                        "Boyajian, T. S.",
                        "Eisner, N."
                    ],
                    "page": [
                        "ascl:2203.011"
                    ],
                    "pubdate": "2022-03-00",
                    "title": [
                        "SATCHEL: Pipeline to search for long-period exoplanet signals"
                    ]
                },
                {
                    "bibcode": "2022ApJ...924L..23Z",
                    "author": [
                        "Zakri, Wafa",
                        "Megeath, S. T.",
                        "Fischer, William J.",
                        "Gutermuth, Robert",
                        "Furlan, Elise",
                        "Hartmann, Lee",
                        "Karnath, Nicole",
                        "Osorio, Mayra",
                        "Safron, Emily",
                        "Stanke, Thomas",
                        "Stutz, Amelia M.",
                        "Tobin, John J.",
                        "Allen, Thomas S.",
                        "Federman, Sam",
                        "Habel, Nolan",
                        "Manoj, P.",
                        "Narang, Mayank",
                        "Pokhrel, Riwaj",
                        "Rebull, Luisa",
                        "Sheehan, Patrick D.",
                        "Watson, Dan M."
                    ],
                    "issue": "2",
                    "page": [
                        "L23"
                    ],
                    "pubdate": "2022-01-00",
                    "title": [
                        "The Rate, Amplitude, and Duration of Outbursts from Class 0 Protostars in Orion"
                    ],
                    "volume": "924"
                },
                {
                    "bibcode": "2021arXiv211204517H",
                    "author": [
                        "Hinkel, Natalie R.",
                        "Pepper, Joshua",
                        "Stark, Christopher C.",
                        "Burt, Jennifer A.",
                        "Ciardi, David R.",
                        "Hardegree-Ullman, Kevin K.",
                        "Lustig-Yaeger, Jacob",
                        "Kopparapu, Ravi",
                        "Mishra, Lokesh",
                        "Molaverdikhani, Karan",
                        "Pascucci, Ilaria",
                        "Richey-Yowell, Tyler",
                        "Safron, E. J.",
                        "Wilson, David J.",
                        "Bergsten, Galen",
                        "Boyajian, Tabetha S.",
                        "Caballero, J. A.",
                        "Cunha, K.",
                        "Columbus, Alyssa",
                        "Domagal-Goldman, Shawn D.",
                        "Dong, Chuanfei",
                        "Elowitz, R. M.",
                        "Jha, Devanshu",
                        "Kalra, Archit",
                        "Latham, David W.",
                        "Luhn, Jacob",
                        "Melis, Carl",
                        "Nagananda, Navya",
                        "Peretz, Eliad",
                        "Reffert, Sabine",
                        "Scarangella Smith, Kimberly",
                        "Stassun, Keivan G.",
                        "Tanner, Angelle",
                        "Tuchow, Noah",
                        "Veras, Dimitri",
                        "Winters, Jennifer G."
                    ],
                    "page": [
                        "arXiv:2112.04517"
                    ],
                    "pubdate": "2021-12-00",
                    "title": [
                        "Final Report for SAG 22: A Target Star Archive for Exoplanet Science"
                    ]
                },
                {
                    "bibcode": "2021MNRAS.501.4669E",
                    "author": [
                        "Eisner, N. L.",
                        "Barragán, O.",
                        "Lintott, C.",
                        "Aigrain, S.",
                        "Nicholson, B.",
                        "Boyajian, T. S.",
                        "Howell, S.",
                        "Johnston, C.",
                        "Lakeland, B.",
                        "Miller, G.",
                        "McMaster, A.",
                        "Parviainen, H.",
                        "Safron, E. J.",
                        "Schwamb, M. E.",
                        "Trouille, L.",
                        "Vaughan, S.",
                        "Zicher, N.",
                        "Allen, C.",
                        "Allen, S.",
                        "Bouslog, M.",
                        "Johnson, C.",
                        "Simon, M. N.",
                        "Wolfenbarger, Z.",
                        "Baeten, E. M. L.",
                        "Bundy, D. M.",
                        "Hoffman, T."
                    ],
                    "issue": "4",
                    "page": [
                        "4669"
                    ],
                    "pubdate": "2021-03-00",
                    "title": [
                        "Planet Hunters TESS II: findings from the first two years of TESS"
                    ],
                    "volume": "501"
                },
                {
                    "bibcode": "2020ApJ...904...78S",
                    "author": [
                        "Sharma, Rajeeb",
                        "Tobin, John J.",
                        "Sheehan, Patrick D.",
                        "Megeath, S. Thomas",
                        "Fischer, William J.",
                        "Jørgensen, Jes K.",
                        "Safron, Emily J.",
                        "Nagy, Zsofia"
                    ],
                    "issue": "1",
                    "page": [
                        "78"
                    ],
                    "pubdate": "2020-11-00",
                    "title": [
                        "Constraining the Chemical Signatures and the Outburst Mechanism of the Class 0 Protostar HOPS 383"
                    ],
                    "volume": "904"
                },
                {
                    "bibcode": "2020MNRAS.494..750E",
                    "author": [
                        "Eisner, N. L.",
                        "Barragán, O.",
                        "Aigrain, S.",
                        "Lintott, C.",
                        "Miller, G.",
                        "Zicher, N.",
                        "Boyajian, T. S.",
                        "Briceño, C.",
                        "Bryant, E. M.",
                        "Christiansen, J. L.",
                        "Feinstein, A. D.",
                        "Flor-Torres, L. M.",
                        "Fridlund, M.",
                        "Gandolfi, D.",
                        "Gilbert, J.",
                        "Guerrero, N.",
                        "Jenkins, J. M.",
                        "Jones, K.",
                        "Kristiansen, M. H.",
                        "Vanderburg, A.",
                        "Law, N.",
                        "López-Sánchez, A. R.",
                        "Mann, A. W.",
                        "Safron, E. J.",
                        "Schwamb, M. E.",
                        "Stassun, K. G.",
                        "Osborn, H. P.",
                        "Wang, J.",
                        "Zic, A.",
                        "Ziegler, C.",
                        "Barnet, F.",
                        "Bean, S. J.",
                        "Bundy, D. M.",
                        "Chetnik, Z.",
                        "Dawson, J. L.",
                        "Garstone, J.",
                        "Stenner, A. G.",
                        "Huten, M.",
                        "Larish, S.",
                        "Melanson, L. D.",
                        "Mitchell, T.",
                        "Moore, C.",
                        "Peltsch, K.",
                        "Rogers, D. J.",
                        "Schuster, C.",
                        "Smith, D. S.",
                        "Simister, D. J.",
                        "Tanner, C.",
                        "Terentev, I.",
                        "Tsymbal, A."
                    ],
                    "issue": "1",
                    "page": [
                        "750"
                    ],
                    "pubdate": "2020-05-00",
                    "title": [
                        "Planet Hunters TESS I: TOI 813, a subgiant hosting a transiting Saturn-sized planet on an 84-day orbit"
                    ],
                    "volume": "494"
                },
                {
                    "bibcode": "2019ESS.....430907S",
                    "author": [
                        "Safron, Emily",
                        "Boyajian, Tabetha"
                    ],
                    "page": [
                        "309.07"
                    ],
                    "pubdate": "2019-08-00",
                    "title": [
                        "A Planet Hunters study of the long-period exoplanet population around Kepler M-dwarfs"
                    ],
                    "volume": "51"
                },
                {
                    "bibcode": "2019ApJ...872..183F",
                    "author": [
                        "Fischer, William J.",
                        "Safron, Emily",
                        "Megeath, S. Thomas"
                    ],
                    "issue": "2",
                    "page": [
                        "183"
                    ],
                    "pubdate": "2019-02-00",
                    "title": [
                        "Constraining the Rate of Protostellar Accretion Outbursts in the Orion Molecular Clouds"
                    ],
                    "volume": "872"
                },
                {
                    "bibcode": "2019AAS...23315503F",
                    "author": [
                        "Fischer, William J.",
                        "Safron, Emily",
                        "Zakri, Wafa",
                        "Megeath, S. T.",
                        "Gutermuth, Robert"
                    ],
                    "page": [
                        "155.03"
                    ],
                    "pubdate": "2019-01-00",
                    "title": [
                        "The Importance of Luminosity Outbursts in Building Low-Mass Stars"
                    ],
                    "volume": "233"
                },
                {
                    "bibcode": "2019AAS...23324405R",
                    "author": [
                        "Rice, Emily",
                        "Livermore, Rachael",
                        "Silverman, Jeffrey",
                        "LaMassa, Stephanie",
                        "Levine, Brian",
                        "Hummels, Cameron",
                        "Ouellette, Nathalie",
                        "Popinchalk, Mark",
                        "Safron, Emily",
                        "Angerhausen, Daniel",
                        "Vardoulaki, Eleni",
                        "Plazas, Andrés",
                        "Seale, Sandy"
                    ],
                    "page": [
                        "244.05"
                    ],
                    "pubdate": "2019-01-00",
                    "title": [
                        "Heterogeneity and Variability of \"Astronomy on Tap\" Public Outreach Events"
                    ],
                    "volume": "233"
                },
                {
                    "bibcode": "2018ApJ...853L...8B",
                    "author": [
                        "Boyajian, Tabetha. S.",
                        "Alonso, Roi",
                        "Ammerman, Alex",
                        "Armstrong, David",
                        "Asensio Ramos, A.",
                        "Barkaoui, K.",
                        "Beatty, Thomas G.",
                        "Benkhaldoun, Z.",
                        "Benni, Paul",
                        "Bentley, Rory O.",
                        "Berdyugin, Andrei",
                        "Berdyugina, Svetlana",
                        "Bergeron, Serge",
                        "Bieryla, Allyson",
                        "Blain, Michaela G.",
                        "Capetillo Blanco, Alicia",
                        "Bodman, Eva H. L.",
                        "Boucher, Anne",
                        "Bradley, Mark",
                        "Brincat, Stephen M.",
                        "Brink, Thomas G.",
                        "Briol, John",
                        "Brown, David J. A.",
                        "Budaj, J.",
                        "Burdanov, A.",
                        "Cale, B.",
                        "Aznar Carbo, Miguel",
                        "Castillo García, R.",
                        "Clark, Wendy J.",
                        "Clayton, Geoffrey C.",
                        "Clem, James L.",
                        "Coker, Phillip H.",
                        "Cook, Evan M.",
                        "Copperwheat, Chris M.",
                        "Curtis, J. L.",
                        "Cutri, R. M.",
                        "Cseh, B.",
                        "Cynamon, C. H.",
                        "Daniels, Alex J.",
                        "Davenport, James R. A.",
                        "Deeg, Hans J.",
                        "De Lorenzo, Roberto",
                        "de Jaeger, Thomas",
                        "Desrosiers, Jean-Bruno",
                        "Dolan, John",
                        "Dowhos, D. J.",
                        "Dubois, Franky",
                        "Durkee, R.",
                        "Dvorak, Shawn",
                        "Easley, Lynn",
                        "Edwards, N.",
                        "Ellis, Tyler G.",
                        "Erdelyi, Emery",
                        "Ertel, Steve",
                        "Farfán, Rafael. G.",
                        "Farihi, J.",
                        "Filippenko, Alexei V.",
                        "Foxell, Emma",
                        "Gandolfi, Davide",
                        "Garcia, Faustino",
                        "Giddens, F.",
                        "Gillon, M.",
                        "González-Carballo, Juan-Luis",
                        "González-Fernández, C.",
                        "González Hernández, J. I.",
                        "Graham, Keith A.",
                        "Greene, Kenton A.",
                        "Gregorio, J.",
                        "Hallakoun, Na'ama",
                        "Hanyecz, Ottó",
                        "Harp, G. R.",
                        "Henry, Gregory W.",
                        "Herrero, E.",
                        "Hildbold, Caleb F.",
                        "Hinzel, D.",
                        "Holgado, G.",
                        "Ignácz, Bernadett",
                        "Ilyin, Ilya",
                        "Ivanov, Valentin D.",
                        "Jehin, E.",
                        "Jermak, Helen E.",
                        "Johnston, Steve",
                        "Kafka, S.",
                        "Kalup, Csilla",
                        "Kardasis, Emmanuel",
                        "Kaspi, Shai",
                        "Kennedy, Grant M.",
                        "Kiefer, F.",
                        "Kielty, C. L.",
                        "Kessler, Dennis",
                        "Kiiskinen, H.",
                        "Killestein, T. L.",
                        "King, Ronald A.",
                        "Kollar, V.",
                        "Korhonen, H.",
                        "Kotnik, C.",
                        "Könyves-Tóth, Réka",
                        "Kriskovics, Levente",
                        "Krumm, Nathan",
                        "Krushinsky, Vadim",
                        "Kundra, E.",
                        "Lachapelle, Francois-Rene",
                        "LaCourse, D.",
                        "Lake, P.",
                        "Lam, Kristine",
                        "Lamb, Gavin P.",
                        "Lane, Dave",
                        "Lau, Marie Wingyee",
                        "Lewin, Pablo",
                        "Lintott, Chris",
                        "Lisse, Carey",
                        "Logie, Ludwig",
                        "Longeard, Nicolas",
                        "Lopez Villanueva, M.",
                        "Whit Ludington, E.",
                        "Mainzer, A.",
                        "Malo, Lison",
                        "Maloney, Chris",
                        "Mann, A.",
                        "Mantero, A.",
                        "Marengo, Massimo",
                        "Marchant, Jon",
                        "Martínez González, M. J.",
                        "Masiero, Joseph R.",
                        "Mauerhan, Jon C.",
                        "McCormac, James",
                        "McNeely, Aaron",
                        "Meng, Huan Y. A.",
                        "Miller, Mike",
                        "Molnar, Lawrence A.",
                        "Morales, J. C.",
                        "Morris, Brett M.",
                        "Muterspaugh, Matthew W.",
                        "Nespral, David",
                        "Nugent, C. R.",
                        "Nugent, Katherine M.",
                        "Odasso, A.",
                        "O'Keeffe, Derek",
                        "Oksanen, A.",
                        "O'Meara, John M.",
                        "Ordasi, András",
                        "Osborn, Hugh",
                        "Ott, John J.",
                        "Parks, J. R.",
                        "Rodriguez Perez, Diego",
                        "Petriew, Vance",
                        "Pickard, R.",
                        "Pál, András",
                        "Plavchan, P.",
                        "Pollacco, Don",
                        "Pozo Nuñez, F.",
                        "Pozuelos, F. J.",
                        "Rau, Steve",
                        "Redfield, Seth",
                        "Relles, Howard",
                        "Ribas, Ignasi",
                        "Richards, Jon",
                        "Saario, Joonas L. O.",
                        "Safron, Emily J.",
                        "Sallai, J. Martin",
                        "Sárneczky, Krisztián",
                        "Schaefer, Bradley E.",
                        "Schumer, Clea F.",
                        "Schwartzendruber, Madison",
                        "Siegel, Michael H.",
                        "Siemion, Andrew P. V.",
                        "Simmons, Brooke D.",
                        "Simon, Joshua D.",
                        "Simón-Díaz, S.",
                        "Sitko, Michael L.",
                        "Socas-Navarro, Hector",
                        "Sódor, Á.",
                        "Starkey, Donn",
                        "Steele, Iain A.",
                        "Stone, Geoff",
                        "Strassmeier, Klaus G.",
                        "Street, R. A.",
                        "Sullivan, Tricia",
                        "Suomela, J.",
                        "Swift, J. J.",
                        "Szabó, Gyula M.",
                        "Szabó, Róbert",
                        "Szakáts, Róbert",
                        "Szalai, Tamás",
                        "Tanner, Angelle M.",
                        "Toledo-Padrón, B.",
                        "Tordai, Tamás",
                        "Triaud, Amaury H. M. J.",
                        "Turner, Jake D.",
                        "Ulowetz, Joseph H.",
                        "Urbanik, Marian",
                        "Vanaverbeke, Siegfried",
                        "Vanderburg, Andrew",
                        "Vida, Krisztián",
                        "Vietje, Brad P.",
                        "Vinkó, József",
                        "von Braun, K.",
                        "Waagen, Elizabeth O.",
                        "Walsh, Dan",
                        "Watson, Christopher A.",
                        "Weir, R. C.",
                        "Wenzel, Klaus",
                        "Westendorp Plaza, C.",
                        "Williamson, Michael W.",
                        "Wright, Jason T.",
                        "Wyatt, M. C.",
                        "Zheng, WeiKang",
                        "Zsidi, Gabriella"
                    ],
                    "issue": "1",
                    "page": [
                        "L8"
                    ],
                    "pubdate": "2018-01-00",
                    "title": [
                        "The First Post-Kepler Brightness Dips of KIC 8462852"
                    ],
                    "volume": "853"
                },
                {
                    "bibcode": "2016AAS...22830801F",
                    "author": [
                        "Fischer, William J.",
                        "Safron, Emily",
                        "Megeath, S. Thomas"
                    ],
                    "page": [
                        "308.01"
                    ],
                    "pubdate": "2016-06-00",
                    "title": [
                        "Episodic Accretion among the Orion Protostars"
                    ],
                    "volume": "228"
                },
                {
                    "bibcode": "2016ATel.8692....1F",
                    "author": [
                        "Fischer, William J.",
                        "Safron, Emily J.",
                        "Megeath, S. Thomas",
                        "Terebey, Susan",
                        "Soto, Edith",
                        "Wilson, Thomas L.",
                        "Adams, Joseph D."
                    ],
                    "page": [
                        "1"
                    ],
                    "pubdate": "2016-02-00",
                    "title": [
                        "Mid-IR Photometry and Near-IR Spectroscopy of the FU Ori Protostar V2775 Ori (HOPS 223)"
                    ],
                    "volume": "8692"
                },
                {
                    "bibcode": "2015ApJ...800L...5S",
                    "author": [
                        "Safron, Emily J.",
                        "Fischer, William J.",
                        "Megeath, S. Thomas",
                        "Furlan, Elise",
                        "Stutz, Amelia M.",
                        "Stanke, Thomas",
                        "Billot, Nicolas",
                        "Rebull, Luisa M.",
                        "Tobin, John J.",
                        "Ali, Babar",
                        "Allen, Lori E.",
                        "Booker, Joseph",
                        "Watson, Dan M.",
                        "Wilson, T. L."
                    ],
                    "issue": "1",
                    "page": [
                        "L5"
                    ],
                    "pubdate": "2015-02-00",
                    "title": [
                        "Hops 383: an Outbursting Class 0 Protostar in Orion"
                    ],
                    "volume": "800"
                }
            ]
        }
    };
    
    return(
        <div className="main publications row d-flex justify-content-center">    
            <h2>PUBLICATIONS</h2>
            <p><a href="http://adsabs.harvard.edu/cgi-bin/nph-abs_connect?return_req=no_params&amp;author=Safron,%20Emily%20J.&amp;db_key=AST">View my publications on ADS.</a> This research has made use of NASA&apos;s Astrophysics Data System Bibliographic Services.<br/>
            </p>
            
                {adsPublications.response.docs.map( pub => (
                    <PubCard 
                        bibcode={pub.bibcode}
                        authors={pub.author}
                        issue={pub.issue}
                        page={pub.page}
                        pubdate={pub.pubdate}
                        title={pub.title}
                        volume={pub.volume}
                    />
                ))}
            
            
        </div>
    );
}

export default Publications;