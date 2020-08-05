import React, { useState } from "react";
import Default from "../../../templates/default";
import "./index.css";
import FormField from "../../../components/FormField";
import Button from "../../../components/ButtonLink";

function CadastroCategoria() {
  const valoresCategoria = {
    nome: "",
    descricao: "",
    cor: "",
  };
  const [categorias, setCategorias] = useState([valoresCategoria]);
  const [values, setValue] = useState(valoresCategoria);

  function setNewValue(key, value) {

    setValue({
      ...values,
      [key]: value, //nome da categoria: valor dela
    });
  }

  return (
    <Default className="CadastroCategoria">
      <h1>Cadastro de categoria: {values.nome}</h1>

      <form
        style={{ textAlign: "justify&&center" }}
        onSubmit={function handleSubmit(i) {
          i.preventDefault();
          if (
            values.nome !== valoresCategoria.nome &&
            values.descricao !== valoresCategoria.descricao
          ) {
            setCategorias([...categorias, values]);
            setValue(valoresCategoria);
          } else {
            alert("Não podemos registrar uma categoria em branco!");
          }
        }}
      >
        {/* State */}
        <FormField
          as="textarea"
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          onChange={function (a) {
            if (a.target.value !== valoresCategoria.nome) {
              setNewValue("nome", a.target.value);
            }
          }}
        />
        <FormField
          as="textarea"
          label="Descrição"
          type="text"
          value={values.descricao}
          onChange={function (a) {
            if (a.target.value !== valoresCategoria.descricao) {
              setNewValue("descricao", a.target.value);
            }
          }}
        />
        <FormField
          as="input"
          label="Cor do label "
          type="color"
          value={values.cor}
          onChange={function (a) {
            setNewValue("cor", a.target.value);
          }}
        />
        <Button style={{ background: "#141414" }}>Cadastrar</Button>
      </form>

      <br />

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li>
              <div>{categoria.nome}</div>
              <div>{categoria.descricao}</div>
              <div>{categoria.cor}</div>
            </li>
          );
        })}
      </ul>
    </Default>
  );
}

export default CadastroCategoria;
