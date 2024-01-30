import React, { useState } from 'react';
import Select from 'react-select';
import '../FormList/FormList.css';

const options = [
  { value: '', label: 'Rol de usuario' },
  { value: 'administrativo', label: 'Administrativo' },
  { value: 'estudiante', label: 'Estudiante' },
  { value: 'docente', label: 'Docente' },
];

const FormList = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    // Puedes realizar otras acciones según sea necesario
  };

  return (
    <>
      <section className="form_content">
        <form id="registro_datos">
          <div>
          <label htmlFor="txt_Name" className="label_name">Nombre</label>
          <input
            type="text"
            name="Nombre"
            id="txt_Name"
            className="inputForm"
            placeholder="Nombre"
            required
            maxLength="12"
          // onKeyPress={(event) => validateKey(event)}
          />
          </div>
          <div>
          <label htmlFor="txt_Surname">Apellido 1</label>
          <input
            type="text"
            name="Surname"
            id="txt_Surname"
            className="inputForm"
            placeholder="Apellido"
            required
            maxLength="12"
          // onKeyPress={(event) => validateKey(event)}
          />
          </div>
          <div>
          <label htmlFor="txt_Surname">Apellido 2</label>
          <input
            type="text"
            name="Surname"
            id="txt_Surname"
            className="inputForm"
            placeholder="Apellido"
            required
            maxLength="12"
          // onKeyPress={(event) => validateKey(event)}
          />
          </div>
          <div>
          <label htmlFor="txt_rol" >Rol</label>
          <Select
            name="rol"
            className="rol_option"
            options={options}
            placeholder="Selecciona un rol"
            defaultValue={options[0]}
            value={selectedOption}
            onChange={handleSelectChange}
          />
          </div>
          <div>
          <label htmlFor="txt_Name" className="label_curso">Curso</label>
          <input
            type="text"
            name="Curso"
            id="txt_Curso"
            className="inputForm"
            placeholder="Curso"
            required
            maxLength="12"
          // onKeyPress={(event) => validateKey(event)}
          />
          </div>
          <div>
          <label htmlFor="txt_Name" className="label_curso">Clase</label>
          <input
            type="text"
            name="Curso"
            id="txt_Curso"
            className="inputForm"
            placeholder="Curso"
            required
            maxLength="12"
          // onKeyPress={(event) => validateKey(event)}
          />
          </div>
          <div>
          <label htmlFor="txt_email" className='label_email'>E-mail</label>
          <input
            type="email"
            id="txt_email"
            name="email"
            className="inputForm"
            placeholder="E-mail"
          />
          </div>

          <span className="btn_add">
            <button
              className="btn_form"
              type="button"
              id="btnEnviara"
            //   onClick={() => enviarDatos()}
            >
              Añadir
            </button>
          </span>
        </form>
      </section>
    </>
  );
};

export default FormList;