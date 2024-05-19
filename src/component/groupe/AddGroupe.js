import React, { useState } from 'react';
import axios from 'axios';

function AddGroupe() {
  const [name, setName] = useState('');
  const [responsable, setResponsable] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const data = { name, responsable };
    postGroupe(data);
  };

  const postGroupe = (data) => {
    axios
      .post('/api/groupes', data) // replace with your actual endpoint
      .then(d => {
        console.log(d);
        alert('Group created successfully');
      })
      .catch(err => alert(err));
  };

  return (
    <div className="content-body">
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Créer un Groupe</h4>
                <form onSubmit={submit}>
                  <div className="form-group">
                    <label>Nom du Groupe</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Responsable</label>
                    <input
                      type="text"
                      className="form-control"
                      value={responsable}
                      onChange={(e) => setResponsable(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
                    Enregistrer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddGroupe;
