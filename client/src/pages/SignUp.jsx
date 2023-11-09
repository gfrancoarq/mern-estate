import React from 'react';
import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg">
      <h1 className="text-3xl text-center font-semibold my-7">
        Crea tu cuenta 👋
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Usuario"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Regístrate
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>¿Tienes una cuenta?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Ingresa</span>
        </Link>
      </div>
    </div>
  );
}
