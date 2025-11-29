"use client";
import { useState } from "react";
import ConfirmationModal from "@/components/ConfirmationModal";
import { useTheme } from "@/contexts/ThemeContext";

export default function PerfilPage() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [nome, setNome] = useState("Nome do Usuário");
  const [email, setEmail] = useState("email@email.com");
  const [isEditingNome, setIsEditingNome] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [tempNome, setTempNome] = useState(nome);
  const [tempEmail, setTempEmail] = useState(email);
  
  const [modal, setModal] = useState<{
    isOpen: boolean;
    type: "editNome" | "editEmail" | "delete" | null;
  }>({ isOpen: false, type: null });

  const handleSaveNome = () => {
    setModal({ isOpen: true, type: "editNome" });
  };

  const handleSaveEmail = () => {
    setModal({ isOpen: true, type: "editEmail" });
  };

  const handleDeleteAccount = () => {
    setModal({ isOpen: true, type: "delete" });
  };

  const confirmAction = () => {
    if (modal.type === "editNome") {
      setNome(tempNome);
      setIsEditingNome(false);
    } else if (modal.type === "editEmail") {
      setEmail(tempEmail);
      setIsEditingEmail(false);
    } else if (modal.type === "delete") {
      // Aqui você faria a chamada para excluir a conta
      alert("Conta excluída com sucesso!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-8 transition-colors duration-300">Meu Perfil</h1>

        {/* CARD DE PERFIL */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <div className="flex items-center gap-6 mb-8 pb-6 border-b border-gray-200">
            <img
              src="https://i.pravatar.cc/100"
              alt="foto-perfil"
              className="w-24 h-24 rounded-full border-4 border-blue-100 object-cover"
            />
            <div>
              <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">{nome}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{email}</p>
            </div>
          </div>

          {/* EDITAR NOME */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Nome
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={isEditingNome ? tempNome : nome}
                onChange={(e) => setTempNome(e.target.value)}
                onFocus={() => setIsEditingNome(true)}
                className="flex-1 px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg outline-none 
                         focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900
                         transition-all duration-200 bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600
                         text-gray-700 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                placeholder="Digite seu nome"
              />
              {isEditingNome && (
                <button
                  onClick={handleSaveNome}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg 
                           font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Salvar
                </button>
              )}
            </div>
          </div>

          {/* EDITAR EMAIL */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                value={isEditingEmail ? tempEmail : email}
                onChange={(e) => setTempEmail(e.target.value)}
                onFocus={() => setIsEditingEmail(true)}
                className="flex-1 px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg outline-none 
                         focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900
                         transition-all duration-200 bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600
                         text-gray-700 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                placeholder="Digite seu email"
              />
              {isEditingEmail && (
                <button
                  onClick={handleSaveEmail}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg 
                           font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Salvar
                </button>
              )}
            </div>
          </div>

          {/* EXCLUIR CONTA */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleDeleteAccount}
              className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg 
                       font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Excluir conta
            </button>
          </div>
        </div>

        {/* CONFIGURAÇÕES */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Configurações</h2>

          {/* Toggle Dark Mode */}
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-300">
            <div>
              <span className="text-gray-800 dark:text-gray-100 font-medium">Modo escuro</span>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Ative o tema escuro para uma experiência mais confortável
              </p>
            </div>

            <button
              type="button"
              onClick={toggleDarkMode}
              className="relative inline-flex items-center cursor-pointer focus:outline-none"
              aria-label="Toggle dark mode"
            >
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                readOnly
                tabIndex={-1}
              />
              <div className={`w-14 h-7 rounded-full transition-colors duration-300 ${
                darkMode ? 'bg-blue-600 dark:bg-blue-500' : 'bg-gray-300'
              }`}></div>
              <div className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-sm ${
                darkMode ? 'translate-x-7' : 'translate-x-0'
              }`}></div>
            </button>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={modal.isOpen}
        onClose={() => setModal({ isOpen: false, type: null })}
        onConfirm={confirmAction}
        title={
          modal.type === "editNome"
            ? "Confirmar alteração de nome"
            : modal.type === "editEmail"
            ? "Confirmar alteração de email"
            : "Confirmar exclusão de conta"
        }
        message={
          modal.type === "editNome"
            ? `Tem certeza que deseja alterar seu nome para "${tempNome}"?`
            : modal.type === "editEmail"
            ? `Tem certeza que deseja alterar seu email para "${tempEmail}"?`
            : "Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita."
        }
        confirmText={
          modal.type === "delete" ? "Sim, excluir conta" : "Confirmar"
        }
        cancelText="Cancelar"
        type={modal.type === "delete" ? "danger" : "info"}
      />
    </div>
  );
}
