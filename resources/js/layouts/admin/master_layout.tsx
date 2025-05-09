import Footer from './partials/footer';
import Header from './partials/header';
import Sidebar from './partials/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-gray-50 text-gray-800">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 overflow-y-auto p-6">{children}</main>
                <Footer />
            </div>
        </div>
    );
}
