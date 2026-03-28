import { useState } from "react";
import { Button } from "./components/Button_status";
import { AddButton } from "./components/Button_add";
import { AddTarefa } from "./components/Window_add_tarefa";
import {
  CheckCircle2,
  MoonIcon,
  Clock,
  TrendingUp,
  TargetIcon,
  Plus,
  FolderPlus,
  Search,
  List,
  Calendar,
  CircleAlert,
} from "lucide-react";
function App() {
  const [ativo, setAtivo] = useState("Total");
  const [showWindowAdd, setShowWindowAdd] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <header className="bg-white px-30 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to bg-purple-600 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Gerenciador de tarefas</h1>
                <p className="text-gray-700">
                  Organize sua vida com eficiência.
                </p>
              </div>
            </div>
            <button className="rounded-full outline outline-gray-400 hover:bg-gray-100 w-9 h-9 inline-flex items-center justify-center gap-2">
              <MoonIcon className="w-4 h-4" />
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8 text-md">
          <div className="grid grid-cols-4 gap-8 py-5 mb-4 text-gray-500">
            <div className="bg-white p-4 rounded-md drop-shadow-md outline outline-gray-200 flex items-center justify-between">
              <div>
                <p>Total de Tarefas</p>
                <p className="text-2xl font-semibold text-black">0</p>
              </div>
              <div className="bg-blue-100 text-blue-500 rounded-md p-1.5">
                <TargetIcon />
              </div>
            </div>

            <div className="bg-white p-4 rounded-md drop-shadow-md outline outline-gray-200 flex items-center justify-between">
              <div>
                <p>Total de Tarefas</p>
                <p className="text-2xl font-semibold text-black">0</p>
              </div>
              <div className="bg-green-100 text-green-500 rounded-md p-1.5">
                <CheckCircle2 />
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex drop-shadow-md outline outline-gray-200 items-center justify-between">
              <div>
                <p>Total de Tarefas</p>
                <p className="text-2xl font-semibold text-black">0</p>
              </div>
              <div className="bg-yellow-100 text-yellow-500 rounded-md p-1.5">
                <Clock />
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex drop-shadow-md outline outline-gray-200 items-center justify-between">
              <div>
                <p>Total de Tarefas</p>
                <p className="text-2xl font-semibold text-black">0</p>
              </div>
              <div className="bg-red-100 text-red-500 rounded-md p-1.5">
                <TrendingUp />
              </div>
            </div>
          </div>

          {/*Actions*/}
          <div className="bg-white rounded-md drop-shadow-md outline outline-gray-200 p-5 text-sm space-y-4">
            <div className="flex flex-row items-center justify-between pb-4">
              <div className="flex flex-wrap gap-4 font-semibold ">
                <AddButton
                  onActive={() => {
                    setShowWindowAdd(true);
                  }}
                  color="bg-black"
                  className=""
                >
                  <Plus className="size-4" />
                  Nova tarefa
                </AddButton>

                <button className=" text-black outline outline-gray-300 rounded-md max-h-9 p-2 gap-2 flex items-center justify-center">
                  <FolderPlus className="size-4" />
                  Nova Categoria
                </button>
              </div>

              <div className="flex items-center gap-1 pl-2 py-1 justify-center outline outline-gray-300 rounded-md">
                <Search className="size-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar tarefas..."
                  className="outline-none pr-15"
                />
              </div>
            </div>

            <p className="font-semibold text-gray-600 h-3">
              Filtrar por Status
            </p>

            <div className="flex flex-wrap space-x-4 font-semibold">
              <Button
                onClick={() => setAtivo("Total")}
                isActive={ativo === "Total"}
              >
                <List className="size-4" />
                Todas
              </Button>
              <Button
                onClick={() => setAtivo("Hoje")}
                isActive={ativo === "Hoje"}
              >
                <Calendar className="size-4" />
                Hoje
              </Button>
              <Button
                onClick={() => setAtivo("Esta Semana")}
                isActive={ativo === "Esta Semana"}
              >
                <Clock className="size-4" />
                Esta Semana
              </Button>
              <Button
                onClick={() => setAtivo("Atrasadas")}
                isActive={ativo === "Atrasadas"}
              >
                <CircleAlert className="size-4" />
                Atrasadas
              </Button>
              <Button
                onClick={() => setAtivo("Concluídas")}
                isActive={ativo === "Concluídas"}
              >
                <CircleAlert className="size-4" />
                Concluídas
              </Button>
              <Button
                onClick={() => setAtivo("Pendentes")}
                isActive={ativo === "Pendentes"}
              >
                <Clock className="size-4" />
                Pendentes
              </Button>
            </div>

            <p className="font-semibold text-gray-600 h-3">
              Filtrar por Categoria
            </p>

            <div className="flex flex-row gap-20">
              <Button label="Todas as categorias" />
            </div>
          </div>

          <AddTarefa
            isOpen={showWindowAdd}
            onClosed={() => setShowWindowAdd(false)}
          ></AddTarefa>

          <div className="bg-white mt-10 min-h-70 max-h-max rounded-md drop-shadow-md outline outline-gray-200 p-5 text-sm space-y-4"></div>
        </main>
      </div>
    </>
  );
}

export default App;
