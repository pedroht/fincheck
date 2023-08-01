import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useRegisterController } from "./useRegisterController";

export function Register() {
  const { errors, handleSubmit, register, isLoading } = useRegisterController();
  return (
    <>
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold tracking-[-1px] text-gray-900">
          Crie sua conta
        </h1>

        <p className="space-x-2">
          <span className="tracking-[-0.5px] text-gray-700">
            Já possui uma conta?
          </span>
          <Link
            to="/login"
            className="font-medium tracking-[-0.5px] text-teal-900"
          >
            Fazer Login
          </Link>
        </p>
      </header>

      <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input
          {...register("name")}
          placeholder="Nome"
          error={errors.name?.message}
        />
        <Input
          {...register("email")}
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
        />
        <Input
          {...register("password")}
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
        />

        <Button isLoading={isLoading} type="submit" className="mt-2">
          Criar conta
        </Button>
      </form>
    </>
  );
}
