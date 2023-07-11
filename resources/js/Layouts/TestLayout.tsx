export default function TestLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-black via-cyan-950 to-gray-900">
            {children}
        </section>
    );
}
