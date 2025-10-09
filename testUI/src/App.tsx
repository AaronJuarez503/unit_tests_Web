import { useState,type FormEvent,type ChangeEvent } from 'react';

function App() {
  const [numero1, setNumero1] = useState<string>('');
  const [numero2, setNumero2] = useState<string>('');
  const [resultado, setResultado] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado(null);
      return;
    }

    setResultado(num1 + num2);
  };

  const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    setNumero1(e.target.value);
  };

  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    setNumero2(e.target.value);
  };

  return (

    <div style={styles.container}>
      <h2>Sumar dos números</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="number"
          placeholder="Primer número"
          name='input1'
          value={numero1}
          onChange={handleChange1}
          required
          style={styles.input}
        />
        <input
          type="number"
          name='input2'
          placeholder="Segundo número"
          value={numero2}
          onChange={handleChange2}
          required
          style={styles.input}
        />
        <button className='btn' type="submit" style={styles.button}>Sumar</button>
      </form>
      {resultado !== null && (
        <div style={styles.resultado}>Resultado: {resultado}</div>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  resultado: {
    marginTop: '20px',
    fontWeight: 'bold',
    backgroundColor:'#ff00d4ff',
    fontSize: '18px',
  }
};

export default App;