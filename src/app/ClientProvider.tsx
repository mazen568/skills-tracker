"use client";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { store } from "./store";
import Navigation from "./components/Navigation";
import { RootState } from "./store";

type ClientProviderProps = {
    children: React.ReactNode;
}

// Inner component that can access Redux state
function ThemedContent({ children }: { children: React.ReactNode }) {
    const theme = useSelector((state: RootState) => state.theme.value);

    return (
        <div className={`${theme === 'dark' ? 'bg-midnight text-white' : 'bg-white text-midnight'} flex min-h-screen`}>
            <div className={`flex-1 w-full border-r-[1px] ${theme === "dark" ? 'border-gray-800' : 'border-gray-400'}`}>
                <Navigation />
            </div>
            <main className="flex-5 p-10">
                {children}
            </main>
        </div>
    );
}

export default function ClientProvider({ children }: ClientProviderProps) {
    return (
        <Provider store={store}>
            <ThemedContent>
                {children}
            </ThemedContent>
        </Provider>
    );
}