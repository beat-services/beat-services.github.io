<script>
  import '../assets/fonts/stylesheet.css'
  import { Canvas, T } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  import logo from '../assets/full_logo.svg'
  let position = [-8, 80, -2]
  let rotation = [-1.6, -0.1, 0]
</script>

<img src={logo} alt="logo" class="logo" width="30%" />
<p>
  l'entreprise <b>bureau d'études artistiques et technique</b>
  propose des prestations d'accompagnement à l'innovation et la production de projets
  dans le domaine artistique et industrielle. de la conception à la livraison nous
  offrons nos compétences en matière d'ingénierie, design, interopérabilité, fabrication
  et supervision.
</p>
<p>
  les méthodes agiles sont au cœur de notre gestion de projet, elles permettent
  une traçabilité et assurent un niveau de qualité quelque soit la taille du
  projet. une veille permanente nous permet d'être au plus proche des standards
  émergents et technologies innovantes.
</p>
<p>
  la société a été fondée par <b>David Olivari</b>
  ingénieur de formation, il a participé à des entreprises dans le domaine du calcul
  scientifique appliqué aux sciences du vivant en 1995, puis de la télévision interactive
  en 2000 pour devenir indépendant en 2004 et commencer à accompagner techniquement
  des projets artistiques de plus en plus complexes. parallèlement à ces activités
  il a également effectué des missions pour des entreprises industrielles et réalisé
  plusieurs dispositifs critiques dans le domaine de l'énergie, de la mesure scientifique
  et du diagnostic médical.
</p>
<p>
  en alliant les exigences qualitatives des standards de l'industrie et la
  créativité propre aux projets artistiques, il a pu mener à bien des
  interventions sur des événements aussi important que les jeux olympiques de
  Londres en 2012, la COP21 de Paris en 2015 et le suivi de 3 millions de tests
  covid en 2020.
</p>
<p>
  la création de <b>bé.at</b>
  est le fruit d'une réflexion vers plus d'indépendance et d'autonomie autour des
  valeurs de qualité, fiabilité et créativité.
</p>
<p>
  Contactez nous : <a href="mailto:c@bé.at">c@bé.at</a>
</p>

<style>
  :global(body) {
    background-color: rgb(241, 241, 225);
    color: black;
    font-family: 'Alte Haas Grotesk', sans-serif;
    font-size: 12pt;
    margin: 0;
    padding: 5vw;
  }
  :global(a) {
    color: black;
    text-decoration: dotted underline;
  }
  p {
    max-width: 960px;
  }
</style>
