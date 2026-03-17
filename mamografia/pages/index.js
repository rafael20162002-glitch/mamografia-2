import { useState } from "react";

export default function MamografiaForm() {
  const [form, setForm] = useState({
    nome: "",
    mae: "",
    nascimento: "",
    telefone: "",
    endereco: "",
    unidade: "",
    cnes: "",
    nodulo: false,
    microcalcificacao: false,
    assimetria: false,
    distorcao: false,
    rastreamento: false,
    diagnostico: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🩺 Sistema de Mamografia</h1>

        {/* Unidade */}
        <div style={styles.section}>
          <h3>🏥 Unidade</h3>
          <input name="unidade" placeholder="Nome da unidade" onChange={handleChange} style={styles.input}/>
          <input name="cnes" placeholder="CNES" onChange={handleChange} style={styles.input}/>
        </div>

        {/* Paciente */}
        <div style={styles.section}>
          <h3>👤 Dados do Paciente</h3>
          <input name="nome" placeholder="Nome completo" onChange={handleChange} style={styles.input}/>
          <input name="mae" placeholder="Nome da mãe" onChange={handleChange} style={styles.input}/>
          <input type="date" name="nascimento" onChange={handleChange} style={styles.input}/>
        </div>

        {/* Contato */}
        <div style={styles.section}>
          <h3>📞 Contato</h3>
          <input name="telefone" placeholder="Telefone" onChange={handleChange} style={styles.input}/>
          <input name="endereco" placeholder="Endereço" onChange={handleChange} style={styles.input}/>
        </div>

        {/* Indicação */}
        <div style={styles.section}>
          <h3>📋 Indicação</h3>

          <label style={styles.checkbox}>
            <input type="checkbox" name="rastreamento" onChange={handleChange}/>
            Rastreamento
          </label>

          <label style={styles.checkbox}>
            <input type="checkbox" name="diagnostico" onChange={handleChange}/>
            Diagnóstico
          </label>
        </div>

        {/* Achados Clínicos */}
        <div style={styles.section}>
          <h3>🔬 Achados Clínicos</h3>

          <label style={styles.checkbox}>
            <input type="checkbox" name="nodulo" onChange={handleChange}/>
            Nódulo
          </label>

          <label style={styles.checkbox}>
            <input type="checkbox" name="microcalcificacao" onChange={handleChange}/>
            Microcalcificação
          </label>

          <label style={styles.checkbox}>
            <input type="checkbox" name="assimetria" onChange={handleChange}/>
            Assimetria
          </label>

          <label style={styles.checkbox}>
            <input type="checkbox" name="distorcao" onChange={handleChange}/>
            Distorção arquitetural
          </label>
        </div>

        <button style={styles.button}>
          Gerar Requisição
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f4f7fb",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    width: "420px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#2c3e50"
  },
  section: {
    marginBottom: "20px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  checkbox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "8px"
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2c7be5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer"
  }
};