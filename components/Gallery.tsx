export default function Gallery() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Galería</h2>
                    <p className="text-gray-600">Un vistazo a nuestro ambiente y momentos especiales.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Grid layout placeholders */}
                    <div className="col-span-2 row-span-2 h-96 bg-gray-200 rounded-lg overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">Main Image</div>
                    </div>
                    <div className="col-span-1 h-48 bg-gray-200 rounded-lg overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">Image 2</div>
                    </div>
                    <div className="col-span-1 h-48 bg-gray-200 rounded-lg overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">Image 3</div>
                    </div>
                    <div className="col-span-1 h-48 bg-gray-200 rounded-lg overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">Image 4</div>
                    </div>
                    <div className="col-span-1 h-48 bg-gray-200 rounded-lg overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">Image 5</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
