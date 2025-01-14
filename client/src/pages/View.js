import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";

const View = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((resp) => setUser({ ...resp.data[0] }));
  }, [id]);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>Detalhes do animal</p>
        </div>
        <div className="container">
            <strong>Id único: </strong>
            <span>{id}</span>
            <br/>
            <br/>

            <strong>Nome: </strong>
            <span>{user.nome}</span>
            <br/>
            <br/>

            <strong>Nascimento: </strong>
            <span>{user.nascimento}</span>
            <br/>
            <br/>

            <strong>Tipo: </strong>
            <span>{user.tipo}</span>
            <br/>
            <br/>

            <strong>Raça: </strong>
            <span>{user.raca}</span>
            <br/>
            <br/>

            <strong>Sexo: </strong>
            <span>{user.sexo}</span>
            <br/>
            <br/>

            <strong>Nome do tutor: </strong>
            <span>{user.nome_tutor}</span>
            <br/>
            <br/>

            <strong>Telefone: </strong>
            <span>{user.phone}</span>
            <br/>
            <br/>
            <Link to="/">
                <div className="btn btn-edit">Voltar</div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
