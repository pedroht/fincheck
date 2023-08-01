import { useAuth } from "../../../app/hooks/useAuth";
import { Logo } from "../../components/Logo";
import { UserMenu } from "../../components/UserMenu";

export function Dashboard() {
  const { signout } = useAuth();

  return (
    <div className="h-full w-full p-8 pt-6 flex flex-col gap-4">
      <header className="h-12 flex items-center justify-between">
        <Logo className="h-6 text-teal-900" />

        <UserMenu />
      </header>

      <main className="flex-1 flex gap-4">
        <div className="w-1/2">1</div>
        <div className="w-1/2">1</div>
      </main >
    </div >
  )
}
