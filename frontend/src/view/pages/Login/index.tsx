import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { useLoginController } from "./useLoginController";

export function Login() {
  const { handleSubmit, register, errors, isLoading } = useLoginController();

  return (
    <div>
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tightest text-gray-900">
          Entre em sua conta
        </h1>

        <p className="space-x-2">
          <span className="tracking-tighter text-gray-700">Novo por aqui?</span>
          <Link
            to="/register"
            className="font-medium tracking-tighter text-teal-900"
          >
            Crie uma conta
          </Link>
        </p>
      </header>

      <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register("password")}
        />

        <Button isLoading={isLoading} type="submit" className="mt-2">
          Entrar
        </Button>
      </form>
    </div>
  );
}
