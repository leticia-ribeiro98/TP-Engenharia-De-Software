import React from 'react';

function Sidebar({ handleTabChange }) {
    const icons = ['home', 'menu_book', 'bar_chart', 'settings'];
    const labels = ['Página Inicial', 'Disciplinas', 'Estatísticas', 'Configurações'];

    return (
        <div className="bg-[#1919CD] text-white w-64 p-6 transition-all duration-300 shadow-lg">
            <div className="mb-10">
                <h1 className="text-2xl font-bold">EduLimoeiro</h1>
            </div>

            <nav className="space-y-2">
                {icons.map((icon, index) => (
                    <button
                        key={icon}
                        className="w-full flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-[#1414a9] focus:bg-[#13138f] group"
                        onClick={() => handleTabChange(labels[index])} // Altera a página com base no rótulo
                    >
                        <span className="material-symbols-outlined mr-3 group-hover:scale-110 transition-transform">{icon}</span>
                        <span className="text-left">{labels[index]}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;
