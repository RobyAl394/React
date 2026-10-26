import { Component } from "react";
export default class CompteurVisites extends Component {
  constructor() {
    super();
    this.state = { compteur: 0 };
  }

  ajouter() {
    this.setState({ compteur: this.state.compteur + 1 });
  }

  reinitialiser() {
    this.setState({ compteur: 0 });
  }

  render() {
    return (
      <div className="bloc">
        <h2>Nombre de stagiaires présents : {this.state.compteur}</h2>
        <button onClick={() => this.ajouter()}>Ajouter un stagiaire</button>
        <button className="btn-rouge" onClick={() => this.reinitialiser()}>Réinitialiser</button>
      </div>
    );
  }
}
