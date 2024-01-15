<script>
  import './fonts/stylesheet.css'
  import logo from '../assets/full_logo.svg'
</script>

<center>
  <img src={logo} alt="logo" class="logo" width="30%" />
</center>

<div class="big">Production de dispositifs</div>

<div class="quoteblock">
  <p class="quote clip-text clip-text_one">
    «J'appelle dispositif tout ce qui a, d'une manière ou d'une autre, la
    capacité de capturer, d'orienter, de déterminer, d'intercepter, de modeler,
    de contrôler, et d'assurer les gestes, les conduites, les opinions et les
    discours des êtres vivants»
  </p>
  <small>
    <p class="quoteref">
      Qu'est-ce qu'un dispositif ?
      <br />
      Giorgio Agamben
    </p>
  </small>
</div>

<style>
  :global(body) {
    background-color: rgb(241, 241, 225);
    color: black;
    font-family: 'Alte Haas Grotesk', sans-serif;
    margin: 0;
    padding: 4vw 0 0 0;
  }
  .big {
    font-size: 6.5vw;
    line-height: 5vw;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    padding: 10% 0;
    white-space: nowrap;
  }
  .quote {
    font-size: 3vw;
    font-style: italic;
    text-align: left;
  }
  .quoteblock {
    color: white;
    padding: 5% 10% 5%;
    background-color: orangered;
  }
  .quoteref {
    color: white;
    font-size: 2vw;
    font-style: normal;
    text-align: right;
  }
</style>
