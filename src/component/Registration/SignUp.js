import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [id,setId]=useState("");
  const [prénom, setPrénom] = useState("");
  const [nom, setNom] = useState("");
  const [adresseEmail, setAdressEmail] = useState("");
  const [codeApogee, setCodeApogee] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filière, setFilière] = useState("");
  const [motdepasse, setMotdepasse] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8080/saveEtudiant", {
    
      id:id,
        prenom: prénom,
        nom: nom,
        adressEmail: adresseEmail,
        codeApogee: codeApogee,
        telephone: telephone,
        filiere: filière,
        motdepasse: motdepasse,
      });
      alert("User Registration Successfully");
      setId("")
      setPrénom("");
      setNom("");
      setAdressEmail("");
      setCodeApogee("");
      setTelephone("");
      setFilière("SMI");
      setMotdepasse("");
    } catch (err) {
      alert("User Registration failed");
    }
  }

  return (
    <div className="content-body">
      <div className="container" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <h4>Créer votre compte</h4>
        <form onSubmit={handleSubmit}>
         
          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            placeholder="Entrez le prénom"
            value={prénom}
            onChange={(event) => setPrénom(event.target.value)}
            required
          />

          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            placeholder="Entrez le nom"
            value={nom}
            onChange={(event) => setNom(event.target.value)}
            required
          />

          <label htmlFor="email">Adresse e-mail :</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Entrez l'adresse e-mail"
            value={adresseEmail}
            onChange={(event) => setAdressEmail(event.target.value)}
            required
          />

          <label htmlFor="codeApogee">Code Apogée:</label>
          <input
            type="text"
            id="codeApogee"
            name="codeApogee"
            placeholder="Entrez Code Apogée"
            value={codeApogee}
            onChange={(event) => setCodeApogee(event.target.value)}
            required
          />

          <label htmlFor="tel">Téléphone :</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="Entrez le numéro de téléphone"
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
            required
          />

          <label htmlFor="filière">Filière :</label>
          <select
            id="filière"
            name="filière"
            value={filière}
            onChange={(event) => setFilière(event.target.value)}
            required>
            <option value="SMI">SMI</option>
            <option value="SMA">SMA</option>
            <option value="SMC">SMC</option>
            <option value="SMP">SMP</option>
            <option value="STU">STU</option>
            <option value="SVI">SVI</option>
          </select>

          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Entrez votre mot de passe"
            value={motdepasse}
            onChange={(event) => setMotdepasse(event.target.value)}
            required
          />

          <button type="submit">Confirmer</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
